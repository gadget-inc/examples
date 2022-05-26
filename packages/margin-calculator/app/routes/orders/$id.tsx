import { ShopifyDraftOrder } from "@gadget-client/margin-calculator-example";
import { Select } from "@gadgetinc/api-client-core";
import { useAction, useFindOne } from "@gadgetinc/react";
import { Button, Card, Form, FormLayout, IndexTable, Page, Popover, Spinner, Stack, TextField, TextStyle } from "@shopify/polaris";
import Dinero from "dinero.js";
import { useCallback, useState } from "react";
import { MetaFunction, useParams } from "remix";
import { api } from "~/api";

const parseShopifyMoney = (money: string) => {
  return Dinero({ amount: parseInt(money) * 100, currency: "USD" });
};

const margin = (price: Dinero.Dinero, cost: Dinero.Dinero) => {
  if (price.getAmount() === 0) {
    return -100;
  }

  if (cost.getAmount() === 0) {
    return 100;
  }

  return Math.round((price.subtract(cost).getAmount() / price.getAmount()) * 100);
};

const ShippingCostSetter = (props: { order: Select<ShopifyDraftOrder, { id: true; shippingCost: { amount: true; currency: true } }> }) => {
  const [popoverActive, setPopoverActive] = useState(false);
  const [shippingCost, setShippingCost] = useState(props.order.shippingCost ? String(props.order.shippingCost.amount / 100) : "");

  const togglePopoverActive = useCallback(() => setPopoverActive((popoverActive) => !popoverActive), []);

  const [{ data, fetching, error }, saveDraftOrder] = useAction(api.shopifyDraftOrder.update, {
    select: { id: true, shippingCost: { amount: true, currency: true } },
  });

  return (
    <Stack alignment="center">
      <span>{props.order.shippingCost ? Dinero(props.order.shippingCost as any).toFormat() : "N/A"}</span>
      <Popover
        active={popoverActive}
        activator={<Button onClick={togglePopoverActive}>Set</Button>}
        autofocusTarget="first-node"
        onClose={togglePopoverActive}
      >
        <div style={{ margin: "2em 2em 1em 2em" }}>
          <Form
            onSubmit={() => {
              saveDraftOrder({
                id: props.order.id,
                shopifyDraftOrder: {
                  shippingCost: String(parseFloat(shippingCost) * 100),
                },
              }).then(() => setPopoverActive(false));
            }}
          >
            <FormLayout>
              <TextField
                label="Shipping Cost"
                value={shippingCost}
                onChange={(value) => setShippingCost(value)}
                autoComplete="off"
                type="number"
                prefix="$"
              />
              <Stack>
                <Button submit disabled={fetching}>
                  Save
                </Button>
                {fetching && <Spinner accessibilityLabel="Spinner example" size="small" />}
              </Stack>
            </FormLayout>
          </Form>
        </div>
      </Popover>
    </Stack>
  );
};

function ShippingLine(props: {
  position: number;
  order: Select<
    ShopifyDraftOrder,
    {
      id: true;
      shippingCost: { amount: true; currency: true };
      shippingLine: true;
    }
  >;
}) {
  const price = props.order.shippingLine ? parseShopifyMoney(props.order.shippingLine.price) : Dinero({ amount: 0, currency: "USD" });

  const cost = props.order.shippingCost && Dinero(props.order.shippingCost as any);
  Dinero({ amount: 0, currency: "USD" });

  return (
    <IndexTable.Row id="shipping" key="shipping" position={props.position}>
      <IndexTable.Cell>Shipping</IndexTable.Cell>
      <IndexTable.Cell>&nbsp;</IndexTable.Cell>
      <IndexTable.Cell>
        <ShippingCostSetter order={props.order} />
      </IndexTable.Cell>
      <IndexTable.Cell>{price.toFormat()}</IndexTable.Cell>
      <IndexTable.Cell>{cost ? margin(price, cost) + "%" : "N/A"}</IndexTable.Cell>
    </IndexTable.Row>
  );
}

export const meta: MetaFunction = () => {
  return {
    title: "Margin Calculator",
  };
};

export default function Order() {
  const params = useParams();
  const [{ data, fetching, error }] = useFindOne(api.shopifyDraftOrder, params.id!, {
    requestPolicy: "cache-and-network",
    select: {
      id: true,
      name: true,
      shippingAddress: true,
      subtotalPrice: true,
      totalPrice: true,
      shippingLine: true,
      taxLines: true,
      shippingCost: {
        amount: true,
        currency: true,
      },
      lineItems: {
        edges: {
          node: {
            id: true,
            title: true,
            price: true,
            quantity: true,
            variant: {
              id: true,
              inventoryItem: {
                id: true,
                cost: true,
              },
            },
          },
        },
      },
    },
  });

  let shippingCost = Dinero({ amount: 0, currency: "USD" });
  let shippingPrice = Dinero({ amount: 0, currency: "USD" });
  let taxes = Dinero({ amount: 0, currency: "USD" });
  let beforeTaxCost = Dinero({ amount: 0, currency: "USD" });
  let beforeTaxPrice = Dinero({ amount: 0, currency: "USD" });
  let lineItemCosts: Dinero.Dinero[] = [];
  let lineItemPrices: Dinero.Dinero[] = [];

  if (data) {
    for (const [index, { node }] of data.lineItems.edges.entries()) {
      const price = parseShopifyMoney(node.price!).multiply(node.quantity!);
      const cost = node.variant?.inventoryItem && parseShopifyMoney(node.variant.inventoryItem.cost!).multiply(node.quantity!);

      lineItemPrices[index] = price;

      if (cost) {
        lineItemCosts[index] = cost;
        beforeTaxCost = beforeTaxCost.add(cost);
      }
    }

    if (data.shippingCost) {
      shippingCost = Dinero(data.shippingCost as any);
      beforeTaxCost = beforeTaxCost.add(shippingCost);
    }

    if (data.taxLines && (data.taxLines as any)[0]) {
      taxes = parseShopifyMoney((data.taxLines as any[])[0]);
    }

    if (data.shippingLine) {
      shippingPrice = parseShopifyMoney(data.shippingLine.price!);
    }

    beforeTaxPrice = parseShopifyMoney(data.subtotalPrice!).add(shippingPrice);
  }

  return (
    <Page title={`Margin Calculator - ${data ? data.name : "loading"}`} breadcrumbs={[{ content: "All Orders", url: "/" }]}>
      <Card sectioned>
        {fetching && <Spinner />}
        {error && <TextStyle variation="subdued">{error.message}</TextStyle>}
        {data && (
          <IndexTable
            itemCount={data.lineItems.edges.length + 2}
            headings={[{ title: "Name" }, { title: "Quantity" }, { title: "Total Cost" }, { title: "Total Price" }, { title: "Margin" }]}
            selectable={false}
          >
            {data.lineItems.edges.map(({ node }: any, index: number) => {
              const cost = lineItemCosts[index];
              const price = lineItemPrices[index];
              return (
                <IndexTable.Row id={node.id} key={node.id} position={index}>
                  <IndexTable.Cell>{node.title}</IndexTable.Cell>
                  <IndexTable.Cell>{node.quantity}</IndexTable.Cell>
                  <IndexTable.Cell>{cost?.toFormat() ?? "not set"}</IndexTable.Cell>
                  <IndexTable.Cell>{price.toFormat()}</IndexTable.Cell>
                  <IndexTable.Cell>{cost ? margin(price, cost) + "%" : ""}</IndexTable.Cell>
                </IndexTable.Row>
              );
            })}
            <ShippingLine order={data} position={data.lineItems.edges.length} />
            <IndexTable.Row id="subtotal" key="subtotal" position={data.lineItems.edges.length}>
              <IndexTable.Cell>
                <TextStyle variation="strong">Before Tax</TextStyle>
              </IndexTable.Cell>
              <IndexTable.Cell>&nbsp;</IndexTable.Cell>
              <IndexTable.Cell>
                <TextStyle variation="strong">{beforeTaxCost.toFormat()}</TextStyle>
              </IndexTable.Cell>
              <IndexTable.Cell>
                <TextStyle variation="strong">{beforeTaxPrice.toFormat()}</TextStyle>
              </IndexTable.Cell>
              <IndexTable.Cell>
                <TextStyle variation="strong">{margin(beforeTaxPrice, beforeTaxCost)}%</TextStyle>
              </IndexTable.Cell>
            </IndexTable.Row>
            <IndexTable.Row id="taxes" key="taxes" position={data.lineItems.edges.length}>
              <IndexTable.Cell>
                <TextStyle>Taxes</TextStyle>
              </IndexTable.Cell>
              <IndexTable.Cell>&nbsp;</IndexTable.Cell>
              <IndexTable.Cell></IndexTable.Cell>
              <IndexTable.Cell>{taxes.toFormat()}</IndexTable.Cell>
              <IndexTable.Cell></IndexTable.Cell>
            </IndexTable.Row>

            <IndexTable.Row id="total" key="total" position={data.lineItems.edges.length}>
              <IndexTable.Cell>
                <TextStyle>Total</TextStyle>
              </IndexTable.Cell>
              <IndexTable.Cell>&nbsp;</IndexTable.Cell>
              <IndexTable.Cell></IndexTable.Cell>
              <IndexTable.Cell>{data.totalPrice && parseShopifyMoney(data.totalPrice).toFormat()}</IndexTable.Cell>
              <IndexTable.Cell></IndexTable.Cell>
            </IndexTable.Row>
          </IndexTable>
        )}
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </Card>
    </Page>
  );
}
