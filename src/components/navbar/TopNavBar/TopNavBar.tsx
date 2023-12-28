import { BellDot } from 'lucide-react';
import Image from 'next/image';

export const TopNavBar = () => {
  return (
    <section className="flex items-center justify-between w-full">
      <div className="flex justify-start gap-2 item-center">
        <Image src="/logo-small.png" alt="logo" width={30} height={30} />
        <h3 className="self-center font-medium text-center text-md text-brandGreen">PLANTSCAPE</h3>
      </div>
      <div className="flex gap-4">
        <BellDot className="w-5 h-5" />
      </div>
    </section>
  );
};
