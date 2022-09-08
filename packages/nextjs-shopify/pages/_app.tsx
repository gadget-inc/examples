import { AppType, Provider as GadgetProvider } from "@gadgetinc/react-shopify-app-bridge";
import { AppProvider as PolarisAppProvider, Page } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import type { AppProps } from "next/app";
import React from "react";
import { api } from "../src/api";
import "../styles/globals.css";

function AppContainer({ Component, pageProps }: AppProps) {
  return (
    // wrap the application in the Gadget provider, which manages OAuthing with Shopify, creating a session with the Gadget backend, and creating an instance of the Shopify App Bridge
    // learn more at https://www.npmjs.com/package/@gadgetinc/react-shopify-app-bridge
    <GadgetProvider type={AppType.Embedded} shopifyApiKey={process.env.NEXT_PUBLIC_SHOPIFY_API_KEY!} api={api}>
      {/* 
      Wrap the application in the Shopify Polaris app provider, which makes Polaris components like Button and Card work.
      Learn more about Polaris at https://www.npmjs.com/package/@shopify/polaris
      */}
      <PolarisAppProvider i18n={enTranslations}>
        <Page fullWidth>
          <Component {...pageProps} />
        </Page>
      </PolarisAppProvider>
    </GadgetProvider>
  );
}

export default AppContainer;
