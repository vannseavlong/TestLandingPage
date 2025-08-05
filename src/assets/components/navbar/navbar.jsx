import React from "react";
import Button from "../button/button.jsx";
import LanguageDropdown from "./LanguageDropdown.jsx";
import { useTranslation } from "../../utils/translationCompat.js";
import { handleSmartDownload } from "../../utils/smartDownload.js";
import "./navbar.css";

const Navbar = () => {
  const { getTranslation } = useTranslation();
  const navbarData = getTranslation('navbar');

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <img src="/logo.png" alt="bEasy Logo" className="logo-image" />
        </div>

        <ul>
          <li>
            <LanguageDropdown />
          </li>
          <li>
            <Button 
              text={navbarData?.downloadButton?.text || "Download App"} 
              onClick={handleSmartDownload}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
