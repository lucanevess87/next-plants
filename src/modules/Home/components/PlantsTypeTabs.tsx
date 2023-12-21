import Image from 'next/image';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { PlantCard } from './PlantCard';

const tabs = [
  { section: 'Indoor', value: 'indoor', image: './tabs-plant-1.svg' },
  { section: 'Flower', value: 'flower', image: './tabs-plant-2.svg' },
  { section: 'Green', value: 'green', image: './tabs-plant-3.svg' },
];

export const PlantsTypeTabs = () => {
  return (
    <Tabs defaultValue="indoor" className="w-full h-[5rem]">
      <TabsList className="flex items-center justify-between w-full h-full bg-transparent">
        {tabs.map(({ section, value, image }) => {
          return (
            <TabsTrigger key={value} value={value} className="w-full h-full">
              <div className="flex flex-col items-center gap-2">
                <Image src={image} alt={value} width={30} height={30} />
                <p className="font-semibold text-md">{section}</p>
              </div>
            </TabsTrigger>
          );
        })}
      </TabsList>
      <TabsContent value="indoor" className="flex flex-col gap-4">
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
      </TabsContent>

      <TabsContent value="flower" className="flex flex-col gap-4">
        <PlantCard />
      </TabsContent>

      <TabsContent value="green" className="flex flex-col gap-4">
        <PlantCard />
        <PlantCard />
      </TabsContent>
    </Tabs>
  );
};
