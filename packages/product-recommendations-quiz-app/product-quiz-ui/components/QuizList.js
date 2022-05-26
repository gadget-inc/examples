import { useFindMany } from "@gadgetinc/react";
import { Button, Card, Stack } from "@shopify/polaris";
import router from "next/router";
import { useState } from "react";
import { api } from "./../api.js";

export const QuizList = () => {
  const [{ data, fetching, error }, refresh] = useFindMany(api.quiz, {
    select: { id: true, title: true, body: true },
  });

  const [isDeleting, setIsDeleting] = useState([]);
  const [deleteErrorMessage, setDeleteErrorMessage] = useState([]);

  if (error) return <p>Error: {error.message}</p>;
  if (fetching && !data) return <p>Fetching quizzes...</p>;
  if (!data || !data.length)
    return (
      <Card
        subdued
        sectioned
        title="No quizzes created yet!"
        primaryAction={{
          content: "Add A Quiz",
          url: "/create",
        }}
      >
        <p>Create a quiz to see it listed here.</p>
      </Card>
    );
  return (
    <Stack vertical distribution="full">
      {data.map((quiz) => (
        <Stack key={quiz.id}>
          <Stack.Item fill>
            <p>{quiz.title || "Unnamed quiz"}</p>
            <p>{quiz.body || "No description set"}</p>
          </Stack.Item>
          <Stack.Item>
            <Button onClick={() => router.push(`/quiz/view/${quiz.id}`)}>View</Button>
          </Stack.Item>
          <Stack.Item>
            <Button
              destructive
              disabled={deleteErrorMessage.find((m) => m.id === quiz.id)}
              loading={isDeleting.includes(quiz.id)}
              onClick={() => {
                setIsDeleting([...isDeleting, quiz.id]);
                api.quiz
                  .delete(quiz.id)
                  .then(() => refresh())
                  .catch((error) => {
                    console.log("Error deleting quiz: ", error);
                    setDeleteErrorMessage([
                      ...deleteErrorMessage.filter((m) => m.id !== quiz.id),
                      {
                        id: quiz.id,
                        message: Object.keys(error) ? JSON.stringify(error) : error,
                      },
                    ]);
                  })
                  .finally(() => setIsDeleting(isDeleting.filter((d) => d !== quiz.id)));
              }}
            >
              Delete
            </Button>
          </Stack.Item>
        </Stack>
      ))}
    </Stack>
  );
};
