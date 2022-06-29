import { CloseIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, Box, Button, FormControl, FormLabel, Heading, IconButton, Image, Input, Spinner } from "@chakra-ui/react";
import { useAction } from "@gadgetinc/react";
import type { NextPage } from "next";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { api } from "../lib/api";
import { ExampleContainer } from "../lib/ExampleContainer";

const UploadForm = () => {
  const [name, setName] = useState("");
  const [inputFile, setInputFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [fileToken, setFileToken] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: async (files) => {
      const inputFile = files[0];

      // capture a reference to the input file to display it in the UI
      setInputFile(inputFile);

      // instead of just storing a reference to the file that was dropped, we immediately start uploading it to cloud storage while the user fills out the rest of the form
      const { url, token } = await api.getDirectUploadToken();

      // send the file to cloud storage
      setUploading(true);

      try {
        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": files[0].type,
          },
          body: files[0],
        });
        // once it has been uploaded, set all the data we need to then send the action mutation
        setFileToken(token);
        setFileName(files[0].name);
      } finally {
        setUploading(false);
      }
    },
  });

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
            {inputFile && (
              <p>
                {inputFile.name} <IconButton aria-label="Clear" icon={<CloseIcon />} /> {uploading && <Spinner />}
              </p>
            )}
            {!inputFile && (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? <p>Drop the files here ...</p> : <p>Drop some files here, or click to select files</p>}
              </div>
            )}
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

const Direct: NextPage = () => {
  return (
    <ExampleContainer>
      <UploadForm />
    </ExampleContainer>
  );
};

export default Direct;
