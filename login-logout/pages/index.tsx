import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useAction, useFindMany, useGet } from "@gadgetinc/react";
import { isEqual } from "lodash";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { api } from "../../Users/airhorns/Code/examples/login-logout/lib/api";
import { WhoAmI } from "../../Users/airhorns/Code/examples/login-logout/lib/WhoAmI";

const LogOutButton = () => {
  const [{ error, fetching }, logout] = useAction(api.currentSession.logOut, {
    select: {
      id: true,
      state: true,
    },
  });

  return (
    <Button type="submit" colorScheme="blue" disabled={fetching} onClick={() => void logout()}>
      Log Out
    </Button>
  );
};

const WidgetsTable = () => {
  const [{ error, fetching, data }] = useFindMany(api.widgets, { select: { id: true, name: true } });

  return (
    <>
      <Heading>Widgets</Heading>
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
          </Tr>
        </Thead>
        <Tbody>
          {fetching && (
            <Tr>
              <Td colSpan={2}>
                <Center>
                  <Spinner />
                </Center>
              </Td>
            </Tr>
          )}
          {!error &&
            data?.map((widget) => (
              <Tr key={widget.id}>
                <Td>{widget.id}</Td>
                <Td>{widget.name}</Td>
              </Tr>
            ))}
          {error && (
            <Tr>
              <Td colSpan={2}>{String(error)}</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
      <Box paddingTop="6">
        <LogOutButton />
      </Box>
    </>
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [{ error, fetching }, login] = useAction(api.currentSession.logInViaEmail, {
    select: {
      id: true,
      state: true,
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void login({ email, password });
      }}
    >
      <Box padding="10" minWidth="300px" maxWidth="600px">
        <Heading paddingBottom="5">Login</Heading>
        {error && (
          <Alert status="error">
            <AlertIcon />
            There was an error logging in: {String(error)}
          </Alert>
        )}
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Box paddingTop="6">
          <Button type="submit" colorScheme="blue" disabled={fetching}>
            Log in
          </Button>
        </Box>
      </Box>
    </form>
  );
};

const Home: NextPage = () => {
  const [{ error, fetching, data }, refresh] = useGet(api.currentSession, {
    select: {
      id: true,
      state: true,
    },
  });

  return (
    <>
      <Head>
        <title>Login Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" flexGrow={1} padding={4}>
        {fetching && (
          <Center>
            <Spinner />
          </Center>
        )}
        {isEqual(data?.state, { created: "loggedIn" }) && <WidgetsTable />}
        {isEqual(data?.state, { created: "loggedOut" }) && <LoginForm />}
      </Box>

      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
        <a href="https://gadget.dev" target="_blank" rel="noopener noreferrer">
          Powered by Gadget
        </a>
        <WhoAmI />
      </Box>
    </>
  );
};

export default Home;
