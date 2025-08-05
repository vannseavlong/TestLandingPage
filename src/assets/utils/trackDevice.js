import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';
import { app } from '../../firebase-config'; // make sure this exports the initialized app

// Helper function to detect device type
const detectDeviceType = () => {
  const ua = navigator.userAgent.toLowerCase();

  if (/android/.test(ua)) return 'Android';
  if (/iphone|ipad|ipod/.test(ua)) return 'iOS';
  if (/macintosh|mac os/.test(ua)) return 'Mac';
  if (/windows/.test(ua)) return 'Windows';
  if (/linux/.test(ua)) return 'Linux';

  return 'Other';
};

export const trackDevice = async () => {
  const isAnalyticsSupported = await isSupported();
  if (!isAnalyticsSupported) {
    console.warn('Firebase Analytics is not supported on this device/browser.');
    return;
  }
  if (localStorage.getItem('device_tracked') === 'true') return;

  const analytics = getAnalytics(app);

  logEvent(analytics, 'device_tracked', {
    deviceType: detectDeviceType(), 
    debug_mode: true
  });
  localStorage.setItem('device_tracked', 'true');
};