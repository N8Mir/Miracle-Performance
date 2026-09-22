// Month-to-month memberships. No contracts, first week free for new members.
// Every tier includes all class types: strength, conditioning, MP Climb, and Redwave.
export const memberships = [
  {
    name: "2X / WEEK",
    price: 129,
    features: ["2 CLASSES / WEEK", "ALL CLASS TYPES", "REDWAVE INCLUDED", "MP CLIMB INCLUDED", "MONTH-TO-MONTH"],
    cta: "SELECT PLAN",
    link: "/free-week",
  },
  {
    name: "3X / WEEK",
    price: 159,
    badge: "★ MOST POPULAR",
    popular: true,
    features: ["3 CLASSES / WEEK", "ALL CLASS TYPES", "REDWAVE INCLUDED", "MP CLIMB INCLUDED", "MONTH-TO-MONTH"],
    cta: "SELECT PLAN",
    link: "/free-week",
  },
  {
    name: "4X / WEEK",
    price: 179,
    features: ["4 CLASSES / WEEK", "ALL CLASS TYPES", "REDWAVE INCLUDED", "MP CLIMB INCLUDED", "MONTH-TO-MONTH"],
    cta: "SELECT PLAN",
    link: "/free-week",
  },
  {
    name: "UNLIMITED",
    price: 215,
    features: ["UNLIMITED CLASSES", "ALL CLASS TYPES", "REDWAVE INCLUDED", "MP CLIMB INCLUDED", "MONTH-TO-MONTH"],
    cta: "SELECT PLAN",
    link: "/free-week",
  },
];

// TODO: 5 PACK and 30 PACK point at the general WellnessLiving catalog until their
// direct product links (k_id) are available. Swap in exact links when created.
const CATALOG = "https://www.wellnessliving.com/rs/catalog-view.html?k_business=136685";

// One-time purchases. All class types included — strength, conditioning, MP Climb, Redwave.
export const packages = [
  {
    name: "DROP-IN",
    price: 22,
    features: ["1 SESSION", "ANY CLASS TYPE", "NO MEMBERSHIP NEEDED"],
    cta: "BUY NOW",
    link: "https://www.wellnessliving.com/rs/catalog-view.html?k_business=136685&id_sale=1&k_id=233847",
  },
  {
    name: "5 PACK",
    price: 99,
    features: ["5 SESSIONS", "ANY CLASS TYPE", "$19.80 / SESSION"],
    cta: "BUY NOW",
    link: CATALOG,
  },
  {
    name: "10 PACK",
    price: 179,
    features: ["10 SESSIONS", "ANY CLASS TYPE", "$17.90 / SESSION"],
    cta: "BUY NOW",
    link: "https://www.wellnessliving.com/rs/catalog-view.html?k_business=136685&id_sale=1&k_id=233855",
  },
  {
    name: "20 PACK",
    price: 319,
    features: ["20 SESSIONS", "ANY CLASS TYPE", "$15.95 / SESSION"],
    cta: "BUY NOW",
    link: "https://www.wellnessliving.com/rs/catalog-view.html?k_business=136685&id_sale=1&k_id=233862",
  },
  {
    name: "30 PACK",
    price: 420,
    badge: "BEST VALUE",
    features: ["30 SESSIONS", "ANY CLASS TYPE", "$14.00 / SESSION", "1-YEAR EXPIRY"],
    cta: "BUY NOW",
    link: CATALOG,
  },
];
