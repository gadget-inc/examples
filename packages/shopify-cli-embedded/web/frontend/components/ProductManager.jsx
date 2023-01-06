import { useFindMany } from "@gadgetinc/react";
import { api } from "../api";
import { Card, Layout, Spinner, Stack } from "@shopify/polaris";

export function ProductManager() {
  const [{ data, fetching, error }, _refresh] = useFindMany(api.shopifyProduct);

  if (error) return <>Error: {error.toString()}</>;

  return (
    <Layout>
      <Layout.Section>
        {fetching && <Spinner />}
        {!fetching &&
          data.map((product) => (
            <Card sectioned key={product.title} title={product.title}>
              <Stack alignment="center">
                <Stack.Item>ID: {product.title}</Stack.Item>
              </Stack>
            </Card>
          ))}
        {!fetching && data.length == 0 && (
          <Card sectioned>
            <p>No products found</p>
          </Card>
        )}
      </Layout.Section>
    </Layout>
  );
}
