import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Ratings from "./components/Ratings";
import PurchaseSection from "./components/PurchaseSection";
import SectionAndPage from "./components/SectionAndPage";
import SupportedPage from "./components/SupportedPage";
import Features from "./components/Features";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <Ratings />
      <PurchaseSection />
      <SectionAndPage />
      <SupportedPage />
      <Features />
    </>
  );
};

export default App;
