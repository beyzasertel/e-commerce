import { Link, useParams } from "react-router-dom";
import { products } from "../../data/product"; // path'ini kendi yapına göre düzelt
import ProductCarousel from "../../components/productDetailCarousel/productDetailCarousel";
import StarRating from "../../components/starRatingComponent/starRatingComponent";
import { useState } from "react";

import { Heart, ShoppingCart, Eye, ChevronRightIcon } from "lucide-react";
import TabComponent from "../../components/tabComponent/tabComponent";
import ProductBestsellersSection from "../../sections/productsBestsellersSection/productBestsellersSection";
import ProductDetailSection from "../../sections/productDetailSection/productDetailSection";
import LogoSection from "../../sections/logoSection/logoSection";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <h1 className="text-xl">Product not found</h1>;

  return (
    <>
      <section>
        <div className=" container mx-auto flex items-center my-4">
          <Link to="/" className="text-deep-navy font-bold">
            Home
          </Link>
          <ChevronRightIcon color="#BDBDBD" />

          <Link to="/shop" className="text-gray">
            Shop
          </Link>
        </div>

        <ProductDetailSection product={product} />
      </section>
      <div className="bg-light-gray">
        <ProductBestsellersSection />
      </div>
      <LogoSection />
    </>
  );
}
