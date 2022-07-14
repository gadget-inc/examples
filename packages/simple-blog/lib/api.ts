import { Client } from "@gadget-client/simple-blog-example";

/**
 * To test using public key: gsk-fe7X4gHDWdpJtPDqfeL8wGqWMziYCcFf
 */
export const api = new Client({
  authenticationMode: {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
  },
});
