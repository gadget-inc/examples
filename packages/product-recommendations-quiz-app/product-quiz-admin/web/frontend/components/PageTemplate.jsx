import { Page } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export function PageTemplate({ children }) {
  return (
    <Page>
      <TitleBar
        title="Sample Product Quiz Admin - by Gadget"
        primaryAction={null}
      />
      {children}
    </Page>
  );
}
