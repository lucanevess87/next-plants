import { Flower2, Leaf, Sprout } from 'lucide-react';
import { Suspense } from 'react';

import { fetchPlants } from '@/api/plants';
import { Plant } from '@/api/plants/types';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { PlantCard } from './PlantCard';

const tabs = [
  { section: 'Indoor', value: 'indoor', icon: Leaf },
  { section: 'Flower', value: 'flower', icon: Flower2 },
  { section: 'Green', value: 'green', icon: Sprout },
];

export const PlantsTypeTabs = async () => {
  const plants = await fetchPlants();

  const reducedPlants = plants.rows.reduce(
    (acc, row) => {
      const { type } = row;

      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(row);

      return acc;
    },
    {} as Record<'green' | 'indoor' | 'flower', Plant[]>,
  );

  return (
    <Tabs defaultValue="indoor" className="flex flex-col w-full">
      <TabsList className="flex items-center justify-between w-full h-[4rem] bg-transparent md:justify-start md:gap-4">
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
        {reducedPlants.indoor?.map((plant) => {
          return (
            <Suspense key={plant.id} fallback={<Skeleton className="w-[100px] h-[20px]" />}>
              <PlantCard {...plant} />
            </Suspense>
          );
        })}
      </TabsContent>
      <TabsContent value="flower" className="tab-content">
        {reducedPlants.flower?.map((plant) => {
          return (
            <Suspense key={plant.id} fallback={<Skeleton className="w-[100px] h-[20px]" />}>
              <PlantCard {...plant} />
            </Suspense>
          );
        })}
      </TabsContent>
      <TabsContent value="green" className="tab-content">
        {reducedPlants.green?.map((plant) => {
          return (
            <Suspense key={plant.id} fallback={<Skeleton className="w-[100px] h-[20px]" />}>
              <PlantCard {...plant} />
            </Suspense>
          );
        })}
      </TabsContent>
      <div className="h-20"></div>
    </Tabs>
  );
};
