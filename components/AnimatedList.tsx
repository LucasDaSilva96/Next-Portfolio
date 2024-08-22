'use client';

import { cn } from '@/lib/utils';
import { AnimatedList } from '@/components/magicui/animated-list';

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const personalNotifications = [
  {
    id: 1,
    name: 'Warm Welcome',
    description: 'Hello and welcome! Thanks for checking out my portfolio.',
    time: 'now',
    icon: '👋',
    color: '#bd9d4e',
  },
  {
    id: 2,
    name: 'Did You Know?',
    description:
      'I specialize in creating intuitive and high-quality user experiences.',
    time: 'now',
    icon: '🎨',
    color: '#4CAF50',
  },
  {
    id: 3,
    name: 'What I Offer',
    description:
      "Looking for someone with a passion for problem-solving and innovation? That's me!",
    time: 'now',
    icon: '💡',
    color: '#2196F3',
  },
  {
    id: 4,
    name: 'Let`s Connect',
    description:
      'Interested in bringing on board a motivated developer? I`d love to chat!',
    time: 'now',
    icon: '💬',
    color: '#FF4081',
  },
  {
    id: 5,
    name: 'Thank You',
    description:
      'Thanks for considering me—let`s build something amazing together!',
    time: 'now',
    icon: '🤝',
    color: '#9C27B0',
  },
];

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        `relative mx-auto min-h-fit w-full max-w-[450px] overflow-hidden rounded-2xl p-4 backdrop-blur-3xl`,
        // animation styles
        'transition-all duration-200 ease-in-out hover:scale-[103%]',
        // light styles
        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        // dark styles
        'transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]'
      )}
    >
      <div className='flex flex-row items-center gap-3'>
        <div
          className='flex size-10 items-center justify-center rounded-2xl'
          style={{
            backgroundColor: color,
          }}
        >
          <span className='text-lg'>{icon}</span>
        </div>
        <div className='flex flex-col overflow-hidden'>
          <figcaption className='flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white '>
            <span className='text-sm sm:text-lg'>{name}</span>
            <span className='mx-1'>·</span>
            <span className='text-xs text-gray-500'>{time}</span>
          </figcaption>
          <p className='text-sm font-normal dark:text-white/60'>
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function AnimatedListComponent({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        'fixed right-0 top-0 z-50 flex h-60 w-full max-w-[470px] flex-col p-6 overflow-hidden bg-transparent md:shadow-xl',
        className
      )}
    >
      <AnimatedList>
        {personalNotifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
