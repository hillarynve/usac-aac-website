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