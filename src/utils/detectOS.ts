import { OSType } from '../types';

export function detectUserOS(): { os: OSType; browserName: string; isMobile: boolean } {
  if (typeof window === 'undefined' || !navigator) {
    return { os: 'android_chrome', browserName: 'Unknown', isMobile: true };
  }

  const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || '';
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isAndroid = /android/i.test(userAgent);
  const isSamsung = /SamsungBrowser/i.test(userAgent);
  const isMobile = isIOS || isAndroid || /Mobi|Tablet/i.test(userAgent);

  if (isIOS) {
    return { os: 'ios', browserName: 'Safari (iOS)', isMobile: true };
  }
  if (isAndroid) {
    if (isSamsung) {
      return { os: 'android_samsung', browserName: 'Samsung Internet', isMobile: true };
    }
    return { os: 'android_chrome', browserName: 'Chrome (Android)', isMobile: true };
  }

  return { os: 'desktop', browserName: 'Desktop Browser', isMobile: isMobile };
}
