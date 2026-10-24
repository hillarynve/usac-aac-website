import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import SocialNav from "./SocialNav";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin']});

export default function Header() {
  return (
    <header className="relative z-30 flex items-center justify-between gap-6 bg-white px-6 py-6 md:px-10 md:py-10">
      <Link href="/" className={`text-5xl text-usac-blue font-bold hover:text-usac-blue-light ${inter.className}`}>AAC</Link>
      <Nav />
      <div className="flex items-center gap-2">
        <SocialNav />
        <MobileNav />
      </div>
    </header>
  );
}
