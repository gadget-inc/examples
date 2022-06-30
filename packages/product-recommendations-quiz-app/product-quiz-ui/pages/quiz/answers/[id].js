import { useFindOne } from "@gadgetinc/react";
import { Button, Card, Layout, Stack } from "@shopify/polaris";
import { useRouter } from "next/router";
import { QuestionAnswerForm } from "../../../components/QuestionAnswerForm.js";
import { api } from "./../../../api.js";

export default function Answers() {
  const router = useRouter();

  const quizId = router.query.id;
  const [quiz, refresh] = useFindOne(api.quiz, quizId, {
    select: {
      id: true,
      title: true,
      body: true,
      questions: {
        edges: {
          node: {
            id: true,
            title: true,
            body: true,
            sequence: true,
            imageUrl: true,
            answers: {
              edges: {
                node: {
                  id: true,
                  text: true,
                },
              },
            },
          },
        },
      },
    },
  });

  const currentQuiz = quiz.data;
  if (currentQuiz) {
    const currentQuestions = currentQuiz.questions.edges;

    const quizTitle = currentQuiz.title;

    currentQuestions.sort((a, b) => a.node.sequence - b.node.sequence);

    return (
      <Layout>
        <Layout.Section>
          <Card title={`Add answers to questions for the ` + quizTitle + ` quiz.`}>
            {currentQuiz &&
              currentQuestions.map((q) => {
                return <QuestionAnswerForm key={q.node.id} question={q.node} refresh={refresh} />;
              })}
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card title={"Add results and map quiz"}>
            <Stack>
              <Button onClick={() => router.push(`/quiz/mapping/${currentQuiz.id}`)}>On to adding results!</Button>
            </Stack>
          </Card>
        </Layout.Section>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Layout.Section>
          <Card title="There was an issue fetching the current quiz." />
        </Layout.Section>
      </Layout>
    );
  }
}
