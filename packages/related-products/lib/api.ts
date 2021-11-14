import { Client } from "@gadget-client/related-products-example";
export const api = new Client({
  authenticationMode: {
    apiKey: "gsk-T3QgryDwWaxQd9gNEigXRbrTaL3pKyxE",
    // browserSession: {
    //   storageType: typeof window == "undefined" ? BrowserSessionStorageType.Temporary : BrowserSessionStorageType.Durable,
    // },
  },
});
