import { useFindOne } from "@gadgetinc/react";
import { Button, Card, Layout, Stack } from "@shopify/polaris";
import { useRouter } from "next/router";
import { api } from "./../../../api.js";
import { CreateResultMappings } from "../../../components/CreateResultMappings.js";
import { MappedQuizResults } from "../../../components/MappedQuizResults.js";
import { CreateResults } from "../../../components/CreateResults.js";
import _ from "lodash";

export default function Mapping() {
  const router = useRouter();

  console.log(router.query.id);
  const quiz = useFindOne(api.quiz, parseInt(router.query.id), {
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

  // Products
  const products = [];
  const fetchedProducts = api.shopifyProduct
    .findMany({
      first: 250,
      search: "bundle",
      select: {
        id: true,
        title: true,
        variants: {
          edges: {
            node: {
              id: true,
              title: true,
              price: true,
              results: {
                edges: {
                  node: {
                    id: true,
                  },
                },
              },
            },
          },
        },
      },
    })
    .then((result) => {
      result.flatMap((p) => {
        products.push(p);
      });
    });

  let currentQuiz = quiz[0].data;

  if (currentQuiz) {
    const quizTitle = currentQuiz.title;
    const currentResults = [];

    if (currentQuiz.results.edges.length > 0) {
      currentQuiz.results.edges.flatMap((r) => {
        currentResults.push(r.node);
      });
      currentResults.sort((a, b) => a.id - b.id);
    }

    let mappedResults = currentResults.filter((r) => {
      return r.answers.edges.length != 0;
    });

    return (
      <Layout>
        <Layout.Section>
          <Card title={`Create results for the ${quizTitle} quiz.`}></Card>
          <CreateResults quiz={currentQuiz} products={products} />
        </Layout.Section>
        <Layout.Section>
          {currentResults && (
            <Card title={`Map answers to results for the ${quizTitle} quiz.`}>
              <CreateResultMappings currentResults={currentResults} currentQuiz={currentQuiz} />
            </Card>
          )}
        </Layout.Section>
        <Layout.Section>
          {mappedResults && (
            <Card title={`Currently mapped results`}>
              <MappedQuizResults mappedResults={mappedResults} />
            </Card>
          )}
        </Layout.Section>
        <Layout.Section>
          {currentResults && (
            <Card title={`View completed quiz`}>
              <Layout.Section>
                <Stack>
                  <Button onClick={() => router.push(`/quiz/view/${currentQuiz.id}`)}>View quiz</Button>
                </Stack>
              </Layout.Section>
            </Card>
          )}
        </Layout.Section>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Layout.Section>
          <Card title={`There was an issue fetching the current quiz.`}></Card>
        </Layout.Section>
      </Layout>
    );
  }
}
