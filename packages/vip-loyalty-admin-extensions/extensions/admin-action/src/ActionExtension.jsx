import { useEffect, useState, useCallback } from "react";
import {
  reactExtension,
  useApi,
  AdminAction,
  BlockStack,
  Button,
  Text,
  Select,
  Divider,
} from "@shopify/ui-extensions-react/admin";
import { getVipPrograms, updateVipProgram, getCustomerQuery } from "./utils";

// The target used here must match the target used in the extension's toml file (./shopify.extension.toml)
const TARGET = "admin.customer-details.action.render";

export default reactExtension(TARGET, () => <App />);

function App() {
  // The useApi hook provides access to several useful APIs like i18n, close, and data.
  const { close, data } = useApi(TARGET);

  const [customerEmail, setCustomerEmail] = useState("");
  const [vipLevel, setVipLevel] = useState("");
  const [vipPrograms, setVipPrograms] = useState([]);

  // Use direct API calls to fetch data from Shopify.
  // See https://shopify.dev/docs/api/admin-graphql for more information about Shopify's GraphQL API
  useEffect(() => {
    (async function getCustomer() {
      // get and set vip programs for Select component
      const programs = await getVipPrograms();
      setVipPrograms(programs);
      setVipLevel(programs[0].value);

      fetch("https://admin-extension.gadget.app/my-route")

      const customerData = await getCustomerQuery(data.selected[0].id);
      setCustomerEmail(customerData.data.customer.email);
    })();
  }, [data]);

  const onSubmit = useCallback(async () => {
    // Commit changes to the database
    await updateVipProgram(data.selected[0].id, vipLevel);
    // Close the modal using the 'close' API
    close();
  }, [data, vipLevel, updateVipProgram]);

  return (
    // The AdminAction component provides an API for setting the title and actions of the Action extension wrapper.
    <AdminAction
      primaryAction={<Button onPress={onSubmit}>Save</Button>}
      secondaryAction={
        <Button
          onPress={() => {
            close();
          }}
        >
          Close
        </Button>
      }
    >
      <BlockStack gap>
        {/* Set the translation values for each supported language in the locales directory */}
        <Text>Current customer: {customerEmail}</Text>
        <Divider />
        {vipPrograms?.length > 0 && (
          <Select
            label="VIP level"
            value={vipLevel}
            onChange={setVipLevel}
            options={vipPrograms}
          />
        )}
      </BlockStack>
    </AdminAction>
  );
}