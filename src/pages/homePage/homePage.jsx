import ProductHomepageSection from "../../sections/productHomepageSection/productHomepageSection";
import ProductBestsellersSection from "../../sections/productsBestsellersSection/productBestsellersSection";
import HeroSection from "../../sections/heroSection/heroSection";
import BuyNowSection from "../../sections/buyNowSection/buyNowSection";
import PostSection from "../../sections/postSection/postSection";
import ShoppingPage from "../../pages/shoppingPage/shoppingPage";
import ProductCarousel from "../../sections/productCarousel/productCarousel";

function Homepage() {
  return (
    <>
      <HeroSection />
      <ProductHomepageSection />
      <ProductBestsellersSection />
      <ProductCarousel />
      <BuyNowSection />
      <PostSection />
    </>
  );
}

export default Homepage;
