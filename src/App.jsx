import "./App.css";

import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import ProductHomepageSection from "./sections/productHomepageSection/productHomepageSection";
import ProductBestsellersSection from "./sections/productsBestsellersSection/productBestsellersSection";
import HeroSection from "./sections/heroSection/heroSection";
import ProductCarousel from "./sections/productCarousel/productCarousel";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <HeroSection />
      <ProductHomepageSection />
      <ProductBestsellersSection />
      <ProductCarousel />
    </>
  );
}

export default App;
