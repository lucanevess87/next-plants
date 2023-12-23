import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const PlantCard = () => {
  return (
    <div className="relative z-50 flex flex-row-reverse items-center justify-center w-full p-2 px-4 overflow-hidden bg-opacity-25 rounded-2xl bg-brandLightGreen">
      <Image
        src="./plant-medium.svg"
        alt="plant-medium"
        width={80}
        height={80}
        className="absolute bottom-0 left-0"
      />
      <Link
        href="/plant-1"
        className="absolute z-0 -right-8 bg-brandLightGreen flex justify-center bg-opacity-40 rounded-[50%] w-24 h-24"
      >
        <Plus className="self-center w-5 h-5 mr-5 text-white" />
      </Link>

      <div className="flex flex-col items-start justify-between gap-4 pl-2">
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-sm font-semibold text-brandBlue">Monstera Adansonii</h3>
          <p className="text-xs font-normal text-brandBlue">Monstera family</p>
        </div>
        <p>$400</p>
      </div>
    </div>
  );
};
