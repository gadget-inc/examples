import { ShopifyProductVariant, StoredFileInput } from "@gadget-client/bundle-tutorial";
import { useFindMany } from "@gadgetinc/react";
import {
  Button,
  Caption,
  Card,
  DropZone,
  Form,
  FormLayout,
  SelectOption,
  Spinner,
  Stack,
  TextContainer,
  TextField,
  Thumbnail,
} from "@shopify/polaris";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { api } from "../../api/gadget";
import AddProduct from "../../components/AddProduct";
import { Bundle, BundleProduct } from "../../types/Bundle";
import { numberFormatter } from "../../utils/numberFormater";

const MINIMUM_QUANTITY = 1;

const CreateBundle: NextPage = () => {
  const router = useRouter();

  // use to disable UI while saving
  const [isSaving, setSavingBundle] = useState(false);

  // make request to Gadget app API for available products
  const [productResults] = useFindMany(api.shopifyProduct);
  // get existing bundles to filter out when adding products
  const [bundleResults] = useFindMany(api.bundle, {
    select: {
      id: true,
      trackerProductId: true,
    },
  });

  // initialize Bundle state
  const [bundle, setBundle] = useState<Bundle>({
    title: "",
    discountPercentage: 0,
    products: [],
  });

  const [file, setFile] = useState<File>();
  const handleDrop = useCallback((_droppedfile: File[], acceptedfile: File[]) => {
    setFile(acceptedfile[0]);
  }, []);

  const [minMaxPrice, setMinMaxPrice] = useState([-1, -1]);
  const formatPriceRange = (minMaxPrice: number[]) => {
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
  const calculatePricing = (products: BundleProduct[]) => {
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
  const calculateLinePrice = (originalPrice: number, discountPercentage: number) => {
    return originalPrice * (1 - discountPercentage / 100);
  };

  /**
   * Bundle changes
   **/
  const changeBundleTitle = useCallback(
    (title: string) => {
      setBundle({ ...bundle, title });
    },
    [bundle]
  );
  const updateDiscountPercentage = useCallback(
    (discount: string) => {
      const discountPercentage = Math.min(100, Math.max(0, discount ? parseInt(discount) : 0));

      // update variant pricing
      const updatedProducts = [...bundle.products].map((product) => {
        const updatedVariants = [...product.variants].map((variant) => {
          if (variant.originalPrice) {
            variant.linePrice = calculateLinePrice(variant.originalPrice, discountPercentage);
          }
          return variant;
        });
        product.variants = updatedVariants;
        return product;
      });

      setBundle({ ...bundle, discountPercentage, products: updatedProducts });
      setMinMaxPrice(calculatePricing(updatedProducts));
    },
    [bundle]
  );

  /**
   * Product changes
   **/

  // util for updating selected products array
  const updateBundleProducts = (bundleProducts: BundleProduct[], index: number, updatedBundleProduct: BundleProduct) => [
    ...bundleProducts.slice(0, index),
    updatedBundleProduct,
    ...bundleProducts.slice(index + 1),
  ];

  const addProduct = useCallback(() => {
    const products = [...bundle.products];
    products.push({
      id: "",
      quantity: 1,
      variants: [],
    });
    setBundle({ ...bundle, products });
  }, [bundle]);
  const changeProduct = useCallback(
    (productId: string, index: number) => {
      const updatedProducts = updateBundleProducts(bundle.products, index, {
        id: productId,
        quantity: bundle.products[index].quantity,
        variants: [],
      });
      setBundle({ ...bundle, products: updatedProducts });
    },
    [bundle]
  );
  const removeProduct = useCallback(
    (index: number) => {
      const products = [...bundle.products];
      products.splice(index, 1);
      setBundle({ ...bundle, products });
      setMinMaxPrice(calculatePricing(products));
    },
    [bundle]
  );
  const changeProductQuantity = useCallback(
    (quantity: number, index: number) => {
      const updatedBundleProducts = updateBundleProducts(bundle.products, index, {
        ...bundle.products[index],
        quantity: Math.max(MINIMUM_QUANTITY, quantity),
      });

      setBundle({ ...bundle, products: updatedBundleProducts });
      setMinMaxPrice(calculatePricing(updatedBundleProducts));
    },
    [bundle]
  );

  /**
   * Product Variant changes
   **/
  const changeVariants = useCallback(
    (variant: ShopifyProductVariant, checked: boolean, index: number) => {
      const product = bundle.products[index];
      const { discountPercentage } = bundle;

      // update variants for selected product
      const variants = [...product.variants];
      if (checked && variant.price) {
        const price = parseFloat(variant.price);
        const linePrice = calculateLinePrice(price, discountPercentage);
        variants.push({ id: variant.id, originalPrice: price, linePrice });
      } else {
        const indexToRemove = variants.findIndex((v) => v.id === variant.id);
        variants.splice(indexToRemove, 1);
      }
      product.variants = variants;

      // write updates back to product array
      const updatedProducts = [...bundle.products];
      updatedProducts[index] = product;

      setBundle({ ...bundle, products: updatedProducts });
      setMinMaxPrice(calculatePricing(updatedProducts));
    },
    [bundle]
  );

  const fileUpload = !file && <DropZone.FileUpload />;
  const uploadedfile = file && (
    <Stack>
      <Thumbnail size="small" alt={file.name} source={window.URL.createObjectURL(file)} />
      <div>
        {file.name} <Caption>{file.size} bytes</Caption>
      </div>
    </Stack>
  );

  const handleFileUpload = async (f: File) => {
    const { url, token } = await api.getDirectUploadToken();
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": f.type,
      },
      body: f,
    });

    return token;
  };

  // handle form submission (bundle creation), and move on to pricing
  const handleSubmit = useCallback(async () => {
    setSavingBundle(true);

    let image: StoredFileInput | null = null;
    if (file) {
      const token = await handleFileUpload(file);
      image = {
        directUploadToken: token,
        fileName: file.name,
      };
    }

    // write bundle to Gadget, along with linked products and product variants
    try {
      await api.bundle.create({
        bundle: {
          title: bundle.title,
          image: image ? image : undefined,
          bundleElements: [
            {
              _converge: {
                values: bundle.products.flatMap((product) => {
                  return product.variants.map((variant) => ({
                    shopifyProduct: {
                      _link: product.id,
                    },
                    quantity: product.quantity,
                    productVariant: {
                      _link: variant.id,
                    },
                    linePrice: variant.linePrice.toString(),
                  }));
                }),
              },
            },
          ],
        },
      });
    } finally {
      setSavingBundle(false);

      // navigate back to home page
      await router.push("/");
    }
  }, [bundle, file, router]);

  // simplistic error and fetch handling
  if (productResults.error) return <>Error: {productResults.error.toString()}</>;
  if (bundleResults.error) return <>Error: {bundleResults.error.toString()}</>;
  if ((productResults.fetching && !productResults.data) || (bundleResults.fetching && !bundleResults.data)) return <>Fetching...</>;
  if (!productResults.data) return <>No products found</>;
  if (!bundleResults.data) return <>No bundles found</>;

  // collect available product options
  const productOptions: SelectOption[] | undefined = productResults.data
    ?.map((product) => ({
      label: product.title as string,
      value: product.id,
    }))
    // remove bundles from available options
    .filter((product) => !bundleResults.data?.find((bundle) => bundle.trackerProductId === product.value));

  return (
    <Card sectioned>
      <Card.Header title="Create bundle" />
      <Card.Section>
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <Stack alignment="leading">
              <Stack.Item>
                <TextField
                  value={bundle.title}
                  onChange={changeBundleTitle}
                  label="Bundle name"
                  requiredIndicator
                  autoComplete="off"
                  disabled={isSaving}
                />
              </Stack.Item>
              <Stack.Item>
                <TextField
                  label="Enter % discount"
                  type="number"
                  value={bundle.discountPercentage.toString()}
                  onChange={updateDiscountPercentage}
                  autoComplete="on"
                  requiredIndicator
                  disabled={isSaving}
                />
              </Stack.Item>
              <Stack.Item>
                <DropZone accept="image/*" type="image" onDrop={handleDrop} disabled={isSaving} allowMultiple={false}>
                  {uploadedfile}
                  {fileUpload}
                </DropZone>
              </Stack.Item>
            </Stack>
            <TextContainer>
              <p>Total bundle price</p>
              {formatPriceRange(minMaxPrice)}
            </TextContainer>
            <TextContainer spacing="tight">
              <p>Add products to your bundle</p>
            </TextContainer>
            {bundle.products.map((product, i) => (
              <AddProduct
                key={i}
                product={product}
                productOptions={productOptions}
                selectProduct={(productId: string) => changeProduct(productId, i)}
                selectQuantity={(quantity: string) => changeProductQuantity(parseInt(quantity), i)}
                deleteProduct={() => removeProduct(i)}
                changeVariants={(variant: ShopifyProductVariant, checked: boolean) => changeVariants(variant, checked, i)}
                isSaving={isSaving}
              />
            ))}
            <Stack>
              <Button onClick={addProduct} disabled={isSaving}>
                Add product
              </Button>
              <Button submit primary disabled={bundle.title === "" || bundle.products.length === 0 || isSaving}>
                Save bundle
              </Button>
              {isSaving && (
                <Stack>
                  <Spinner />
                  <p>Saving bundle</p>
                </Stack>
              )}
            </Stack>
          </FormLayout>
        </Form>
      </Card.Section>
    </Card>
  );
};

export default CreateBundle;
