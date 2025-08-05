/**
 * Download handlers for App Store and Google Play Store
 * These functions handle direct downloads to specific app stores
 */

export const handleAppStoreClick = () => {
  console.log("App Store download clicked");
  // Navigate to the iOS App Store
  window.open("https://apps.apple.com/sg/app/beasy/id6745190697", "_blank");
};

export const handleGooglePlayClick = () => {
  console.log("Google Play download clicked");
  // Navigate to Google Play Store
  window.open(
    "https://play.google.com/store/apps/details?id=suntel.beasy.app&hl=en",
    "_blank"
  );
};
