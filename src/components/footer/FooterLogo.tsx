import React from 'react';

export const FooterLogo: React.FC = () => {
  return (
    <div className="self-stretch flex min-w-60 flex-col items-stretch text-[#1C1C1C] w-[316px] my-auto">
      <div className="self-center flex w-[280px] max-w-full flex-col items-center text-2xl font-semibold text-center justify-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/94b44aa8f4edc567614e96865bf7f851f2efdeea?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[120px] max-w-full"
          alt="TWI Group Logo"
        />
        <div className="mt-2">TWI Group of Companies</div>
      </div>
      <address className="flex w-full gap-1 text-base font-normal justify-center mt-4 not-italic">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/050e2de82ca92fe1f2199574e6ef55860a9bad90?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-6 shrink-0"
          alt="Location Icon"
        />
        <div className="flex-1 shrink basis-[0%]">
          Corporate Office: 609, Tower II, Pearls Omaxe, Netaji Subash Place, Pitampura, New Delhi - 110034. Delhi, INDIA.
        </div>
      </address>
    </div>
  );
};
