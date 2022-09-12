import { Box, Flex } from "@chakra-ui/react";
import { Footer } from "chakra-theme/Footer";
import { Link } from "chakra-theme/Link";
import Head from "next/head";
import { ReactNode } from "react";

export const ExampleContainer = (props: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>File Upload Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="row" style={{ gap: "16px" }}>
        <Link href="/">Simple</Link>
        <Link href="/direct">Direct</Link>
        <Link href="/direct-dropzone">Direct with react-dropzone</Link>
        <Link href="/uppy">Direct with Uppy</Link>
      </Flex>

      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" flexGrow={1} padding={4}>
        {props.children}
      </Box>

      <Footer folder="file-upload"></Footer>
    </>
  );
};
