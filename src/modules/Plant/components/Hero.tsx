import { Heart, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="relative flex w-full p-6 h-1/2 bg-opacity-30 bg-brandLightGreen rounded-bl-3xl">
      <Image
        src="./plant-medium.svg"
        alt="banner-pick"
        className="absolute bottom-0 right-0 overflow-hidden"
        width={230}
        height={230}
      />

      <div className="flex flex-col w-1/2 gap-6 selection:justify-start">
        <div className="flex flex-col w-full">
          <p className="text-sm font-normal text-brandBlueOpacity">Indoor</p>
          <h3 className="text-3xl font-medium text-brandBlue">Monstera Adansonii</h3>
        </div>

        <div className="flex flex-col w-full">
          <p className="text-xs font-medium text-brandBlueOpacity">PRICE</p>
          <h3 className="text-lg font-medium text-brandBlue">$400</h3>
        </div>

        <div className="flex flex-col w-full">
          <p className="text-xs font-medium text-brandBlueOpacity">SIZE</p>
          <h3 className="text-lg font-medium text-brandBlue">5&quot; h</h3>
        </div>

        <div className="flex justify-start w-full gap-4">
          <Heart className="text-brandGreen" />
          <ShoppingBag />
        </div>
      </div>
    </div>
  );
};
