// import React from "react";
import { Layout } from "../Layout/Layout";
import { Hero } from "../Hero/Hero";
import { AccountProvider } from "../../Contexts/AccountContext";

export const Home = () => {
  return (
      <Layout>
        <Hero />
      </Layout>
  );
};
