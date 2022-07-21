import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://simple-blog-example.gadget.app/api/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
});
