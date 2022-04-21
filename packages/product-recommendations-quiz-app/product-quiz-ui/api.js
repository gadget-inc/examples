import { Client } from "@gadget-client/YOUR CLIENT HERE";

export const api = new Client({
  authenticationMode: {
    apiKey: process.env.API_KEY,
  },
});
