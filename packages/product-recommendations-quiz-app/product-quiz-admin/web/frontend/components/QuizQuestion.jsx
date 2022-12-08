import { TextField, Card, Button, Stack, Icon } from "@shopify/polaris";
import { CirclePlusMajor } from "@shopify/polaris-icons";
import { useCallback } from "react";
import { QuestionAnswer } from "./QuestionAnswer";

export function QuizQuestion({
  question,
  index,
  products,
  removeQuestion,
  updateQuestion,
  disableRemove,
  addAnswer,
  removeAnswer,
}) {
  const questionLabel = `Question ${index + 1}`;

  const updateQuestionText = useCallback((q) => {
    updateQuestion(index, { ...question, question: q });
  });

  const updateAnswer = useCallback((answerIndex, answer) => {
    const answers = [...question.answers];
    answers[answerIndex] = answer;
    updateQuestion(index, { ...question, answers });
  });

  return (
    <Card sectioned subdued>
      <Card.Section>
        <Stack sectioned alignment="trailing">
          <Stack.Item fill>
            <TextField
              requiredIndicator
              label={questionLabel}
              value={question.question}
              onChange={updateQuestionText}
            />
          </Stack.Item>
          <Stack.Item>
            <Button
              disabled={disableRemove}
              destructive
              onClick={() => removeQuestion(index, question.id)}
            >
              Remove
            </Button>
          </Stack.Item>
        </Stack>
      </Card.Section>
      <Card.Section>
        {question.answers.map((answer, i) => {
          return (
            <QuestionAnswer
              key={i}
              answer={answer}
              index={i}
              products={products}
              removeAnswer={(answerIndex) => removeAnswer(index, answerIndex, answer.id)}
              updateAnswer={(updated, answerIndex) =>
                updateAnswer(answerIndex, updated)
              }
              disableRemove={question.answers.length <= 1}
            />
          );
        })}
        <Button plain onClick={() => addAnswer(index)}>
          <Stack alignment="center">
            <Icon source={CirclePlusMajor} />
            <p>Add answer</p>
          </Stack>
        </Button>
      </Card.Section>
    </Card>
  );
}
