import clsx from 'clsx';
import Image from 'next/image';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const banners = [
  {
    id: 'banner-1',
    image: './plant-medium.svg',
    title: 'Exclusive Offer',
    subtitle: 'Get your 1st plant @ 60% off',
    mainColor: 'bg-brandGold',
  },
  {
    id: 'banner-2',
    image: './plant-2-medium.svg',
    title: 'Magical Offer',
    subtitle: 'Get your 2st plant @ 80% off',
    mainColor: 'bg-brandOpacityGreen',
  },
];

export const Banner = () => {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: 'start',
        loop: true,
      }}
    >
      <CarouselContent>
        {banners.map((banner) => {
          return (
            <CarouselItem key={banner.id}>
              <div
                className={clsx(
                  'relative flex flex-row-reverse w-full p-2 py-8 mt-8 rounded-2xl md:mt-24 md:py-12',
                  banner.mainColor,
                )}
              >
                <Image
                  src={banner.image}
                  alt="banner-pick"
                  className="absolute bottom-0 left-0 overflow-hidden"
                  width={180}
                  height={200}
                />
                <div className="flex flex-col items-center self-center w-1/2 pl-4">
                  <h2 className="text-2xl font-semibold text-brandBlue">{banner.title}</h2>
                  <p className="font-normal text-brandBlue">{banner.subtitle}</p>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};
