function CoupleCard() {
  return (
    <div className="relative flex w-[300px] flex-col items-center justify-center p-4">
      <div className="bg-background-couple-card h-[300px] w-[200px] bg-cover bg-center bg-no-repeat"></div>
      <p className="absolute -bottom-10 -left-4 z-10 font-sans text-[150px] font-bold text-foreground">
        3
      </p>
      <p className="ml-[45px] mt-2 max-w-48 font-semibold">
        Optimisation et outils pratiques
      </p>
    </div>
  );
}

export default CoupleCard;
