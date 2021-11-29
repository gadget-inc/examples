# Simple BLog Gadget Example

[![Deploy Status](https://img.shields.io/github/deployments/gadget-inc/examples/Production%20%E2%80%93%20simple-blog-example)](https://vercel.com/gadget/simple-blog-example) | [Preview Site](https://gadget-blog-example.vercel.app/) | [API Reference](https://docs.gadget.dev/api/simple-blog-example)

This is an example of using Gadget to build a simple blog.

Implementatio notes:

- we use the `@gadget-client/simple-blog-example` from the Gadget app to access data
- we use `@gadgetinc/react` for type safe, easy access to our backend data in React components
- we render Markdown on the client for full control over the themeing of the rich text content of the blog using `chakra-ui-markdown-renderer`
- we don't use an API Key or other authentication method -- we want everyone to be able to read our blog posts, so the `Unauthenticated` role has the `Read` permission on the `Post` model in the Gadget app
