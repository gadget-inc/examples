import { Heading, Link, Stack, Text } from "@chakra-ui/react";
import { Footer } from "chakra-theme/Footer";
import type { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gadget Form Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack gap="3">
        <Heading>Gadget Form Example</Heading>
        <Text>
          This example application demonstrates how to wire up React forms with a Gadget backend using the{" "}
          <a href="https://www.npmjs.com/package/@gadgetinc/react">@gadgetinc/react</a> React hooks package.
        </Text>
        <ul>
          <li>
            <NextLink href="/simple">
              <Link>Simple example</Link>
            </NextLink>
          </li>
        </ul>
      </Stack>
      <Footer folder="simple-form" />
    </>
  );
};

export default Home;
