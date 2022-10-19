import { ShopifyProductVariant } from "@gadget-client/bundle-tutorial";
import { useFindMany } from "@gadgetinc/react";
import { Button, Collapsible, Select, SelectOption, Spinner, Stack, Subheading, TextField } from "@shopify/polaris";
import { api } from "../api/gadget";
import { BundleProduct } from "../types/Bundle";
import { VariantDetails } from "./VariantDetails";

export const AddProduct = ({
  product,
  productOptions,
  selectProduct,
  selectQuantity,
  deleteProduct,
  changeVariants,
  isSaving,
}: {
  product: BundleProduct;
  productOptions: SelectOption[];
  selectProduct: (productId: string) => void;
  selectQuantity: (quantity: string) => void;
  deleteProduct: () => void;
  changeVariants: (variant: ShopifyProductVariant, checked: boolean) => void;
  isSaving: boolean;
}) => {
  const [{ data, error, fetching }] = useFindMany(api.shopifyProduct, {
    filter: {
      id: {
        equals: product.id,
      },
    },
    select: {
      variants: {
        edges: {
          node: {
            id: true,
            title: true,
            price: true,
          },
        },
      },
    },
  });

  if (error) return <>Error: {error.toString()}</>;

  return (
    <Stack spacing="extraLoose">
      <Stack.Item fill>
        <Select
          label="Select product"
          placeholder="-No product selected-"
          labelHidden
          options={productOptions}
          onChange={selectProduct}
          value={product.id}
          disabled={isSaving}
        />
        <div style={{ marginTop: "var(--p-space-2)" }}>
          <Collapsible
            open={!!product.id}
            id={`variant-collapsible-${product}`}
            transition={{ duration: "500ms", timingFunction: "ease-in-out" }}
            expandOnPrint
          >
            <div style={{ marginLeft: "var(--p-space-4)" }}>
              <Subheading>Included variants</Subheading>
              <div style={{ marginTop: "var(--p-space-2)" }}>
                {!fetching && data?.length === 1 ? (
                  data[0].variants.edges.map((productVariant) => (
                    <VariantDetails
                      key={productVariant.node.id}
                      bundleVariant={product.variants.find((v) => v.id === productVariant.node.id)}
                      productVariant={productVariant.node as unknown as ShopifyProductVariant}
                      changeVariant={changeVariants}
                      isSaving={isSaving}
                    />
                  ))
                ) : (
                  <Spinner />
                )}
              </div>
            </div>
          </Collapsible>
        </div>
      </Stack.Item>
      <Stack.Item>x</Stack.Item>
      <Stack.Item>
        <TextField
          label="Number of products"
          labelHidden
          type="number"
          value={product.quantity.toString()}
          onChange={selectQuantity}
          autoComplete="off"
          disabled={isSaving}
        />
      </Stack.Item>
      <Stack.Item>
        <Button destructive onClick={deleteProduct} disabled={isSaving}>
          Remove
        </Button>
      </Stack.Item>
    </Stack>
  );
};
