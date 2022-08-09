import { Page, Layout } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { ProductManager } from "../components";

export default function HomePage() {
  return (
    <Page narrowWidth>
      <TitleBar title="Gadget/Shopify CLI Example" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <ProductManager />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
