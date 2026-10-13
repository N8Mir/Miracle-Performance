// Pilates studio page content.
// Everything Liz or Nate will want to edit lives here, not in the page component.
//
// HOW TO SWAP IN REAL CONTENT
//   • Text marked "PLACEHOLDER" is temporary. Replace the string, keep the quotes.
//   • Photos: drop the file in /public/pilates/ and set `src` on the matching
//     slot below (e.g. src: "/pilates/liz-headshot.webp"). Until `src` is set,
//     the page shows a labeled placeholder frame describing the shot to take.
//   • Prices come from WellnessLiving. If a price changes there, change it here.

// Booking link. PLACEHOLDER: swap for the Intro Reformer Session's
// "Direct booking URL" from WellnessLiving (Setup > Appointment > Intro > bottom of page).
export const PILATES_BOOK_URL =
  "https://www.wellnessliving.com/schedule/miracleperformance";

export const PILATES_TEXT = "sms:12168329212";

export const studio = {
  // Working name from Liz. Change both lines when the name is final.
  name: "The Room",
  tagline: "A Contrology Practice",
  eyebrow: "Private reformer studio at Miracle Performance",
  intro:
    "PLACEHOLDER: Classical reformer Pilates, one or two clients at a time. Two tower reformers, a private room, and an instructor whose only focus for fifty minutes is how you move.",
  chips: ["Private & duet only", "2 tower reformers", "50-minute sessions", "Beachwood, OH"],
};

export const steps = [
  {
    title: "Book your intro",
    meta: "45 min · $50",
    body:
      "Learn the reformer, the fundamentals, and the plan for your goals. Come solo, or bring a partner and split it.",
  },
  {
    title: "Choose private or duet",
    meta: "50 min sessions",
    body:
      "Train one-on-one, or side by side with a friend on the second tower. Same instructor, same attention.",
  },
  {
    title: "Pick a pack",
    meta: "Intro credited",
    body:
      "Buy a 5- or 10-pack within 7 days of your intro and the intro price comes off.",
  },
];

export const formats = [
  {
    name: "Private",
    length: "50 minutes",
    people: "1 client",
    body:
      "PLACEHOLDER: Fully individual programming built around your body, your history and your goals. Ideal for rehab, technique and anyone who wants every cue to be theirs.",
  },
  {
    name: "Duet",
    length: "50 minutes",
    people: "2 clients",
    body:
      "PLACEHOLDER: Two reformers, two people, one session. Train with a partner, friend or family member; each person books and pays their own spot.",
  },
];

// Prices. `member` = MP members + Founding clients. `std` = standard new-client rate.
export const pricing = {
  intro: {
    price: 50,
    note: "45 minutes. $50 per session, solo or duet ($25 each for two). One intro per person.",
  },
  private: [
    { label: "Single session", sessions: 1, std: 100, member: 90, valid: "Valid 30 days" },
    { label: "5-pack", sessions: 5, std: 475, member: 425, valid: "Use within 8 weeks" },
    { label: "10-pack", sessions: 10, std: 900, member: 825, valid: "Use within 16 weeks" },
  ],
  duet: [
    { label: "Single session", sessions: 1, std: 65, member: 60, valid: "Valid 30 days" },
    { label: "5-pack", sessions: 5, std: 300, member: 285, valid: "Use within 8 weeks" },
    { label: "10-pack", sessions: 10, std: 575, member: 550, valid: "Use within 16 weeks" },
  ],
  memberNote:
    "Miracle Performance members and Founding clients. Founding rate is open to new clients who start within the first 60 days after opening. Ask when you book your intro.",
};

export const instructor = {
  name: "Liz Newman",
  instagram: "releasewithliz",
  photo: {
    src: null,
    label: "Liz headshot",
    hint: "Portrait 4:5, natural light, in the studio if possible",
  },
  credentials: ["PLACEHOLDER: Certification", "PLACEHOLDER: Years teaching", "PLACEHOLDER: Specialty"],
  bio: [
    "PLACEHOLDER: Liz's bio goes here, 100 to 150 words. Where she trained, how long she has been teaching, and what drew her to classical Pilates.",
    "PLACEHOLDER: A second short paragraph on who she loves working with and what a first session with her feels like.",
  ],
};

export const equipment = {
  title: "The reformers",
  // PLACEHOLDER: fill in when Liz sends make and model.
  model: "PLACEHOLDER: Make & model",
  body:
    "PLACEHOLDER: A sentence or two on the tower reformers: what the tower adds (springs, push-through bar, roll-down work) and why it matters for classical repertoire.",
};

// Photo slots for the gallery. Order = display order. First slot is the large one.
export const gallery = [
  { src: null, label: "The room, wide", hint: "Landscape 3:2, both reformers + wallpaper wall in frame" },
  { src: null, label: "Reformer detail", hint: "Square, close on springs, footbar or leather straps" },
  { src: null, label: "Liz cueing a client", hint: "Square, candid, mid-movement" },
  { src: null, label: "Duet in session", hint: "Landscape 3:2, two clients side by side" },
];

export const forWho = [
  "PLACEHOLDER: People coming back from injury who want careful, progressive work",
  "PLACEHOLDER: Athletes and lifters who want core control and mobility",
  "PLACEHOLDER: Anyone new to reformer who wants to learn it properly",
  "PLACEHOLDER: Pre- and post-natal clients (if Liz offers it)",
];

export const testimonials = [
  { quote: "PLACEHOLDER: Short client quote, one or two sentences.", name: "First L." },
  { quote: "PLACEHOLDER: Short client quote, one or two sentences.", name: "First L." },
  { quote: "PLACEHOLDER: Short client quote, one or two sentences.", name: "First L." },
];

export const policies = [
  { title: "Intro first", body: "New to reformer, or new to Liz? Your first visit is an intro session." },
  { title: "Book ahead", body: "Sessions open 2 weeks out and need at least 24 hours' notice." },
  { title: "24-hour cancellation", body: "Late cancels and no-shows are charged the full session." },
  { title: "Packs expire", body: "Singles 30 days, 5-packs 8 weeks, 10-packs 16 weeks from purchase." },
];
