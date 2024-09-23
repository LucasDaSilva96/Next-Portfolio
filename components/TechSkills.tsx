'use client';
import React from 'react';
import IconCloud from '@/components/magicui/icon-cloud';

const slugs = [
  'typescript',
  'javascript',
  'react',
  'html5',
  'css3',
  'express',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'figma',
  'nodedotjs',
  'redux',
  'mongodb',
  'nextdotjs',
  'supabase',
  'tailwindcss',
  'bootstrap',
  'vue',
  'nuxt',
];

export default function TachSkills() {
  return (
    <section
      className='py-10 flex flex-col w-full items-center gap-2'
      id='skills'
    >
      <h1 className='heading pb-8'>
        My <span className='text-purple'>Tech-Stack</span>
      </h1>

      <div className='relative flex h-full w-full max-w-[34rem] items-center justify-center overflow-hidden rounded-lg  bg-transparent px-20 pb-20 pt-8 '>
        <IconCloud iconSlugs={slugs} />
      </div>
    </section>
  );
}
