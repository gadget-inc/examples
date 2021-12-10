import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { ReactNode } from "react";

export const Link = (props: { href: string; children: ReactNode }) => {
  return (
    <NextLink href={props.href} passHref>
      <ChakraLink>{props.children}</ChakraLink>
    </NextLink>
  );
};
