import Link from 'next/link';

import { Banner } from '../Home/components/Banner';

export const Public = () => {
  return (
    <section className="flex flex-col w-full gap-6 overflow-y-auto no-scrollbar">
      <Banner />
      <div className="flex flex-col w-full gap-2">
        <h3 className="font-medium text-md text-brandBlue">Login</h3>
        <Link href="/login">
          <p className="text-sm text-justify underline opacity-70 hover:text-brandBlue">
            Login into your account
          </p>
        </Link>
      </div>
    </section>
  );
};
