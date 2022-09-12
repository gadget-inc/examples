import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import { theme } from "chakra-theme";
import "chakra-theme/globals.css";
import type { AppProps } from "next/app";
import { client } from "../lib/apollo";

function GadgetApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Container paddingTop="5" maxW="container.xl" height="100%">
          <Flex direction="column" height="100%">
            <Component {...pageProps} />
          </Flex>
        </Container>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default GadgetApp;
