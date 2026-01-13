import { Eye, Heart, ShoppingCart } from "lucide-react";
import ProductCard from "../../components/productCard/ProductCard";
import ProductCardHorizontal from "../../components/productCardHorizontal/productCardHorizontal";
import StarRating from "../../components/starRatingComponent/starRatingComponent";
import TitleComponent from "../../components/titleComponent/titleComponent";
import ProductCarousel from "../productCarousel/productCarousel";
import TabComponent from "../../components/tabComponent/tabComponent";
import ProductDetailCarousel from "../../components/productDetailCarousel/productDetailCarousel";

export default function ProductDetailSection({ product }) {
  return (
    <section className="container mx-auto">
      <div className="block md:grid grid-cols-2 mt-4 ">
        <ProductDetailCarousel product={product} />
        <div className="mx-4">
          <h4 className="text-deep-navy">{product.title}</h4>

          <div>
            <div className="p-2">
              <StarRating value={4.5} />
            </div>

            <h6 className="text-gray-medium p-2">{product.reviews} Reviews</h6>

            <div className="p-2">
              <h3>${product.price}</h3>
            </div>

            <h6>
              Availability :{" "}
              <span className="text-blue-primary">{product.availability}</span>
            </h6>

            <div className="py-2">
              <p className="text-text-gray">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>

            <div className="h-0.5 border text-gray my-2" />

            <div className="flex gap-3 my-2">
              {product.colors.map((item, idx) => (
                <button
                  key={idx}
                  className={`h-4 w-4 rounded-full ${item.colorClass} ring-1 ring-gray-300 hover:scale-110 transition`}
                />
              ))}
            </div>

            <div className="flex gap-4 my-4">
              <button
                type="submit"
                className="w-45 rounded bg-blue-primary text-white font-semibold text-lg transition hover:brightness-110 disabled:opacity-60"
              >
                Select Options
              </button>

              <div className="flex gap-4">
                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100 transition">
                  <Heart className="h-5 w-5 text-deep-navy" />
                </button>

                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100 transition">
                  <ShoppingCart className="h-5 w-5 text-deep-navy" />
                </button>

                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100 transition">
                  <Eye className="h-5 w-5 text-deep-navy" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <TabComponent product={product} />
      </div>
    </section>
  );
}
