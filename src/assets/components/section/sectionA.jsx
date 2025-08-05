import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useLanguage } from '../../../contexts/LanguageContext';

const SectionA = () => {
  const swiperRef = useRef(null);
  const { getTranslation } = useLanguage();
  const sectionAData = getTranslation('sectionA');

  const banners = sectionAData?.heroBanners || [];

  if (!banners.length) {
    return null; // Or a loading/fallback if you'd like
  }

  return (
    <section style={{ width: '100%', margin: 0, padding: 0 }}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop={true}
        style={{
          width: '100%',
          aspectRatio: '16 / 9',
        }}
      >
        {banners.map((banner, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={banner.image}
              alt={banner.alt || `Slide ${idx + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SectionA;
