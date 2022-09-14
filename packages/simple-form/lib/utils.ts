import { CombinedError } from "urql";

export const rootErrorMessage = (error: CombinedError) => {
  if (error.networkError) {
    return "There was a problem connecting to the server, please ensure you are connected to the internet and try again.";
  } else {
    const firstError = error.graphQLErrors[0];
    if (firstError.message.startsWith("GGT_INVALID_RECORD")) {
      return "Please correct the issues below and try again.";
    } else {
      return firstError.message;
    }
  }
};
