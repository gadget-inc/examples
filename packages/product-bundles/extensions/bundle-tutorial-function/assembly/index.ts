// The entry file of your WebAssembly module.

import { Console } from "as-wasi/assembly";
import "wasi";
import {
  Discount,
  DiscountApplicationStrategy,
  DiscountValue,
  FunctionResult,
  Input,
  Percentage,
  ProductVariantTarget,
  Target,
} from "./api";
import { BundleMetafield } from "./metafieldValue";

function main(stdin: string): string {
  // parse stdin to an Input object
  const input = Input.parse(stdin);
  const results: FunctionResult = run(input);
  return results.serialize();
}

function run(input: Input): FunctionResult {
  const cartLines = input.cart!.lines;

  // parse the metafield value
  const metafieldParse = BundleMetafield.parse(input.discountNode!.metafield!.value!);
  const bundles = metafieldParse.bundles;

  // if there is nothing in the cart, or no bundles, no discount needs to be applied!
  if (cartLines.length === 0 || metafieldParse.bundles.length === 0) {
    return new FunctionResult(DiscountApplicationStrategy.FIRST(), new Array());
  }

  // loop through each bundle to check if cart items are all included
  const discounts: Discount[] = [];
  for (let i = 0; i < bundles.length; i++) {
    const discountedBundleProducts = new Array<Target>();

    const bundle = bundles[i];
    const bundleProducts = bundle.bundleElements!.edges;
    // check products in bundle
    for (let j = 0; j < bundleProducts.length; j++) {
      // check products in cart
      for (let k = 0; k < cartLines.length; k++) {
        const cartLine = cartLines[k];

        if (cartLine.merchandise != null && cartLine.merchandise!.id != null) {
          const productUid = cartLine.merchandise!.id;
          const product = bundleProducts[j].node;

          if (
            product != null &&
            product.productVariantId != null &&
            productUid != null &&
            productUid.includes(product.productVariantId!) &&
            cartLine.quantity >= product.quantity
          ) {
            // if there is a match between the bundle product id and the cart product id
            // and the cart quantity is big enough, add as a discounted product
            discountedBundleProducts.push(new Target(new ProductVariantTarget(productUid, product.quantity)));
          }
        }
      }
    }

    // check to see if we have a bundle
    if (discountedBundleProducts.length === bundleProducts.length) {
      // ladies and gentlemen, we have a bundle
      // apply the discount!
      discounts.push(new Discount(new DiscountValue(new Percentage(bundle.discount)), discountedBundleProducts, bundle.title!));
    }
  }

  // return discounts (or empty array if no discounts are available)
  return new FunctionResult(DiscountApplicationStrategy.FIRST(), discounts);
}

// read from STDIN
const input = Console.readAll()!;
// process the input
const output = main(input);
// write to STDOUT
Console.log(output);
