import { BrowserRouter } from "react-router-dom";
import { NavigationMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";

import { QueryProvider, PolarisProvider } from "./components";

import { AppType, Provider as GadgetProvider, useGadget } from "@gadgetinc/react-shopify-app-bridge";
import { api } from "./api/api";

export default function App() {
  return (
    <GadgetProvider type={AppType.Embedded} shopifyApiKey={process.env.SHOPIFY_API_KEY} api={api}>
      <PolarisProvider>
        <BrowserRouter>
          <QueryProvider>
            <EmbeddedApp />
          </QueryProvider>
        </BrowserRouter>
      </PolarisProvider>
    </GadgetProvider>
  );
}

function EmbeddedApp() {
  // we use `isAuthenticated` to render pages once the OAuth flow is complete!
  // this ensures that we will
  const { isAuthenticated } = useGadget();

  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  return !isAuthenticated ? (
    <span>Loading...</span>
  ) : (
    <>
      <NavigationMenu
        navigationLinks={[
          {
            label: "Page name",
            destination: "/pagename",
          },
        ]}
      />
      <Routes pages={pages} />
    </>
  );
}
