import {
  multiProductBundleMetaValue,
  multiVariantBundleMetaValue,
  oneBundleMetaValue,
  oneProductTwoVariantBundle,
  singleProductBundle,
  twoProductBundle,
} from "./constants";
import { functionRunner } from "./helper";

test("should not apply discount: no items in cart", () => {
  const output = functionRunner(
    JSON.stringify({
      cart: {
        lines: [],
      },
      discountNode: {
        metafield: {
          value: oneBundleMetaValue,
        },
      },
    })
  );

  expect(JSON.parse(output)).toStrictEqual({
    discountApplicationStrategy: "FIRST",
    discounts: [],
  });
});

test("should apply single bundle discount", () => {
  const output = functionRunner(
    JSON.stringify({
      cart: {
        lines: [
          {
            quantity: 2,
            merchandise: {
              id: "gid://shopify/ProductVariant/1",
            },
          },
        ],
      },
      discountNode: {
        metafield: {
          value: oneBundleMetaValue,
        },
      },
    })
  );

  expect(JSON.parse(output)).toStrictEqual({
    discountApplicationStrategy: "FIRST",
    discounts: [singleProductBundle],
  });
});

test("should only apply bundle once", () => {
  const output = functionRunner(
    JSON.stringify({
      cart: {
        lines: [
          {
            quantity: 3,
            merchandise: {
              id: "gid://shopify/ProductVariant/1",
            },
          },
        ],
      },
      discountNode: {
        metafield: {
          value: oneBundleMetaValue,
        },
      },
    })
  );

  expect(JSON.parse(output)).toStrictEqual({
    discountApplicationStrategy: "FIRST",
    discounts: [singleProductBundle],
  });
});

test("should not apply discount: not enough quantity", () => {
  const output = functionRunner(
    JSON.stringify({
      cart: {
        lines: [
          {
            quantity: 1,
            merchandise: {
              id: "gid://shopify/ProductVariant/1",
            },
          },
        ],
      },
      discountNode: {
        metafield: {
          value: oneBundleMetaValue,
        },
      },
    })
  );

  expect(JSON.parse(output)).toStrictEqual({
    discountApplicationStrategy: "FIRST",
    discounts: [],
  });
});

test("should apply single bundle discount, multi-bundle metafield", () => {
  const output = functionRunner(
    JSON.stringify({
      cart: {
        lines: [
          {
            quantity: 2,
            merchandise: {
              id: "gid://shopify/ProductVariant/1",
            },
          },
        ],
      },
      discountNode: {
        metafield: {
          value: oneBundleMetaValue,
        },
      },
    })
  );

  expect(JSON.parse(output)).toStrictEqual({
    discountApplicationStrategy: "FIRST",
    discounts: [singleProductBundle],
  });
});

test("should apply multi-product bundle discount", () => {
  const output = functionRunner(
    JSON.stringify({
      cart: {
        lines: [
          {
            quantity: 2,
            merchandise: {
              id: "gid://shopify/ProductVariant/1",
            },
          },
          {
            quantity: 10,
            merchandise: {
              id: "gid://shopify/ProductVariant/2",
            },
          },
        ],
      },
      discountNode: {
        metafield: {
          value: multiProductBundleMetaValue,
        },
      },
    })
  );

  expect(JSON.parse(output)).toStrictEqual({
    discountApplicationStrategy: "FIRST",
    discounts: [twoProductBundle],
  });
});

test("should not apply multi-product bundle discount, not enough quantity", () => {
  const output = functionRunner(
    JSON.stringify({
      cart: {
        lines: [
          {
            quantity: 2,
            merchandise: {
              id: "gid://shopify/ProductVariant/2",
            },
          },
          {
            quantity: 9,
            merchandise: {
              id: "gid://shopify/ProductVariant/3",
            },
          },
        ],
      },
      discountNode: {
        metafield: {
          value: multiProductBundleMetaValue,
        },
      },
    })
  );

  expect(JSON.parse(output)).toStrictEqual({
    discountApplicationStrategy: "FIRST",
    discounts: [],
  });
});

test("should work with single variant", () => {
  const output = functionRunner(
    JSON.stringify({
      cart: {
        lines: [
          {
            quantity: 2,
            merchandise: {
              id: "gid://shopify/ProductVariant/1",
            },
          },
        ],
      },
      discountNode: {
        metafield: {
          value: multiVariantBundleMetaValue,
        },
      },
    })
  );

  expect(JSON.parse(output)).toStrictEqual({
    discountApplicationStrategy: "FIRST",
    discounts: [oneProductTwoVariantBundle],
  });
});
