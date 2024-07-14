import React from 'react';
import GridBackground from '../public/footer-grid.svg';
import Image from 'next/image';
import ShimmerButton from './ui/Shimmer-Button';
import { MdOutgoingMail } from 'react-icons/md';
import { socialMedia } from '@/data';

export default function Footer() {
  return (
    <footer
      className='w-full pt-16 pb-10 flex flex-col items-center justify-center h-[500px] relative overflow-hidden'
      id='contact'
    >
      <div className='absolute left-0 min-h-28 bottom-0 w-screen '>
        <Image
          priority
          src={GridBackground}
          alt='Grid background'
          className='w-screen'
        />
      </div>
      <div className='flex flex-col items-center'>
        <h4 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your</span> digital
          presence to the next level?
        </h4>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a
          href='mailto:dasilvajunior881@gmail.com'
          className='cursor-pointer z-10'
        >
          <ShimmerButton
            icon={<MdOutgoingMail />}
            position='right'
            title="Let's get in touch"
          />
        </a>
      </div>

      <div className='flex mt-32 md:flex-row flex-col justify-between items-center gap-2 max-w-screen-md'>
        <p className='md:text-base text-sm font-extralight md:font-normal'>
          &copy;Copyright {new Date().getFullYear()} | Lucas Da Silva
        </p>

        <div className='flex items-center md:gap-3 gap-6 z-20'>
          {socialMedia.map((social) => {
            return (
              <a key={social.id} href={social.link} target='_blank'>
                <Image
                  src={social.img}
                  alt={social.alt}
                  width={30}
                  height={30}
                />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
