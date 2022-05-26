import { useAction } from "@gadgetinc/react";
import { Banner, Button, Card, Form, Frame, Layout, Page, Stack } from "@shopify/polaris";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { api } from "./../../api.js";
import { QuizTitle } from "../../components/QuizTitle.js";
import { BodyText } from "../../components/BodyText.js";
import { CreateQuestions } from "../../components/CreateQuestions.js";
import _ from "lodash";

export default function Create() {
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
          <Page title={`Product Recommendation Quiz Machine - Create a Quiz`} divider>
            <Layout>
              <Layout.Section>
                <Stack vertical>
                  <Stack.Item>
                    <p></p>
                  </Stack.Item>

                  <Stack.Item>
                    <Card sectioned title="Create New Quiz">
                      <Form onSubmit={handleSaveNewQuiz}>
                        <QuizTitle title={title} handleChangeTitle={handleChangeTitle} />
                        <BodyText body={body} handleChangeBody={handleChangeBody} />
                        <br />
                        <Button primary submit disabled={isSubmittingNewQuiz || createdQuiz} loading={isSubmittingNewQuiz}>
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
                {createdQuiz && <Button onClick={() => router.push(`/quiz/answers/${createdQuiz.id}`)}>Add answers</Button>}
              </Layout.Section>
            </Layout>
          </Page>
        </Frame>
      </>
    </>
  );
}
