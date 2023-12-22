import { Search } from '@/components/search/Search';

import { Banner } from './components/Banner';
import { PlantsTypeTabs } from './components/PlantsTypeTabs';

export const Home = async () => {
  return (
    <section className="flex flex-col w-full gap-6 overflow-y-auto no-scrollbar">
      <Banner />
      <Search />
      <PlantsTypeTabs />
    </section>
  );
};
