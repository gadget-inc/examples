import { BrowserRouter } from "react-router-dom";
import { NavigationMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";
import {
  AppType,
  Provider as GadgetProvider,
  useGadget,
} from "@gadgetinc/react-shopify-app-bridge";
import { api } from "./api";

import { PolarisProvider } from "./components";

export default function App() {
  return (
    <GadgetProvider
      type={AppType.Embedded}
      shopifyApiKey={process.env.SHOPIFY_API_KEY}
      api={api}
    >
      <PolarisProvider>
        <BrowserRouter>
          <AuthenticatedApp />
        </BrowserRouter>
      </PolarisProvider>
    </GadgetProvider>
  );
}

function AuthenticatedApp() {
  // we use `isAuthenticated` to render pages once the OAuth flow is complete!
  const { isAuthenticated } = useGadget();
  return isAuthenticated && <EmbeddedApp />;
}

function EmbeddedApp() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  return (
    <>
      <NavigationMenu
        navigationLinks={[
          {
            label: "Create new quiz",
            destination: "/create-new-quiz",
          },
        ]}
      />
      <Routes pages={pages} />
    </>
  );
}
