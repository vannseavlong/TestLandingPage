import { analytics } from '../../firebase-config'; 
import { logEvent } from 'firebase/analytics';

export const handleSmartDownload = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isIOS = /iphone|ipad|ipod/.test(userAgent);
  const isAndroid = /android/.test(userAgent);
  const isMac = /macintosh|mac os x/.test(userAgent);
  const isWindows = /windows/.test(userAgent);
  const isMobile = isIOS || isAndroid;

  // Determine OS string more clearly
  let os = 'Other';
  if (isIOS) os = 'iOS';
  else if (isAndroid) os = 'Android';
  else if (isMac) os = 'Mac';
  else if (isWindows) os = 'Windows';

  // Debug output to console (optional)
  console.log('Detected device info:', {
    isMobile,
    platform: os,
    userAgent: navigator.userAgent,
  });

  // Log event to Firebase Analytics
  logEvent(analytics, 'download_button_click', {
    device_type: isMobile ? 'Mobile' : 'Desktop',
    os_platform: os,
    user_agent: navigator.userAgent,
  });

  const smartLink = "https://beasy.onelink.me/n7UZ/6tsirqzp";
  const appStoreUrl = "https://apps.apple.com/app/beasy/id6670089648";
  const playStoreUrl = "https://play.google.com/store/apps/details?id=suntel.beasy.app&hl=en";

  try {
    if (isMobile) {
      window.open(smartLink, '_blank');

      const startTime = Date.now();
      const checkFocus = () => {
        if (Date.now() - startTime > 2000) return;

        if (isIOS) {
          window.open(appStoreUrl, '_blank');
        } else if (isAndroid) {
          window.open(playStoreUrl, '_blank');
        }
      };

      window.addEventListener('focus', checkFocus, { once: true });

      setTimeout(() => {
        window.removeEventListener('focus', checkFocus);
      }, 3000);
    } else if (isMac) {
      window.open(appStoreUrl, '_blank');
    } else if (isWindows) {
      window.open(playStoreUrl, '_blank'); // Windows users go to Play Store web
    } else {
      window.open(playStoreUrl, '_blank'); // Other desktops
    }
  } catch {
    console.log('Error occurred, using smart link fallback');
    window.open(smartLink, '_blank');
  }
};