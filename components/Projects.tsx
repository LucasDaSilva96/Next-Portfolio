import React from 'react';
import { Cards } from './ui/Projects-card';
import { projects } from '@/data';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import Link from 'next/link';

export default function Projects() {
  return (
    <section className='py-20 flex flex-col gap-2 lg:gap-0' id='projects'>
      <h1 className='heading'>
        A small selection of <p className='text-purple'>recent projects</p>
      </h1>
      <p className='text-center py-4 font-extralight italic text-sm hidden lg:inline'>
        Psst, The cards are <span className='text-purple'>draggable</span>
      </p>
      <span className='text-center text-xs text-red-500  '>
        This section is still in progress
      </span>
      <div className='relative  min-h-[90vh] w-full overflow-hidden mt-2 hidden lg:block'>
        <Cards projects={projects} />
      </div>

      <div className='min-h-[90vh] w-full overflow-x-hidden flex flex-wrap items-center mt-2 lg:hidden'>
        {projects.map((project) => {
          return (
            <CardContainer
              className='inter-var ml-0 sm:ml-[5vw] md:ml-[10vw]'
              key={project.id}
            >
              <CardBody className=' relative group/card  dark:hover:shadow-2xl  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border'>
                <CardItem translateZ='50' className='text-xl font-bold'>
                  {project.title}
                </CardItem>
                <CardItem
                  as='p'
                  translateZ='60'
                  className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
                >
                  {project.des}
                </CardItem>
                <CardItem translateZ='100' className='w-full mt-4'>
                  <Image
                    src={project.img}
                    height='1000'
                    width='1000'
                    className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                    alt={project.title}
                  />
                </CardItem>
                <div className='flex justify-between items-center mt-20'>
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.code}
                    target='__blank'
                    className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white outline outline-1'
                  >
                    Code
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.demo}
                    className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
                  >
                    Demo
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          );
        })}
      </div>
    </section>
  );
}
