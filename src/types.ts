export type OSType = 'ios' | 'android_chrome' | 'android_samsung' | 'desktop';

export interface InstallStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
  highlightText?: string;
}

export interface OSGuide {
  id: OSType;
  name: string;
  browser: string;
  icon: string;
  badge: string;
  steps: InstallStep[];
  tip: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
}
