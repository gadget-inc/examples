import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

export const Footer = (props: { folder: string; children?: ReactNode }) => (
  <Box display="flex" flexDirection="row" alignItems="center" padding={3}>
    <a href="https://gadget.dev" target="_blank" rel="noopener noreferrer">
      Powered by Gadget
    </a>
    &nbsp;|&nbsp;
    <a href={`https://github.com/gadget-inc/examples/tree/main/${props.folder}`} target="_blank" rel="noopener noreferrer">
      Github Repo
    </a>
    {props.children}
  </Box>
);
