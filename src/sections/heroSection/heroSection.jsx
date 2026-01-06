import Carousel from "../../components/carousel/carousel";

export default function HeroSection() {
  const items = [
    {
      season: "SUMMER 2020",
      title: "NEW\nCOLLECTION",
      desc: "We know how large objects will act,\nbut things on a small scale.",
      button: "SHOP NOW",
      image: "/assets/hero-1.jpg",
      price: "",
    },
    {
      season: "WINTER 2020",
      title: "NEW\nARRIVALS",
      desc: "Discover the newest trends\ncrafted for everyday comfort.",
      button: "SHOP NOW",
      image: "/assets/hero-2.png",
      price: "",
    },
  ];

  return <Carousel slides={items}></Carousel>;
}
