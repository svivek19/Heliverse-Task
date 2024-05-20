import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Ratings from "./components/Ratings";
import PurchaseSection from "./components/PurchaseSection";
import SectionAndPage from "./components/SectionAndPage";
import SupportedPage from "./components/SupportedPage";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { particles } from "./components/animation/CustomCursor";

const isMediumScreenOrLarger = () => {
  return window.matchMedia("(min-width: 768px)").matches;
};

const App = () => {
  useEffect(() => {
    if (isMediumScreenOrLarger()) {
      particles();
    }
  }, []);

  return (
    <>
      <canvas></canvas>
      <main>
        <Navbar />
        <Header />
        <Hero />
        <Ratings />
        <PurchaseSection />
        <SectionAndPage />
        <SupportedPage />
        <Features />
        <Footer />
      </main>
    </>
  );
};

export default App;
