import { useFindOne } from "@gadgetinc/react";
import { Button, Card, Frame, Layout, Page, Stack } from "@shopify/polaris";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { api } from "./../../../api.js";

export default function Result() {
  const urlRouter = useRouter();

  console.log(urlRouter.query.id);
  const response = useFindOne(api.response, urlRouter.query.id, {
    select: {
      id: true,
      conversionState: true,
      result: {
        id: true,
        body: true,
        imageUrl: true,
        productSuggestion: {
          id: true,
          title: true,
          price: true,
          productImage: {
            source: true,
          },
          product: {
            id: true,
            title: true,
            handle: true,
            body: true,
            images: {
              edges: {
                node: {
                  source: true,
                },
              },
            },
          },
          shop: {
            domain: true,
          },
        },
      },
    },
  });

  if (response[0].data) {
    const result = response[0].data.result;
    const productSuggestion = result.productSuggestion;
    const productImageUrl = productSuggestion.product.images.edges[0].node.source;
    const productUrl = `https://` + productSuggestion.shop.domain + `/products/` + productSuggestion.product.handle;

    return (
      <>
        <Head>
          <title>{`Quiz result: ${result.body}`}</title>
        </Head>
        <>
          <Frame>
            <Page title={`Quiz result: ${result.body}`} divider>
              <Layout>
                <Layout.Section>
                  <Stack vertical>
                    <Stack.Item>
                      <Card title={`${productSuggestion.product.title} - ${productSuggestion.title}`}>
                        <Layout.Section>{result.imageUrl && <Image src={result.imageUrl} />}</Layout.Section>
                        <Layout.Section>
                          <Card title="About your result">
                            <Layout.Section>
                              {productImageUrl && <img src={productImageUrl} width="50%" height="50%" alt="Product image" />}
                              <br />
                              {productSuggestion.product.body}
                              <br />
                              {`Price: ${productSuggestion.price}`}
                              <br />
                              <Button primary external url={productUrl}>
                                Learn more!
                              </Button>
                            </Layout.Section>
                            <br />
                          </Card>
                        </Layout.Section>
                        <br />
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
  } else {
    return (
      <>
        <Head>
          <title>{`Loading result`}</title>
        </Head>
        <>
          <Frame>
            <Page title={`Loading result`} divider>
              <Layout>
                <Layout.Section></Layout.Section>
              </Layout>
            </Page>
          </Frame>
        </>
      </>
    );
  }
}
