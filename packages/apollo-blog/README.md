# Apollo Blog Gadget Example

[![Deploy Status](https://img.shields.io/github/deployments/gadget-inc/examples/Production%20%E2%80%93%20gadget-apollo-blog-example)](https://vercel.com/gadget/gadget-apollo-blog-example) | [Preview Site](https://gadget-apollo-blog-example.vercel.app/) | [API Reference](https://docs.gadget.dev/api/simple-blog-example)

This is an example of using Gadget with the Apollo GraphQL client to build a simple blog.

Note: Gadget generally recommends using the generated JavaScript client for your application (see https://docs.gadget.dev/api/simple-blog-example/installing) and the [React bindings](https://github.com/gadget-inc/js-clients/tree/main/packages/react) to implement React frontends talking to Gadget apps. The generated client is type safe, implements all of Gadget's authentication methods, has rich error handling and data hydration. Underneath the client is using a plain old GraphQL API, so using other clients like Apollo works just fine too!

Implementation notes:

- we use the `@apollo/client` package from NPM to create a `Client` object in `lib/apollo.ts`, and provide it to the React application with `<ApolloProvider/>` in `pages/_app.tsx`
- we don't use an API Key or other authentication method to access the Gadget API -- we want everyone to be able to read our blog posts. So, the request is made with no authentication method, and on the backend, the `Unauthenticated` role has the `Read` permission on the `Post` model
