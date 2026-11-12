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
      name: "The Blueprint",
      price: "£149",
      priceNote: "One-off assessment",
      tagline: "Understand the player you are",
      intro:
        "A personalised professional assessment that gives players a deeper understanding of their game and a clear direction for development.",
      features: [
        { title: "Your Player Identity", body: "An assessment of your footballing and physical profile, identifying the type of player you are." },
        { title: "The Professional Scouting Report", body: "A detailed review of one full match, covering technical, tactical, physical and psychological observations." },
        { title: "Your Super Strengths", body: "Three standout strengths and how to maximise them." },
        { title: "The Growth Zone", body: "Three priority areas for development." },
        { title: "The Blueprint XI Dossier", body: "A professionally designed 7-page digital PDF to keep and revisit." },
      ],
      cta: "Get Your Blueprint",
      featured: false,
    },
    {
      name: "Blueprint Plus",
      price: "£299",
      priceNote: "One-off development experience",
      tagline: "See your game through a professional lens",
      intro:
        "Everything in The Blueprint, combined with deeper video analysis, personal interaction and a more comprehensive development plan.",
      features: [
        { title: "Two Match Analysis", body: "Compare performances to identify recurring strengths and habits." },
        { title: "The Video Room", body: "A personalised video breakdown with annotated clips and voice-over." },
        { title: "The Academy Lens", body: "Position-specific insight into the qualities professional academies assess." },
        { title: "Your 90 Day Roadmap", body: "Structured development priorities across three months." },
        { title: "The 1-2-1 Debrief", body: "A 45-minute online session with an experienced professional to discuss findings and answer questions." },
        { title: "Performance Scoreboard", body: "Measurable performance behaviours, scored." },
      ],
      cta: "Get Blueprint Plus",
      featured: true,
    },
    {
      name: "Blueprint Elite",
      price: "£300",
      priceNote: "per month",
      tagline: "Ongoing personalised development programme",
      intro:
        "A high-support programme for players seeking ongoing expert assessment, accountability and individual development support.",
      features: [
        { title: "The Elite Onboarding Assessment", body: "A full initial Blueprint Plus assessment." },
        { title: "Monthly Match Review", body: "Analysis of one additional match each month." },
        { title: "Monthly Development Meeting", body: "A 45-minute online session with our founder Ben Dickson to review progress and adjust priorities." },
        { title: "Your Development Dashboard", body: "An evolving record of targets, achievements and development needs." },
        { title: "The Position Masterclass", body: "A monthly position-specific learning resource or tailored video lesson." },
        { title: "Priority Support", body: "Scheduled opportunities to ask development-related questions between reviews." },
        { title: "Beyond The Blueprint", body: "Exclusive access to additional development opportunities such as 1-2-1 sessions, camps and trial events." },
      ],
      cta: "Apply for Blueprint Elite",
      featured: false,
    },
  ],
  includedLabel: "What's included",
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
