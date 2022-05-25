import { Alert, AlertIcon, Box, Heading, Spinner, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Post } from "@gadget-client/simple-blog-example";
import { Select } from "@gadgetinc/api-client-core";
import { useFindMany } from "@gadgetinc/react";
import { dateFormat, theme } from "chakra-theme";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import { api } from "./api";

const PostSelection = {
  id: true,
  title: true,
  createdAt: true,
  body: { markdown: true },
  author: { id: true, name: true, email: true },
} as const;

const PostCard = (props: { post: Select<Post, typeof PostSelection> }) => {
  return (
    <Box>
      <Heading size="md" paddingBottom={1} borderBottom="1px solid #EEE">
        {props.post.title}
      </Heading>
      <Text size="sm" color={useColorModeValue("gray.700", "gray.200")}>
        Written by {props.post.author?.name} on {dateFormat.format(props.post.createdAt)}
      </Text>
      <Box marginTop={3}>
        <ReactMarkdown components={ChakraUIRenderer(theme)} skipHtml>
          {props.post.body?.markdown || ""}
        </ReactMarkdown>
      </Box>
    </Box>
  );
};

export const PostsList = () => {
  const [{ data, fetching, error }] = useFindMany(api.post, { select: PostSelection, sort: { createdAt: "Descending" } });

  return (
    <Stack spacing={5} flexGrow={1} padding={4}>
      <Heading>Posts</Heading>
      {error && (
        <Alert status="error">
          <AlertIcon />
          There was an error fetching posts: ${error.message}
        </Alert>
      )}
      <Stack spacing={6}>
        {fetching && <Spinner />}
        {data?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        {data?.length === 0 && <Box>No posts found</Box>}
      </Stack>
    </Stack>
  );
};
