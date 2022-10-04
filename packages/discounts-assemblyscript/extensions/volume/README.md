# Shopify Function development with AssemblyScript

## Deployment instructions

- Follow the [Shopify Functions tutorial](https://shopify.dev/apps/discounts/create) to build out your app frontend
- Instead of using the Rust Function extension included in Shopify's tutorial, copy this project's `volume` folder into your Shopify app
- Run `yarn` inside `extensions/volume` to install dependencies (the AssemblyScript compiler)
- Deploy the function with `npm run deploy` or `yarn deploy`
- In `web/frontend/pages/Volume/new.jsx`, update the **FUNCTION_ID** value with the **SHOPIFY_VOLUME_ID** value in the app's `.env` file
- Start the local server for your app: `npm run dev` or `yarn dev`
- Follow [Shopify's tutorial](https://shopify.dev/apps/discounts/create#step-6-create-and-test-a-discount-in-your-store) to create and test a discount

## Building the function

You can build this individual function using `yarn asbuild`, which will compile debug and release versions of the Function extension.

```shell
yarn asbuild
```

The Shopify CLI `build` command will also execute this, based on the configuration in `shopify.function.extension.toml`.

## Testing

- [Install Shopify's function-runner](https://github.com/Shopify/function-runner)
- Run tests with `yarn test` or `npm test`
