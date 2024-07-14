import { workExperience } from '@/data';
import React from 'react';
import { Button } from './ui/moving-border';
import Image from 'next/image';

export default function Experience() {
  return (
    <section className='py-10 flex flex-col' id='skills'>
      <h1 className='heading pb-8 text-purple'>Capstone</h1>

      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
        {workExperience.map((item) => {
          return (
            <Button
              key={item.id}
              as={'article'}
              className='flex-1 text-slate-50 border-neutral-200 dark:border-slate-800'
              duration={Math.floor(Math.random() * 10000) + 10000}
            >
              <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10'>
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={200}
                  height={200}
                  className='lg:w-32 md:w-20'
                />
                <div className='lg:ms-5'>
                  <h1 className='text-start text-xl md:text-2xl font-bold'>
                    {item.title}
                  </h1>
                  <p className='text-start text-slate-100 mt-3 font-semibold'>
                    {item.desc}
                  </p>
                </div>
              </div>
            </Button>
          );
        })}
      </div>
    </section>
  );
}
