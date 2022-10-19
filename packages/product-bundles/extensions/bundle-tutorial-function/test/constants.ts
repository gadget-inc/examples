export const oneBundleMetaValue =
  '{"bundles":[{"__typename":"Bundle","id":"1","title":"Single Product Bundle","discount": 15.0,"bundleElements":{"edges":[{"node":{"quantity":2,"linePrice":{"amount":4.06},"productVariantId":"1"}}]}}]}';

export const multiBundleMetaValue =
  '{"bundles":[{"__typename":"Bundle","id":"1","title":"Single Product Bundle","discount": 15.0,"bundleElements":{"edges":[{"node":{"quantity":2,"linePrice":{"amount":4.06},"productVariantId":"1"}}]}},{"__typename":"Bundle","id":"2","title":"Two Product Bundle","discount": 20.5,"bundleElements":{"edges":[{"node":{"quantity":1,"linePrice":{"amount":4.06},"productVariantId":"2"}},{"node":{"quantity":10,"linePrice":{"amount":2.00},"productVariantId":"3"}}]}}]}';

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
        id: "gid://shopify/ProductVariant/2",
        quantity: 1,
      },
    },
    {
      productVariant: {
        id: "gid://shopify/ProductVariant/3",
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
