import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import { Provider } from "@gadgetinc/react";
import { theme } from "chakra-theme";
import type { AppProps } from "next/app";
import React from "react";
import { api } from "../lib/api";
import "../styles/globals.css";

function GadgetApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={api.connection.currentClient}>
      <ChakraProvider theme={theme}>
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
