function FirstSection() {
  return (
    <section className="relative z-10 -mt-24 flex h-[1050px] w-full flex-col items-center justify-center bg-background-full bg-cover bg-center bg-no-repeat">
      <h1 className="absolute top-36 z-20 text-[225px] font-bold tracking-[40px] text-[#392A0B]">
        LOUEZ
      </h1>
      <h1 className="absolute top-96 z-40 text-[190px] font-light text-foreground opacity-80">
        SIMPLEMENT
      </h1>
      <p className="absolute top-[950px] z-50 text-[25px] text-foreground opacity-80">
        Laissez vous guider ▼
      </p>
      <span className="absolute top-[900px] z-40 h-[150px] w-full bg-gradient-to-b from-transparent to-black" />
      <div className="absolute left-0 top-0 z-30 h-full w-full bg-background-hover bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
}

export default FirstSection;
