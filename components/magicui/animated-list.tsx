'use client';

import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export interface AnimatedListProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ className, children, delay = 3000 }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const childrenArray = React.Children.toArray(children);

    useEffect(() => {
      if (index < childrenArray.length) {
        setIsAnimating(true);
        const interval = setInterval(() => {
          setIndex((prevIndex) => prevIndex + 1);
        }, delay);
        return () => clearInterval(interval);
      } else {
        setIsAnimating(false);
      }
    }, [index, childrenArray.length, delay]);

    const itemsToShow = useMemo(
      () => childrenArray.slice(0, index + 1).reverse(),
      [index, childrenArray]
    );

    if (!isAnimating) {
      return null;
    }

    return (
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  }
);

AnimatedList.displayName = 'AnimatedList';

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: 'spring', stiffness: 350, damping: 40 },
  };

  return (
    <motion.div
      {...animations}
      viewport={{ once: true }}
      layout
      className='mx-auto w-full'
    >
      {children}
    </motion.div>
  );
}
