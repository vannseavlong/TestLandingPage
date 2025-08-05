import React from "react";
import { useTranslation } from "../../utils/translationCompat.js";
import "./footer.css";

const Footer = ({ id }) => {
  const { getTranslation } = useTranslation();
  const footerData = getTranslation('footer');

  return (
    <footer className="footer" id={id}>
      <div className="container">
        <div className="footer__content">
          {/* Logo */}
          <div className="footer__logo">
            <img src="/logo.png" alt="bEasy Logo" className="logo-image" />
          </div>

          {/* Address */}
          <div className="footer__address">
            <p className="footer__address-line">
              {footerData?.companyInfo?.address || "#FO-2312-13-14, Floor 23th, Flatiron Building, Street 102, Phnom Penh City Center, Phum 1, Sangkat Srah Chak, Khan Daun Penh, Phnom Penh, Cambodia."}
            </p>
          </div>

          {/* Copyright */}
          <div className="footer__copyright">
            <p className="footer__copyright-text">
              ©Copyright 2025 Suntel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
