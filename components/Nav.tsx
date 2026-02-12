import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-3">
          <NavButton label="Home" href="/"/>
          <NavButton label="Commission Leadership" href="/leadership" dropdownItems={[
            {label: 'Leadership 1', href: '/leadership/1'},
            {label: 'Leadership 2', href: '/leadership/2'},
            {label: 'Leadership 3', href: '/leadership/3'},
          ]}/>
          <NavButton label="Newsletter" href="/newsletter"/>
          <NavButton label="AAC Internship" href="/internship"/>
          <NavButton label="AAC SARP" href="/sarp"/>
          <NavButton label="Resources" href="/resources" dropdownItems={[
            {label: 'Resource 1', href: '/resources/1'},
            {label: 'Resource 2', href: '/resources/2'},
            {label: 'Resource 3', href: '/resources/3'},
          ]}/>
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