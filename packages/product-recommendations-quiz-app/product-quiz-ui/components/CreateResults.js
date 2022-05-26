import { Banner, Button, Card, Layout } from "@shopify/polaris";
import { useState } from "react";
import { api } from "./../api.js";
import { QuizResultsForm } from "./QuizResultsForm";

export const CreateResults = ({ quiz, products }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quizResults, setQuizResults] = useState([]);
  const [errors, setErrors] = useState(null);
  const [result, setResult] = useState(null);

  const addQuizResult = (question) => {
    setQuizResults([...quizResults, question]);
  };

  const updateQuizResult = (updatedQuizResult) => {
    if (!(updatedQuizResult.body && updatedQuizResult.quiz && updatedQuizResult._id)) {
      return;
    }

    const newQuizResults = [];

    quizResults.forEach((q) => {
      if (q._id === updatedQuizResult._id) {
        newQuizResults.push(updatedQuizResult);
      } else {
        newQuizResults.push(q);
      }
    });
    setQuizResults(newQuizResults);
  };

  const handleSubmitQuizResults = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    Promise.all(
      quizResults.map((r) => {
        return api.result.create(
          {
            result: {
              body: r.body,
              imageUrl: r.imageUrl,
              productSuggestion: {
                _link: r.productSuggestion,
              },
              quiz: { _link: quiz.id },
            },
          },
          {
            select: {
              id: true,
              body: true,
              imageUrl: true,
              quiz: {
                id: true,
              },
              productSuggestion: {
                id: true,
                title: true,
              },
            },
          }
        );
      })
    )
      .then((result) => {
        console.log(`Create QuizResults result:`, result);
        setResult(result);
      })
      .catch((error) => {
        console.log(`Create QuizResults error:`, error);
        setErrors(error);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <Layout.Section>
      <Card sectioned title="Create Results">
        {!quiz && (
          <Layout.Section fullWidth>
            <Banner status="warning" title="Quiz not saved.">
              <p>Results cannot be created before the quiz has been created.</p>
            </Banner>
          </Layout.Section>
        )}

        <Layout.Section>
          {quizResults.map((result, i) => {
            return (
              <QuizResultsForm
                key={result._id}
                _id={result._id}
                result={result}
                updateQuizResult={(_result) => updateQuizResult(_result)}
                quiz={quiz}
                products={products}
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
              addQuizResult({
                _id,
                body: "",
                imageUrl: "",
                productSuggestion: "",
                quiz,
              });
            }}
          >
            Add result
          </Button>
        </Layout.Section>
        <Layout.Section>
          {errors && (
            <Layout.Section fullWidth>
              <Banner status="critical" title="Error submitting results.">
                <p>{Object.keys(errors) ? JSON.stringify(errors) : errors}</p>
              </Banner>
            </Layout.Section>
          )}
        </Layout.Section>
        <Layout.Section>
          <Button onClick={handleSubmitQuizResults} disabled={!quiz || isSubmitting} primary loading={isSubmitting}>
            Save Results
          </Button>
        </Layout.Section>
      </Card>
    </Layout.Section>
  );
};
