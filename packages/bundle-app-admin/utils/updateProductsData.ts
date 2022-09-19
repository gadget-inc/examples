import { BundleProduct } from "../types/Bundle";

// util for updating selected products array
export const updateBundleProducts = (bundleProducts: BundleProduct[], index: number, updatedBundleProduct: BundleProduct) => [
  ...bundleProducts.slice(0, index),
  updatedBundleProduct,
  ...bundleProducts.slice(index + 1),
];
