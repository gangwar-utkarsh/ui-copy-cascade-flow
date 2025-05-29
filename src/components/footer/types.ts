export interface SocialLink {
  icon: string;
  href: string;
  alt: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  type: 'email' | 'phone';
  value: string;
  icon: string;
}
