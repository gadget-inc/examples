import { gql, useQuery } from "@apollo/client";
import { Alert, AlertIcon, Box, Heading, Spinner, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { dateFormat, theme } from "chakra-theme";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";

const PostCard = (props: { post: Record<string, any> }) => {
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
          {props.post.content.markdown}
        </ReactMarkdown>
      </Box>
    </Box>
  );
};

const GetPosts = gql`
  query GetPosts {
    posts(sort: { createdAt: Descending }) {
      edges {
        node {
          id
          title
          user {
            name
          }
          content {
            markdown
          }
        }
      }
    }
  }
`;

export const PostsList = () => {
  const { data, loading, error } = useQuery(GetPosts);

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
        {loading && <Spinner />}
        {data?.posts.edges.map((edge: { node: Record<string, any> }) => (
          <PostCard key={edge.node.id} post={edge.node} />
        ))}
        {data?.length === 0 && <Box>No posts found</Box>}
      </Stack>
    </Stack>
  );
};
