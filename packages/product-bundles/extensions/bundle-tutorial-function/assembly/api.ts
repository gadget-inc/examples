// Shopify Functions Product Discount API reference: https://shopify.dev/api/functions/reference/product-discounts/graphql
// This file only contains classes for the required API for this app

import { JSON, JSONEncoder } from "assemblyscript-json/assembly";

// Input classes

export class Input {
  discountNode: DiscountNode | null = null;
  cart: Cart | null = null;

  static parse(input: string): Input {
    const inputObj: JSON.Obj = <JSON.Obj>JSON.parse(input);
    const parsed = new Input();
    parsed.deserialize(inputObj);
    return parsed;
  }

  deserialize(jsonObj: JSON.Obj): void {
    const cartObj: JSON.Obj | null = jsonObj.getObj("cart");
    if (cartObj != null) {
      const cart: Cart = new Cart();
      cart.deserialize(cartObj);
      this.cart = cart;
    }

    const discountObj: JSON.Obj | null = jsonObj.getObj("discountNode");
    if (discountObj != null) {
      const discountNode: DiscountNode = new DiscountNode();
      discountNode.deserialize(discountObj);
      this.discountNode = discountNode;
    }
  }
}

class DiscountNode {
  metafield: Metafield | null = null;

  deserialize(jsonObj: JSON.Obj): void {
    const metafieldObj: JSON.Obj | null = jsonObj.getObj("metafield");
    if (metafieldObj != null) {
      const metafield: Metafield = new Metafield();
      metafield.deserialize(metafieldObj);
      this.metafield = metafield;
    }
  }
}

class Metafield {
  // a json string that needs to be deserialized
  // see metafieldValue.ts for value definition
  value: string | null = null;

  deserialize(jsonObj: JSON.Obj): void {
    const valueObj = jsonObj.getString("value");
    if (valueObj != null) {
      this.value = valueObj.valueOf();
    }
  }
}

class Cart {
  lines: CartLine[] = [];

  deserialize(jsonObj: JSON.Obj): void {
    const linesArrObj = jsonObj.getArr("lines");
    if (linesArrObj != null) {
      const lines: CartLine[] = [];
      const linesJsonArr = linesArrObj.valueOf();
      for (let i = 0; i < linesJsonArr.length; i++) {
        const cartLine: CartLine = new CartLine();
        cartLine.deserialize(<JSON.Obj>linesJsonArr[i]);
        lines.push(cartLine);
        this.lines = lines;
      }
    }
  }
}

class CartLine {
  quantity: i64 = 0;
  merchandise: Merchandise | null = null;

  deserialize(jsonObj: JSON.Obj): void {
    const quantityObj = jsonObj.getInteger("quantity");
    if (quantityObj != null) {
      this.quantity = quantityObj.valueOf();
    }

    const merchandiseObj = jsonObj.getObj("merchandise");
    if (merchandiseObj != null) {
      const merchandise: Merchandise = new Merchandise();
      merchandise.deserialize(merchandiseObj);
      this.merchandise = merchandise;
    }
  }
}

class Merchandise {
  id: string | null = null;

  deserialize(jsonObj: JSON.Obj): void {
    const idObj = jsonObj.getString("id");
    if (idObj != null) {
      this.id = idObj.valueOf();
    }
  }
}

// Output classes

export class FunctionResult {
  discountApplicationStrategy: string | null = null; // DiscountApplicationStrategy: AssemblyScript does not yet support string enums (https://github.com/AssemblyScript/assemblyscript/issues/560)
  discounts: Discount[] = [];

  constructor(discountApplicationStrategy: string | null, discounts: Discount[]) {
    this.discountApplicationStrategy = discountApplicationStrategy;
    this.discounts = discounts;
  }

  serialize(): string {
    let encoder = new JSONEncoder();
    encoder.pushObject(null);

    if (this.discountApplicationStrategy != null) {
      encoder.setString("discountApplicationStrategy", this.discountApplicationStrategy!);
    }
    encoder.pushArray("discounts");
    for (let i = 0; i < this.discounts.length; i++) {
      encoder.pushObject(null);
      this.discounts[i].serialize(encoder);
      encoder.popObject();
    }
    encoder.popArray();

    encoder.popObject();
    return encoder.toString();
  }
}

export class DiscountApplicationStrategy {
  // AssemblyScript does not yet support string enums (https://github.com/AssemblyScript/assemblyscript/issues/560)
  static FIRST(): string {
    return "FIRST";
  }

  static MAXIMUM(): string {
    return "MAXIMUM";
  }
}

export class Discount {
  value: DiscountValue;
  targets: Target[] = [];
  message: string | null = null;

  constructor(value: DiscountValue, targets: Target[], message?: string) {
    this.value = value;
    this.targets = targets;
    if (message) {
      this.message = message;
    }
  }

  serialize(encoder: JSONEncoder): void {
    // handle value
    if (this.value != null) {
      encoder.pushObject("value");
      this.value.serialize(encoder);
      encoder.popObject();
    }
    // handle targets
    encoder.pushArray("targets");
    for (let i = 0; i < this.targets.length; i++) {
      encoder.pushObject(null);
      this.targets[i].serialize(encoder);
      encoder.popObject();
    }
    encoder.popArray();

    // handle message
    if (this.message != null) {
      encoder.setString("message", this.message!);
    }
  }
}

export class DiscountValue {
  percentage: Percentage;

  constructor(percentage: Percentage) {
    this.percentage = percentage;
  }

  serialize(encoder: JSONEncoder): void {
    encoder.pushObject("percentage");
    this.percentage.serialize(encoder);
    encoder.popObject();
  }
}

export class Percentage {
  value: f64 = 0.0;

  constructor(value: f64) {
    this.value = value;
  }

  serialize(encoder: JSONEncoder): void {
    encoder.setFloat("value", this.value);
  }
}

export class Target {
  productVariant: ProductVariantTarget;

  constructor(productVariant: ProductVariantTarget) {
    this.productVariant = productVariant;
  }

  serialize(encoder: JSONEncoder): void {
    if (this.productVariant != null) {
      encoder.pushObject("productVariant");
      this.productVariant.serialize(encoder);
      encoder.popObject();
    }
  }
}
export class ProductVariantTarget {
  id: string;
  quantity: i64;

  constructor(id: string, quantity: i64) {
    this.id = id;
    this.quantity = quantity;
  }

  serialize(encoder: JSONEncoder): void {
    encoder.setString("id", this.id);
    encoder.setInteger("quantity", this.quantity);
  }
}
