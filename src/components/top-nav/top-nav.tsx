import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

function TopNav({ children }: Props) {
  return (
    <header className="flex flex-col items-center justify-center w-full bg-transparent">
      <nav className="flex justify-between items-center p-8 w-full z-30">
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
