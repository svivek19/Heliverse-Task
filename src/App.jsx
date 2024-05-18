import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Ratings from "./components/Ratings";
import PurchaseSection from "./components/PurchaseSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <Ratings />
      <PurchaseSection />
    </>
  );
};

export default App;
