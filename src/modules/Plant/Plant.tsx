import { fetchPlantsById } from '@/api/plants';

import { Detail } from './components/Detail';
import { Hero } from './components/Hero';

type PlantProps = { id: string };

export const Plant = async ({ id }: PlantProps) => {
  const plant = await fetchPlantsById(id);

  return (
    <section className="flex flex-col w-full gap-6 overflow-y-auto no-scrollbar">
      <Hero {...plant} />
      <Detail {...plant} />
    </section>
  );
};
