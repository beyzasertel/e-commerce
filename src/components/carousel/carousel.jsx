import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

export default function Carousel({ slides = [] }) {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

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
                backgroundPosition: "right center",
              }}
            >
              <div className="relative mx-auto flex h-full w-full items-center px-4 md:px-0 md:pl-32">
                <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
                  <p className="text-sm font-semibold tracking-widest text-white/90">
                    {slide.season}
                  </p>

                  <h1 className="mt-4 whitespace-pre-line text-4xl font-extrabold leading-tight tracking-wide text-white md:text-7xl">
                    {slide.title}
                  </h1>

                  <p className="mt-6 max-w-xs whitespace-pre-line text-lg leading-relaxed text-white/90 md:mt-8 md:max-w-none md:text-xl">
                    {slide.desc}
                  </p>

                  <div className="flex items-center justify-around mt-10 gap-4">
                    <h3 className="text-white">{slide.price}</h3>
                    <button className="w-55 rounded-md bg-green-success! px-10 py-4 text-lg font-bold tracking-wide text-white shadow-sm transition hover:brightness-110 md:w-auto">
                      {slide.button}
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/90 transition hover:bg-white/15 hover:text-white md:left-6 md:p-3"
              >
                <ChevronLeft className="h-10 w-10 md:h-16 md:w-16" />
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/90 transition hover:bg-white/15 hover:text-white md:right-6 md:p-3"
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
