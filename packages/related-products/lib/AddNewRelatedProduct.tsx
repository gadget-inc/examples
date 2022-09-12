import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useFindMany } from "@gadgetinc/react";
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import { useMemo, useState } from "react";
import { api } from "../lib/api";

interface PickerItem {
  label: string;
  value: string;
}

const productToSelectableItem = (product: { id: string; title: string | null }) => ({ value: product.id, label: product.title ?? "" });

export const AddNewPairedProduct = (props: {
  product: { id: string; pairedProducts: { edges: { node: { id: string; title: string | null } }[] } };
  onChange?: () => void;
}) => {
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<Error | null>(null);
  const [selectedItems, setSelectedItems] = useState<PickerItem[]>(
    props.product.pairedProducts.edges.map((edge) => productToSelectableItem(edge.node))
  );

  const handleSelectedItemsChange = (selectedItems?: PickerItem[]) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };

  // get all the available options for products
  const [{ error, fetching, data }] = useFindMany(api.shopifyProduct, {
    select: {
      id: true,
      title: true,
    },
  });

  // prepare to add new related items
  const items = useMemo(() => {
    return data?.map(productToSelectableItem) ?? [];
  }, [data]);

  return (
    <Popover>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
            <Button>Add new</Button>
          </PopoverTrigger>
          <PopoverContent width="600px">
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Add Related Products</PopoverHeader>
            <PopoverBody>
              <Box padding="3">
                <CUIAutoComplete
                  label="Choose paired products"
                  placeholder="Type a product"
                  disableCreateItem
                  items={items}
                  selectedItems={selectedItems}
                  onSelectedItemsChange={(changes) => handleSelectedItemsChange(changes.selectedItems)}
                />
                {saveError && (
                  <Box padding="2">
                    <Alert status="error">
                      <AlertIcon />
                      {saveError.message}
                    </Alert>
                  </Box>
                )}
                <Center>
                  <Button
                    isLoading={saving}
                    onClick={async () => {
                      setSaving(true);
                      setSaveError(null);

                      try {
                        await Promise.all(
                          selectedItems.map(async (item) => {
                            await api.productPairing.create({
                              productPairing: {
                                productA: { _link: item.value },
                                productB: { _link: props.product.id },
                              },
                            });
                          })
                        );
                        props.onChange?.();
                        onClose();
                      } catch (error) {
                        setSaveError(error as Error);
                      } finally {
                        setSaving(false);
                      }
                    }}
                  >
                    Save
                  </Button>
                </Center>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
};
