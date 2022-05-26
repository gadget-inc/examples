import { Card, Caption, Layout, TextField } from "@shopify/polaris";

export const QuizTitle = ({ title, handleChangeTitle, disabled = false }) => {
  return (
    <Card sectioned title="Quiz title">
      <Layout>
        <Layout.Section secondary>
          <Caption>Write a descriptive title for your quiz</Caption>
        </Layout.Section>
        <Layout.Section>
          <TextField
            value={title}
            onChange={handleChangeTitle}
            disabled={disabled}
            placeholder="Quiz title"
            type="text"
            id="titleChangeField"
          ></TextField>
        </Layout.Section>
      </Layout>
    </Card>
  );
};
