import { Client } from "@gadget-client/bundle-tutorial";

// export an instance of the API client for this application
export const api = new Client({
  // within the context of a Shopify embedded app, we rely on the `@gadgetinc/react-shopify-app-bridge` to use Shopify Session Token authentication when communicating with the backend, so we don't set any options here
});
