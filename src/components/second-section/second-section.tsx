import CoupleCard from "./card/couple-card";
import HomeCard from "./card/home-card";
import LibraryCard from "./card/library-card";
import SignCard from "./card/sign-card";

function SecondSection() {
  return (
    <section className="flex h-[1000px] w-full flex-col gap-32 bg-background p-20">
      <div className="flex items-center justify-between text-foreground">
        <span />
        <h2 className="text-4xl">
          <span className="font-bold">Ensemble</span>, simplifions votre projet.
        </h2>
        <span />
      </div>
      <div className="tems-center flex justify-center p-10">
        <SignCard />
        <HomeCard />
        <CoupleCard />
        <LibraryCard />
      </div>
      <div className="flex items-center justify-between text-foreground">
        <span />
        <h2 className="text-2xl">
          Un accompagnement
          <span className="font-bold">complet</span> et{" "}
          <span className="font-bold">fluide</span>, pour mener à bien votre
          projet.
        </h2>
        <span />
      </div>
    </section>
  );
}

export default SecondSection;
