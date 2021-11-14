import { Center, Heading, Spinner, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useFindMany } from "@gadgetinc/react";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { api } from "../../Users/airhorns/Code/examples/related-products/lib/api";
import { ProductRow } from "../../Users/airhorns/Code/examples/related-products/lib/ProductRow";
import styles from "../../Users/airhorns/Code/examples/related-products/styles/Home.module.css";

const Home: NextPage = () => {
  const [{ error, fetching, data }, refresh] = useFindMany(api.shopifyProduct, {
    select: {
      id: true,
      title: true,
      productType: true,
      pairedProducts: {
        edges: {
          node: {
            id: true,
            title: true,
          },
        },
      },
    },
  });

  return (
    <>
      <Head>
        <title>Related Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading paddingBottom="5">Related Products</Heading>

        <Table>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Paired products</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {fetching && (
              <Tr>
                <Td colSpan={3}>
                  <Center>
                    <Spinner />
                  </Center>
                </Td>
              </Tr>
            )}
            {!error &&
              data?.map((product) => (
                <ProductRow
                  key={product.id}
                  product={product}
                  onChange={() => {
                    refresh();
                  }}
                />
              ))}
            {error && (
              <Tr>
                <Td colSpan={3}>{String(error)}</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
        <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}>
        <a href="https://gadget.dev" target="_blank" rel="noopener noreferrer">
          Powered by Gadget
        </a>
      </footer>
    </>
  );
};

export default Home;
