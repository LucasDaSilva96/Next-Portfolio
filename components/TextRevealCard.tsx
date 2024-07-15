'use client';
import React from 'react';
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from '@/components/ui/text-reveal-card';

export function TextRevealCardPreview() {
  return (
    <div className='md:flex items-center justify-center  h-[35rem] rounded-2xl w-full hidden'>
      <TextRevealCard
        text='You know the business'
        revealText='I know the code '
      >
        <TextRevealCardTitle className='text-center heading'>
          Sometimes, you just need to{' '}
          <span className='text-purple'>see it.</span>
        </TextRevealCardTitle>
        <TextRevealCardDescription className='text-center text-sm'>
          Hover over the card to reveal the hidden text.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
