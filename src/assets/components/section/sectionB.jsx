// ...existing code...
import React, { useEffect } from "react";
import Button from "../button/button.jsx";
import { useTranslation } from "../../utils/translationCompat.js";
import { MousePointerClick } from 'lucide-react';
import "./global.css";
import "./sectionB.css";

const SectionB = ({ id }) => {
  const { getTranslation, currentLanguageCode } = useTranslation();
  const sectionBData = getTranslation('sectionB');

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

  // Get services data with fallback
  const services = sectionBData?.services || [];

  // ...existing code...

  return (
    <section className="section-b" id={id}>
      {/* Header */}
      <div className="section-b__header animate-on-scroll animate-up" lang={currentLanguageCode}>
        <p className="section-b__subtitle" lang={currentLanguageCode}>{sectionBData?.header?.subtitle || "OUR SERVICES"}</p>
        <h2 className="section-b__title" lang={currentLanguageCode}>{sectionBData?.header?.title || "What We Offer"}</h2>
      </div>

      {/* Service 1 - Image Left, Text Right */}
      <div className="section-b__service animate-on-scroll">
        <div className="section-b__service-content reverse">
          <div className="section-b__service-text animate-on-scroll animate-up" lang={currentLanguageCode}>
            <h3 lang={currentLanguageCode}>{services[0]?.title || "General Cleaning"}</h3>
            <p lang={currentLanguageCode}>
              {services[0]?.description || "Come home to a fresh environment with bEasy's reliable and professional home cleaning service."}
            </p>
            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-start' }}>
              <Button
                text={services[0]?.buttonText || 'Start Booking'}
                onClick={() => {
                  const url = services[0]?.buttonUrl || '';
                  if (url) window.open(url, '_blank', 'noopener,noreferrer');
                }}
                lang={currentLanguageCode}
              />
            </div>
          </div>
          <div className="section-b__service-image animate-on-scroll animate-up">
            <img
              src={services[0]?.image || '/Gen_clean.png'}
              alt={services[0]?.alt || services[0]?.title || 'General Cleaning'}
              className="service-image"
            />
          </div>
        </div>
      </div>

      {/* Service 2 - Image Right, Text Left */}
      <div className="section-b__service animate-on-scroll">
        <div className="section-b__service-content">
          <div className="section-b__service-text animate-on-scroll animate-up" lang={currentLanguageCode}>
            <h3 lang={currentLanguageCode}>{services[1]?.title || "Deep Cleaning"}</h3>
            <p lang={currentLanguageCode}>
              {services[1]?.description || "Get a complete fresh start with our deep cleaning service."}
            </p>
            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-start' }}>
              <Button
                text={services[1]?.buttonText || 'Start Booking'}
                onClick={() => {
                  const url = services[1]?.buttonUrl || '';
                  if (url) window.open(url, '_blank', 'noopener,noreferrer');
                }}
                lang={currentLanguageCode}
              />
            </div>
          </div>
          <div className="section-b__service-image animate-on-scroll animate-up">
            <img
              src={services[1]?.image || '/Deep_clean.png'}
              alt={services[1]?.alt || services[1]?.title || 'Deep Cleaning Service'}
              className="service-image"
            />
          </div>
        </div>
      </div>

      {/* Service 3 - Image Left, Text Right */}
      <div className="section-b__service animate-on-scroll">
        <div className="section-b__service-content reverse">
          <div className="section-b__service-text animate-on-scroll animate-up" lang={currentLanguageCode}>
            <h3 lang={currentLanguageCode}>{services[2]?.title || "Upholstery"}</h3>
            <p lang={currentLanguageCode}>
              {services[2]?.description || "Revive and renew your furnitures with bEasy's precision upholstery cleaning."}
            </p>
            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-start' }}>
              <Button
                text={services[2]?.buttonText || 'Start Booking'}
                onClick={() => {
                  const url = services[2]?.buttonUrl || '';
                  if (url) window.open(url, '_blank', 'noopener,noreferrer');
                }}
                lang={currentLanguageCode}
              />
            </div>
          </div>
          <div className="section-b__service-image animate-on-scroll animate-up">
            <img
              src={services[2]?.image || '/Sofa_Carpet.png'}
              alt={services[2]?.alt || services[2]?.title || 'Upholstery Cleaning'}
              className="service-image"
            />
          </div>
        </div>
      </div>

      {/* Service 4 - Image Right, Text Left */}
      <div className="section-b__service animate-on-scroll">
        <div className="section-b__service-content">
          <div className="section-b__service-text animate-on-scroll animate-up" lang={currentLanguageCode}>
            <h3 lang={currentLanguageCode}>{services[3]?.title || "Office Cleaning"}</h3>
            <p lang={currentLanguageCode}>
              {services[3]?.description || "Lighten up your office environment with our Office Cleaning service."}
            </p>
            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-start' }}>
              <Button
                text={services[3]?.buttonText || 'Start Booking'}
                onClick={() => {
                  const url = services[3]?.buttonUrl || '';
                  if (url) window.open(url, '_blank', 'noopener,noreferrer');
                }}
                lang={currentLanguageCode}
              />
            </div>
          </div>
          <div className="section-b__service-image animate-on-scroll animate-up">
            <img
              src={services[3]?.image || '/Office_clean.png'}
              alt={services[3]?.alt || services[3]?.title || 'Office Cleaning'}
              className="service-image"
            />
          </div>
        </div>
      </div>

      {/* Service 5 - Image Left, Text Right */}
      <div className="section-b__service animate-on-scroll">
        <div className="section-b__service-content reverse">
          <div className="section-b__service-text animate-on-scroll animate-up" lang={currentLanguageCode}>
            <h3 lang={currentLanguageCode}>{services[4]?.title || "Pest Control"}</h3>
            <p lang={currentLanguageCode}>
              {services[4]?.description || "Say goodbye to mosquitoes and other insects with our powerful spray and fogging solutions."}
            </p>
            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-start' }}>
              <Button
                text={services[4]?.buttonText || 'Start Booking'}
                onClick={() => {
                  const url = services[4]?.buttonUrl || '';
                  if (url) window.open(url, '_blank', 'noopener,noreferrer');
                }}
                lang={currentLanguageCode}
              />
            </div>
          </div>
          <div className="section-b__service-image animate-on-scroll animate-up">
            <img
              src={services[4]?.image || '/Pest_ctr.png'}
              alt={services[4]?.alt || services[4]?.title || 'Pest Control'}
              className="service-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionB;
