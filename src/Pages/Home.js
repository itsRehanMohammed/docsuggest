import React from "react";
import Hero from "../components/Hero/Hero";
import TopSerach from "../components/Banners/TopSerach";
import PracticeBanner from "../components/Banners/PracticeBanner";
import FAQ from "../components/FAQ/FAQ";

const Home = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  console.log(apiKey);
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
