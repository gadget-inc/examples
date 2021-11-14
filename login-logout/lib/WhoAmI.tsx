import { Box } from "@chakra-ui/react";
import { useGet } from "@gadgetinc/react";
import React from "react";
import { api } from "../../Users/airhorns/Code/examples/login-logout/lib/api";

export const WhoAmI = () => {
  const [{ error, fetching, data }, refresh] = useGet(api.currentSession, {
    select: {
      id: true,
      state: true,
    },
  });

  return <Box padding="1">Current session: {JSON.stringify(data)}</Box>;
};
