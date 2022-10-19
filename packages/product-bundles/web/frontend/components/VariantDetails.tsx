import { ShopifyProductVariant } from "@gadget-client/bundle-tutorial";
import { Checkbox, Stack } from "@shopify/polaris";
import { useState } from "react";
import { BundleVariant } from "../types/Bundle";
import { numberFormatter } from "../utils/numberFormater";

export const VariantDetails = ({
  productVariant,
  bundleVariant,
  changeVariant,
  isSaving,
}: {
  productVariant: ShopifyProductVariant;
  bundleVariant: BundleVariant | undefined;
  changeVariant: (variant: ShopifyProductVariant, checked: boolean) => void;
  isSaving: boolean;
}) => {
  const [checked, setChecked] = useState(!!bundleVariant);
  const handleChange = (newChecked: boolean) => {
    setChecked(newChecked);
    changeVariant(productVariant, newChecked);
  };

  const price = parseFloat(productVariant?.price ?? "0");

  return (
    <div style={{ marginBottom: "var(--p-space-1)" }}>
      <Stack alignment="center" spacing="loose">
        <Stack.Item>
          <Checkbox label={productVariant.title} checked={checked} onChange={handleChange} disabled={isSaving} />
        </Stack.Item>
        <Stack.Item>
          {price ? (
            bundleVariant?.linePrice && price !== bundleVariant.linePrice ? (
              <span>
                <s>{numberFormatter.format(price)}</s> {numberFormatter.format(bundleVariant?.linePrice || 0)}
              </span>
            ) : (
              <>{numberFormatter.format(price)}</>
            )
          ) : (
            "No price available"
          )}
        </Stack.Item>
      </Stack>
    </div>
  );
};
