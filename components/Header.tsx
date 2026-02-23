import Nav from "./Nav";
import SocialNav from "./SocialNav";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-20">
      <p className="text-5xl font-bold">AAC</p>
      <Nav />
      <SocialNav />
    </header>
  );
}