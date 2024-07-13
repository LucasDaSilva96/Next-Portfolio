'use client';

import { cn } from '@/lib/utils';
import { BackgroundGradientAnimation } from './background-gradient-animation';
import GridGlobe from './grid-globe';
import Lottie from 'react-lottie';
import { useState } from 'react';
import confetti from '@/data/confetti.json';
import ShimmerButton from './Shimmer-Button';
import { MdEmail, MdMarkEmailRead } from 'react-icons/md';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  id,
  spareImg,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  titleClassName: string;
}) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('dasilvajunior881@gmail.com');
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };
  return (
    <div
      className={cn(
        'row-span-1 rounded-3xl relative overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4',
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(61,69,108,1) 0%, rgba(54,51,163,1) 100%)',
      }}
    >
      <div className={`${id === 6 && 'flex justify-center h-full'}`}>
        <div className='w-full h-full absolute '>
          {img && (
            <img
              src={img}
              alt='grid'
              className={cn(
                'w-full h-full object-cover object-center',
                imgClassName
              )}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5  ${
            id === 5 && 'w-full opacity-80'
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt='grid'
              className={cn(
                'w-full h-full object-cover object-center',
                imgClassName
              )}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className='absolute z-50 flex items-center justify-center text-white font-bold' />
          </BackgroundGradientAnimation>
        )}
      </div>

      <div
        className={cn(
          titleClassName,
          'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}
      >
        <div className='font-sans font-extralight text-[#c1c2d3] text-sm z-10 md:text-xs lg:text-base'>
          {description}
        </div>
        <div
          className={`font-sans font-bold text-base lg:text-xl max-w-96 z-20 ${
            id === 2 && 'mt-[-45px]'
          }`}
        >
          {title}
        </div>

        {id === 2 && <GridGlobe />}

        {id === 3 && (
          <div className='w-full h-full'>
            <div className='-top-2 left-4 absolute flex w-full items-center flex-wrap gap-2'>
              <span className='py-2 opacity-80 rounded-lg text-center bg-[#10132E] px-3 text-xs'>
                Web Development
              </span>
              <span className='py-2 opacity-80 rounded-lg text-center bg-[#10132E] px-3 text-xs'>
                API Integration
              </span>

              <span className='py-2 opacity-80 rounded-lg text-center bg-[#10132E] px-3 text-xs hidden md:inline'>
                UI/UX Design
              </span>
            </div>

            <div className='bottom-2 left-4 absolute flex w-full items-center flex-wrap gap-2'>
              <span className='py-2 opacity-80 rounded-lg text-center bg-[#10132E] px-3 text-xs'>
                Responsive Web Design
              </span>
              <span className='py-2 opacity-80 rounded-lg text-center bg-[#10132E] px-3 text-xs'>
                Version Control
              </span>
              <span className='py-2 opacity-80 rounded-lg text-center bg-[#10132E] px-3 text-xs'>
                HTTP Requests
              </span>
              <span className='py-2 opacity-80 rounded-lg text-center bg-[#10132E] px-3 text-xs inline md:hidden'>
                UI/UX Design
              </span>
            </div>
          </div>
        )}

        {id === 6 && (
          <div className='mt-5 relative'>
            <div className={`absolute bottom-[55px] w-full h-[200px]`}>
              <Lottie
                options={{
                  loop: false,
                  autoplay: false,
                  animationData: confetti,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  },
                }}
              />
            </div>

            {copy && (
              <ShimmerButton
                title='Email copied'
                icon={<MdMarkEmailRead />}
                position='right'
                onClick={handleCopy}
                otherClasses={copy && 'disabled opacity-70'}
              />
            )}
            {!copy && (
              <ShimmerButton
                title='Copy my email'
                icon={<MdEmail />}
                onClick={handleCopy}
                position='right'
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
