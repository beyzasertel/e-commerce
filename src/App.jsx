import { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import HeroSection from "./components/heroSection/heroSection";
import ProductHomepageSection from "./sections/productHomepageSection/productHomepageSection";
import ProductBestsellersSection from "./sections/productsBestsellersSection/productBestsellersSection";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <HeroSection />

      <ProductHomepageSection />
      <ProductBestsellersSection />
    </>
  );
}

export default App;
