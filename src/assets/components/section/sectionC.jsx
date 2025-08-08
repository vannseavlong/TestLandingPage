import React, { useEffect } from "react";
import DownloadButtons from "../button/DownloadButtons.jsx";
import { useTranslation } from "../../utils/translationCompat.js";
import { handleAppStoreClick, handleGooglePlayClick } from "../../utils/downloadHandlers.js";
import "./global.css";
import "./sectionC.css";

const SectionC = ({ id }) => {
  const { getTranslation } = useTranslation();
  const sectionCData = getTranslation('sectionC');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in-view");
        } else {
          entry.target.classList.remove("animate-in-view");
        }
      });
    }, observerOptions);

    const animatableElements = document.querySelectorAll(".animate-on-scroll");
    animatableElements.forEach((el) => observer.observe(el));

    return () => {
      animatableElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="section-c" id={id}>
      <div className="section-c__content">
        <div className="section-c__image animate-on-scroll animate-right-to-left">
          <img
            src="/image.webp"
            alt="bEasy App Download"
            className="download-mockup-image"
          />
        </div>
        
        <div className="section-c__text animate-on-scroll animate-left-to-right">
          <h2>{sectionCData?.header?.title || "Download bEasy App"}</h2>
          <p>
            {sectionCData?.header?.description || "bEasy is your all-in-one solution for booking trusted services in just 30 seconds. Whether you need a spotless home, help with a big move, professional pest control, clean the office, as well as sofa and carpet, bEasy connects you to reliable, vetted professionals — anytime, anywhere."}
          </p>

          <div className="section-c__buttons">
            <DownloadButtons
              onAppStoreClick={handleAppStoreClick}
              onGooglePlayClick={handleGooglePlayClick}
              appStoreText={sectionCData?.downloadButtons?.appStore}
              googlePlayText={sectionCData?.downloadButtons?.googlePlay}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionC;
