import React from "react";
import Hero from "../components/Hero/Hero";
import TopSerach from "../components/Banners/TopSerach";
import PracticeBanner from "../components/Banners/PracticeBanner";
import FAQ from "../components/FAQ/FAQ";

const Home = () => {
  return (
    <>
      <Hero />
      <TopSerach />
      <PracticeBanner />
      <FAQ />
    </>
  );
};

export default Home;
