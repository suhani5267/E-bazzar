import React, { useContext } from "react";
import Layout from "../../Component/layout/Layout";
import Hero from "../../Component/Hero/Hero";
import Filter from "../../Component/Filter/Filter";
import Product from "../../Component/product/Product";
import Track from "../../Component/Track/Track";
import Testinomial from "../../Component/Testinomail/Testinomial";

function Home() {
  return (
    <Layout>
      <Hero />
      <Filter />
      <Product />
      <Track />
      <Testinomial />
    </Layout>
  );
}

export default Home;
