import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import homepageImage from "../images/homepage-carousel.png";
import "../css/main.css";

const Carousel = () => {
  const slides = [
    { id: 1, src: homepageImage, alt: "Homepage Image 1" },
    { id: 2, src: homepageImage, alt: "Homepage Image 2" },
    { id: 3, src: homepageImage, alt: "Homepage Image 3" },
    { id: 4, src: homepageImage, alt: "Homepage Image 4" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={false}
        pagination={false}
        autoplay={{ delay: 8000 }}
        className="rounded-2xl shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.src} alt={slide.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
