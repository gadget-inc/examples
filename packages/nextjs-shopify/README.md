This is an example [Next.js](https://nextjs.org/) project for building a Shopify App using [Gadget](https://gadget.dev) as a backend.

## What's in here

This is an app template that has all the main pieces of a Shopify app setup already:

- the connection to the Gadget backend is installed using the API client package for an example app (`@gadget-client/public-test`) (see https://docs.gadget.dev/api/public-test/installing)
- the connection to the Gadget backend is instantiated in `src/api.ts`
- the OAuth flow for installing and authenticating users is setup by installing `@gadgetinc/react-shopify-app-bridge` and wrapping the app with the `GadgetProvider` in `_app.tsx` (see https://www.npmjs.com/package/@gadgetinc/react-shopify-app-bridge)
- the Shopify App Bridge for managing an app embed is setup automatically by `@gadgetinc/react-shopify-app-bridge`
- Shopify's React component library, `@shopify/polaris` is installed and a base `<Page/>` component wraps the app in `_app.tsx` (see https://www.npmjs.com/package/@shopify/polaris)
- a local SSL friendly development setup that plays nice with Shopify's SSL requirement for embedded apps

## Getting Started

Create a local copy of this app from this template by running:

```shell
npx create-next-app@latest --example https://github.com/gadget-inc/examples --example-path packages/nextjs-shopify
# or
yarn create next-app --example https://github.com/gadget-inc/examples --example-path packages/nextjs-shopify
# or
pnpm create next-app --example https://github.com/gadget-inc/examples --example-path packages/nextjs-shopify
```

Follow the `create-next-app` instructions, and then change into the directory for the app you created:

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

**Note**: this app is intended to be embedded inside the Shopify Admin. To test this, you'll need to set up a Shopify App and install it into a Shopify store.

To use this app inside Shopify, set your Shopify app's `App URL` to `https://localhost`, and you will see your local dev server embedded in the Shopify admin.

More information on this process is available in the [Gadget docs](https://docs.gadget.dev/guides/connections/shopify).

Once you're set up within the Shopify admin, you can start editing the app by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

### Replacing the example values with your own

When using this template, you'll need to switch it to use your own Gadget application's credentials and your own Shopify app credentials. Here's the list of stuff to update:

First, you'll need to install the Gadget API client for your Gadget app. You can find the installation instructions for your API client at https://docs.gadget.dev/api/<your-app-slug>/installing .

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

Third, you'll need to update the `NEXT_PUBLIC_SHOPIFY_API_KEY` environment variable. This variable should hold the Shopify App API Key that you're using for your app from the Shopify Partners Dashboard or in-admin App page, and it should match the Shopify Connection you've setup in Gadget.

```shell
cp .env.example .env
// edit the .env file to replace the example variable
```

## Learn More

To learn more about Gadget, here are some links:

- [Gadget documentation](https://docs.gadget.dev) - learn about Gadget's features and connectivity
- [Gadget Shopify Quick Start tutorial](https://docs.gadget.dev/guides/quick-start) - build a Shopify app using Gadget (and this frontend if you want!)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgadget-inc%2Fexamples%2Ftree%2Fmain%2Fpackages%2Fnextjs-shopify&env=NEXT_PUBLIC_SHOPIFY_API_KEY&envDescription=Shopify%20App%20API%20Key%20from%20the%20Partners%20dashboard%20or%20the%20Shopify%20Admin%2C%20matching%20the%20key%20used%20for%20the%20Gadget%20Shopify%20Connection&project-name=nextjs-gadget-shopify-app&repo-name=nextjs-gadget-shopify-app)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
