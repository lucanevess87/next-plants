import { Droplet, Sun, Thermometer } from 'lucide-react';

import { Plant } from '@/api/plants/types';

export const Detail = ({ about, light, temperature, water }: Plant) => {
  const overview = [
    { label: 'light', value: light, icon: Sun },
    { label: 'temperature', value: temperature, icon: Thermometer },
    { label: 'water', value: water, icon: Droplet },
  ];

  return (
    <div className="flex flex-col justify-start w-full h-full gap-8 pl-2">
      <div className="flex flex-col w-full gap-4">
        <h3 className="font-medium text-md text-brandBlue">Overview</h3>
        <div className="flex items-center justify-around">
          {overview.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex flex-col items-center h-full gap-1">
                <Icon className="w-5 h-5" />
                <p className="text-[11px] font-medium">{item.label.toUpperCase()}</p>
                <p className="text-sm font-semibold text-brandGreen">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col w-full gap-2">
        <h3 className="font-medium text-md text-brandBlue">About</h3>
        <p className="text-sm text-justify opacity-70">{about}</p>
      </div>
      <div className="h-20" />
    </div>
  );
};
