import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  const slides = [
    {
      season: "SUMMER 2020",
      title: "NEW\nCOLLECTION",
      desc: "We know how large objects will act,\nbut things on a small scale.",
      cta: "SHOP NOW",
      image: "/assets/hero-1.jpg",
    },
    {
      season: "WINTER 2020",
      title: "NEW\nARRIVALS",
      desc: "Discover the newest trends\ncrafted for everyday comfort.",
      cta: "SHOP NOW",
      image: "/assets/hero-2.png",
    },
  ];

  return (
    <section className="relative h-screen w-full">
      <Swiper
        modules={[Autoplay]}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => setActive(s.realIndex)}
        slidesPerView={1}
        loop
        speed={700}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        className="h-full w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative h-screen w-full overflow-hidden"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                // ✅ mobilde model sağda kalsın
                backgroundPosition: "right center",
              }}
            >
              <div className="absolute inset-0 bg-black/0 md:bg-black/0" />

              <div className="relative mx-auto flex h-full w-full items-center px-4 md:px-0 md:pl-32">
                <div
                  className="
                    w-full
                    md:w-1/2
                    text-center md:text-left
                    flex flex-col items-center md:items-start
                  "
                >
                  <p className="text-sm font-semibold tracking-widest text-white/90">
                    {slide.season}
                  </p>

                  <h1 className="mt-4 whitespace-pre-line text-4xl font-extrabold leading-tight tracking-wide text-white md:text-7xl">
                    {slide.title}
                  </h1>

                  <p className="mt-6 max-w-xs whitespace-pre-line text-lg leading-relaxed text-white/90 md:mt-8 md:max-w-none md:text-xl">
                    {slide.desc}
                  </p>

                  <button className="mt-10 w-[220px] rounded-md bg-green-success! px-10 py-4 text-lg font-bold tracking-wide text-white shadow-sm transition hover:brightness-110 md:w-auto">
                    {slide.cta}
                  </button>
                </div>
              </div>

              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/90 transition hover:bg-white/15 hover:text-white md:left-6 md:p-3"
                aria-label="Previous"
              >
                <ChevronLeft className="h-10 w-10 md:h-16 md:w-16" />
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/90 transition hover:bg-white/15 hover:text-white md:right-6 md:p-3"
                aria-label="Next"
              >
                <ChevronRight className="h-10 w-10 md:h-16 md:w-16" />
              </button>

              <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => swiperRef.current?.slideToLoop(i)}
                      className={`h-2 rounded-full transition-all ${
                        active === i ? "w-16 bg-white" : "w-10 bg-white/50"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
