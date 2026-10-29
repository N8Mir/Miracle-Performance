// Room 216 page content.
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
  name: "Room 216",
  tagline: "A Pilates Practice",
  logo: { src: "/pilates/room216-logo-900.webp", srcSmall: "/pilates/room216-logo-480.webp" },
  eyebrow: "Private Pilates studio at Miracle Performance",
  headline: "Welcome to Room\u00a0216",
  intro:
    "A private, boutique Pilates studio nestled inside Miracle Performance, offering a sophisticated, personalized Pilates experience.",
  chips: ["Private & duet only", "2 reformer towers", "50-minute sessions", "Beachwood, OH"],
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
    body: "Buy a 5- or 10-pack within 7 days of your intro and the intro price comes off.",
  },
];

export const formats = [
  {
    name: "Private",
    length: "50 minutes",
    people: "1 client",
    body:
      "Personalized, one-on-one Pilates training incorporating the reformer, tower, and mat. An exceptional choice if you're returning to movement after an injury, refining your technique, or simply looking for a peaceful yet challenging workout tailored entirely to your needs and goals. Undivided attention and thoughtfully designed sequencing: the perfect balance of precision, strength, and mindful movement.",
  },
  {
    name: "Duet",
    length: "50 minutes",
    people: "2 clients",
    body:
      "Why not share the experience? Duet sessions are a wonderful way to enjoy Pilates alongside a friend or partner of a similar fitness level. You'll motivate and challenge one another while enjoying a little laughter along the way, although you may have to work for those chuckles!",
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
  credentials: [
    { title: "Intensive Pilates Mat Certification", detail: "Kelly Kane School · 200 hours · 2014" },
    { title: "Barre Certification", detail: "Barre Fly Cleveland · 2017" },
    // Year was bracketed in Liz's doc; confirm before launch, then add it to the detail line.
    { title: "Peak Pilates Equipment Certification", detail: "300 hours · Mat, Reformer, Cadillac, Chair, Spine Corrector" },
  ],
  highlights: ["Practicing Pilates 20+ years", "Teaching since 2014"],
  bio: [
    "Having grown up in Vermont and spent her early adult life in New York City, Liz moved to Cleveland in 2015. A mother of two teenage boys, she's a skier, hiker, and lover of all things movement and music. She first discovered Pilates over 20 years ago and has been a dedicated practitioner ever since.",
    "For the past decade Liz has taught Pilates/Barre Fusion and VersaClimber classes across Cleveland (yes, both Eastside and Westside), and she has been teaching on the reformer for over two years. She's thrilled to bring that practice to the Miracle Performance family. She loves teaching beginners and advanced clients alike, so whether you've always wanted to try it or are looking to expand your practice, she looks forward to hearing from you.",
  ],
};

export const equipment = {
  intro:
    "Two Personal Hour reformer towers offer exceptional versatility that goes well beyond what you'll find in many traditional reformer studios.",
  model: "Personal Hour Nano Elite Plus",
  modelDetail: "Half-trapeze towers · Studio Pilates reformers · 180 to 360 lb of spring resistance per reformer",
  features: [
    "Boxes and jump boards for invigorating cardio bursts",
    "Standing platforms for challenging quad, glute, adductor and abductor sequences",
    "Cushioned forearm and high-palm platforms for deep core work",
    "Pilates balls, rings, resistance bands, and 3-, 5- and 8-lb free weights",
  ],
  closing:
    "No detail has been overlooked. Every element has been thoughtfully selected to create an intimate, elegant, and exceptionally well-equipped studio where precision, strength, and movement come together beautifully.",
};

// Photo slots for the gallery. Order = display order. First slot is the large one.
// `position` sets the focal point when a photo is cropped to fit its frame (CSS object-position).
export const gallery = [
  { src: "/pilates/room-wide.webp", label: "Room 216: both reformer towers and the wallpaper wall", position: "50% 50%" },
  { src: "/pilates/towers-corner.webp", label: "Personal Hour reformer towers with props", position: "35% 50%" },
  { src: "/pilates/liz-cueing.webp", label: "Liz cueing a client on the reformer", position: "50% 0%" },
  { src: null, label: "Duet in session", hint: "Landscape 3:2, two clients side by side" },
];

export const forWho = {
  title: "Quite simply, everyone.",
  lead:
    "Pilates welcomes all ages, genders, and fitness levels. Whether you're returning to exercise after an injury, looking to complement your existing routine, or building strength, stability, and muscular endurance, it offers something truly valuable for every body.",
  body:
    "With its emphasis on controlled, intentional movement, Pilates is especially effective at developing muscular endurance, challenging slow-twitch muscle fibers, and strengthening the smaller stabilizing muscles that traditional workouts often overlook.",
  pillars: [
    { title: "Stability", body: "Creating balance, control, and a strong foundation for movement." },
    { title: "Stretching", body: "Improving flexibility, mobility, and freedom of movement." },
    { title: "Strengthening", body: "Building muscular endurance and functional strength from the inside out." },
  ],
  core:
    "And at the center of it all? The core. Through thoughtful sequencing, proper alignment, postural awareness, and precise, controlled movement, Pilates challenges the entire body while emphasizing the deep core muscles that support and stabilize us. The result is more than a workout: a stronger, more balanced, more resilient body that moves with greater confidence, efficiency, and control.",
  quote: "Because how you move matters just as much as how hard you work.",
};

export const testimonials = [
  {
    quote:
      "I've been practicing Pilates consistently for 2 years and Liz has been the most challenging and creative instructor. She constantly pushes me beyond my comfort zone with innovative exercises that keep every session engaging and rewarding.",
    name: "JW",
  },
  {
    quote:
      "Liz has been my Pilates coach for the last 2 years. I hadn't tried Pilates in all the years of working out, but one session in, I was hooked! Liz pushes me just the right amount and her training is amazing!",
    name: "MB",
  },
];

export const policies = [
  { title: "Intro first", body: "New to reformer, or new to Liz? Your first visit is an intro session." },
  { title: "Book ahead", body: "Sessions open 1 week out and need at least 24 hours' notice." },
  { title: "24-hour cancellation", body: "Late cancels and no-shows are charged the full session." },
  { title: "Packs expire", body: "Singles 30 days, 5-packs 8 weeks, 10-packs 16 weeks from purchase." },
];
