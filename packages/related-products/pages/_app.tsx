import { ChakraProvider, Container } from "@chakra-ui/react";
import { Provider } from "@gadgetinc/react";
import { theme } from "chakra-theme";
import "chakra-theme/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { api } from "../lib/api";

function GadgetApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={api.connection.currentClient}>
      <ChakraProvider theme={theme}>
        <Container paddingTop="5" maxW="container.xl">
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </Provider>
  );
}

export default GadgetApp;
