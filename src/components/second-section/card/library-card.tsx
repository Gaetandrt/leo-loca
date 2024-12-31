function LibraryCard() {
  return (
    <div className="relative flex w-[300px] flex-col items-center justify-center p-4">
      <div className="bg-background-library-card h-[300px] w-[200px] bg-cover bg-center bg-no-repeat"></div>
      <p className="absolute -bottom-10 -left-4 z-10 font-sans text-[150px] font-bold text-foreground">
        4
      </p>
      <p className="ml-[55px] mt-2 max-w-48 font-semibold">
        Selection et suivi des sous locataires
      </p>
    </div>
  );
}

export default LibraryCard;
