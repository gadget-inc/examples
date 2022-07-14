import { Client } from "@gadget-client/margin-calculator-example";
export const api = new Client({
  authenticationMode: {
    apiKey: process.env.NEXT_PUBLIC_GADGET_API_KEY,
  },
});
