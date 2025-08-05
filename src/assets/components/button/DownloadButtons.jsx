import React from 'react';
import './button.css';
import { isSupported, getAnalytics, logEvent } from 'firebase/analytics';
import { app } from '../../../firebase-config'; // Make sure this is correct

const AppStoreButton = ({ onClick, className = '', subtitle, title, ...props }) => {
  return (
    <button 
      className={`download-button app-store-button ${className}`}
      onClick={onClick}
      {...props}
    >
      <div className="download-button__icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 21.99C7.78997 22.03 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="download-button__content">
        <span className="download-button__subtitle">{subtitle || "Download on the"}</span>
        <span className="download-button__title">{title || "App Store"}</span>
      </div>
    </button>
  );
};

const GooglePlayButton = ({ onClick, className = '', subtitle, title, ...props }) => {
  return (
    <button 
      className={`download-button google-play-button ${className}`}
      onClick={onClick}
      {...props}
    >
        
      <div className="download-button__icon">
        <img 
          src="/googlePlay.png" 
          alt="Google Play" 
          className="download-button__icon-img"
        />
      </div>
      <div className="download-button__content">
        <span className="download-button__subtitle">{subtitle || "GET IT ON"}</span>
        <span className="download-button__title">{title || "Google Play"}</span>
      </div>
    </button>

    
  );
};

// DownloadButtons Wrapper Component
const DownloadButtons = ({
  onAppStoreClick,
  onGooglePlayClick,
  className = '',
  appStoreText = {},
  googlePlayText = {},
}) => {

  const handleDownloadClick = async (platform) => {
    try {
      const isAnalyticsSupported = await isSupported();
      if (!isAnalyticsSupported) {
        console.warn('Firebase Analytics not supported in this environment.');
        return;
      }

      const analytics = getAnalytics(app);

      // Use platform-specific event names
      const eventName = platform === 'iOS'
        ? 'appstore_button_click'
        : platform === 'Android'
        ? 'googleplay_button_click'
        : 'download_button_click';

      logEvent(analytics, eventName);
    } catch (error) {
      console.error('Error logging download event:', error);
    }
  };

  return (
    <div className={`download-buttons-container ${className}`}>
      <AppStoreButton
        onClick={() => {
          handleDownloadClick('iOS'); // ✅ fixed to match logic
          if (typeof onAppStoreClick === 'function') onAppStoreClick();
        }}
        subtitle={appStoreText?.subtitle}
        title={appStoreText?.title}
      />
      <GooglePlayButton
        onClick={() => {
          handleDownloadClick('Android'); // ✅ fixed to match logic
          if (typeof onGooglePlayClick === 'function') onGooglePlayClick();
        }}
        subtitle={googlePlayText?.subtitle}
        title={googlePlayText?.title}
      />
    </div>
  );
};

export { AppStoreButton, GooglePlayButton };
export default DownloadButtons;
