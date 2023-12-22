import { Flower2, Leaf, Sprout } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { PlantCard } from './PlantCard';

const tabs = [
  { section: 'Indoor', value: 'indoor', icon: Leaf },
  { section: 'Flower', value: 'flower', icon: Flower2 },
  { section: 'Green', value: 'green', icon: Sprout },
];

export const PlantsTypeTabs = () => {
  return (
    <Tabs defaultValue="indoor" className="flex flex-col w-full">
      <TabsList className="flex items-center justify-between w-full h-[4rem] bg-transparent">
        {tabs.map(({ section, value, icon }) => {
          const Icon = icon;
          return (
            <TabsTrigger key={value} value={value} className="bg-transparent">
              <div className="flex flex-col items-center gap-2">
                <Icon />
                <p className="font-semibold text-md">{section}</p>
              </div>
            </TabsTrigger>
          );
        })}
      </TabsList>
      <TabsContent value="indoor" className="tab-content">
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
      </TabsContent>
      <TabsContent value="flower" className="tab-content">
        <PlantCard />
      </TabsContent>
      <TabsContent value="green" className="tab-content">
        <PlantCard />
        <PlantCard />
      </TabsContent>
      <div className="h-20"></div>
    </Tabs>
  );
};
