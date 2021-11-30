# Simple Blog Gadget Example

[![Deploy Status](https://img.shields.io/github/deployments/gadget-inc/examples/Production%20%E2%80%93%20simple-blog-example)](https://vercel.com/gadget/simple-blog-example) | [Preview Site](https://gadget-blog-example.vercel.app/) | [API Reference](https://docs.gadget.dev/api/simple-blog-example)

This is an example of using Gadget to build a simple blog.

Implementation notes:

- we use the `@gadget-client/simple-blog-example` NPM package from the Gadget app to access data. We construct a Gadget Client object in `lib/api.ts`.
- we use `@gadgetinc/react` for type safe, easy access to our backend data in React components
- we provide our client to the React application by using `<Provider/>` from `@gadgetinc/react` in `pages/_app.tsx` so it's available for the `useFindMany` hooks in pages
- we render Markdown on the client for full control over the themeing of the rich text content of the blog using `chakra-ui-markdown-renderer`
- we don't use an API Key or other authentication method when constructing the `Client` object -- we want everyone to be able to read our blog posts. On the backend in Gadget, we give the `Unauthenticated` the `Read` permission on the `Post` model so that the posts can be read.
