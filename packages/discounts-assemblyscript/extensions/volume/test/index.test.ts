import { functionRunner } from "./helper";

test("no cart items, no discounts", () => {
  const output = functionRunner(
    JSON.stringify({
      cart: {
        lines: [],
      },
      discountNode: {
        metafield: {
          value: '{"quantity":5,"percentage":10}',
        },
      },
    })
  );

  expect(JSON.parse(output)).toStrictEqual({
    discounts: [],
    discountApplicationStrategy: "FIRST",
  });
});

test("no discounts, not enough quantity", () => {
  const output = functionRunner(
    JSON.stringify({
      cart: {
        lines: [
          {
            quantity: "1",
            merchandise: {
              id: "gid://shopify/ProductVariant/1",
            },
          },
        ],
      },
      discountNode: {
        metafield: {
          value: '{"quantity":5,"percentage":10}',
        },
      },
    })
  );

  expect(JSON.parse(output)).toStrictEqual({
    discounts: [],
    discountApplicationStrategy: "FIRST",
  });
});

test("one discount applied", () => {
  const output = functionRunner(
    JSON.stringify({
      cart: {
        lines: [
          {
            quantity: "5",
            merchandise: {
              id: "gid://shopify/ProductVariant/0",
            },
          },
          {
            quantity: "1",
            merchandise: {
              id: "gid://shopify/ProductVariant/1",
            },
          },
        ],
      },
      discountNode: {
        metafield: {
          value: '{"quantity":5,"percentage":10}',
        },
      },
    })
  );

  expect(JSON.parse(output)).toStrictEqual({
    discounts: [
      {
        message: "Testing Shopify Functions using AssemblyScript",
        targets: [
          {
            productVariant: {
              id: "gid://shopify/ProductVariant/0",
              quantity: 5,
            },
          },
        ],
        value: { percentage: { value: 10.0 } },
      },
    ],
    discountApplicationStrategy: "FIRST",
  });
});

test("multiple discounts applied", () => {
  const output = functionRunner(
    JSON.stringify({
      cart: {
        lines: [
          {
            quantity: "5",
            merchandise: {
              id: "gid://shopify/ProductVariant/0",
            },
          },
          {
            quantity: "5",
            merchandise: {
              id: "gid://shopify/ProductVariant/1",
            },
          },
        ],
      },
      discountNode: {
        metafield: {
          value: '{"quantity":5,"percentage":10}',
        },
      },
    })
  );

  expect(JSON.parse(output)).toStrictEqual({
    discounts: [
      {
        message: "Testing Shopify Functions using AssemblyScript",
        targets: [
          {
            productVariant: {
              id: "gid://shopify/ProductVariant/0",
              quantity: 5,
            },
          },
          {
            productVariant: {
              id: "gid://shopify/ProductVariant/1",
              quantity: 5,
            },
          },
        ],
        value: { percentage: { value: 10.0 } },
      },
    ],
    discountApplicationStrategy: "FIRST",
  });
});
