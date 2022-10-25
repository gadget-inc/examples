import { ShopifyProductVariant, StoredFileInput } from "@gadget-client/bundle-tutorial";
import { useAction, useFindMany } from "@gadgetinc/react";
import { useNavigate } from "@shopify/app-bridge-react";
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
import { useCallback, useState } from "react";
import { api } from "../api/gadget";
import { AddProduct } from "../components/AddProduct";
import { Bundle } from "../types/Bundle";
import { calculateLinePrice, calculatePricing, formatPriceRange } from "../utils/bundlePricing";
import { updateBundleProducts } from "../utils/updateProductsData";

const MINIMUM_QUANTITY = 1;

export default function CreateBundle() {
  const navigate = useNavigate();

  // make request to Gadget app API for available products
  const [productResults] = useFindMany(api.shopifyProduct, {
    select: {
      id: true,
      title: true,
    },
  });
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

  // useAction hook to handle bundle creation request to Gadget
  const [bundleCreateData, createBundle] = useAction(api.bundle.create, {
    select: {
      id: true,
    },
  });

  const [file, setFile] = useState<File>();
  const handleDrop = useCallback((_droppedfile: File[], acceptedfile: File[]) => {
    setFile(acceptedfile[0]);
  }, []);

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
      const updatedProducts = bundle.products.map((product) => {
        const updatedVariants = product.variants.map((variant) => {
          if (variant.originalPrice) {
            variant.linePrice = calculateLinePrice(variant.originalPrice, discountPercentage);
          }
          return variant;
        });
        product.variants = updatedVariants;
        return product;
      });

      setBundle({ ...bundle, discountPercentage, products: updatedProducts });
    },
    [bundle]
  );

  /**
   * Product changes
   **/

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
  const handleSubmit = async () => {
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
      await createBundle({
        bundle: {
          title: bundle.title,
          image: image ? image : undefined,
          discount: bundle.discountPercentage,
          bundleElements: [
            {
              _converge: {
                values: bundle.products.flatMap((product) => {
                  return product.variants.map((variant) => ({
                    product: {
                      _link: product.id,
                    },
                    quantity: product.quantity,
                    productVariant: {
                      _link: variant.id,
                    },
                  }));
                }),
              },
            },
          ],
        },
      });
    } finally {
      // navigate back to home page
      navigate("/");
    }
  };

  // simplistic error and fetch handling
  if (productResults.error) return <>Error: {productResults.error.toString()}</>;
  if (bundleResults.error) return <>Error: {bundleResults.error.toString()}</>;
  if ((productResults.fetching && !productResults.data) || (bundleResults.fetching && !bundleResults.data)) return <Spinner />;
  if (!productResults.data) return <>No products found</>;
  if (!bundleResults.data) return <>No bundles found</>;
  // error handling for bundle create
  if (bundleCreateData.error) return <>Error creating bundle: {bundleCreateData.error.toString()}</>;

  // collect available product options
  const productOptions: SelectOption[] | undefined = productResults.data
    ?.map((product) => ({
      label: product.title as string,
      value: product.id,
    }))
    // remove bundles from available options
    .filter((product) => !bundleResults.data?.find((bundle) => bundle.trackerProductId === product.value));

  // on save action, disable form fields
  const isSaving = bundleCreateData.fetching;
  // calculate and display price range for bundle
  const minMaxPrice = calculatePricing(bundle.products);

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
}
