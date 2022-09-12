import { Alert, AlertIcon, Box, Button, FormControl, FormLabel, Heading, Image, Input } from "@chakra-ui/react";
import { useAction } from "@gadgetinc/react";
import type { NextPage } from "next";
import { useState } from "react";
import { api } from "../lib/api";
import { ExampleContainer } from "../lib/ExampleContainer";

function Uploader(props: { onFileTokenChange: (token: string, fileName: string) => void }) {
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <Box
      padding="10"
      minWidth="300px"
      onDragOver={(event) => event.preventDefault()}
      onDrop={async (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        // send the file to cloud storage
        setIsUploading(true);

        const { url, token } = await api.getDirectUploadToken();

        try {
          await fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": file.type,
            },
            body: file,
          });
          // once it has been uploaded, give the parent component the token to submit with the other data in the form
          props.onFileTokenChange(token, file.name);
          setFileName(file.name);
        } finally {
          setIsUploading(false);
        }
      }}
    >
      {isUploading ? "Uploading ..." : fileName ? fileName : "Drop a file here"}
    </Box>
  );
}

const UploadForm = () => {
  const [name, setName] = useState("");
  const [fileToken, setFileToken] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

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

              // set the value of the field named `image` to the direct upload token, which was fetched and retrieved above file. we use the `{directUploadToken: string}` input syntax to get the api client to use a file we uploaded to cloud storage already
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
            <Uploader
              onFileTokenChange={(token, fileName) => {
                setFileToken(token);
                setFileName(fileName);
              }}
            />
          </FormControl>
          <Box paddingTop="6">
            <Button type="submit" colorScheme="blue" disabled={fetching}>
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

const SimpleDirect: NextPage = () => {
  return (
    <ExampleContainer>
      <UploadForm />
    </ExampleContainer>
  );
};

export default SimpleDirect;
