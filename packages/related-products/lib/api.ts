import { Client } from "@gadget-client/related-products-example";

/**
 * To test using public key: gsk-T3QgryDwWaxQd9gNEigXRbrTaL3pKyxE
 */
export const api = new Client({
  authenticationMode: {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
  },
});
