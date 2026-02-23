export default function SocialNav() {
  return (
    <div className="flex gap-3">
    <SocialButton 
      label="in" 
      href="https://www.linkedin.com/company/ucla-community-service-commission/"
    />
      <SocialButton 
        label="IG" 
        href="https://www.instagram.com/usacaac/"
      />
    </div>
  );
}

interface SocialButtonProps {
  label: string;
  href: string;
}

function SocialButton({ label, href }: SocialButtonProps) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center h-12 w-12 bg-gray-300 hover:bg-gray-400"
    >
      {label}
    </a>
  );
}