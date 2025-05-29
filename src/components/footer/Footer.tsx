import React from 'react';
import { FooterLogo } from './FooterLogo';
import { FooterNav } from './FooterNav';
import { FooterContact } from './FooterContact';
import { FooterSocial } from './FooterSocial';

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col shadow-[0px_-4px_34px_rgba(255,255,255,0.25)] relative min-h-[345px] overflow-hidden">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/66c44dddd0660b399fe6d38c7f32370a1429a936?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background pattern"
      />
      <div className="flex flex-col relative min-h-[345px] w-full pt-8 px-16 max-md:max-w-full max-md:pl-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/74bab1ef16f46804c93c2cbf58d015969a6d3b63?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Background overlay"
        />
        <div className="relative opacity-[0.88] bg-[#E7E9F5] px-[72px] max-md:max-w-full max-md:px-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[81%] max-md:w-full max-md:ml-0">
              <div className="relative flex w-full flex-col items-stretch mt-4 pb-3.5 max-md:max-w-full max-md:mr-[-17px]">
                <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
                  <FooterLogo />
                  <FooterNav />
                  <div className="self-stretch min-w-60 w-[316px] my-auto">
                    <FooterContact />
                    <FooterSocial />
                  </div>
                </div>
                <div className="self-center z-10 flex mt-[-57px] w-[364px] max-w-full flex-col items-stretch text-base text-[rgba(0,67,61,1)] font-normal text-center ml-[152px]">
                  <hr className="min-h-0 w-full border-[rgba(165,165,165,1)]" />
                  <div className="mt-6">
                    Copyright © 2025 KARISHMA GLOBAL VENTURES
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[19%] ml-5 max-md:w-full max-md:ml-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f32557334e4753f1fa1d50e31edb247c747ae9e?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-80 mt-[-7px] shrink-0 max-w-full"
                alt="Decorative element"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
