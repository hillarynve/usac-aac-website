import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-3">
          <NavButton label="Home" href="/"/>
          <NavButton label="Commission Leadership" href="/leadership" dropdownItems={[
            {label: '25-26 Leadership', href: '/leadership/25-26-leadership'},
            {label: '25-26 Senator Guide', href: '/leadership/25-26-senator-guide'},
          ]}/>
          <NavButton label="Newsletter" href="/newsletter"/>
          <NavButton label="AAC Internship" href="/internship"/>
          <NavButton label="AAC SARP" href="/sarp"/>
          <NavButton label="Resources" href="/resources" dropdownItems={[
            {label: 'Bruin Opp', href: '/resources/BruinOpp'},
            {label: 'Funding', href: '/resources/Funding'},
            {label: 'Study Space', href: '/resources/StudySpace'},
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