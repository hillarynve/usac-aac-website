// Shared site-wide content for the header and footer. Edit links here so the
// navbar and footer stay in sync across every page.

export interface NavLink {
  label: string;
  href: string;
  dropdownItems?: { label: string; href: string }[];
}

export const NAV_LINKS: NavLink[] = [
  {
    label: "Leadership",
    href: "/leadership",
    dropdownItems: [
      { label: "25-26 Leadership", href: "/leadership/25-26-leadership" },
      { label: "25-26 Senator Guide", href: "/leadership/25-26-senator-guide" },
      { label: "Previous", href: "/leadership/previous" },
    ],
  },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Research", href: "/research" },
  { label: "SARP", href: "/sarp" },
  { label: "Internship", href: "/internship" },
  {
    label: "Resources",
    href: "/resources",
    dropdownItems: [
      { label: "Bruin Opp", href: "/resources/BruinOpp" },
      { label: "Funding", href: "/resources/Funding" },
      { label: "Study Space", href: "/resources/StudySpace" },
    ],
  },
];

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/usacaac/",
  linkedin: "https://www.linkedin.com/in/academic-affairs-commission-marketing-and-publicity-581111339",
};

export const CONTACT_EMAIL = "marketingaac@usac.ucla.edu";
