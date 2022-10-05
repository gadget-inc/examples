import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import { Provider as GadgetProvider } from "@gadgetinc/react";
import { theme } from "chakra-theme";
import "chakra-theme/globals.css";
import type { AppProps } from "next/app";
import { api } from "../lib/api";

function GadgetApp({ Component, pageProps }: AppProps) {
  // wrap the whole application with the @gadgetinc/react provider so the react hooks know how to talk to the gadget api
  return (
    <GadgetProvider value={api.connection.currentClient}>
      <ChakraProvider theme={theme}>
        <Container paddingTop="5" maxW="container.xl" height="100%">
          <Flex direction="column" height="100%">
            <Component {...pageProps} />
          </Flex>
        </Container>
      </ChakraProvider>
    </GadgetProvider>
  );
}

export default GadgetApp;
