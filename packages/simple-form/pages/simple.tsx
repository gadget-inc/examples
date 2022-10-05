import { Box, Button, Heading, Spinner, Stack, Text } from "@chakra-ui/react";

import { useAction } from "@gadgetinc/react";
import { Footer } from "chakra-theme/Footer";
import { keyBy } from "lodash";
import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useState } from "react";
import { api } from "../lib/api";
import { rootErrorMessage } from "../lib/utils";

const ValidationError = (props: { message?: string }) => {
  if (!props.message) return null;
  return <Text color="red.500">{props.message}</Text>;
};

const SimpleForm = () => {
  // run the useAction Gadget React hook to get a result object and a run function for invoking the action
  const [{ data, fetching, error }, createTicket] = useAction(api.ticket.create);

  // use react state hooks to store the form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // track if the user has successfully submitted the form or not to show a success message
  const [done, setDone] = useState(false);

  // retrieve any validation errors returned by the server if there's been an error submitting the form
  const validationErrors = keyBy(error?.validationErrors || [], "apiIdentifier");

  const reset = useCallback(() => {
    setTitle("");
    setDescription("");
    setDone(false);
  }, []);

  return (
    <>
      {fetching && <Spinner />}
      {error && <Text color="red.500">{rootErrorMessage(error)}</Text>}
      {done && data && (
        <Text>
          Ticket ID #{data.id} created! <Button onClick={reset}>Create another</Button>
        </Text>
      )}
      {!done && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            // run the mutation function with the parameters from the state
            void createTicket({ ticket: { title, description } }).then((value) => {
              // wait for the mutation function promise to resolve, and then mark the form as done if there were no errors
              if (!value.error) {
                setDone(true);
              }
            });
          }}
        >
          <Stack gap="2">
            <label htmlFor="title">Title</label>
            <input id="title" placeholder="enter a title" value={title} onChange={(event) => setTitle(event.target.value)} />
            <ValidationError message={validationErrors["title"]?.message} />
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="enter a description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <ValidationError message={validationErrors["description"]?.message} />
            <Button type="submit">Create ticket</Button>
          </Stack>
        </form>
      )}
    </>
  );
};

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gadget Simple Form Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading marginBottom="4">Gadget Simple Form Example</Heading>
      <Box maxW="lg">
        <SimpleForm />
      </Box>
      <Footer folder="simple-form" />
    </>
  );
};

export default Page;
