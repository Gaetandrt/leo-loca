"use client";

import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import CoupleCard from "./card/couple-card";
import HomeCard from "./card/home-card";
import LibraryCard from "./card/library-card";
import SignCard from "./card/sign-card";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface CardProps {
  children: React.ReactNode;
  position: "left" | "right";
  offset: string;
}

function ParallaxCard({ children, position, offset }: CardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useSpring(
    useParallax(scrollYProgress, position === "left" ? -100 : 100),
    {
      stiffness: 100,
      damping: 30,
    },
  );

  return (
    <motion.div ref={ref} style={{ y }} className={`absolute ${offset}`}>
      {children}
    </motion.div>
  );
}

function SecondSection() {
  const ref = useRef(null);

  return (
    <section
      className="flex h-[1000px] w-full flex-col gap-32 bg-background p-20"
      ref={ref}
    >
      <div className="flex items-center justify-between text-foreground">
        <span />
        <h2 className="text-4xl">
          <span className="font-bold">Ensemble</span>, simplifions votre projet.
        </h2>
        <span />
      </div>
      <div className="relative p-10" style={{ height: "900px" }}>
        <ParallaxCard position="left" offset="left-[0%]">
          <SignCard />
        </ParallaxCard>
        <ParallaxCard position="right" offset="left-[25%]">
          <HomeCard />
        </ParallaxCard>
        <ParallaxCard position="left" offset="left-[50%]">
          <CoupleCard />
        </ParallaxCard>
        <ParallaxCard position="right" offset="left-[75%]">
          <LibraryCard />
        </ParallaxCard>
      </div>
      <div className="mt-20 flex items-center justify-between text-foreground">
        <span />
        <h2 className="text-2xl">
          Un accompagnement
          <span className="font-bold"> complet</span> et{" "}
          <span className="font-bold">fluide</span>, pour mener à bien votre
          projet.
        </h2>
        <span />
      </div>
    </section>
  );
}

export default SecondSection;
