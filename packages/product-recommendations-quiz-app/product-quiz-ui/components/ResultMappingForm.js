import { Button, Card, FormLayout, Layout, Select } from "@shopify/polaris";
import { useState } from "react";
import { api } from "./../api.js";
import _ from "lodash";

export const ResultMappingForm = ({ quizResult, quiz }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const questions = [];
  const questionOptions = quiz.questions.edges.forEach((q, i) => {
    questions.push(q.node);
  });

  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const handleChangeSelectedAnswer = (value) => {
    if (selectedAnswers.filter((a) => a != value && selectedAnswers.length <= questions.length)) {
      setSelectedAnswers([...selectedAnswers, value]);
      setSelectedAnswer(value);
    }
  };

  const handleSubmitMapping = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    Promise.all(
      selectedAnswers.map((answer) => {
        return api.answer.update(
          parseInt(answer),
          {
            answer: {
              result: {
                _link: quizResult.id,
              },
            },
          },
          {
            select: {
              id: true,
              text: true,
              question: {
                id: true,
                title: true,
              },
              result: {
                id: true,
                body: true,
                productSuggestion: {
                  id: true,
                  title: true,
                  product: {
                    title: true,
                  },
                },
              },
            },
          }
        );
      })
    )
      .then((result) => {
        console.log(`Update Answers result:`, result);
        setSelectedAnswers([]);
      })
      .catch((error) => {
        console.log(`Update Answers error:`, error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const deleteResult = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    api.result
      .delete(quizResult.id)
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const sortedQuestions = questions.sort((a, b) => a.sequence - b.sequence);
  return (
    <Card title={`Mapping for result ${quizResult.body}`}>
      <Layout.Section>
        <FormLayout>
          <FormLayout.Group>
            {sortedQuestions &&
              sortedQuestions.map((q) => {
                const _answers = [];
                q.answers.edges.forEach((a) => {
                  _answers.push({
                    label: a.node.text,
                    value: a.node.id,
                    sequence: a.node.sequence,
                    key: a.node.id,
                  });
                });
                _answers = _answers.sort(function (a, b) {
                  return a.sequence - b.sequence;
                });
                return (
                  <Layout.Section key={q.id}>
                    <Card title={q.title}>
                      <Layout.Section>
                        <Select
                          label={`Answer to map to result ` + quizResult.body}
                          placeholder="Answer"
                          options={_answers}
                          value={selectedAnswer}
                          onChange={handleChangeSelectedAnswer}
                          requiredIndicator
                        />
                      </Layout.Section>
                    </Card>
                  </Layout.Section>
                );
              })}
            <Card title={`Submit mapping?`}>
              <Layout.Section>
                <Button onClick={handleSubmitMapping} disabled={!quizResult || isSubmitting} loading={isSubmitting}>
                  Save mapping
                </Button>
              </Layout.Section>
            </Card>
            <Card title={`Delete result?`}>
              <Layout.Section>
                <Button onClick={deleteResult} disabled={!quizResult || isSubmitting} loading={isSubmitting}>
                  Delete
                </Button>
              </Layout.Section>
            </Card>
          </FormLayout.Group>
        </FormLayout>
      </Layout.Section>
    </Card>
  );
};
