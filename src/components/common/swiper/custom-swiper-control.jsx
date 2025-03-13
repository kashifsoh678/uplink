"use client";
import { useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DummyCard from "../cards/dummy-card";

const CustomSwiperControl = ({
  slides = [],
  slidesPerViewConfig = { 640: 1, 768: 2, 1024: 3, 1280: 4 },
  loop = true,
  effect = undefined,
  navigationButtonCustomClass, // for unique navigation
  autoplayControl = true,
  autoPlayDuration = 2500,
  showNavigation = false,
  showPagination = false,
  scrollbarDraggable = true,
  cardComponent: CardComponent = DummyCard,
  centeredSlides,
  customSwiperStyles = {},
  customSwiperSlideStyles = {},
  handleSlideOnClick = undefined,
  activeItem,
  onSlideChange = undefined,
  direction = "horizontal",
  spaceBetween = 20,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative mb-4">
      {showNavigation && (
        <>
          <div
            className={`swiper-button-prev-${navigationButtonCustomClass} absolute top-1/2 left-[-20px] transform -translate-y-1/2 z-10 cursor-pointer w-10 h-10 flex justify-center items-center rounded-full bg-white shadow-lg transition-all ease-in-out duration-300 hover:text-primary`}
          >
            <span className="text-xl select-none">❮</span>
          </div>

          <div
            className={`swiper-button-next-${navigationButtonCustomClass} absolute top-1/2 right-[-20px] transform -translate-y-1/2 z-10 cursor-pointer w-10 h-10 flex justify-center items-center rounded-full bg-white shadow-lg transition-all ease-in-out duration-300 hover:text-primary`}
          >
            <span className="text-xl select-none">❯</span>
          </div>
        </>
      )}

      <Swiper
        onSlideChange={onSlideChange}
        className="mySwiper"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        loop={loop}
        navigation={
          showNavigation
            ? {
                nextEl: `.swiper-button-next-${navigationButtonCustomClass}`,
                prevEl: `.swiper-button-prev-${navigationButtonCustomClass}`,
              }
            : false
        }
        direction={direction}
        centeredSlides={centeredSlides}
        spaceBetween={spaceBetween}
        scrollbar={{ draggable: scrollbarDraggable }}
        autoplay={
          autoplayControl
            ? {
                delay: autoPlayDuration,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        pagination={showPagination && { clickable: true, dynamicBullets: true }}
        style={{ ...customSwiperStyles }}
        breakpoints={Object.fromEntries(
          Object.entries(slidesPerViewConfig).map(
            ([breakpoint, slidesPerView]) => [breakpoint, { slidesPerView }]
          )
        )}
      >
        {slides?.map((slideData, index) => (
          <SwiperSlide
            key={index}
            style={{
              ...customSwiperSlideStyles,
            }}
          >
            <CardComponent
              data={slideData}
              onClick={handleSlideOnClick}
              isActive={activeItem === slideData?.id ?? 0}
              activeIndexId={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiperControl;
