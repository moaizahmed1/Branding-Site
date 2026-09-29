/** Every page in the site, grouped as in the Figma footer / navigation. */
export const routes = {
  home: "/",
  howItWorks: "/how-it-works",
  packages: "/packages",
  exampleBlueprint: "/example-blueprint",
  getBlueprint: "/get-your-blueprint",
  approach: "/our-approach",
  players: "/our-players",
  enquiry: "/enquiry",
  camps: "/camps",
  events: "/events",
  story: "/our-story",
  philosophy: "/our-philosophy",
  team: "/our-team",
  insights: "/insights",
  contact: "/#contact",
} as const;

export const footerColumns = [
  {
    title: "Your Blueprint",
    links: [
      { label: "How It Works", href: routes.howItWorks },
      { label: "Packages", href: routes.packages },
      { label: "Example Blueprint", href: routes.exampleBlueprint },
      { label: "Get Your Blueprint", href: routes.getBlueprint },
    ],
  },
  {
    title: "Representation",
    links: [
      { label: "Our Approach", href: routes.approach },
      { label: "Our Players", href: routes.players },
      { label: "Enquiry", href: routes.enquiry },
    ],
  },
  {
    title: "Camps & Events",
    links: [
      { label: "Blueprint Camps", href: routes.camps },
      { label: "Upcoming Events", href: routes.events },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: routes.story },
      { label: "Our Philosophy", href: routes.philosophy },
      { label: "Our Team", href: routes.team },
      { label: "Insights", href: routes.insights },
    ],
  },
];

/** Top navigation (Figma header). */
export const navLinks = [
  { label: "Our Blueprint", href: routes.howItWorks },
  { label: "Representation", href: routes.approach },
  { label: "Camps & Events", href: routes.camps },
  { label: "About", href: routes.story },
  { label: "Insights", href: routes.insights },
  { label: "Contact", href: routes.contact },
];
