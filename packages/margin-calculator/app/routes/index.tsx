import { Card, IndexTable, Page, TextStyle } from "@shopify/polaris";
import { Link, LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { api } from "~/api";

export const loader: LoaderFunction = async ({ params }) => {
  const draftOrders = await api.shopifyDraftOrder.findMany({
    select: {
      id: true,
      name: true,
      shippingAddress: true,
      totalPrice: true,
    },
  });

  return draftOrders;
};

export const meta: MetaFunction = () => {
  return {
    title: "Margin Calculator",
  };
};

export default function Index() {
  const data = useLoaderData();

  return (
    <Page title="Margin Calculator">
      <Card sectioned>
        <IndexTable
          resourceName={{ singular: "Draft Order", plural: "Draft Orders" }}
          itemCount={data.length}
          headings={[
            { title: "Name" },
            { title: "Customer Name" },
            { title: "Shipping Address" },
            { title: "Total Price" },
            { title: "Margin" },
          ]}
          selectable={false}
        >
          {data.map((row: any, index: number) => (
            <IndexTable.Row id={row.id} key={row.id} position={index}>
              <IndexTable.Cell>
                <Link to={`/orders/${row.id}`}>
                  <TextStyle variation="strong">{row.name}</TextStyle>
                </Link>
              </IndexTable.Cell>
              <IndexTable.Cell>{row.totalPrice}</IndexTable.Cell>
              <IndexTable.Cell>{row.shippingAddress?.name}</IndexTable.Cell>
              <IndexTable.Cell>
                {row.shippingAddress && (
                  <>
                    {row.shippingAddress.address1}, {row.shippingAddress.city}
                  </>
                )}
              </IndexTable.Cell>
              <IndexTable.Cell></IndexTable.Cell>
            </IndexTable.Row>
          ))}
        </IndexTable>
      </Card>
    </Page>
  );
}
