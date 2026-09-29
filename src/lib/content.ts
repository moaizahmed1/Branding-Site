/** Photo slots. Drop the exported files into /public/images with these names. */
export const images = {
  hero: "/images/hero.jpg",
  about: "/images/about-player.png",
  processAssess: "/images/process-assess.png",
  processProgress: "/images/process-progress.png",
  eventCamp: "/images/event-camp.png",
  eventShowcase: "/images/event-showcase.png",
  eventSessions: "/images/event-sessions.png",
  postScouts: "/images/post-scouts.png",
  postAnalysis: "/images/post-analysis.png",
  postPathway: "/images/post-pathway.png",
} as const;

export const CTA_LABEL = "Get Your Blueprint";

export const philosophy = [
  { icon: "anchor", label: "Progress Over Perfection" },
  { icon: "route", label: "Process Over Pressure" },
  { icon: "target", label: "Development Over Shortcuts" },
] as const;

export const why = [
  {
    title: "Professional Insight",
    body: "Understand your game through expert football analysis.",
  },
  {
    title: "Personalised Development",
    body: "Receive a plan created specifically around your playing style.",
  },
  {
    title: "Clear Pathway",
    body: "Know exactly what to improve and what steps to take next.",
  },
];

export const packages = [
  {
    name: "Entry",
    price: "$249",
    blurb:
      "Starting point for players looking forward to understand their current ability.",
    features: [
      "Match assessment",
      "Player profile",
      "Strength analysis",
      "Development areas",
      "Recommendations",
    ],
    cta: "Start Now",
    featured: false,
  },
  {
    name: "Development",
    price: "$329",
    blurb:
      "Build your development plan a complete analysis package for players serious about improvement.",
    features: [
      "Video analysis",
      "Tactical review",
      "Technical review",
      "Performance clips",
      "Development roadmap",
    ],
    cta: "Build Your Blueprint",
    featured: true,
  },
  {
    name: "Performance",
    price: "$449",
    blurb:
      "Long-term development plan for players committed to continuous progression.",
    features: [
      "Match assessment",
      "Player profile",
      "Strength analysis",
      "Development areas",
      "Recommendations",
    ],
    cta: "Start Now",
    featured: false,
  },
];

export const analysisSteps = [
  {
    title: "Player Overview",
    body: "We’ll explore your goals, challenges, and lifestyle to create the right approach.",
  },
  {
    title: "Technical Evaluation",
    body: "Training and nutrition tailored to your lifestyle — realistic, flexible, and sustainable.",
  },
  {
    title: "Tactical Assessment",
    body: "We’ll explore your goals, challenges, and lifestyle to create the right approach.",
  },
  {
    title: "Strength Analysis",
    body: "We adapt your plan as your schedule, cycle, and needs shift.",
  },
  {
    title: "Development Priorities",
    body: "Progress doesn’t end here — we’ll refine, celebrate, and keep building together.",
  },
  {
    title: "Action Plan",
    body: "Progress doesn’t end here — we’ll refine, celebrate, and keep building together.",
  },
];

export const events = [
  {
    date: "12 — 14 Sep",
    title: "Blueprint Development Camp",
    body: "A three-day intensive with individual assessment built in.",
    image: images.eventCamp,
    position: "center",
  },
  {
    date: "4 Oct",
    title: "Showcase Day — Invite Only",
    body: "Selected players perform in front of scouting staff.",
    image: images.eventShowcase,
    position: "center",
  },
  {
    date: "Ongoing",
    title: "Specialist Technical Sessions",
    body: "Small-group, position-specific coaching.",
    image: images.eventSessions,
    position: "center",
  },
];

export const posts = [
  {
    date: "Aug 2025",
    tag: "Scouting",
    title: "How Scouts Evaluate Young Players",
    body: "Understanding the professional criteria that scouts use when assessing talent at every level of the game.",
    image: images.postScouts,
  },
  {
    date: "Aug 2025",
    tag: "Analysis",
    title: "Why Match Analysis Matters",
    body: "The difference between watching your matches and truly understanding what they reveal about your game.",
    image: images.postAnalysis,
  },
  {
    date: "Jul 2025",
    tag: "Development",
    title: "Building A Professional Football Pathway",
    body: "How a structured development plan creates clarity, confidence, and real measurable progression over time.",
    image: images.postPathway,
  },
];

/** Answers are placeholder copy — the Figma frame only defines the questions. */
export const faqs = [
  {
    q: "What exactly is a Blueprint?",
    a: "A Blueprint is a personalised development plan built from professional scouting principles and detailed match analysis. It shows where you excel, what to improve, and the exact steps to take next.",
  },
  {
    q: "Who is a Blueprint designed for?",
    a: "Ambitious players of any level who want honest, expert insight into their game and a clearer path forward — from academy hopefuls to those already in the professional environment.",
  },
  {
    q: "How does the process work?",
    a: "We assess your current level, help you understand your strengths and gaps, build a tailored plan to develop them, and track your progress as you move forward.",
  },
  {
    q: "How long will it take to see results?",
    a: "Every player is different. Most see clearer focus straight away, with measurable progress building over a few months of consistent work against their plan.",
  },
  {
    q: "Is this only for players seeking professional contracts?",
    a: "No. A Blueprint is for anyone who wants to get better and understand their game. Representation is offered separately, to selected players only.",
  },
  {
    q: "Can I get a Blueprint for my child?",
    a: "Yes. Parents and guardians can enquire on behalf of a younger player — just include their age and details in the enquiry form.",
  },
];

export const positions = [
  "Goalkeeper",
  "Defender",
  "Midfielder",
  "Winger",
  "Forward",
];

export const levels = [
  "Grassroots",
  "Academy",
  "Semi-professional",
  "Professional",
];
