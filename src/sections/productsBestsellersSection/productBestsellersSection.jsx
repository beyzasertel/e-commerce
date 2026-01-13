import ProductCard from "../../components/productCard/ProductCard";
import ProductCardHorizontal from "../../components/productCardHorizontal/productCardHorizontal";
import TitleComponent from "../../components/titleComponent/titleComponent";

import { products } from "../../data/product";

export default function ProductBestsellersSection() {
  return (
    <div>
      <TitleComponent
        subtitle={"Featured Products"}
        title={"BESTSELLER PRODUCTS"}
        text={"Problems trying to resolve the conflict between "}
      />
      <section className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-18 ">
          {products.map((product) => (
            <ProductCardHorizontal key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}
