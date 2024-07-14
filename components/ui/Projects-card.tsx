'use client';
import React, { use, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { ThreeDCard } from '../ThreeDCardContainer';

export type Project = {
  id: string | number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  code: string;
  demo: string;
};

type ProjectsProps = {
  projects: Project[];
};

export const Cards = ({ projects }: ProjectsProps) => {
  const containerRef = useRef(null);

  return (
    <div className='absolute inset-0 z-10' ref={containerRef}>
      {projects.map((project, index) => (
        <Card
          containerRef={containerRef}
          alt={project.title}
          src={project.img}
          top={index}
          left={index}
          className='w-36 md:w-56'
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
};

type CardProps = {
  containerRef: React.RefObject<HTMLDivElement>;
  src: string;
  alt: string;
  top: number;
  left: number;
  className: string;
  project: Project;
};

const Card = ({ containerRef, top, left, className, project }: CardProps) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll('.drag-elements');

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue('z-index')
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.div
      onMouseDown={updateZIndex}
      style={{
        top: `${top * 10}%`,
        left: `${left * 10}%`,
        rotate: `${top}deg`,
        zIndex,
      }}
      className={twMerge('drag-elements absolute', className)}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    >
      <ThreeDCard project={project} />
    </motion.div>
  );
};
