import { CloseIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, Box, Button, FormControl, FormLabel, Heading, IconButton, Image, Input } from "@chakra-ui/react";
import { useAction } from "@gadgetinc/react";
import type { NextPage } from "next";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { api } from "../lib/api";
import { ExampleContainer } from "../lib/ExampleContainer";

const UploadForm = () => {
  const [name, setName] = useState("");
  const [inputFile, setInputFile] = useState<File | null>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: (files) => setInputFile(files[0]) });

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

              // set the value of the field named `image` on this model to a file. we use the `{file: File}` input syntax to get the api client to upload the file as multipart request
              image: { file: inputFile },
              // we could also do { base64: encodeInBase64(inputFile) } to upload the file as a base64 encoded string, but its a bit more performant to let the browser stream and send the file itself
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
                {inputFile.name} <IconButton aria-label="Clear" icon={<CloseIcon />} />
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

const Home: NextPage = () => {
  return (
    <ExampleContainer>
      <UploadForm />
    </ExampleContainer>
  );
};

export default Home;
