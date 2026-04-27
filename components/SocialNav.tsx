import { LuInstagram, LuLinkedin } from "react-icons/lu";

export default function SocialNav() {
  return (
    <div className="flex gap-3">
    <SocialButton 
      label="in" 
      icon={<LuLinkedin className="w-6 h-6"/>}
      href="https://www.linkedin.com/company/ucla-community-service-commission/"
    />
      <SocialButton 
        label="IG" 
        icon={<LuInstagram className="w-6 h-6"/>}
        href="https://www.instagram.com/usacaac/"
      />
    </div>
  );
}

interface SocialButtonProps {
  label: string;
  icon?: React.ReactNode;
  href: string;
}

function SocialButton({ label, icon, href }: SocialButtonProps) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center h-12 w-12 text-usac-blue hover:text-usac-blue-light"
    >
      {icon ? icon : label}
    </a>
  );
}