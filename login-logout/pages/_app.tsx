import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import { Provider } from "@gadgetinc/react";
import type { AppProps } from "next/app";
import React from "react";
import { api } from "../../Users/airhorns/Code/examples/login-logout/lib/api";
import "../../Users/airhorns/Code/examples/login-logout/styles/globals.css";

function GadgetApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={api.connection.currentClient}>
      <ChakraProvider>
        <Container paddingTop="5" maxW="container.xl" height="100%">
          <Flex direction="column" height="100%">
            <Component {...pageProps} />
          </Flex>
        </Container>
      </ChakraProvider>
    </Provider>
  );
}

export default GadgetApp;
