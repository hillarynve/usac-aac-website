import { LuInstagram, LuLinkedin } from "react-icons/lu";
import { SOCIAL_LINKS } from "@/lib/site";

// `className` overrides the link color so the same icons work on light (header)
// and dark (footer) backgrounds.
export default function SocialNav({ className = "text-usac-blue hover:text-usac-blue-light" }: { className?: string }) {
  return (
    <div className="flex gap-3">
      <SocialButton
        label="LinkedIn"
        icon={<LuLinkedin className="w-6 h-6"/>}
        href={SOCIAL_LINKS.linkedin}
        className={className}
      />
      <SocialButton
        label="Instagram"
        icon={<LuInstagram className="w-6 h-6"/>}
        href={SOCIAL_LINKS.instagram}
        className={className}
      />
    </div>
  );
}

interface SocialButtonProps {
  label: string;
  icon: React.ReactNode;
  href: string;
  className: string;
}

function SocialButton({ label, icon, href, className }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center h-12 w-12 ${className}`}
    >
      {icon}
    </a>
  );
}
