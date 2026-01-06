import ProductCard from "../../components/productCard/ProductCard";
import ProductCardHorizontal from "../../components/productCardHorizontal/productCardHorizontal";
import TitleComponent from "../../components/titleComponent/titleComponent";

export default function ProductBestsellersSection() {
  const products = [
    {
      id: 1,
      title: "Graphic Design",
      subtitle: "English Department",
      image: "/assets/product-image.png",
      price: "$6.48",
      oldPrice: "$16.48",
      size: "lg",
      colors: [
        "bg-blue-primary",
        "bg-dark-teal",
        "bg-medium-orange",
        "bg-deep-navy",
      ],
    },
    {
      id: 2,
      title: "Graphic Design",
      subtitle: "English Department",
      image: "/assets/product-image.png",
      price: "$6.48",
      oldPrice: "$16.48",
      size: "lg",
      colors: [
        "bg-blue-primary",
        "bg-dark-teal",
        "bg-medium-orange",
        "bg-deep-navy",
      ],
    },
    {
      id: 3,
      title: "Graphic Design",
      subtitle: "English Department",
      image: "/assets/product-image.png",
      price: "$6.48",
      oldPrice: "$16.48",
      size: "lg",
      colors: [
        "bg-blue-primary",
        "bg-dark-teal",
        "bg-medium-orange",
        "bg-deep-navy",
      ],
    },
    {
      id: 4,
      title: "Graphic Design",
      subtitle: "English Department",
      image: "/assets/product-image.png",
      price: "$6.48",
      oldPrice: "$16.48",
      size: "lg",
      colors: [
        "bg-blue-primary",
        "bg-dark-teal",
        "bg-medium-orange",
        "bg-deep-navy",
      ],
    },
    {
      id: 5,
      title: "Graphic Design",
      subtitle: "English Department",
      image: "/assets/product-image.png",
      price: "$6.48",
      oldPrice: "$16.48",
      size: "lg",
      colors: [
        "bg-blue-primary",
        "bg-dark-teal",
        "bg-medium-orange",
        "bg-deep-navy",
      ],
    },
    {
      id: 6,
      title: "Graphic Design",
      subtitle: "English Department",
      image: "/assets/product-image.png",
      price: "$6.48",
      oldPrice: "$16.48",
      size: "lg",
      colors: [
        "bg-blue-primary",
        "bg-dark-teal",
        "bg-medium-orange",
        "bg-deep-navy",
      ],
    },
    {
      id: 7,
      title: "Graphic Design",
      subtitle: "English Department",
      image: "/assets/product-image.png",
      price: "$6.48",
      oldPrice: "$16.48",
      size: "lg",
      colors: [
        "bg-blue-primary",
        "bg-dark-teal",
        "bg-medium-orange",
        "bg-deep-navy",
      ],
    },

    {
      id: 8,
      title: "Graphic Design",
      subtitle: "English Department",
      image: "/assets/product-image.png",
      price: "$6.48",
      oldPrice: "$16.48",
      size: "md",
      colors: [
        "bg-blue-primary",
        "bg-dark-teal",
        "bg-medium-orange",
        "bg-deep-navy",
      ],
    },
  ];

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
