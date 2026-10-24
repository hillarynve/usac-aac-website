import Link from "next/link";
import { Mulish } from 'next/font/google';
import { NAV_LINKS, type NavLink } from "@/lib/site";

const mulish = Mulish({ subsets: ['latin']});

export default function Nav() {
  return (
    <nav className="hidden lg:block">
      <ul className={`flex gap-3 ${mulish.className}`}>
        {NAV_LINKS.map((link) => (
          <NavButton key={link.href} {...link} />
        ))}
      </ul>
    </nav>
  );
}

function NavButton({ label, href, dropdownItems }: NavLink) {
  if (!dropdownItems) {
    return (
      <li>
        <Link href={href} className="inline-flex text-usac-blue hover:text-usac-blue-light items-center justify-center h-12 px-6">
          {label}
        </Link>
      </li>
    );
  }

  return (
    <li className="relative group">
      <Link href={href} className="inline-flex text-usac-blue hover:text-usac-blue-light items-center justify-center h-12 px-6">
        {label}
      </Link>
      <div className="absolute top-full left-0 hidden text-usac-blue group-hover:block group-focus-within:block bg-white shadow-lg min-w-[200px] z-20">
        {dropdownItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2 hover:bg-gray-100 hover:text-usac-blue-light"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </li>
  );
}
