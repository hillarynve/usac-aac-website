import Link from "next/link";
import { Inter, Mulish } from 'next/font/google';
import { LuMail } from "react-icons/lu";
import SocialNav from "./SocialNav";
import { CONTACT_EMAIL, NAV_LINKS } from "@/lib/site";

const inter = Inter({ subsets: ['latin']});
const mulish = Mulish({ subsets: ['latin']});

export default function Footer() {
  return (
    <footer className={`bg-usac-navy text-white ${mulish.className}`}>
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <Link href="/" className={`text-5xl font-bold hover:text-white/80 ${inter.className}`}>AAC</Link>
          <p className="mt-4 text-lg">UCLA Academic Affairs Commission</p>
          <p className="mt-1 text-sm text-white/70">Undergraduate Students Association Council</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-usac-gold">Explore</h2>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/85 hover:text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-usac-gold">Contact Us</h2>
          <p className="text-white/85">Send any questions to:</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-1 inline-flex items-center gap-2 break-all font-semibold hover:underline"
          >
            <LuMail className="h-5 w-5 shrink-0"/>
            {CONTACT_EMAIL}
          </a>

          <p className="mt-6 text-white/85">Follow us on social media</p>
          <div className="-ml-3">
            <SocialNav className="text-white hover:text-usac-gold"/>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs tracking-[0.2em] text-white/60 uppercase md:px-10">
          © {new Date().getFullYear()} UCLA Academic Affairs Commission
        </p>
      </div>
    </footer>
  );
}
