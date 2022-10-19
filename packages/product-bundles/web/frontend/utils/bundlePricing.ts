import { BundleProduct } from "../types/Bundle";
import { numberFormatter } from "./numberFormater";

export const formatPriceRange = (minMaxPrice: number[]) => {
  const minPrice = minMaxPrice[0];
  const maxPrice = minMaxPrice[1];

  if (minPrice < 0 && maxPrice < 0) {
    return numberFormatter.format(0);
  } else if (minPrice === maxPrice) {
    return numberFormatter.format(minPrice);
  } else {
    return `${numberFormatter.format(minPrice)} - ${numberFormatter.format(maxPrice)}`;
  }
};

// calculate the range of pricing based on selected variants and quantity
export const calculatePricing = (products: BundleProduct[]) => {
  if (products.length === 0) {
    return [-1, -1];
  }
  const priceRangePerProduct: number[][] = products.map((product) => {
    const quantity = product.quantity;
    let minVariantPrice = -1;
    let maxVariantPrice = -1;

    product.variants.forEach((variant) => {
      if (minVariantPrice < 0) {
        // first variant, set min and max to the discounted price
        minVariantPrice = variant.linePrice;
        maxVariantPrice = variant.linePrice;
      } else if (variant.linePrice < minVariantPrice) {
        minVariantPrice = variant.linePrice;
      } else if (variant.linePrice > maxVariantPrice) {
        maxVariantPrice = variant.linePrice;
      }
    });

    return [minVariantPrice * quantity, maxVariantPrice * quantity];
  });

  const bundleMinMax = priceRangePerProduct.reduce(
    (minMaxPrice, productRange) => {
      const min = minMaxPrice[0] + productRange[0];
      const max = minMaxPrice[1] + productRange[1];

      return [min, max];
    },
    [0, 0]
  );

  return bundleMinMax;
};

// util for calculating discounted price
export const calculateLinePrice = (originalPrice: number, discountPercentage: number) => {
  return originalPrice * (1 - discountPercentage / 100);
};
