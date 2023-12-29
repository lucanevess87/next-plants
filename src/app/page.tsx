import { TopNavBar } from '@/components/navbar';
import { Public } from '@/modules/Public/Public';

export default function HomePage() {
  return (
    <main className="relative bg-white md:max-w-[400px] flex flex-col w-full items-center supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] gap-6 px-4 pt-6">
      <TopNavBar />
      <Public />
    </main>
  );
}
