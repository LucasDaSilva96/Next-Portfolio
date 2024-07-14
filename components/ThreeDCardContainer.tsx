'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Link from 'next/link';
import { Project } from './ui/Projects-card';
import { FaCode } from 'react-icons/fa6';

type ProjectProp = {
  project: Project;
};

export function ThreeDCard({ project }: ProjectProp) {
  return (
    <CardContainer className='inter-var'>
      <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-100 dark:border-white/[0.2] border-black/[0.1] w-[300px] lg:w-[400px] h-auto rounded-xl p-6 border  '>
        <CardItem
          translateZ='50'
          className='text-xl font-bold text-neutral-600 dark:text-white'
        >
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
            width={300}
            height={200}
            className='h-auto w-[300px] object-cover rounded-xl group-hover/card:shadow-xl'
            alt={project.title}
          />
        </CardItem>
        <CardItem translateZ='10'>
          <div className='flex items-center gap-1 mt-4'>
            {project.iconLists.map((icon, index) => {
              return (
                <Image
                  key={index}
                  src={icon}
                  width={20}
                  height={20}
                  alt={project.title}
                />
              );
            })}
          </div>
        </CardItem>
        <div className='flex justify-between items-center mt-20'>
          <CardItem
            translateZ={20}
            as={Link}
            href={project.code}
            target='__blank'
            className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white flex items-center gap-1 outline outline-1'
          >
            <span>Code</span>
            <span className='text-purple text-lg'>
              <FaCode />
            </span>
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
}
