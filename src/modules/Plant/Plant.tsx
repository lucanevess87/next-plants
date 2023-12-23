import { Detail } from './components/Detail';
import { Hero } from './components/Hero';

export const Plant = async () => {
  return (
    <section className="flex flex-col w-full gap-6 overflow-y-auto no-scrollbar">
      <Hero />
      <Detail />
    </section>
  );
};
