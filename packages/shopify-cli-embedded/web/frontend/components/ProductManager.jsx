import { useAction, useFindMany } from "@gadgetinc/react";
import { useGadget } from "@gadgetinc/react-shopify-app-bridge";
import { api } from "../api/api";
import { Button, Card, Layout, Stack } from "@shopify/polaris";

export function ProductManager() {
  // the useGadget hook allows us to use Shopify's App Bridge actions and components
  const { loading } = useGadget();
  const [_, deleteProduct] = useAction(api.shopifyProduct.delete);
  const [{ data, fetching, error }, refresh] = useFindMany(api.shopifyProduct);

  if (error) return <>Error: {error.toString()}</>;
  if (fetching) return <>Fetching...</>;
  if (!data) return <>No widgets found</>;

  return (
    <Layout>
      <Layout.Section>
        {loading && <span>Loading...</span>}
        {!loading &&
          data.map((product) => (
            <Card sectioned key={product.title}>
              <Stack alignment="center">
                <Stack.Item>{product.title}</Stack.Item>
                <Button
                  onClick={() => {
                    void deleteProduct({ id: product.id }).then(() => refresh());
                  }}
                >
                  Delete {product.title || "No title found"}
                </Button>
              </Stack>
            </Card>
          ))}
        {!loading && data.length == 0 && <Card>No products found</Card>}
      </Layout.Section>
    </Layout>
  );
}
