export const oneBundleMetaValue =
  '{"__typename":"Bundle","id":"1","title":"Single Product Bundle","discount": 15.0,"bundleElements":{"edges":[{"node":{"quantity":2,"productId":"1","productVariantId":"1"}}]}}';

export const multiProductBundleMetaValue =
  '{"__typename":"Bundle","id":"2","title":"Two Product Bundle","discount": 20.5,"bundleElements":{"edges":[{"node":{"quantity":1,"productId":"1","productVariantId":"1"}},{"node":{"quantity":10,"productId":"2","productVariantId":"2"}}]}}]}';

export const multiVariantBundleMetaValue =
  '{"__typename":"Bundle","id":"2","title":"One Product, Two Variant Bundle","discount": 20,"bundleElements":{"edges":[{"node":{"quantity":2,"productId":"1","productVariantId":"1"}},{"node":{"quantity":2,"productId":"1","productVariantId":"2"}}]}}';

export const singleProductBundle = {
  message: "Single Product Bundle",
  targets: [
    {
      productVariant: {
        id: "gid://shopify/ProductVariant/1",
        quantity: 2,
      },
    },
  ],
  value: {
    percentage: {
      value: 15,
    },
  },
};

export const twoProductBundle = {
  message: "Two Product Bundle",
  targets: [
    {
      productVariant: {
        id: "gid://shopify/ProductVariant/1",
        quantity: 1,
      },
    },
    {
      productVariant: {
        id: "gid://shopify/ProductVariant/2",
        quantity: 10,
      },
    },
  ],
  value: {
    percentage: {
      value: 20.5,
    },
  },
};

export const oneProductTwoVariantBundle = {
  message: "One Product, Two Variant Bundle",
  targets: [
    {
      productVariant: {
        id: "gid://shopify/ProductVariant/1",
        quantity: 2,
      },
    },
  ],
  value: {
    percentage: {
      value: 20,
    },
  },
};
