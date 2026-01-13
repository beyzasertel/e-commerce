import { ChevronDown, ChevronRightIcon, LayoutGrid, List } from "lucide-react";
import CategoryCard from "../../components/categoryCard.jsx/categorieCard";
import { Link } from "react-router-dom";
import ProductCardHorizontal from "../../components/productCardHorizontal/productCardHorizontal";
import { useState } from "react";
import { products } from "../../data/product";
import { categories } from "../../data/categories";

export default function ShoppingPage() {
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "list"
  const [sort, setSort] = useState("popularity"); // applied
  const [sortDraft, setSortDraft] = useState("popularity");

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "newest") return b.id - a.id;
    return 0;
  });

  return (
    <div className="bg-light-gray mt-12">
      <section className="container mx-auto py-8">
        <div className="flex items-center justify-between">
          <h3 className="text-deep-navy">Shop</h3>
          <div className="flex items-center">
            <Link to="/" className="text-deep-navy font-bold">
              Home
            </Link>
            <ChevronRightIcon color="#BDBDBD" />

            <Link to="/shop" className="text-gray">
              Shop
            </Link>
          </div>
        </div>
        <div className="flex md:flex-row gap-4 my-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </section>
      <section className="container mx-auto">
        <div className="mt-10">
          <div className="flex flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between">
            <p className="text-gray-medium font-semibold">
              Showing all
              <span className="font-bold text-deep-navy">
                {" "}
                {products.length}{" "}
              </span>
              results
            </p>

            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex items-center gap-3">
                <span className="text-gray-medium font-semibold">Views:</span>

                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`h-12 w-12 rounded-md border border-[#E6E6E6] grid place-items-center transition
            ${
              viewMode === "grid"
                ? "bg-[#F7F7F7]"
                : "bg-white hover:bg-[#F7F7F7]"
            }
          `}
                  aria-label="Grid view"
                >
                  <LayoutGrid className="h-5 w-5 text-deep-navy" />
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  className={`h-12 w-12 rounded-md border border-[#E6E6E6] grid place-items-center transition
            ${
              viewMode === "list"
                ? "bg-[#F7F7F7]"
                : "bg-white hover:bg-[#F7F7F7]"
            }
          `}
                  aria-label="List view"
                >
                  <List className="h-5 w-5 text-gray-medium" />
                </button>
              </div>

              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSortDraft(e.target.value)}
                  className="h-12 w-55 appearance-none rounded-md border border-[#E6E6E6] bg-white px-5 pr-10 text-gray-medium font-semibold outline-none"
                >
                  <option value="popularity">Popularity</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>

                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-medium" />
              </div>

              <button
                onClick={() => setSort(sortDraft)}
                type="button"
                className="h-12 rounded-md bg-blue-primary px-10 font-bold text-white transition hover:brightness-110"
              >
                Filter
              </button>
            </div>
          </div>
        </div>

        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              : "flex flex-col gap-6"
          }
        >
          {sortedProducts.map((product) => (
            <ProductCardHorizontal key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}
