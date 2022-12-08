import { api } from "../api";
import { useAction } from "@gadgetinc/react";

import { Layout, Card, Stack, Spinner, Banner } from "@shopify/polaris";
import { QuizForm, PageTemplate } from "../components";
import { useCallback } from "react";
import { useNavigate } from "@shopify/app-bridge-react";
import { formatQuizQuestions } from "../utils/saveToGadgetFormatting";

export default function CreateNewQuizPage() {
  const navigate = useNavigate();

  const [createQuizResponse, createQuiz] = useAction(api.quiz.create);

  const saveQuiz = useCallback(
    async (quizName, quizDescription, questionInput) => {
      const questions = await formatQuizQuestions(questionInput);

      const quiz = {
        title: quizName,
        body: quizDescription,
        questions,
      };

      await createQuiz({ quiz });
    }
  );

  if (createQuizResponse.fetching || createQuizResponse.data) {
    if (createQuizResponse.data) {
      navigate("/");
    }

    return (
      <PageTemplate>
        <Layout sectioned>
          <Layout.Section>
            <Card sectioned title="Create a new quiz">
              <Stack alignment="center">
                <Spinner /> <span>Saving quiz...</span>
              </Stack>
            </Card>
          </Layout.Section>
        </Layout>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate>
      <Layout sectioned>
        <Layout.Section>
          {createQuizResponse.error && (
            <Banner title="Error on quiz creation" status="critical">
              <p>{createQuizResponse.error.message}</p>
            </Banner>
          )}
          <Card sectioned title="Create a new quiz">
            <QuizForm onSave={saveQuiz} />
          </Card>
        </Layout.Section>
      </Layout>
    </PageTemplate>
  );
}
