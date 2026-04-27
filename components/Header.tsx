import Link from "next/link";
import Nav from "./Nav";
import SocialNav from "./SocialNav";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin']});

export default function Header() {
  return (
    <header className="flex items-center justify-between p-10">
      <Link href="/" className={`text-5xl text-usac-blue font-bold hover:text-usac-blue-light ${inter.className}`}>ACC</Link>
      <Nav />
      <SocialNav />
    </header>
  );
}