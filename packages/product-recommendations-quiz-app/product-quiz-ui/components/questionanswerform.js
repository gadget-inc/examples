import { useState } from "react";
import { Button, Card, Layout } from "@shopify/polaris";
import { AnswersList } from "./AnswersList.js";
import { api } from "./../api.js";
import _ from "lodash";

export const QuestionAnswerForm = ({ question, refresh }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [answers, setAnswers] = useState([]);

  const addAnswer = (answer) => {
    setAnswers([...answers, answer]);
  };

  const updateAnswer = (updatedAnswer) => {
    if (!(updatedAnswer.text && updatedAnswer.sequence && updatedAnswer._id)) {
      return;
    }

    const newAnswers = [];

    answers.forEach((answer) => {
      if (answer._id === updatedAnswer._id) {
        newAnswers.push(updatedAnswer);
      } else {
        newAnswers.push(answer);
      }
    });

    setAnswers(newAnswers);
  };

  const removeAnswer = (_id) => {
    setAnswers(answers.filter((a) => a._id !== _id));
  };

  const handleSubmitAnswers = () => {
    setIsSubmitting(true);
    Promise.all(
      answers.map((a) => {
        return api.answer.create(
          {
            answer: {
              text: a.text,
              sequence: parseInt(a.sequence),
              question: { _link: question.id },
            },
          },
          {
            select: {
              id: true,
              text: true,
              sequence: true,
              question: {
                id: true,
                title: true,
                body: true,
                sequence: true,
              },
            },
          }
        );
      })
    )
      .then((result) => {
        console.log(`Create Answers result:`, result);
        setAnswers([]);
        refresh();
      })
      .catch((error) => {
        console.log(`Create Answers error:`, error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Layout.Section>
      <Card title={`Question: ${question.title}`}>
        <AnswersList
          answers={answers}
          updateAnswer={(answer) => updateAnswer(answer)}
          removeAnswer={(id) => removeAnswer(id)}
          question={question}
        />
        <Button disabled={!question || isSubmitting} primary loading={isSubmitting} onClick={handleSubmitAnswers}>
          Save answers
        </Button>
        <Button
          disabled={!question || isSubmitting}
          onClick={(event) => {
            event.preventDefault();
            const _id = _.uniqueId();
            addAnswer({
              _id,
              text: "",
              sequence: 1,
              question,
            });
          }}
        >
          Add answer
        </Button>
      </Card>
    </Layout.Section>
  );
};
