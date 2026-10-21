/** Single-page site: every section has an anchor; one extra page for the sample report. */
export const routes = {
  home: "/",
  blueprint: "/#what-is-a-blueprint",
  founder: "/#founder",
  howItWorks: "/#how-it-works",
  packages: "/#packages",
  services: "/#services",
  getStarted: "/#get-started",
  sampleBlueprint: "/sample-blueprint",
} as const;

/** Top navigation (also used by the menu panel). */
export const navLinks = [
  { label: "The Blueprint", href: routes.blueprint },
  { label: "Founder", href: routes.founder },
  { label: "How It Works", href: routes.howItWorks },
  { label: "Packages", href: routes.packages },
  { label: "Services", href: routes.services },
  { label: "Contact", href: routes.getStarted },
];

export const footerColumns = [
  {
    title: "Your Blueprint",
    links: [
      { label: "What is a Blueprint?", href: routes.blueprint },
      { label: "Sample Blueprint", href: routes.sampleBlueprint },
      { label: "How It Works", href: routes.howItWorks },
      { label: "Packages", href: routes.packages },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Beyond the Blueprint", href: routes.services },
      { label: "Meet the Founder", href: routes.founder },
      { label: "Get Started", href: routes.getStarted },
    ],
  },
];
