import { motion } from "motion/react";

function Without() {
  return (
    <div className="flex flex-col items-start justify-center gap-5">
      <h2 className="text-2xl font-bold italic">
        Sans <span className="font-extralight not-italic">AGENCE KUSTER</span>
      </h2>
      <div className="flex h-60 w-full items-center justify-start">
        <motion.div
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "100%" }}
          transition={{ duration: 4, ease: "easeInOut" }}
          className="h-40 w-full bg-foreground bg-gradient-to-r from-background from-0% to-foreground to-10%"
        />
        <span className="h-full w-[1px] bg-foreground" />
      </div>
    </div>
  );
}

export default Without;
