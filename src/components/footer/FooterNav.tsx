import React from 'react';
import { NavigationItem } from './types';

const homeLinks: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Book Now', href: '/book' },
];

const companyLinks: NavigationItem[] = [
  { label: 'Media', href: '/media' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

export const FooterNav: React.FC = () => {
  return (
    <nav className="self-stretch flex min-w-60 gap-[40px_96px] text-[rgba(0,67,61,1)] text-center justify-center my-auto">
      <div className="w-[134px]">
        <h2 className="text-2xl font-bold">Home</h2>
        <ul className="w-full text-xl font-normal mt-1">
          {homeLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[117px]">
        <h2 className="text-2xl font-bold">Company</h2>
        <ul className="w-full text-xl font-normal mt-1">
          {companyLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
