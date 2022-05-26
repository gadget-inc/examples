import { Card, Frame, Layout, Page, Stack } from "@shopify/polaris";
import Head from "next/head";
import { QuizList } from "./../components/QuizList.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Product Recommendation Quiz Machine</title>
      </Head>
      <>
        <Frame>
          <Page title={`Product Recommendation Quiz Machine`} divider primaryAction={{ content: "Make a new quiz", url: "/quiz/create" }}>
            <Layout>
              <Layout.Section>
                <Stack vertical>
                  <Stack.Item>
                    <p>Listed below are the quizzes you have created so far.</p>
                  </Stack.Item>
                  <Stack.Item>
                    <Card>
                      <QuizList />
                    </Card>
                  </Stack.Item>
                </Stack>
              </Layout.Section>
            </Layout>
          </Page>
        </Frame>
      </>
    </>
  );
}
