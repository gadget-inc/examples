import { Card, FormLayout, Layout } from "@shopify/polaris";
import _ from "lodash";

export const MappedQuizResults = ({ mappedResults }) => {
  return (
    <Layout.Section>
      {mappedResults.map((r) => {
        return (
          <Card title={r.body} key={r.id}>
            <FormLayout>
              <FormLayout.Group>
                {r.answers.edges.map((a) => {
                  return (
                    <Card title={a.node.question.title} key={a.node.id}>
                      <Layout.Section>{a.node.text}</Layout.Section>
                      <br />
                    </Card>
                  );
                })}
              </FormLayout.Group>
            </FormLayout>
            <Layout.Section>
              {r.productSuggestion && <Card title={`Product Suggestion: ` + r.productSuggestion.title}></Card>}
            </Layout.Section>
          </Card>
        );
      })}
    </Layout.Section>
  );
};
