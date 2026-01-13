import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductDetailCarousel({ product }) {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full bg-white p-2 md:p-0">
      <Swiper
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => setActive(s.realIndex)}
        slidesPerView={1}
        loop
        speed={700}
      >
        <SwiperSlide>
          <div className="mx-auto flex h-130 max-w-6xl items-center justify-center bg-white">
            <img src={product.image} alt="" className="h-full w-full" />
          </div>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-3 text-white transition hover:bg-black/10"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-3 text-white transition hover:bg-black/10"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className="flex gap-4">
              <button>
                <img src={product.image} className="object-contain h-12" />
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div>
        <h4></h4>
      </div>
    </section>
  );
}
