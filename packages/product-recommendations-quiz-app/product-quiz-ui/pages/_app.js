import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import "../styles/globals.css";
import { Provider as GadgetProvider } from "@gadgetinc/react";
import { api } from "./../api.js";

function MyApp({ Component, pageProps }) {
  return (
    <GadgetProvider value={api.connection.currentClient}>
      <AppProvider i18n={enTranslations}>
        <Component {...pageProps} />
      </AppProvider>
    </GadgetProvider>
  );
}

export default MyApp;
