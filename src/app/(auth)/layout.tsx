import type { Metadata } from 'next';

import { HeroLogin } from '@/modules/Auth/components/HeroLogin';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex bg-white md:max-w-[400px] flex-col w-full justify-center items-center supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh] gap-6">
      <HeroLogin />
      <div>{children}</div>
    </main>
  );
}