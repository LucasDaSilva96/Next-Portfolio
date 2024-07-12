import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { gridItems } from '@/data/index';

export default function Grid() {
  return (
    <section id='about'>
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            spareImg={item.spareImg}
            id={item.id}
            titleClassName={item.titleClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
