This is an example [Shopify CLI](https://shopify.dev/apps/getting-started/create) project for building an embedded Shopify App using [Gadget](https://gadget.dev) as a backend.

## What's in here

This is an app template that has all the main pieces of a Shopify CLI app setup already:

- the connection to the Gadget backend is installed using the API client package for an example app (`@gadget-client/shopify-cli-connection`) (see https://docs.gadget.dev/api/public-test/installing)
- the connection to the Gadget backend is instantiated in `web/frontend/api/api.js`
- the OAuth flow for installing and authenticating users is setup by installing `@gadgetinc/react-shopify-app-bridge` and wrapping the app with the `GadgetProvider` in `App.jsx` (see https://www.npmjs.com/package/@gadgetinc/react-shopify-app-bridge)
- the Shopify App Bridge for managing an app embed is setup automatically by `@gadgetinc/react-shopify-app-bridge`
- Shopify's React component library, `@shopify/polaris` is installed and their default `PolarisProvider` and route helping are included
- a local SSL-friendly development setup that plays nice with Shopify's SSL requirement for embedded apps

**Note**: Files created in the default Shopify CLI app that are no longer necessary have been removed. This includes most of the node.js backend application which is replaced by your Gadget app's backend, and some of the default front-end React code which is replaced by the Gadget API client and the `@gadgetinc/react` and `@gadgetinc/react-shopify-app-bridge` npm modules.

## Getting Started

Create a local copy of this app from this template by running:

```shell
npx create-next-app@latest --example https://github.com/gadget-inc/examples --example-path packages/shopify-cli-embedded
# or
yarn create next-app --example https://github.com/gadget-inc/examples --example-path packages/shopify-cli-embedded
# or
pnpm create next-app --example https://github.com/gadget-inc/examples --example-path packages/shopify-cli-embedded
```

Change into the directory for the app you created:

```shell
cd <your-app-name>
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

**Note**: This app is intended to be embedded inside the Shopify Admin. To test this, you'll need to set up a Shopify App and install it into a Shopify store.

To use this app inside Shopify, set both your Shopify app's `App URL` and your `Custom redirect URL` in Gadget to `https://localhost` You will see your local dev server embedded in the Shopify admin.

More information on this process is available in the [Gadget docs](https://docs.gadget.dev/guides/connections/shopify).

Once you're set up within the Shopify admin, you can start editing the app by modifying `web/frontend/pages/index.tsx`. The page auto-updates as you edit the file.

### Replacing the example values with your own

When using this template, you'll need to switch it to use your own Gadget application's credentials and your own Shopify app credentials. Here's the list of stuff to update:

First, you'll need to install the Gadget API client for your Gadget app. You can find the installation instructions for your API client at https://docs.gadget.dev/api/<your-app-slug>/installing.

Register the Gadget NPM registry with your local development setup:

```shell
npm config set @gadget-client:registry https://registry.gadget.dev/npm
```

Then, install your Gadget client into this `next.js` app

```shell
npm install @gadget-client/<your-app-slug>
# or
yarn add @gadget-client/<your-app-slug>
```

Second, you'll need to update the `import` statement in `src/api.ts` to use the new package name.

```typescript
// in src/api.ts change:
import { Client } from "@gadget-client/public-test";
// to:
import { Client } from "@gadget-client/<your-app-slug>";
```

## Learn More

To learn more about Gadget, here are some links:

- [Gadget documentation](https://docs.gadget.dev) - learn about Gadget's features and connectivity
- [Gadget Shopify Quick Start tutorial](https://docs.gadget.dev/guides/quick-start) - build a Shopify app using Gadget (and this frontend if you want!)
