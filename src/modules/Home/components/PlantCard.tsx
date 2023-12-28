import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Plant } from '@/api/plants/types';

export const PlantCard = ({ name, family, id, price, image_url }: Plant) => {
  return (
    <div className="relative z-50 flex items-center justify-start w-full p-2 px-4 overflow-hidden bg-opacity-25 rounded-2xl bg-brandLightGreen">
      <Image
        src={image_url}
        alt={name}
        width={80}
        height={80}
        className="absolute bottom-0 left-0"
      />
      <Link
        href={`/plants/${id}`}
        className="absolute z-0 -right-8 bg-brandLightGreen flex justify-center bg-opacity-40 rounded-[50%] w-24 h-24"
      >
        <Plus className="self-center w-5 h-5 mr-5 text-white" />
      </Link>

      <div className="flex flex-col items-start justify-start gap-4 pl-[5rem]">
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-sm font-semibold text-brandBlue">{name}</h3>
          <p className="text-xs font-normal text-brandBlue">{family}</p>
        </div>
        <p>{price}</p>
      </div>
    </div>
  );
};
