import { Banner, Button, Card, Form, Layout } from "@shopify/polaris";
import React, { useState } from "react";
import { api } from "./../api.js";
import { QuestionForm } from "./QuestionForm.js";
import _ from "lodash";

export const CreateQuestions = ({ quiz }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [errors, setErrors] = useState(null);
  const [result, setResult] = useState(null);

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  const updateQuestion = (updatedQuestion) => {
    if (!(updatedQuestion.title && updatedQuestion.sequence && updatedQuestion._id)) {
      return;
    }

    const newQuestions = [];

    questions.forEach((q) => {
      if (q._id === updatedQuestion._id) {
        newQuestions.push(updatedQuestion);
      } else {
        newQuestions.push(q);
      }
    });

    setQuestions(newQuestions);
  };

  const handleSubmitQuestions = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    Promise.all(
      questions.map((q) => {
        return api.question.create(
          {
            question: {
              title: q.title,
              body: q.body,
              imageUrl: q.imageUrl,
              required: q.required,
              sequence: parseInt(q.sequence),
              quiz: { _link: quiz.id },
            },
          },
          {
            select: {
              id: true,
              title: true,
              body: true,
              required: true,
              imageUrl: true,
              sequence: true,
              quiz: {
                id: true,
              },
            },
          }
        );
      })
    )
      .then((result) => {
        console.log(`Create Questions result:`, result);
        setResult(result);
      })
      .catch((error) => {
        console.log(`Create Questions error:`, error);
        setErrors(error);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <Layout.Section>
      <Card sectioned title="Set question">
        {!quiz && (
          <Layout.Section fullWidth>
            <Banner status="warning" title="Quiz not saved.">
              <p>Questions cannot be created before the quiz has been created.</p>
            </Banner>
          </Layout.Section>
        )}

        <Layout.Section>
          {questions.map((question) => {
            return (
              <QuestionForm
                key={question._id}
                _id={question._id}
                updateQuestion={(_question) => updateQuestion(_question)}
                question={question}
              />
            );
          })}
        </Layout.Section>
        <Layout.Section fullWidth>
          <Button
            disabled={!quiz || isSubmitting}
            onClick={(event) => {
              const _id = _.uniqueId();
              event.preventDefault();
              addQuestion({
                _id,
                title: "",
                body: "",
                required: false,
                imageUrl: "",
                sequence: 1,
              });
            }}
          >
            Add question
          </Button>
        </Layout.Section>
        <Layout.Section>
          {errors && (
            <Layout.Section fullWidth>
              <Banner status="critical" title="Error submitting Questions.">
                <p>{Object.keys(errors) ? JSON.stringify(errors) : errors}</p>
              </Banner>
            </Layout.Section>
          )}
        </Layout.Section>
        <Layout.Section>
          <Form onSubmit={handleSubmitQuestions}>
            <Button submit disabled={!quiz || isSubmitting} primary loading={isSubmitting}>
              Save Questions
            </Button>
          </Form>
        </Layout.Section>
      </Card>
    </Layout.Section>
  );
};
