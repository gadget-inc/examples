// This file contains the classes required for your passed-in discount metadata

import { JSON } from "assemblyscript-json/assembly";

export class BundleMetafield {
  bundles: Bundle[] = [];

  static parse(metafieldValue: string): BundleMetafield {
    const configObj = <JSON.Obj>JSON.parse(metafieldValue);
    const configuration = new BundleMetafield();
    configuration.deserialize(configObj);
    return configuration;
  }

  deserialize(jsonObj: JSON.Obj): void {
    const bundlesObj = jsonObj.getArr("bundles");
    if (bundlesObj != null) {
      const bundles: Bundle[] = [];
      const bundlesJsonArr = bundlesObj.valueOf();
      for (let i = 0; i < bundlesJsonArr.length; i++) {
        const bundle: Bundle = new Bundle();
        bundle.deserialize(<JSON.Obj>bundlesJsonArr[i]);
        bundles.push(bundle);
        this.bundles = bundles;
      }
    }
  }
}

class Bundle {
  __typename: string | null = null;
  id: string | null = null;
  title: string | null = null;
  discount: f64 = 0.0;
  bundleElements: BundleElements | null = null;

  deserialize(jsonObj: JSON.Obj): void {
    const typenameObj = jsonObj.getString("__typename");
    if (typenameObj != null) {
      this.__typename = typenameObj.valueOf();
    }

    const idObj = jsonObj.getString("id");
    if (idObj != null) {
      this.id = idObj.valueOf();
    }

    const titleObj = jsonObj.getString("title");
    if (titleObj != null) {
      this.title = titleObj.valueOf();
    }

    // Console.log(jsonObj.toString());
    let discountObj = jsonObj.getFloat("discount");
    if (discountObj != null) {
      this.discount = discountObj.valueOf();
    } else {
      // weird parsing for numbers with or without decimals
      // getFloat will fail for numbers like 12 (without decimal)
      // so use getInteger as a fallback before skipping the field
      const discoubtObjInt = jsonObj.getInteger("discount");
      if (discoubtObjInt != null) {
        this.discount = <f64>discoubtObjInt.valueOf();
      }
    }

    const bundleElementsObj = jsonObj.getObj("bundleElements");
    if (bundleElementsObj != null) {
      const bundleElements: BundleElements = new BundleElements();
      bundleElements.deserialize(bundleElementsObj);
      this.bundleElements = bundleElements;
    }
  }
}

class BundleElements {
  edges: Node[] = [];

  deserialize(jsonObj: JSON.Obj): void {
    const edgesObj = jsonObj.getArr("edges");
    if (edgesObj != null) {
      const nodes: Node[] = [];
      const edgesJsonArr = edgesObj.valueOf();
      for (let i = 0; i < edgesJsonArr.length; i++) {
        const node: Node = new Node();
        node.deserialize(<JSON.Obj>edgesJsonArr[i]);
        nodes.push(node);
        this.edges = nodes;
      }
    }
  }
}

class Node {
  node: BundleElement | null = null;

  deserialize(jsonObj: JSON.Obj): void {
    const nodeObj = jsonObj.getObj("node");
    if (nodeObj != null) {
      const bundleElement: BundleElement = new BundleElement();
      bundleElement.deserialize(nodeObj);
      this.node = bundleElement;
    }
  }
}

class BundleElement {
  quantity: i64 = 0;
  linePrice: LinePrice | null = null;
  productId: string | null = null;
  productVariantId: string | null = null;

  deserialize(jsonObj: JSON.Obj): void {
    const quantityObj = jsonObj.getInteger("quantity");
    if (quantityObj != null) {
      this.quantity = quantityObj.valueOf();
    }

    const linePriceObj = jsonObj.getObj("linePrice");
    if (linePriceObj != null) {
      const linePrice: LinePrice = new LinePrice();
      linePrice.deserialize(linePriceObj);
      this.linePrice = linePrice;
    }

    const productIdObj = jsonObj.getString("productId");
    if (productIdObj != null) {
      this.productId = productIdObj.valueOf();
    }

    const productVariantIdObj = jsonObj.getString("productVariantId");
    if (productVariantIdObj != null) {
      this.productVariantId = productVariantIdObj.valueOf();
    }
  }
}

class LinePrice {
  amount: f64 = 0.0;

  deserialize(jsonObj: JSON.Obj): void {
    const amountObj = jsonObj.getFloat("amount");
    if (amountObj != null) {
      this.amount = amountObj.valueOf();
    }
  }
}
