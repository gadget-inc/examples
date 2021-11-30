import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://simple-blog-example.gadget.host/api/graphql",
  cache: new InMemoryCache(),
});
