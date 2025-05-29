import React from 'react';
import { SocialLink } from './types';

const socialLinks: SocialLink[] = [
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/839f80d24b2d638e233c2f82e07142c08aaa77c6?placeholderIfAbsent=true', href: '#', alt: 'Social Media 1' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9339664263219b53f2c99a7d5bb598051077dd8d?placeholderIfAbsent=true', href: '#', alt: 'Social Media 2' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0712cb28e33222012a3ee8b2ee6dc5376cab6d61?placeholderIfAbsent=true', href: '#', alt: 'Social Media 3' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9ae4cd941566297e7c1c0a7a04a4651cc4221860?placeholderIfAbsent=true', href: '#', alt: 'Social Media 4' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6344e34e58d59841407c70dc6e3ab0ed4681f9f8?placeholderIfAbsent=true', href: '#', alt: 'Social Media 5' },
];

export const FooterSocial: React.FC = () => {
  return (
    <div className="flex w-full items-center gap-2 mt-2">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className="hover:opacity-80 transition-opacity"
          aria-label={social.alt}
        >
          <img
            src={social.icon}
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            alt={social.alt}
          />
        </a>
      ))}
    </div>
  );
};
