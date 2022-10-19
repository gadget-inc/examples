export interface BundleVariant {
  id: string;
  originalPrice: number;
  linePrice: number;
}

export interface BundleProduct {
  id: string;
  quantity: number;
  variants: BundleVariant[];
}

export interface Bundle {
  title: string;
  discountPercentage: number;
  products: BundleProduct[];
  image?: any;
}
