import { Button, Layout, Spinner, Stack, Banner } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { BillingCard } from "../components";

import { useAction, useFindFirst } from "@gadgetinc/react";
import { api } from "../api/gadget";
import { useCallback } from "react";
import { useNavigate } from "@shopify/app-bridge-react";
import { ExplanationCard } from "../components/ExplanationCard";

export default function SelectAPlan() {
  const navigate = useNavigate();

  // get the current shop
  // tenancy applied in Gadget for embedded apps
  // see Roles and Permissions page in Gadget
  const [shopResult] = useFindFirst(api.shopifyShop);
  const shopId = shopResult.data?.id;

  // give the merchant credit toward their app
  // NOTE: this should be admin-only, controlled by the app owner, not exposed to merchants!
  const [appCreditResponse, createAppCredit] = useAction(api.shopifyShop.credit);
  const appCredit = useCallback(async (amount) => {
    await createAppCredit({ id: shopId, amount });
  });

  // start a subscription
  const [createSubscriptionResponse, createSubscription] = useAction(api.shopifyShop.subscribe);
  const subscribe = useCallback(async (plan) => {
    await createSubscription({ id: shopId, plan });
  });

  // charge once for your app - no recurring subscription
  const [appChargeResponse, createAppCharge] = useAction(api.shopifyShop.install);
  const pay = useCallback(async () => {
    await createAppCharge({ id: shopId });
  });

  // start a free trial
  const [startTrialResponse, startTrial] = useAction(api.shopifyShop.startTrial);
  const trial = useCallback(async () => {
    await startTrial({ id: shopId });
  });

  if (shopResult.fetching) return <>Fetching shop</>;

  if (createSubscriptionResponse.fetching || appChargeResponse.fetching)
    return (
      <Stack sectioned alignment="center">
        <p>Creating charge in Shopify...</p>
        <Spinner />
      </Stack>
    );
  if (createSubscriptionResponse.error || appChargeResponse.error) {
    return (
      <p>
        Error creating charge!
        <br />
        <pre>
          <code>{JSON.stringify(error, null, 2)}</code>
        </pre>
      </p>
    );
  }

  // redirect to Shopify's payment confirmation page
  if (createSubscriptionResponse.data || appChargeResponse.data) {
    const data = createSubscriptionResponse.data || appChargeResponse.data;
    navigate(data.confirmationUrl);

    return (
      <Stack sectioned alignment="center">
        <p>Redirecting to confirm charge</p>
        <Spinner />
      </Stack>
    );
  }

  if (startTrialResponse.data) {
    navigate("/");
  }

  return (
    <>
      <TitleBar title="App Billing Examples - by Gadget" primaryAction={null} />
      <Layout>
        <Layout.Section fullWidth>
          <Button
            fullWidth
            primary
            onClick={() => trial()}
            disabled={shopResult.data.trialStartedAt || startTrialResponse.fetching || startTrialResponse.data}
          >
            START FREE TRIAL
          </Button>
        </Layout.Section>
        <Layout.Section oneThird>
          <BillingCard
            title="One-time payment"
            description="Click to make a one-time payment"
            onClick={() => {
              pay();
            }}
          />
        </Layout.Section>
        <Layout.Section oneThird>
          <BillingCard
            title="Recurring subscription"
            description="Click to start a new subscription plan"
            onClick={() => {
              subscribe("basic");
            }}
          />
        </Layout.Section>
        <Layout.Section oneThird>
          <BillingCard
            title="Send credit to merchant"
            description="Click to give a merchant credit towards your app"
            onClick={() => appCredit(10)}
          >
            <ExplanationCard
              title="You don't want to include this in your admin app!"
              description="This demonstrated what a credit flow looks like using Gadget. Hide app credit workflows from merchants so they cannot credit themselves!"
            />
          </BillingCard>
          <br />
          {appCreditResponse.fetching && <Banner title="Applying app credit..." />}
          {appCreditResponse.data && <Banner status="success" title="App credit applied!" />}
        </Layout.Section>
      </Layout>
    </>
  );
}
