import Image from 'next/image';
import React from 'react';

export const HeroLogin = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-1/3">
      <div className="flex items-center justify-center gap-2 h-1/3">
        <Image src="/logo-small.png" alt="logo" width={30} height={30} />
        <h3 className="self-center font-medium text-center text-md text-brandGreen">PLANTSCAPE</h3>
      </div>
      <div className="relative flex flex-row-reverse w-full p-6 h-2/3 bg-opacity-30 bg-brandLightGreen">
        <Image
          src="/plant-2.png"
          alt="banner-pick"
          className="absolute bottom-0 left-0 overflow-hidden"
          width={200}
          height={200}
        />
        <div className="flex flex-col items-center self-center w-1/2 pl-4">
          <h2 className="text-2xl font-semibold text-brandBlue">Login</h2>
          <p className="font-normal text-brandBlue">Next 14 App</p>
        </div>
      </div>
    </div>
  );
};
