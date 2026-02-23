import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-6">
            <li>
              <Link href="/leadership">
                Common Leadership
              </Link>
            </li>
            <li>
              <Link href="/newsletter">
                Newsletter
              </Link>
            </li>
            <li>
              <Link href="/sarp">
                AACP SARP
              </Link>
            </li>
            <li>
              <Link href="/internship">
                AAC Internship
              </Link>
            </li>
            <li>
              <Link href='/resources'>
                Hotlines & Getting Help
              </Link>
            </li>
          </ul>
    </nav>
  );
}

function NavButton({ label, href, dropdownItems }: NavButtonProps) {
  if (!dropdownItems) {
    return (
      <li>
        <Link href={href} className="inline-flex items-center justify-center h-12 min-w-40 px-8 bg-gray-300 hover:bg-gray-400">
          {label}
        </Link>
      </li>
    );
  }

  return (
    <li className="relative group">
      <Link href={href} className="inline-flex items-center justify-center h-12 min-w-32 px-8 bg-gray-300 hover:bg-gray-400">
        {label}
      </Link>
      <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg min-w-[200px]">
        {dropdownItems.map((item) => (
          <Link 
            key={item.href}
            href={item.href} 
            className="block px-4 py-2 hover:bg-gray-100"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </li>
  );
}

interface NavButtonProps {
  label: string;
  href: string;
  dropdownItems?: { label: string; href: string }[];
}