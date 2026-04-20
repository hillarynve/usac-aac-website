import Link from "next/link";
import { Mulish } from 'next/font/google';

const mulish = Mulish({ subsets: ['latin']});

export default function Nav() {
  return (
    <nav>
      <ul className={`flex gap-3 ${mulish.className}`}>
          <NavButton label="Leadership" href="/leadership" dropdownItems={[
            {label: '25-26 Leadership', href: '/leadership/25-26-leadership'},
            {label: '25-26 Senator Guide', href: '/leadership/25-26-senator-guide'},
            {label: 'Previous', href: '/leadership/previous'},
          ]}/>
          <NavButton label="Research" href="/newsletter"/>
          <NavButton label="SARP" href="/sarp"/>
          <NavButton label="Internship" href="/internship"/>
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
        <Link href={href} className="inline-flex text-usac-blue hover:text-usac-blue-light items-center justify-center h-12 min-w-40 px-8">
          {label}
        </Link>
      </li>
    );
  }

  return (
    <li className="relative group">
      <Link href={href} className="inline-flex text-usac-blue hover:text-usac-blue-light items-center justify-center h-12 min-w-32 px-8">
        {label}
      </Link>
      <div className="absolute top-full left-0 hidden text-usac-blue group-hover:block bg-white shadow-lg min-w-[200px] z-10">
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

interface NavButtonProps {
  label: string;
  href: string;
  dropdownItems?: { label: string; href: string }[];
}