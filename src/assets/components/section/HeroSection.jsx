import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLanguage } from "../../../contexts/LanguageContext";
import { handleAppStoreClick, handleGooglePlayClick } from "../../utils/downloadHandlers.js";
import "./HeroSection.css";
import DownloadButtons from "../button/DownloadButtons";

const HeroSection = ({ id }) => {
  const { getTranslation } = useLanguage();
  const sectionAData = getTranslation("sectionA");
  // Get slides from translation JSON (hero + promotions)
  const slides = [
    sectionAData?.hero,
    ...(sectionAData?.promotions || []),
  ].filter(Boolean);
  const sectionCData = getTranslation("sectionC");

  return (
    <section className="hero-section no-gap" id={id}>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop={slides.length > 1}
        className="hero-swiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="hero-slide">
            <div className="hero-banner-wrapper">
              <img
                src={slide?.image || "/image.png"}
                alt={slide?.title || "Banner"}
                className="hero-banner-img"
                draggable={false}
              />
              {/* Text overlay positioned over the image */}
              <div className="hero-text-overlay">
                <p className="hero-download-text">
                  {slide?.DownloadText || "Download App Now"}
                </p>
                <DownloadButtons
                  onAppStoreClick={handleAppStoreClick}
                  onGooglePlayClick={handleGooglePlayClick}
                  appStoreText={sectionCData?.downloadButtons?.appStore}
                  googlePlayText={sectionCData?.downloadButtons?.googlePlay}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
