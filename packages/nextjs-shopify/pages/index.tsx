// import Gadget's react hooks for accessing data from your Gadget app
import { useAction, useFindMany } from "@gadgetinc/react";
// import the Gadget<->Shopify bindings that manage the auth process with Shopify
import { useGadget } from "@gadgetinc/react-shopify-app-bridge";
// import and use Shopify's react components like you might in other Shopify app
import { Button as ButtonAction, Redirect, TitleBar } from "@shopify/app-bridge/actions";
import { Button, Card, Layout, Spinner } from "@shopify/polaris";
import type { NextPage } from "next";
// import the instance of the Gadget API client for this app constructed in the other file
import { api } from "../src/api";

const Home: NextPage = () => {
  const { loading, appBridge } = useGadget();
  const [, deleteCustomer] = useAction(api.shopifyCustomer.delete);
  const [{ data, fetching, error }, refresh] = useFindMany(api.shopifyCustomer);
  // Loading or app bridge has not been set up yet
  if (loading || !appBridge) {
    return <Spinner />;
  }

  if (error) return <>Error: {error.toString()}</>;
  if (fetching) return <>Fetching...</>;
  if (!data) return <>No products found</>;

  // Set up a title bar for my embedded app
  const breadcrumb = ButtonAction.create(appBridge, { label: "My breadcrumb" });
  breadcrumb.subscribe(ButtonAction.Action.CLICK, () => {
    appBridge.dispatch(Redirect.toApp({ path: "/breadcrumb-link" }));
  });

  const titleBarOptions = {
    title: "My page title",
    breadcrumbs: breadcrumb,
  };
  TitleBar.create(appBridge, titleBarOptions);

  return (
    <Layout>
      <Layout.Section>
        {loading && <span>Loading...</span>}
        {!loading &&
          data.map((customer) => (
            <Card key={customer.id}>
              {customer.firstName} {customer.lastName}
              <Button
                onClick={() => {
                  void deleteCustomer({ id: customer.id }).then(() => refresh());
                }}
              >
                Delete {customer.firstName!}
              </Button>
            </Card>
          ))}
        {!loading && data.length == 0 && <Card>No customers found</Card>}
      </Layout.Section>
    </Layout>
  );
};

export default Home;
