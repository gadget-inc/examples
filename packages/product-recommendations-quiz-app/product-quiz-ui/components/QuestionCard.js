import { Button, Card, Layout, FormLayout } from "@shopify/polaris";
import { useState } from "react";
import _ from "lodash";

export const QuestionCard = ({ question, responseAnswers }) => {
  const [collapseCategory, setCollapseCategory] = useState(false);

  if (!collapseCategory) {
    return (
      <Card title={question.title}>
        <FormLayout.Group>
          {question &&
            question.answers.edges.map((a) => {
              return (
                <Card title={a.node.text} key={a.node.id}>
                  <Layout.Section>
                    <Button
                      primary
                      onClick={(event) => {
                        event.preventDefault();
                        responseAnswers.push(a);
                        setCollapseCategory(true);
                        return responseAnswers;
                      }}
                    >
                      Select
                    </Button>
                  </Layout.Section>
                </Card>
              );
            })}
        </FormLayout.Group>
      </Card>
    );
  } else {
    return (
      <Card title={question.title}>
        <Layout.Section>Answer selected.</Layout.Section>
      </Card>
    );
  }
};
