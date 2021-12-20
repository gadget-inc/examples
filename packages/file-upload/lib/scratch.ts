import { Client } from "@gadget-client/files-example";

export const api = new Client();

const main = async () => {
  while (true) {
    await api.transaction(async () => {
      console.log(Date.now(), await api.query(`query { gadgetMeta { name } }`));
    });
  }
};

void main();
