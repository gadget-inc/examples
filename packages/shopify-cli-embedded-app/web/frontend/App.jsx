import { api } from "./api";
import {
  AppType,
  Provider as GadgetProvider,
} from "@gadgetinc/react-shopify-app-bridge";
import { PolarisProvider } from "./components";
import { ProductManager } from "./components/ProductManager";

export default function App() {
  // the GadgetProvider handles App Bridge OAuth for us!
  return (
    <GadgetProvider
      type={AppType.Embedded}
      shopifyApiKey="048bb6da4daabcd9a53c4c13f1d7a66a"
      api={api}
    >
      <PolarisProvider>
        <ProductManager />
      </PolarisProvider>
    </GadgetProvider>
  );
}
