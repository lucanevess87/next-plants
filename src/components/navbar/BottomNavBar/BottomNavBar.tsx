'use client';

import clsx from 'clsx';
import { Heart, Home, ShoppingBag, UserRound } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/plants', icon: Home },
  {
    name: 'Liked',
    href: '/plants/liked',
    icon: Heart,
  },
  { name: 'Cart', href: '/plants/cart', icon: ShoppingBag },
  { name: 'Profile', href: '/plants/profile', icon: UserRound },
];

export const BottomNavBar = () => {
  const pathname = usePathname();

  return (
    <section className="absolute bottom-7 z-50 bg-white flex items-center justify-between w-5/6 p-4 shadow-[0_30px_60px_30px_rgba(0,0,0,0.15)] rounded-2xl">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link key={link.name} href={link.href}>
            <LinkIcon
              className={clsx('icon-primary', {
                'text-brandGreen': pathname === link.href,
              })}
            />
          </Link>
        );
      })}
    </section>
  );
};
