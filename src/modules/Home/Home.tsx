import { Search } from '@/components/search/Search';

import { Banner } from './components/Banner';
import { PlantsTypeTabs } from './components/PlantsTypeTabs';

export const Home = async () => {
  return (
    <section className="flex flex-col items-center w-full h-full gap-4 overflow-auto">
      <Banner />
      <Search />
      <PlantsTypeTabs />
    </section>
  );
};
