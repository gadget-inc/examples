import { Card, Layout, TextContainer, Heading, Button, Spinner, Stack } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { useFindFirst, useAction } from "@gadgetinc/react";
import { api } from "../api/gadget";
import { useCallback } from "react";

export default function HomePage() {
  const [shopResult] = useFindFirst(api.shopifyShop, {
    select: {
      id: true,
      trialStartedAt: true,
      plan: true,
    },
  });
  const shopId = shopResult.data?.id;
  // checks against "Basic charge" name given to single payment plan in Gadget
  const isTrial = shopResult.data?.trialStartedAt && !shopResult.data?.plan;
  const isSubscription = shopResult.data?.plan !== "Basic charge";

  // action for cancelling a subscription
  // sends request to Shopify from Gadget
  const [removeSubscriptionResponse, removeSubscription] = useAction(api.shopifyShop.unsubscribe);
  const unsubscribe = useCallback(async () => {
    await removeSubscription({ id: shopId });
  });

  // reset plan for a single charge
  // no subscription to unsubscribe from on Gadget
  const [resetSingleChargeResponse, resetSingleCharge] = useAction(api.shopifyShop.resetSingleCharge);
  const resetCharge = useCallback(async () => {
    await resetSingleCharge({ id: shopId });
  });

  const [endTrialResponse, endTrial] = useAction(api.shopifyShop.endTrial);
  const end = useCallback(async () => {
    await endTrial({ id: shopId });
  });

  const disableActions = removeSubscriptionResponse.fetching || endTrialResponse.fetching || resetSingleChargeResponse.fetching;

  return (
    <>
      <TitleBar title="App Billing Examples - by Gadget" primaryAction={null} />
      <Layout>
        <Layout.Section fullWidth>
          <Card sectioned>
            <Stack sectioned>
              <TextContainer>
                <Heading>You are now behind this app's paywall!</Heading>
                {!isTrial && (
                  <>
                    <p>A {isSubscription ? "subscription" : "single purchase"} has been made.</p>
                    <p>
                      You can choose to
                      <b>{isSubscription ? " Unsubscribe from " : " Cancel "}</b>
                      the current plan and clear any free trial data from the Gadget database to continue testing different payment flows.
                    </p>
                  </>
                )}
              </TextContainer>

              {!isTrial && (
                <Button primary onClick={() => (isSubscription ? unsubscribe() : resetCharge())} disabled={disableActions}>
                  {isSubscription ? "Unsubscribe" : "Cancel"}
                </Button>
              )}
              {(removeSubscriptionResponse.fetching || resetSingleChargeResponse.fetching) && <Spinner />}
            </Stack>
            <br />
            {isTrial && (
              <Stack sectioned>
                <TextContainer>
                  <p>
                    <b>You are on a free trial.</b>{" "}
                  </p>
                  <p>
                    You can simulate a trial period ending, locking you out of this page of the application and redirecting you back to the
                    plan selection page.
                  </p>
                </TextContainer>
                <Button onClick={() => end()} disabled={disableActions}>
                  End free trial
                </Button>
                {endTrialResponse.fetching && <Spinner />}
              </Stack>
            )}
          </Card>
        </Layout.Section>
      </Layout>
    </>
  );
}
