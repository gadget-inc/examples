This is an example [Shopify CLI](https://shopify.dev/apps/tools/cli) app that shows you how to charge merchants for using your app.

## What's in here

This app allows you to add one-time payments or set up a subscription. You can also try out a free trial period.
The actual application is gated behind the `SubscriptionWrapper`, and cannot be accessed without a valid subscription or trial.

- requests to Shopify to create subscriptions or one-time payments are made on the Gadget backend
- the connection to the Gadget backend is installed using the API client package for an example app (`@gadget-client/billing-tutorial`)
- the connection to the Gadget backend is instantiated in `web/frontend/api/gadget.js`
- the OAuth flow for installing and authenticating users is setup by installing `@gadgetinc/react-shopify-app-bridge` and wrapping the app with the `GadgetProvider` in `App.jsx` (see https://www.npmjs.com/package/@gadgetinc/react-shopify-app-bridge)
- the Shopify App Bridge for managing an app embed is setup automatically by `@gadgetinc/react-shopify-app-bridge`
- Shopify's React component library, `@shopify/polaris` is installed and Shopify's default `PolarisProvider` wraps the app in `App.jsx` (see https://www.npmjs.com/package/@shopify/polaris)
- a local SSL-friendly development setup that plays nice with Shopify's SSL requirement for embedded apps
- both Read and Create requests are being made to Gadget using React hooks provided by the `@gadgetinc/react` package

## Getting Started

Create a local copy of this app from this template by running:

```shell
npx create-next-app@latest --example https://github.com/gadget-inc/examples --example-path packages/billing-examples
# or
yarn create next-app --example https://github.com/gadget-inc/examples --example-path packages/billing-examples
# or
pnpm create next-app --example https://github.com/gadget-inc/examples --example-path packages/billing-examples
```

And change to the directory for the app you created:

```shell
cd <your-app-name>
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [https://localhost](https://localhost) with your browser to see the resulting app.

**Note**: This app is intended to be embedded inside the Shopify Admin. To test this, you'll need to set up a Shopify App and install it into a Shopify store.

To use this app inside Shopify, set your Shopify app's `App URL` to `https://localhost`, and you will see your local dev server embedded in the Shopify admin. You need to set this App URL in your Gadget app and your custom Shopify Partners application.

More information on this process is available in the [Gadget docs](https://docs.gadget.dev/guides/connections/shopify).

Once you're set up within the Shopify admin, you can start editing the app by modifying `web/frontend/App.jsx`. The page auto-updates as you edit the file.

**To simulate billing charges you need to enable Public distribution in the Shopify Partners dashboard!**

### Replacing the example values with your own

You can fork our billing tutorial Gadget app to start building your own:

[![Fork on Gadget](https://assets.gadget.dev/assets/fork-button.svg)](https://app.gadget.dev/auth/fork?domain=billing-tutorial.gadget.app)

All Gadget actions concerning billing and creating app charges are on the Shopify Shop model.

You need to replace the `billing-tutorial.gadget.app` domains in GraphQL queries found in `oninstall.js` and `onsubscribe.js`.

When using this admin app template, you'll need to switch it to use your own Gadget application's credentials and your own Shopify app credentials. Here's the list of stuff to update:

First, you'll need to install the Gadget API client for your Gadget app. You can find the installation instructions for your API client at `https://docs.gadget.dev/api/<your-app-slug>/installing`.

Register the Gadget NPM registry with your local development setup:

```shell
npm config set @gadget-client:registry https://registry.gadget.dev/npm
```

Then, install your Gadget client into this Shopify CLI app

```shell
npm install @gadget-client/<your-app-slug>
# or
yarn add @gadget-client/<your-app-slug>
```

Second, you'll need to update the `import` statement in `web/frontend/api/gadget.ts` to use the new package name.

```typescript
// in src/api.ts change:
import { Client } from "@gadget-client/billing-tutorial";
// to:
import { Client } from "@gadget-client/<your-app-slug>";
```

Third, you'll need to update the `SHOPIFY_API_KEY` environment variable. This variable should hold the Shopify App API Key that you're using for your app from the Shopify Partners Dashboard or in-admin App page, and it should match the Shopify Connection you've set up in Gadget.

```shell
cp .env.example .env
// edit the .env file to replace the example variable
```

## Learn More

To learn more about Gadget, here are some links:

- [Gadget billing documentation](https://docs.gadget.dev/guides/connections/shopify-app-billing) - learn how to make charges to Shopify so you can get paid when your app is downloaded!
- [Gadget embedded app documentation](https://docs.gadget.dev/guides/connections/shopify-app-frontends)
- for more information on the Gadget-provided React tools see: `https://docs.gadget.dev/api/<your-app-slug>/using-with-react` (replace your-app-slug with the slug from your Gadget app!)

## Deploy your app

The easiest way to deploy your Shopify CLI app is to follow their docs for deploying on [Heroku or Fly.io](https://shopify.dev/apps/deployment/web).
