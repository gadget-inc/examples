import { api } from "../../api";
import { useAction, useFindOne } from "@gadgetinc/react";
import { useParams } from "react-router-dom";

import { Layout, Card, Stack, Spinner, Banner } from "@shopify/polaris";
import { QuizForm, PageTemplate } from "../../components";
import { useCallback } from "react";
import { useNavigate } from "@shopify/app-bridge-react";
import { formatQuizQuestions } from "../../utils/saveToGadgetFormatting";

export default function QuizEditorPage() {
  // get quiz id from route
  const { id } = useParams();

  const navigate = useNavigate();

  const [updateQuizResponse, updateQuiz] = useAction(api.quiz.update);
  const [_deleteQuestionsResponse, deleteQuestions] = useAction(
    api.question.bulkDelete
  );
  const [_deleteAnswersResponse, deleteAnswers] = useAction(
    api.answer.bulkDelete
  );

  // get existing quiz info to be fed into form
  const [quizResponse] = useFindOne(api.quiz, id, {
    select: {
      title: true,
      body: true,
      questions: {
        edges: {
          node: {
            id: true,
            title: true,
            answers: {
              edges: {
                node: {
                  id: true,
                  text: true,
                  recommendedProduct: {
                    id: true,
                    image: {
                      byteSize: true,
                      url: true,
                    },
                    productSuggestion: {
                      id: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  const saveQuiz = useCallback(
    async (
      quizName,
      quizDescription,
      questionInput,
      deletedQuestionIds,
      deletedAnswerIds
    ) => {
      const questions = formatQuizQuestions(questionInput);

      const quiz = {
        title: quizName,
        body: quizDescription,
        questions,
      };

      // clean up deleted questions and answers
      if (deletedQuestionIds.length > 0) {
        await deleteQuestions({ ids: deletedQuestionIds });
      }
      if (deletedAnswerIds.length > 0) {
        await deleteAnswers({ ids: deletedAnswerIds });
      }

      // update the quiz definition
      await updateQuiz({ id, quiz });
    }
  );

  if (updateQuizResponse.fetching || updateQuizResponse.data) {
    if (updateQuizResponse.data) {
      navigate("/");
    }
    return (
      <PageTemplate>
        <Layout sectioned>
          <Layout.Section>
            <Card sectioned title="Edit quiz">
              <Stack alignment="center">
                <Spinner /> <span>Saving quiz...</span>
              </Stack>
            </Card>
          </Layout.Section>
        </Layout>
      </PageTemplate>
    );
  }

  if (quizResponse.fetching) {
    return (
      <Stack sectioned alignment="center">
        <Spinner /> <span>Loading quiz...</span>
      </Stack>
    );
  }

  let quiz = null;

  // format data to hydrate form with current state of quiz
  if (quizResponse.data) {
    const { data } = quizResponse;
    const questions = data.questions.edges.map((question) => ({
      id: question.node.id,
      question: question.node.title,
      answers: question.node.answers.edges.map((answer) => ({
        id: answer.node.id,
        answer: answer.node.text,
        recommendedProduct: {
          id: answer.node.recommendedProduct.id,
          productSuggestion:
            answer.node.recommendedProduct.productSuggestion.id,
          image: {
            file: answer.node.recommendedProduct.image,
          },
        },
      })),
    }));

    quiz = {
      name: data.title,
      description: data.body,
      questions,
    };
  }

  return (
    <PageTemplate>
      <Layout sectioned>
        <Layout.Section>
          {updateQuizResponse.error && (
            <Banner title="Error on quiz creation" status="critical">
              <p>{updateQuizResponse.error.message}</p>
            </Banner>
          )}
          <Card sectioned title="Edit quiz">
            <QuizForm quiz={quiz} onSave={saveQuiz} />
          </Card>
        </Layout.Section>
      </Layout>
    </PageTemplate>
  );
}
