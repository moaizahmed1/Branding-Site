/** Copy + data for the inner pages, taken from the Figma frames. */

/* ---------- How it works ---------- */
export const processSteps = [
  { title: "Submit Your Footage", body: "Upload 2–3 full match recordings. We need to see you in context." },
  { title: "Complete Your Profile", body: "Tell us your position, age, level, and personal development goals." },
  { title: "Professional Analysis", body: "Our analysts assess your footage using professional scouting criteria." },
  { title: "Tactical & Technical Review", body: "A detailed breakdown of your positioning, decision-making and technical output." },
  { title: "Strength & Development Report", body: "We document what you do well and where your biggest gains lie." },
  { title: "Your Blueprint Delivered", body: "Receive your complete personalised report within 7–10 working days." },
];

export const pillars = [
  "Technical Quality",
  "Tactical Awareness",
  "Physical Attributes",
  "Mental Game",
  "Positioning & Movement",
  "Decision Making",
];

/* ---------- Packages ---------- */
export const packagePlans = [
  {
    name: "Entry",
    price: "£249",
    blurb:
      "A professional assessment designed to help players understand their current ability and identify areas for improvement.",
    features: [
      "Match footage assessment",
      "Player profile",
      "Strength analysis",
      "Development areas",
      "Professional recommendations",
      "Next steps guidance",
    ],
    cta: "Start Your Blueprint",
    featured: false,
  },
  {
    name: "Development",
    price: "£329",
    blurb:
      "Our most comprehensive development package for players who want deeper insight and a clearer improvement pathway.",
    features: [
      "Everything in Entry Blueprint",
      "Detailed video analysis",
      "Tactical and technical review",
      "Edited performance clips",
      "Personalised development plan",
      "Development recommendations",
      "Follow-up support",
    ],
    cta: "Build Your Blueprint",
    featured: true,
  },
  {
    name: "Performance",
    price: "£449",
    blurb:
      "For players committed to continuous improvement and long-term progression.",
    features: [
      "Everything in Development Blueprint",
      "Regular footage reviews",
      "Progress tracking",
      "Updated development plans",
      "Ongoing expert guidance",
      "Career pathway support",
    ],
    cta: "Discuss Your Development",
    featured: false,
  },
];

export const everyPackage = [
  {
    title: "Professional Analysis Framework",
    body: "Every report is built on the same criteria used by professional scouts and performance coaches.",
  },
  {
    title: "Individual Player Report",
    body: "A personalised document focused entirely on your game, your strengths, and your development.",
  },
  {
    title: "Development Priorities",
    body: "Clear, actionable areas to work on — no generic feedback, just what matters for your progression.",
  },
];

export const compareRows: { label: string; values: [boolean, boolean, boolean] }[] = [
  { label: "Match Analysis", values: [true, true, true] },
  { label: "Video Review", values: [false, true, true] },
  { label: "Q&A Session", values: [true, true, true] },
  { label: "Monthly Check-ins", values: [false, false, true] },
  { label: "Priority Turnaround", values: [false, false, true] },
];

/* ---------- Example blueprint ---------- */
export const reportScores = [
  { label: "Technical", value: 75 },
  { label: "Tactical", value: 82 },
  { label: "Physical", value: 68 },
  { label: "Mental", value: 79 },
  { label: "Overall", value: 77 },
];

export const reportExcerpts = [
  {
    tag: "Technical Output",
    title: "First Touch & Ball Control",
    body: "Richardson shows strong first touch under pressure and skillfully moves the ball in tight spaces. Improving his weaker foot control is essential for his growth.",
  },
  {
    tag: "Tactical Awareness",
    title: "Positional Understanding",
    body: "He understands his defensive role well, consistently positioning correctly and excelling in transition by reading second balls and supporting the press.",
  },
  {
    tag: "Development Priority",
    title: "Attacking Third Movement",
    body: "To advance, Richardson should make more purposeful runs beyond the defense and into the box, boosting his goal contributions with decisive forward play.",
  },
];

/* ---------- Representation ---------- */
export const principles = [
  { title: "Honesty First", body: "We tell players what they need to hear, not what they want to hear." },
  { title: "Long-Term Thinking", body: "We build careers, not short-term deals." },
  { title: "Player-Centred", body: "Every decision starts and ends with what is best for the player." },
];

export const representationSteps = [
  { title: "Initial Meeting", body: "A private conversation to understand your situation, goals and where you see your career going." },
  { title: "Assessment", body: "We assess whether representation is the right fit and whether we can genuinely help." },
  { title: "Partnership Agreement", body: "If it is a match, we formalise the relationship and outline exactly how we will work together." },
  { title: "Active Representation", body: "We go to work — identifying opportunities, managing contacts, and supporting your development." },
];

export const beforeYouApply = [
  "Age 16 and above",
  "Playing at semi-professional level or above (or academy)",
  "Clear career ambition and commitment",
  "Open to honest, professional feedback",
];

/** Roster photos. `fallback` stands in until a dedicated export exists. */
export const roster = [
  { name: "Jordan Ellis", role: "Winger", image: "/images/roster-jordan-ellis.png", tall: true, position: "center" },
  { name: "Alex Carter", role: "Forward", image: "/images/roster-alex-carter.png", tall: false, position: "center" },
  { name: "Ethan Brown", role: "Striker", image: "/images/roster-ethan-brown.png", tall: true, position: "center" },
  { name: "Ryan Mitchell", role: "Defender", image: "/images/roster-ethan-brown.png", tall: false, position: "50% 8%" },
  { name: "Sam Thompson", role: "Midfielder", image: "/images/roster-alex-carter.png", tall: false, position: "50% 60%" },
  { name: "Liam Johnson", role: "Goalkeeper", image: "/images/roster-liam-johnson.png", tall: false, position: "center" },
];

/* ---------- Camps ---------- */
export const campDays = [
  { day: "Day 01", title: "Assessment & Overview", body: "Technical testing, individual Blueprint assessment session, and team orientation to set the tone for the camp." },
  { day: "Day 02", title: "Position-Specific Coaching", body: "Morning tactical sessions, position groups in the afternoon, and an in-depth video review session in the evening." },
  { day: "Day 03", title: "Showcase & Feedback", body: "Full match in the morning, coach debrief after, and individual Blueprint feedback for every player." },
];

export const campAudience = [
  { title: "Academy Players", body: "Players in academy systems seeking elite preparation standards and professional-level coaching environments." },
  { title: "Semi-Professional Players", body: "Players already competing at a high level who are looking for a development edge to reach the next tier." },
  { title: "Grassroots Players", body: "Serious grassroots players with a clear ambition to progress — committed, coachable, and ready to be challenged." },
];

export const campDetails = [
  { icon: "calendar", label: "Dates", value: "12–14 September 2026" },
  { icon: "pin", label: "Location", value: "TBC (North West England)" },
  { icon: "team", label: "Places", value: "Maximum 24 players" },
  { icon: "pound", label: "Cost", value: "£349 per player" },
] as const;

/* ---------- Events ---------- */
export const eventList = [
  { date: "12–14 Sep 2026", title: "Blueprint Development Camp", place: "North West England", badge: "Open", action: "Register" },
  { date: "4 Oct 2026", title: "Showcase Day — Invite Only", place: "Manchester", badge: "Invite Only", note: "Invite Only" },
  { date: "Ongoing", title: "Specialist Technical Sessions", place: "Multiple Locations", badge: "Booking Open", action: "Register" },
  { date: "Nov 2026", title: "End of Season Blueprint Review", place: "Online", badge: "Coming Soon", note: "Details TBC" },
] as { date: string; title: string; place: string; badge: string; action?: string; note?: string }[];

/* ---------- About ---------- */
export const milestones = [
  { year: "2022", text: "First Blueprint delivered. A single player. A single report. The idea proved itself." },
  { year: "2023", text: "50 players across 8 counties. The process sharpened. The results spoke." },
  { year: "2024", text: "Expanded to include representation. Development and career management under one roof." },
  { year: "2025", text: "500+ Blueprints delivered. Camps launched. National reach." },
  { year: "2026", text: "Building the infrastructure to support the next generation at scale." },
];

export const beliefs = [
  { title: "Every player deserves professional-level insight.", body: "Not just the ones at elite clubs. Wherever you play, whoever you are — the quality of analysis should be the same." },
  { title: "Development without data is guesswork.", body: "The Blueprint removes the guesswork. Every finding is grounded in professional criteria, not opinion." },
  { title: "A career built on the right foundations is a career that lasts.", body: "Short-term results matter less than long-term growth. We build for the player’s future, not the next trial." },
];

export const stats = [
  { value: "500+", label: "Blueprints Delivered" },
  { value: "3", label: "Years Operating" },
  { value: "8+", label: "Counties Reached" },
  { value: "100%", label: "Independent" },
];

export const inPractice = [
  { label: "Analysis", text: "Every assessment uses the same framework that professional clubs use. No shortcuts." },
  { label: "Planning", text: "Development plans are structured around what the player can realistically action in training." },
  { label: "Feedback", text: "Every Blueprint is presented clearly so the player can understand and act on every finding." },
];

export const teamMembers = [
  { name: "Marcus Reid", role: "Head Analyst", bio: "Former professional player with 8 years scouting experience across the Football League." },
  { name: "Daniel O’Brien", role: "Lead Coach", bio: "UEFA A Licence holder. Specialist in technical and positional development." },
  { name: "Asha Kamara", role: "Player Liaison", bio: "Dedicated support throughout the Blueprint process and beyond." },
  { name: "James Whitfield", role: "Representation Manager", bio: "10 years in football agency. Trusted relationships across non-league to Championship." },
];

export const credentials = [
  { title: "UEFA Licensed Coaching Staff", body: "Our coaching team holds UEFA A and B Licences, ensuring every development plan meets the highest professional standards." },
  { title: "Professional Club Alumni", body: "Our analysts and coaches have played and worked inside professional clubs, bringing genuine first-hand knowledge to every assessment." },
  { title: "Registered & Compliant", body: "BLUEPRINT XI operates with full transparency. Registered, compliant and committed to ethical practice across all services." },
];

export const openRoles = [
  { title: "Regional Scout", body: "Identifying and assessing talent across grassroots and semi-professional football." },
  { title: "Development Analyst", body: "Contributing to Blueprint reports using our professional analysis framework." },
];

/* ---------- Insights ---------- */
export const featuredArticle = {
  tag: "Scouting",
  title: "How Scouts Really Evaluate Players — And What Most Players Get Wrong",
  body: "Most players think scouts are watching whether they score or assist. They are not. Professional scouts evaluate a completely different set of criteria — and understanding those criteria can change how you prepare, how you play, and how you present yourself.",
};

export const articles = [
  { date: "Aug 2025", tag: "Scouting", title: "How Scouts Evaluate Young Players", body: "Understanding the professional criteria that scouts use when assessing talent.", image: "/images/insights-grid.png" },
  { date: "Aug 2025", tag: "Analysis", title: "Why Match Analysis Matters", body: "The difference between watching your matches and truly understanding what they reveal.", image: "/images/insights-grid.png" },
  { date: "Jul 2025", tag: "Development", title: "Building A Professional Football Pathway", body: "How a structured development plan creates clarity, confidence and progression.", image: "/images/insights-grid.png" },
  { date: "Jun 2025", tag: "Mindset", title: "The Mental Side of Player Development", body: "Why psychological readiness is as important as technical skill.", image: "/images/insights-grid.png" },
  { date: "Jun 2025", tag: "Tactics", title: "Positional Intelligence — What It Is and How to Develop It", body: "Moving beyond physical ability to football-specific thinking.", image: "/images/insights-grid.png" },
  { date: "May 2025", tag: "Scouting", title: "What Academy Scouts Look for at Different Ages", body: "From U12 to U18 — how the evaluation criteria evolves.", image: "/images/insights-grid.png" },
];

/* ---------- Get your blueprint ---------- */
export const getStartedPackages = [
  { name: "Entry", price: "£249", blurb: "First analysis — understand where you stand today." },
  { name: "Development", price: "£329", blurb: "Full analysis with video, tactical and technical review." },
  { name: "Performance", price: "£449", blurb: "Long-term plan with monthly check-ins and career guidance." },
];

export const whatHappensNext = [
  "We review your submission within 24 hours",
  "You receive a confirmation and payment link",
  "Analysis begins once payment is confirmed",
  "Blueprint delivered in 7–10 working days",
];
