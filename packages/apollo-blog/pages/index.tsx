import { Footer } from "chakra-theme/Footer";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { PostsList } from "../lib/PostsList";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gadget Blog Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PostsList />

      <Footer folder="simple-blog" />
    </>
  );
};

export default Home;
