import "./App.css";

import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import ProductHomepageSection from "./sections/productHomepageSection/productHomepageSection";
import ProductBestsellersSection from "./sections/productsBestsellersSection/productBestsellersSection";
import HeroSection from "./sections/heroSection/heroSection";
import ProductCarousel from "./sections/productCarousel/productCarousel";
import BuyNowSection from "./sections/buyNowSection/buyNowSection";
import PostCard from "./components/postCard/postCard";
import PostSection from "./sections/postSection/postSection";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <HeroSection />
      <ProductHomepageSection />
      <ProductBestsellersSection />
      <ProductCarousel />
      <BuyNowSection />
      <PostSection />
      <Footer />
    </>
  );
}

export default App;
