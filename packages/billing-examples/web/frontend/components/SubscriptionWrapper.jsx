import { Page, Spinner, Banner, Stack, Link } from "@shopify/polaris";
import { useFindFirst } from "@gadgetinc/react";
import { api } from "../api/gadget";
import SelectAPlan from "../pages/select-a-plan";
import { useNavigate } from "@shopify/app-bridge-react";

const TRIAL_LENGTH = 1;

export const SubscriptionWrapper = (props) => {
  const navigate = useNavigate();

  const [{ fetching, data: currentShop }] = useFindFirst(api.shopifyShop);
  // if we're loading the current shop data, show a spinner
  if (fetching) {
    return (
      <Page>
        <Stack sectioned alignment="center">
          <p>Loading...</p>
          <Spinner />
        </Stack>
      </Page>
    );
  }

  // if the shop has selected a plan, render the app and don't bug the merchant about plans
  if (currentShop.plan) return <Page>{props.children}</Page>;

  const daysUntilTrialOver = currentShop.trialStartedAt
    ? TRIAL_LENGTH - Math.floor((new Date().getTime() - currentShop.trialStartedAt.getTime()) / (1000 * 3600 * 24))
    : -1;
  if (daysUntilTrialOver > 0) {
    // the merchant is on a free trial, show the app and a banner encouraging them to select a plan
    return (
      <Page>
        <Banner>
          You have {daysUntilTrialOver} day(s) left on your free trial. Please{" "}
          <Link onClick={() => navigate("/select-a-plan")}>select a plan</Link> to keep using this great app!
        </Banner>
        <br />
        {props.children}
      </Page>
    );
  } else {
    // the merchant's trial has expired, show them the plan selection interface, don't show them the app
    return (
      <Page>
        <Banner>
          {daysUntilTrialOver !== -1 && "Your trial has expired. "}
          Please select a plan to use the application.
        </Banner>
        <br />
        <SelectAPlan />
      </Page>
    );
  }
};
