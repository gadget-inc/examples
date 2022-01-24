import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";
import { Provider } from "@gadgetinc/react";
import { api } from "./api";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <Meta />
        <Links />
      </head>
      <body>
        <Provider value={api.connection.currentClient}>
          <AppProvider i18n={enTranslations}>
            <Outlet />
          </AppProvider>
        </Provider>
        <ScrollRestoration />
        <script type="text/javascript">{`window.global = {};`}</script>
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
