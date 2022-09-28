import { JSON } from "json-as/assembly";

// Input classes

@json
export class Input {
  discountNode: DiscountNode;
  cart: Cart;

  configuration(): Configuration {
    const config = this.discountNode.metafield.value;
    // json-as bug workaround: https://github.com/JairusSW/as-json/issues/29
    const fixedConfig = `${config.slice(0, config.length - 1)},}`;
    const configuration = JSON.parse<Configuration>(fixedConfig);
    return configuration ? configuration : new Configuration();
  }
}

@json
class DiscountNode {
  metafield: Metafield;
}

@json
class Metafield {
  value: string;
}

@json
export class Configuration {
  quantity: i64 = 999;
  percentage: f64 = 0.0;
}

@json
class Cart {
  lines: Array<CartLine>;
}

@json
class CartLine {
  quantity: i32;
  merchandise: Merchandise;
}

@json
class Merchandise {
  id: string;
}

// Output classes

@json
export class FunctionResult {
  discountApplicationStrategy: string; // DiscountApplicationStrategy: AssemblyScript does not yet support string enums (https://github.com/AssemblyScript/assemblyscript/issues/560)
  discounts: Array<Discount>;

  constructor(discountApplicationStrategy: string, discounts: Array<Discount>) {
    this.discountApplicationStrategy = discountApplicationStrategy;
    this.discounts = discounts;
  }
}

export class DiscountApplicationStrategy {
  static FIRST(): string {
    return "FIRST";
  }

  static MAXIMUM(): string {
    return "MAXIMUM";
  }
}

@json
export class Discount {
  value: DiscountValue;
  targets: Array<Target>;
  message: string;
  // conditions: Array<Condition>;

  constructor(
    value: DiscountValue,
    targets: Array<Target>,
    message: string = ""
    // conditions: Array<Condition>
  ) {
    this.value = value;
    this.targets = targets;
    this.message = message;
    // this.conditions = conditions;
  }
}

@json
export class DiscountValue {
  percentage: Percentage;
  // fixedAmount: FixedAmount;

  constructor(percentage: Percentage /*, fixedAmount: FixedAmount*/) {
    this.percentage = percentage;
    // this.fixedAmount = fixedAmount;
  }
}

@json
class FixedAmount {
  appliesToEachItem: boolean;
  amount: Value;

  constructor(amount: Value, appliesToEachItem: boolean = false) {
    this.amount = amount;
    this.appliesToEachItem = appliesToEachItem;
  }
}

@json
export class Percentage {
  value: f64;

  constructor(percentage: f64) {
    this.value = percentage;
  }
}

@json
class Value {
  value: f64;

  constructor(value: f64) {
    this.value = value;
  }
}

@json
export class Target {
  productVariant: ProductVariantTarget;

  constructor(productVariant: ProductVariantTarget) {
    this.productVariant = productVariant;
  }
}

@json
export class ProductVariantTarget {
  id: string;
  quantity: i64;

  constructor(id: string, quantity: i64) {
    this.id = id;
    this.quantity = quantity;
  }
}

@json
class Condition {
  productMinimumQuantity: ProductMinimumQuantity;
  productMinimumSubtotal: ProductMinimumSubtotal;

  constructor(productMinimumQuantity: ProductMinimumQuantity, productMinimumSubtotal: ProductMinimumSubtotal) {
    this.productMinimumQuantity = productMinimumQuantity;
    this.productMinimumSubtotal = productMinimumSubtotal;
  }
}

@json
class ProductMinimumQuantity {
  ids: Array<string>;
  minimumQuantity: i64;
  targetType: string; // ConditionTargetType: AssemblyScript does not yet support string enums (https://github.com/AssemblyScript/assemblyscript/issues/560)

  constructor(
    ids: Array<string>,
    minimumQuantity: i64,
    targetType: string // ConditionTargetType
  ) {
    this.ids = ids;
    this.minimumQuantity = minimumQuantity;
    this.targetType = targetType;
  }
}

@json
class ProductMinimumSubtotal {
  ids: Array<string>;
  minimumAmount: f64;
  targetType: string; // ConditionTargetType;

  constructor(
    ids: Array<string>,
    minimumAmount: f64,
    targetType: string // ConditionTargetType
  ) {
    this.ids = ids;
    this.minimumAmount = minimumAmount;
    this.targetType = targetType;
  }
}

class ConditionTargetType {
  static ORDER_SUBTOTAL(): string {
    return "ORDER_SUBTOTAL";
  }

  static PRODUCT_VARIANT(): string {
    return "PRODUCT_VARIANT";
  }
}
