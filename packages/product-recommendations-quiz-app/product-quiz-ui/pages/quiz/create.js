import { useAction } from "@gadgetinc/react";
import {
  Banner,
  Button,
  Card,
  Form,
  Frame,
  Layout,
  Page,
  Stack,
  TextField,
  RadioButton,
  Caption,
} from "@shopify/polaris";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { api } from "./../../api.js"
import _ from "lodash";

export const CreateQuestions = ({ quiz }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [errors, setErrors] = useState(null);
  const [result, setResult] = useState(null);

  const addQuestion = useCallback(
    (question) => {
      setQuestions([...questions, question]);
    },
    [questions]
  );

  const updateQuestion = useCallback(
    (updatedQuestion) => {
      if (
        !(
          updatedQuestion.title &&
          updatedQuestion.sequence &&
          updatedQuestion._id
        )
      ) {
        return;
      }

      const QuestionToUpdate = questions.find(
        (question) => question._id === updatedQuestion._id
      );
      const oldQuestions = questions.filter(
        (f) => f._id !== updatedQuestion._id
      );
      if (QuestionToUpdate) setQuestions([...oldQuestions, updatedQuestion]);
    },
    [questions]
  );

  const removeQuestion = useCallback(
    (_id) => {
      if (questions.find((q) => q._id === _id))
        setQuestions(questions.filter((q) => q._id !== _id));
    },
    [questions]
  );

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
              <p>
                Questions cannot be created before the quiz has been created.
              </p>
            </Banner>
          </Layout.Section>
        )}

        <Layout.Section>
          {questions.map((question, i) => {
            return (
              <QuestionForm
                key={i}
                _id={question._id}
                updateQuestion={(_question) =>
                  updateQuestion({ ..._question, _id: _question._id })
                }
                question={question}
                removeQuestion={(id) => removeQuestion(id)}
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
            <Button
              submit
              disabled={!quiz || isSubmitting}
              primary
              loading={isSubmitting}
            >
              Save Questions
            </Button>
          </Form>
        </Layout.Section>
      </Card>
    </Layout.Section>
  );
};

export const QuestionForm = ({
  updateQuestion,
  question,
  removeQuestion,
  _id,
}) => {
  // Title
  const [title, setTitle] = useState(question.title);
  const handleChangeTitle = useCallback(
    (value) => {
      setTitle(value);
    },
    [setTitle]
  );

  // Body
  const [body, setBody] = useState(question.body);
  const handleChangeBody = useCallback(
    (value) => {
      setBody(value);
    },
    [setBody]
  );

  // Required?
  const [required, setRequired] = useState(question.required);
  const handleChangeRequired = useCallback(
    (value) => {
      setRequired(value);
    },
    [setRequired]
  );

  // Image URL
  const [imageUrl, setImageUrl] = useState(question.imageUrl);
  const handleChangeImageUrl = useCallback(
    (value) => {
      setImageUrl(value);
    },
    [setImageUrl]
  );

  // sequence
  const [sequence, setSequence] = useState(question.sequence);
  const handleChangeSequence = useCallback(
    (value) => {
      setSequence(value);
    },
    [setSequence]
  );

  useEffect(() => {
    updateQuestion({
      title: title,
      body: body,
      imageUrl: imageUrl,
      required: required,
      sequence: sequence,
      _id: _id,
    });
  }, [title, body, required, imageUrl, sequence, _id]);

  return (
    <Layout.Section>
      <Stack>
        <TextField
          label="Title"
          value={title}
          onChange={handleChangeTitle}
          type="text"
          requiredIndicator
          placeholder="Title"
        />
        <TextField
          label="Body text (optional)"
          value={body}
          onChange={handleChangeBody}
          type="text"
          placeholder="Body Text"
        />
        <TextField
          label="Image URL (optional)"
          value={imageUrl}
          onChange={handleChangeImageUrl}
          type="text"
          placeholder="Image Url"
        />
        <RadioButton
          value={required}
          onChange={handleChangeRequired}
          label="Required?"
        />
        <TextField
          requiredIndicator
          step={1}
          type="number"
          autoComplete="off"
          value={sequence}
          onChange={handleChangeSequence}
          label="Position in sequence of questions"
        />
      </Stack>
    </Layout.Section>
  );
};

export const QuizTitle = ({ title, handleChangeTitle, disabled = false }) => {
  return (
    <Card sectioned title="Quiz title">
      <Layout>
        <Layout.Section secondary>
          <Caption>Write a descriptive title for your quiz</Caption>
        </Layout.Section>
        <Layout.Section>
          <TextField
            value={title}
            onChange={handleChangeTitle}
            disabled={disabled}
            placeholder="Quiz title"
            // label="title"
            type="text"
            id="titleChangeField"
            //   autoComplete="title"
          ></TextField>
        </Layout.Section>
      </Layout>
    </Card>
  );
};

export const BodyText = ({ body, handleChangeBody, disabled = false }) => {
  return (
    <Card sectioned title="Quiz Body">
      <Layout>
        <Layout.Section secondary>
          <Caption>Write a description for your quiz (optional).</Caption>
        </Layout.Section>
        <Layout.Section>
          <TextField
            value={body}
            onChange={handleChangeBody}
            disabled={disabled}
            placeholder="Quiz Body"
            // label="title"
            type="text"
          ></TextField>
        </Layout.Section>
      </Layout>
    </Card>
  );
};

const Create = () => {
  const router = useRouter();

  const [_createQuizActionResult, createQuiz] = useAction(api.quiz.create, {
    select: { id: true, title: true, body: true },
  });

  const [createdQuiz, setCreatedQuiz] = useState(null);
  const [isSubmittingNewQuiz, setIsSubmittingNewQuiz] = useState(null);
  const [error, setError] = useState(null);

  const [title, setTitle] = useState();
  const handleChangeTitle = useCallback((value) => setTitle(value), []);

  const [body, setBody] = useState();
  const handleChangeBody = useCallback((value) => setBody(value), []);

  const handleSaveNewQuiz = async (event) => {
    event.preventDefault();
    setIsSubmittingNewQuiz(true);
    const _result = await createQuiz({
      quiz: {
        title,
        body,
      },
    });
    setIsSubmittingNewQuiz(false);
    console.log(`Create quiz result:`, _result);
    if (_result.data.createQuiz.quiz) {
      setCreatedQuiz(_result.data.createQuiz.quiz);
    } else if (_result.error || _result.data.createQuiz.errors) {
      setError(_result.error || _result.data.createQuiz.errors);
    }
  };

  return (
    <>
      <Head>
        <title>Product Recommendation Quiz Machine</title>
      </Head>
      <>
        <Frame>
          <Page
            title={`Product Recommendation Quiz Machine - Create a Quiz`}
            divider
          >
            <Layout>
              <Layout.Section>
                <Stack vertical>
                  <Stack.Item>
                    <p></p>
                  </Stack.Item>

                  <Stack.Item>
                    <Card sectioned title="Create New Quiz">
                      <Form onSubmit={handleSaveNewQuiz}>
                        <QuizTitle
                          title={title}
                          handleChangeTitle={handleChangeTitle}
                        />
                        <BodyText
                          body={body}
                          handleChangeBody={handleChangeBody}
                        />
                        <></>
                        <br />
                        <Button
                          primary
                          submit
                          disabled={isSubmittingNewQuiz || createdQuiz}
                          loading={isSubmittingNewQuiz}
                        >
                          {createdQuiz ? "✔️ Quiz created" : "Create Quiz"}
                        </Button>
                        {error && !createdQuiz && (
                          <Banner status="critical" title="Error creating Quiz">
                            {Object.keys(error) ? JSON.stringify(error) : error}
                          </Banner>
                        )}
                      </Form>
                    </Card>
                  </Stack.Item>
                </Stack>
              </Layout.Section>

              <CreateQuestions quiz={createdQuiz} />
              <Layout.Section>
                {createdQuiz && (
                  <Button
                    onClick={() =>
                      router.push(`/quiz/answers/quiz/${createdQuiz.id}`)
                    }
                  >
                    Add answers
                  </Button>
                )}
              </Layout.Section>
            </Layout>
          </Page>
        </Frame>
      </>
    </>
  );
};

export default Create;
