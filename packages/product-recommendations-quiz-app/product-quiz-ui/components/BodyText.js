import { Card, Caption, Layout, TextField } from "@shopify/polaris";

export const BodyText = ({ body, handleChangeBody, disabled = false }) => {
  return (
    <Card sectioned title="Quiz Body">
      <Layout>
        <Layout.Section secondary>
          <Caption>Write a description for your quiz (optional).</Caption>
        </Layout.Section>
        <Layout.Section>
          <TextField value={body} onChange={handleChangeBody} disabled={disabled} placeholder="Quiz Body" type="text"></TextField>
        </Layout.Section>
      </Layout>
    </Card>
  );
};
