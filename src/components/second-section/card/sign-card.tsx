function SignCard() {
  return (
    <div className="relative flex w-[300px] flex-col items-center justify-center p-4">
      <div className="bg-background-sign-card h-[300px] w-[200px] bg-cover bg-center bg-no-repeat"></div>
      <p className="absolute -bottom-10 left-2 z-10 font-sans text-[150px] font-bold text-foreground">
        1
      </p>
      <p className="ml-[30px] mt-2 max-w-48 font-semibold">
        Conformité et gestion administratives
      </p>
    </div>
  );
}

export default SignCard;
