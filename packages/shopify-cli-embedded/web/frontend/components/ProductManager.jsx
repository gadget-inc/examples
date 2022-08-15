import { useAction, useFindMany } from "@gadgetinc/react";
import { api } from "../api/api";
import { Button, Card, Layout, Stack } from "@shopify/polaris";

export function ProductManager() {
  const [_, deleteProduct] = useAction(api.shopifyProduct.delete);
  const [{ data, fetching, error }, refresh] = useFindMany(api.shopifyProduct);

  if (error) return <>Error: {error.toString()}</>;

  return (
    <Layout>
      <Layout.Section>
        {fetching && <span>Loading...</span>}
        {!fetching &&
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
        {!fetching && data.length == 0 && <Card>No products found</Card>}
      </Layout.Section>
    </Layout>
  );
}
