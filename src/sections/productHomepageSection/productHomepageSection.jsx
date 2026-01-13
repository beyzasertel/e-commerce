import ProductCard from "../../components/productCard/ProductCard";
import TitleComponent from "../../components/titleComponent/titleComponent";

export default function ProductHomepageSection() {
  return (
    <div className="bg-light-gray">
      <TitleComponent
        title={"EDITOR’S PICK"}
        text={"Problems trying to resolve the conflict between "}
      />
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex-2">
            <ProductCard title="MEN" image="/assets/product.png" size="lg" />
          </div>

          <div className="flex-1">
            <ProductCard
              title="ACCESSORIES"
              image="/assets/product.png"
              size="lg"
            />
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <ProductCard
              title="ACCESSORIES"
              image="/assets/product.png"
              size="sm"
            />
            <ProductCard title="KIDS" image="/assets/product.png" size="sm" />
          </div>
        </div>
      </section>
    </div>
  );
}
