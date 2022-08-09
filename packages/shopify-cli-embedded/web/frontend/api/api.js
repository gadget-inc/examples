import { BrowserSessionStorageType, Client } from "@gadget-client/shopify-cli-connection";

// export an instance of the API client for this application
export const api = new Client({
  authenticationMode: {
    browserSession: {
      // within the context of a Shopify embedded app, we use Temporary authentication to Gadget and rely on the `@gadgetinc/react-shopify-app-bridge` to use Shopify Session Token authentication when communicating with the backend
      storageType: BrowserSessionStorageType.Temporary,
    },
  },
});
