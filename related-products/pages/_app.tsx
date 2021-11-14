import { ChakraProvider, Container } from "@chakra-ui/react";
import { Provider } from "@gadgetinc/react";
import { theme } from "chakra-theme";
import type { AppProps } from "next/app";
import { api } from "../../Users/airhorns/Code/examples/related-products/lib/api";
import "../../Users/airhorns/Code/examples/related-products/styles/globals.css";

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
