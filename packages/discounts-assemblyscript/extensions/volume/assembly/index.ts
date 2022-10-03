// The entry file of your WebAssembly module.
import { Console } from "as-wasi/assembly";
import { JSON } from "json-as/assembly";
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

function main(stdin: string): string {
  const input = JSON.parse<Input>(stdin);
  const result = run(input);

  return JSON.stringify(result);
}

function run(input: Input): FunctionResult {
  const config = input.configuration();
  const cartLines = input.cart.lines;

  // if there is nothing in the cart, no discount needs to be applied!
  if (cartLines.length === 0 || config.percentage === 0.0) {
    return new FunctionResult(DiscountApplicationStrategy.FIRST(), new Array());
  }

  // for each item in the cart, check to see if the quantity is greater than the number required for a discount
  const targets = new Array<Target>();
  for (let i = 0; i < cartLines.length; i++) {
    const line = cartLines[i];
    if (line.quantity >= config.quantity) {
      targets.push(new Target(new ProductVariantTarget(line.merchandise.id, line.quantity)));
    }
  }

  // if there aren't any target products for the discounts, return empty discount result
  if (targets.length === 0) {
    return new FunctionResult(DiscountApplicationStrategy.FIRST(), new Array());
  }

  // there are discounts to apply!
  const discounts = new Array<Discount>(1);
  discounts[0] = new Discount(
    new DiscountValue(new Percentage(config.percentage)),
    targets,
    "Testing Shopify Functions using AssemblyScript"
  );
  return new FunctionResult(DiscountApplicationStrategy.FIRST(), discounts);
}

const input = Console.readAll()!;
const output = main(input);
Console.log(output);
