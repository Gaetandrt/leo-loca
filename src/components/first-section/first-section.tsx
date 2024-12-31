"use client";

import { motion, useScroll, useTransform } from "motion/react";

function FirstSection() {
  const { scrollYProgress } = useScroll();
  const topValue = useTransform(scrollYProgress, [0, 1], [144, 700]);

  return (
    <section className="relative z-10 -mt-24 flex h-[1050px] w-full flex-col items-center justify-center bg-background-full bg-cover bg-center bg-no-repeat">
      <motion.div
        style={{ top: topValue }}
        initial={{ top: -300 }}
        animate={{ top: 144 }}
        transition={{ duration: 1, ease: "backOut" }}
        className="absolute z-20 text-[225px] font-bold tracking-[40px] text-[#392A0B]"
      >
        <h1>LOUEZ</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2, ease: "anticipate" }}
        className="absolute top-96 z-40 text-[190px] font-light text-foreground"
      >
        <h1>SIMPLEMENT</h1>
      </motion.div>
      <p className="absolute top-[950px] z-50 text-[25px] text-foreground opacity-80">
        Laissez vous guider ▼
      </p>
      <span className="absolute top-[900px] z-40 h-[150px] w-full bg-gradient-to-b from-transparent to-black" />
      <div className="absolute left-0 top-0 z-30 h-full w-full bg-background-hover bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
}

export default FirstSection;
