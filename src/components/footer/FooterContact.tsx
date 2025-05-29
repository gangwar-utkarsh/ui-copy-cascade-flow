import React from 'react';
import { ContactInfo } from './types';

const contactInfo: ContactInfo[] = [
  { type: 'email', value: 'teamtsil.net.in', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ae0257ab2d4e2eedc01d39a5693457af2f96bc67?placeholderIfAbsent=true' },
  { type: 'email', value: 'siddharthtsil.net.in', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ae0257ab2d4e2eedc01d39a5693457af2f96bc67?placeholderIfAbsent=true' },
  { type: 'phone', value: '+91-9661829944', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/76821863eea5d5d856297dcbc735dcc9301c4617?placeholderIfAbsent=true' },
];

export const FooterContact: React.FC = () => {
  return (
    <div className="self-stretch min-w-60 w-[316px] my-auto">
      <h2 className="text-[#1C1C1C] text-2xl font-bold">Get In Touch</h2>
      <div className="w-full mt-1">
        <div className="flex w-[226px] max-w-full flex-col items-stretch text-base text-[#1C1C1C] font-normal justify-center">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-center gap-2.5 justify-center mt-1 first:mt-0">
              <img
                src={info.icon}
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                alt={`${info.type} icon`}
              />
              <div className="self-stretch my-auto">
                <span className="font-semibold">{info.type.charAt(0).toUpperCase() + info.type.slice(1)}:</span>{' '}
                {info.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
