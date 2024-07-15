import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { techStack } from '@/data';

export default function TachSkills() {
  return (
    <section className='py-10 flex flex-col' id='skills'>
      <h1 className='heading pb-8'>
        My <span className='text-purple'>Tech-Stack</span>
      </h1>

      <div className='relative  min-h-[50vh] w-full overflow-hidden mt-2'>
        <InfiniteMovingCards items={techStack} direction='right' speed='slow' />
      </div>
    </section>
  );
}
