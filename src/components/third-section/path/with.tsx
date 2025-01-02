import { RocketIcon } from "@/components/icons/rocket-icon";
import { motion } from "motion/react";

function With() {
  return (
    <div className="flex flex-col items-start justify-center">
      <h2 className="-mb-4 text-2xl font-bold italic">
        Avec <span className="font-extralight not-italic">AGENCE KUSTER</span>
      </h2>
      <div className="flex h-60 w-full items-center justify-between gap-10">
        <div className="flex h-full w-1/2 items-center justify-start">
          <motion.div
            initial={{ opacity: 0, width: "0%" }}
            whileInView={{ opacity: 1, width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="h-40 w-full bg-foreground bg-gradient-to-r from-background from-0% to-foreground to-20%"
          ></motion.div>
          <span className="h-full w-[1px] bg-foreground" />
        </div>
        <div className="flex h-full w-[40%] flex-col items-start justify-center gap-12">
          <h2 className="text-2xl">
            Besoin de{" "}
            <span className="text-2xl font-bold">
              {" "}
              plus de renseignements ?
            </span>{" "}
            Parlons en !
          </h2>
          <div className="group relative h-16 w-[400px]">
            <motion.button className="absolute inset-0 z-20 h-full w-full border-2 border-foreground bg-transparent px-4 py-2 text-2xl font-bold text-foreground transition-all duration-700 group-hover:text-background">
              <div className="flex items-center justify-center gap-2">
                Je soumet ma demande{" "}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "anticipate" }}
                  className="hidden transition-all duration-700 ease-in-out group-hover:inline"
                >
                  <RocketIcon />
                </motion.div>
              </div>
            </motion.button>
            <div className="absolute inset-0 z-10 block h-full w-full scale-0 bg-foreground transition-transform duration-700 group-hover:scale-105 group-hover:bg-foreground"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default With;
