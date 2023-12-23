import Image from 'next/image';
import React from 'react';

export const Banner = () => {
  return (
    <div className="relative flex flex-row-reverse w-full p-2 py-8 mt-8 bg-brandGold rounded-2xl md:mt-24 md:py-12">
      <Image
        src="./plant-medium.svg"
        alt="banner-pick"
        className="absolute bottom-0 left-0 overflow-hidden"
        width={180}
        height={200}
      />
      <div className="flex flex-col items-center self-center w-1/2 pl-4">
        <h2 className="text-2xl font-semibold text-brandBlue">Exclusive Offer</h2>
        <p className="font-normal text-brandBlue">Get your 1st plant @ 60% off</p>
      </div>
    </div>
  );
};
