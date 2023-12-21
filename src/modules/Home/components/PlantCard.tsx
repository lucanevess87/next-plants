import Image from 'next/image';

export const PlantCard = () => {
  return (
    <div className="relative flex flex-row-reverse items-center justify-between w-full p-2 px-4 bg-opacity-25 rounded-2xl bg-brandLightGreen">
      <Image
        src="./plant-medium.svg"
        alt="plant-medium"
        width={90}
        height={90}
        className="absolute bottom-0 left-0"
      />
      <div className="flex flex-col items-start justify-between gap-4">
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-sm font-semibold text-brandBlue">Monstera Adansonii</h3>
          <p className="text-xs font-normal text-brandBlue">Monstera family</p>
        </div>
        <p>$400</p>
      </div>
    </div>
  );
};
