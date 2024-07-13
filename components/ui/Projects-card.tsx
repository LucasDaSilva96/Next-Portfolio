'use client';
import React, { useRef, useState } from 'react';
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

  const generateRandomTopAndLeft = (index: number) => {
    const top = `${Math.floor(Math.random() * index)}%`;
    const left = `${Math.floor(Math.random() * index)}%`;

    return { top, left };
  };

  const generateRandomRotate = () => {
    const rotate = `${Math.floor(Math.random() * 20) - 10}deg`;

    return rotate;
  };

  return (
    <div className='absolute inset-0 z-10' ref={containerRef}>
      {projects.map((project, index) => (
        <Card
          containerRef={containerRef}
          alt={project.title}
          src={project.img}
          rotate={generateRandomRotate()}
          {...generateRandomTopAndLeft(index)}
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
  top: string;
  left: string;
  rotate: string;
  className: string;
  project: Project;
};

const Card = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
  project,
}: CardProps) => {
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
        top,
        left,
        rotate,
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
