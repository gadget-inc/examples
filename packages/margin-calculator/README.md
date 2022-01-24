# Margin Calculator Gadget Example

[![Deploy Status](https://img.shields.io/github/deployments/gadget-inc/examples/Production%20%E2%80%93%20gadget-file-upload-example)](https://vercel.com/gadget/gadget-file-upload-example)

This is an example of using Gadget's Shopify connection in a demo Remix project. This app implements a profit margin calculator for an e-commerce merchant who wants to ensure any quotes they produce for their apparel business still make them some money. The Gadget backend connects to Shopify to retrieve quotes, and then decorates them with some extra data that the e-commerce merchant populates using this frontend. The GraphQL API from the backend makes it easy to render a custom UI showing some data where Shopify is the source of truth blended with data where Gadget is the source of truth.

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```
