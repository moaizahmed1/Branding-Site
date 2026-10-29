/** Photo slots. Drop the exported files into /public/images with these names. */
export const images = {
  hero: "/images/hero.webp",
  founder: "/images/founder.jpg",
  sampleHero: "/images/hero-page.jpg",
} as const;

export const CTA_LABEL = "Get Your Blueprint";

/* ---------- Hero ---------- */
export const hero = {
  pill: "BLUEPRINT XI",
  tagline: "Your game. Your blueprint.",
  title: "Every footballer has a unique journey.",
  paragraphs: [
    "Through expert scouting and analysis, we create your personalised Blueprint, identifying your strengths, areas for development and opportunities to progress.",
    "With tailored coaching, video analysis and ongoing support, we help you take your game to the next level.",
  ],
  note: "*Founded by a Premier League Head of Academy Recruitment",
};

/* ---------- What is a Blueprint? ---------- */
export const whatIs = {
  title: "What is a Blueprint?",
  paragraphs: [
    "Your Blueprint is a personalised roadmap for your football development. Through professional scouting and analysis, we identify your key strengths, areas for improvement and provide expert recommendations to help you progress.",
    "Beyond your Blueprint, we also offer tailored coaching, video analysis and ongoing support to help you take your game to the next level.",
  ],
  pillars: [
    { title: "Strengths", body: "What sets you apart." },
    { title: "Development", body: "Where to improve." },
    { title: "Next Steps", body: "How to progress." },
  ],
  example: {
    eyebrow: "Example Blueprint",
    title: "Preview a personalised player assessment",
    cta: "View Sample Blueprint",
  },
};

/* ---------- Meet the Founder ---------- */
export const founder = {
  eyebrow: "Meet the Founder",
  name: "Ben Dickson",
  role: "Premier League Head of Academy Recruitment",
  quote:
    "I know what it takes to succeed at the highest level and what academies look for. Blueprint XI gives players a clearer understanding of their game and a roadmap to reach their potential.",
};

/* ---------- How It Works ---------- */
export const howItWorks = {
  eyebrow: "How It Works",
  title: "Four Simple Steps.",
  steps: [
    { title: "Choose Your Package", body: "Select the Blueprint that suits your needs." },
    { title: "Submit Your Footage", body: "Send us your match footage for assessment." },
    { title: "Expert Analysis", body: "Our experienced scouts review your performance." },
    { title: "Receive Your Blueprint", body: "Get your personalised assessment and recommendations." },
  ],
};

/* ---------- Packages ---------- */
export const packages = {
  eyebrow: "Our Packages",
  title: "Find Your Blueprint.",
  plans: [
    {
      name: "Blueprint",
      tagline: "Understand your game",
      features: [
        "Professional scouting assessment",
        "Strengths and development areas",
        "Personalised Blueprint",
        "Expert recommendations",
      ],
      featured: false,
    },
    {
      name: "Blueprint Plus",
      tagline: "Develop your game",
      features: [
        "Everything in Blueprint",
        "Individual video analysis",
        "Development guidance",
        "Follow-up review",
      ],
      featured: true,
    },
    {
      name: "Blueprint Elite",
      tagline: "Progress your game",
      features: [
        "Everything in Plus",
        "Personalised coaching",
        "Ongoing player support",
        "Progress reviews",
      ],
      featured: false,
    },
  ],
  cta: "Buy Now",
};

/* ---------- Beyond the Blueprint ---------- */
export const beyond = {
  title: "Beyond the Blueprint",
  body: "Our support doesn't stop at your Blueprint. Access tailored services to help turn your development plan into progress.",
  services: [
    { icon: "coaching", title: "1-to-1 Coaching", body: "Individual sessions tailored to your development needs." },
    { icon: "video", title: "Video Analysis", body: "Review your performances and improve your understanding of the game." },
    { icon: "camps", title: "Camps & Clinics", body: "Specialist development experiences to challenge and improve your game." },
    { icon: "mentoring", title: "Player Mentoring / Representation", body: "Expert guidance and support throughout your development journey." },
  ],
} as const;

/* ---------- Get Started ---------- */
export const getStarted = {
  eyebrow: "Get Started",
  tag: "Contact Blueprint XI",
  title: "Your Journey Starts Here.",
  body: "Ready to understand your game and take the next step? Get in touch to find out how Blueprint XI can support your development.",
  cta: "Get in Touch",
};

/* ---------- Form options ---------- */
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
