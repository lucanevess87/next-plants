import { Droplet, Sun, Thermometer } from 'lucide-react';

const overview = [
  { label: 'light', value: '35 - 40%', icon: Sun },
  { label: 'temperature', value: '70 - 75', icon: Thermometer },
  { label: 'water', value: '250ml', icon: Droplet },
];

export const Detail = () => {
  return (
    <div className="flex flex-col w-full gap-6 pl-2">
      <div className="flex flex-col w-full gap-4 h-1/2">
        <h3 className="font-normal text-md text-brandBlue">Overview</h3>
        <div className="flex items-center justify-around">
          {overview.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex flex-col items-center gap-1">
                <Icon className="w-5 h-5" />
                <p className="text-[11px] font-medium">{item.label.toUpperCase()}</p>
                <p className="text-sm font-semibold text-brandGreen">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col w-full gap-2 h-1/2">
        <h3 className="font-normal text-md text-brandBlue">About</h3>
        <p className="text-sm text-justify opacity-70">
          The Monstera Adansonii grows best in a well-draining Aroid mix using bark, perlite, peat
          moss, and charcoal. Keep your plant in bright indirect light and humidity above 60%. When
          watering, make sure that the potting mix of your Adansonii remains slightly moist
        </p>
      </div>
    </div>
  );
};
