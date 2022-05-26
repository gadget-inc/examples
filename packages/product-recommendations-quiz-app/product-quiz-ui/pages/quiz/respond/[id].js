import { useAction, useFindOne } from "@gadgetinc/react";
import { Button, Card, Frame, Layout, Page, Stack } from "@shopify/polaris";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { api } from "./../../../api.js";
import { QuestionCard } from "../../../components/QuestionCard.js";
import _ from "lodash";

export default function Respond() {
  const [result, setResult] = useState([]);
  const [errors, setErrors] = useState(null);
  const [responseAnswers, setResponseAnswers] = useState([]);

  const router = useRouter();

  const quiz = useFindOne(api.quiz, router.query.id, {
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
                  sequence: true,
                },
              },
            },
          },
        },
      },
      results: {
        edges: {
          node: {
            id: true,
            body: true,
            imageUrl: true,
            productSuggestion: {
              id: true,
              title: true,
            },
            answers: {
              edges: {
                node: {
                  id: true,
                  text: true,
                  sequence: true,
                  question: {
                    title: true,
                    sequence: true,
                  },
                },
              },
            },
          },
        },
      },
    },
  });
  const [_createResponseActionResult, createResponse] = useAction(api.response.create, {
    select: {
      id: true,
      conversionState: true,
      answers: { edges: { node: { id: true, result: { id: true } } } },
    },
  });

  const [createdResponse, setCreatedResponse] = useState(null);

  const currentQuiz = quiz[0].data;

  const handleStartResponse = async (event) => {
    event.preventDefault();

    const _result = await createResponse({
      response: {
        conversionState: "in progress",
      },
    });

    console.log(`Create response result:`, _result);
    if (_result.data.createResponse.response) {
      setCreatedResponse(_result.data.createResponse.response);
    } else if (_result.error || _result.data.createResponse.errors) {
      setErrors(_result.error || _result.data.createResponse.errors);
    }
  };

  const handleResponseSubmitted = (event) => {
    event.preventDefault();
    responseAnswers = [...new Set(responseAnswers)];
    Promise.all(
      responseAnswers.map((a) => {
        return api.answer
          .update(
            parseInt(a.node.id),
            {
              answer: {
                response: {
                  _link: createdResponse.id,
                },
              },
            },
            {
              select: {
                id: true,
                result: {
                  id: true,
                },
                response: {
                  id: true,
                  conversionState: true,
                  quiz: { id: true },
                },
              },
            }
          )
          .then((result) => {
            console.log(`Update Answers result:`, result);
            setResult(result);
          })
          .catch((error) => {
            console.log(`Update Answers error:`, error);
            setErrors(error);
          });
      })
    );
    updateResponse(createdResponse.id);
  };

  async function updateResponse(_responseId) {
    await api.response
      .update(
        parseInt(_responseId),
        {
          response: {
            quiz: {
              _link: currentQuiz.id,
            },
            conversionState: "quiz completed",
          },
        },
        {
          select: {
            id: true,
            quiz: { id: true, title: true },
            conversionState: true,
          },
        }
      )
      .then((result) => {
        console.log(`Updated Response: ` + result);
        setCreatedResponse(result);
        router.push(`/quiz/result/${_responseId}`);
      });
  }

  if (currentQuiz) {
    const questions = currentQuiz.questions.edges;

    return (
      <>
        <Head>
          <title>{currentQuiz.title}</title>
        </Head>
        <>
          <Frame>
            <Page title={currentQuiz.title}>
              <Layout>
                <Layout.Section>
                  <Stack vertical>
                    <Stack.Item>
                      <Card title={currentQuiz.title}>
                        <br />
                        <Layout.Section>{currentQuiz.body}</Layout.Section>
                        {!createdResponse && (
                          <Layout.Section>
                            <Button onClick={handleStartResponse} primary>
                              Start the quiz!
                            </Button>
                          </Layout.Section>
                        )}
                      </Card>
                    </Stack.Item>
                    {createdResponse &&
                      createdResponse.conversionState == "in progress" &&
                      questions.map((q) => {
                        return (
                          <QuestionCard key={q.node.id} question={q.node} response={createdResponse} responseAnswers={responseAnswers} />
                        );
                      })}
                    <Stack.Item>
                      {createdResponse && createdResponse.conversionState == "in progress" && (
                        <Card title={`Submit Quiz`}>
                          <Layout.Section>
                            <Button onClick={handleResponseSubmitted} primary>
                              Get my result!
                            </Button>
                          </Layout.Section>
                        </Card>
                      )}
                    </Stack.Item>
                  </Stack>
                </Layout.Section>
              </Layout>
            </Page>
          </Frame>
        </>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>{`Quiz loading`}</title>
        </Head>
        <>
          <Frame>
            <Page title={`Quiz loading...`}>
              <Layout></Layout>
            </Page>
          </Frame>
        </>
      </>
    );
  }
}
