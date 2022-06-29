import { Alert, AlertIcon, Box, Button, FormControl, FormLabel, Heading, Image, Input } from "@chakra-ui/react";
import { useAction } from "@gadgetinc/react";
import AwsS3 from "@uppy/aws-s3";
import Uppy from "@uppy/core";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import { Dashboard } from "@uppy/react";
import type { NextPage } from "next";
import React, { useMemo, useState } from "react";
import { api } from "../lib/api";
import { ExampleContainer } from "../lib/ExampleContainer";

const UploadForm = () => {
  const [name, setName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [fileToken, setFileToken] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const uppy = useMemo(() => {
    const uppy = new Uppy({
      restrictions: { maxNumberOfFiles: 1 },
      autoProceed: true,
    });
    uppy.use(AwsS3, {
      limit: 1,
      async getUploadParameters(file: Record<string, any>) {
        const { url, token } = await api.getDirectUploadToken();

        uppy.setFileMeta(file.id, { token });
        return {
          method: "PUT",
          url,
          headers: {
            "Content-Type": file.type,
          },
        };
      },
    });

    uppy.on("upload", () => {
      setUploading(true);
    });

    uppy.on("error", () => {
      setUploading(false);
    });

    uppy.on("cancel-all", () => {
      setUploading(false);
    });

    uppy.on<"complete", { token: string }>("complete", (result) => {
      setUploading(false);
      const file = result.successful[0];
      setFileName(file.name);
      setFileToken(file.meta.token);
    });

    uppy.on("file-removed", (file, reason) => {
      if (reason === "removed-by-user") {
        setFileName(null);
        setFileToken(null);
      }
    });
    return uppy;
  }, []);

  const [{ data, error, fetching }, saveImage] = useAction(api.image.create, {
    select: {
      id: true,
      state: true,
      image: {
        url: true,
      },
    },
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void saveImage({
            image: {
              // set a string field on this model
              name,

              // set the value of the field named `image` to the direct upload token, which was fetched and retrieved above file. we use the `{file: File}` input syntax to get the api client to upload the file as multipart request
              image: { directUploadToken: fileToken, fileName },
            },
          });
        }}
      >
        <Box padding="10" minWidth="300px" maxWidth="600px">
          <Heading paddingBottom="5">Upload Image</Heading>
          {error && (
            <Alert status="error">
              <AlertIcon />
              There was an error creating this image: {String(error)}
            </Alert>
          )}
          <FormControl id="email" padding="2">
            <FormLabel>Name</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl id="file" padding="2">
            <FormLabel>File</FormLabel>
            <Dashboard uppy={uppy} plugins={["Webcam"]} doneButtonHandler={null as any} showRemoveButtonAfterComplete={true} />
          </FormControl>
          <Box paddingTop="6">
            <Button type="submit" colorScheme="blue" disabled={fetching || uploading}>
              Submit
            </Button>
          </Box>
        </Box>
      </form>
      {data?.image && (
        <Box>
          <Alert status="success">
            <AlertIcon />
            Image uploaded successfully!
          </Alert>
          <Image src={data.image?.url} />
        </Box>
      )}
    </>
  );
};

const UppyPage: NextPage = () => {
  return (
    <ExampleContainer>
      <UploadForm />
    </ExampleContainer>
  );
};

export default UppyPage;
