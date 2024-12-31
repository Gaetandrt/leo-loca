import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

function TopNav({ children }: Props) {
  return (
    <header className="flex w-full flex-col items-center justify-center bg-transparent">
      <nav className="z-30 flex w-full items-center justify-between p-8 text-background">
        <div className="flex items-center gap-2 font-bold">AGENCE KUSTER</div>
        <div className="flex items-center gap-5 font-light">
          <Link href="/">ACCUEIL</Link>
          <Link href="/">SERVICES</Link>
          <Link href="/">NOUS</Link>
          <Link href="/">CONTACT</Link>
        </div>
      </nav>
      {children}
    </header>
  );
}

export default TopNav;
