import {
  reactExtension,
  useApi,
  AdminBlock,
  BlockStack,
  Text,
  Button,
  Icon,
  Box,
  InlineStack,
} from "@shopify/ui-extensions-react/admin";
import { getCustomerVipProgram, removeVipProgram } from "./utils";
import { useState, useEffect } from "react";

// The target used here must match the target used in the extension's toml file (./shopify.extension.toml)
const TARGET = "admin.customer-details.block.render";

export default reactExtension(TARGET, () => <App />);

function App() {
  const [vipProgram, setVipProgram] = useState(null);

  // The useApi hook provides access to several useful APIs like i18n and data.
  const {
    extension: { target },
    i18n,
    data,
  } = useApi(TARGET);

  const customerId = data.selected[0].id;

  useEffect(() => {
    (async function getTheVipProgram() {
      // Load the product's metafield of type issues
      const customerVipProgram = await getCustomerVipProgram(customerId);

      if (customerVipProgram?.data?.customer?.metafield?.value != "null") {
        setVipProgram(customerVipProgram.data.customer.metafield.value);
      }
    })();
  }, []);

  const handleDelete = async () => {
    await removeVipProgram(customerId);

    setVipProgram(null);
  };

  return (
    // The AdminBlock component provides an API for setting the title and summary of the Block extension wrapper.
    <AdminBlock summary={vipProgram}>
      <BlockStack>
        <Box>
          <InlineStack inlineSize="100%" inlineGap="large">
            <Text fontWeight="bold">
              {vipProgram
                ? `This customer is part of the ${vipProgram} VIP program.`
                : "Not a VIP customer"}
            </Text>
            {vipProgram && (
              <Button onPress={() => handleDelete()} variant="tertiary">
                <Icon name="DeleteMinor" />
              </Button>
            )}
          </InlineStack>
        </Box>
      </BlockStack>
    </AdminBlock>
  );
}