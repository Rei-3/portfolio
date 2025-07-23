'use client';

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "motion/react";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  className?: string;
}

export function ParallaxText({ children, baseVelocity = 100, className = "" }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`relative overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div 
        className="flex whitespace-nowrap font-mono tracking-wider text-2xl md:text-3xl font-bold" 
        style={{ x }}
      >
        <span className="pr-8">{children}</span>
        <span className="pr-8">{children}</span>
        <span className="pr-8">{children}</span>
        <span className="pr-8">{children}</span>
      </motion.div>
    </div>
  );
}
