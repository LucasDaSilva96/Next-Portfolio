import React from 'react';
import { Cards } from './ui/Projects-card';
import { projects } from '@/data';

export default function Projects() {
  return (
    <section className='py-20 flex flex-col' id='projects'>
      <h1 className='heading'>
        A small selection of <p className='text-purple'>recent projects</p>
      </h1>
      <p className='text-center py-4 font-extralight italic text-sm'>
        Psst, The cards are <span className='text-purple'>draggable</span>
      </p>
      <div className='relative  min-h-[90vh] w-full overflow-hidden mt-2'>
        <Cards projects={projects} />
      </div>
    </section>
  );
}
