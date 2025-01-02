"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import CoupleCard from "./card/couple-card";
import HomeCard from "./card/home-card";
import LibraryCard from "./card/library-card";
import SignCard from "./card/sign-card";

function SecondSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const topValue = useTransform(scrollYProgress, [0, 1], [0, 175]);

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
        <motion.div style={{ top: topValue, left: "0%" }} className="absolute">
          <SignCard />
        </motion.div>
        <motion.div
          style={{ bottom: topValue, left: "25%" }}
          className="absolute"
        >
          <HomeCard />
        </motion.div>
        <motion.div style={{ top: topValue, left: "50%" }} className="absolute">
          <CoupleCard />
        </motion.div>
        <motion.div
          style={{ bottom: topValue, left: "75%" }}
          className="absolute"
        >
          <LibraryCard />
        </motion.div>
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
