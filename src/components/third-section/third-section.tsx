"use client";

import With from "./path/with";
import Without from "./path/without";

function ThirdSection() {
  return (
    <section className="flex h-[1000px] w-full flex-col gap-20 bg-background p-20">
      <div className="flex items-center justify-between gap-10 text-foreground">
        <span className="-ml-20 h-[1px] w-full bg-foreground" />
        <h2 className="min-w-[50%] text-3xl font-bold">
          Vous avez le choix, faite le avec audace !
        </h2>
      </div>
      <Without />
      <With />
    </section>
  );
}

export default ThirdSection;
