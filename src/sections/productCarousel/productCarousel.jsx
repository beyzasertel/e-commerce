import Carousel from "../../components/carousel/carousel";

export default function ProductCarousel() {
  const slides = [
    {
      season: "SUMMER 2020",
      title: "Vita Classic \nProduct",
      desc: "We know how large objects will act,\nbut things on a small scale.",
      button: "SHOP NOW",
      price: "$16.48",
      image: "/assets/slide-1.png",
    },
    {
      season: "WINTER 2020",
      title: "Vita Classic \nProduct",
      desc: "Discover the newest trends\ncrafted for everyday comfort.",
      button: "SHOP NOW",
      price: "$16.48",
      image: "/assets/slide-1.png",
    },
  ];

  return <Carousel slides={slides}></Carousel>;
}
