import React from "react";
import ClassCardGallery from "../components/ClassCardGallery";
import { mpClassCards, redwaveClassCards } from "../data/classCards";
import { Link } from "react-router-dom";
import { Check, MapPin, Dumbbell, Clock, Users, Star, ExternalLink } from "lucide-react";
import ScheduleWidget from "../components/ScheduleWidget";
import { memberships, packages } from "../data/pricing";

const REVIEW_SCORES = {
  google: null, // e.g. "5.0 (120+)"
  classpass: "4.9 (2500+)",
  wellness: null, // e.g. "5.0 (200+)"
};

export default function HomePage() {
  const features = [
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "8 Classes, 1 Membership",
      desc: "Strength, Met-Con, Climb, Boxing + Redwave Infrared—mix & match your week.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Small Group Training",
      desc: "Small groups with personal attention in every session.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "40+ Classes/Week",
      desc: "Early mornings, evenings, and weekends to fit any schedule.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Expert Coaches",
      desc: "Certified trainers who program for progress, not burnout.",
    },
  ];

  return (
    <>
      {/* Lead Magnet Banner */}
      <div id="trial" className="bg-yellow-400 text-black text-center py-3 text-sm">
        <strong>First Week Free — No Obligation.</strong> Try us out and feel the difference.
      </div>

      {/* Hero */}
      <section id="top" className="relative h-screen w-full flex items-center justify-start px-8 overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/gym-floor.jpeg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/mp_video__1_.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl">
          {/* Eyebrow */}
          <div className="font-headline text-white font-black text-xs tracking-[0.3em] uppercase mb-4 border-l-4 border-primary-dim pl-4">
            ELITE FITNESS MEETS ADVANCED RECOVERY
          </div>

          {/* Headline */}
          <h1 className="font-headline font-black leading-none tracking-tighter text-6xl md:text-9xl mb-6">
            <span className="text-primary-dim block text-glow">TRAIN HARD.</span>
            <span className="text-redwave block text-glow-red">RECOVER FASTER.</span>
          </h1>

          {/* Subline */}
          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-xl mb-10">
            8 unique small-group classes with expert coaches designed to make you move better and feel better.
            This is not a gym. This is Miracle Performance.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/free-week"
              className="bg-primary-dim text-black font-headline font-bold text-lg px-10 py-5 hover:bg-blue-400 transition-all"
            >
              BOOK A FREE TRIAL
            </Link>
            <Link
              to="/#classes"
              className="border border-white/40 text-white font-headline font-bold text-lg px-10 py-5 hover:bg-white hover:text-black transition-all"
            >
              VIEW SCHEDULE
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10">
            {[
              { stat: "20+", label: "YEARS COACHING" },
              { stat: "60+", label: "WEEKLY CLASSES" },
              { stat: "5",   label: "REDWAVE FORMATS" },
              { stat: "5★",  label: "82 REVIEWS" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <div className="font-headline font-black text-3xl text-primary-dim">{stat}</div>
                <div className="text-on-surface-variant text-xs uppercase tracking-widest mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro — Real Results */}
      <section className="relative py-32 px-8 overflow-hidden min-h-[600px] flex items-center video-placeholder">
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left */}
            <div className="lg:col-span-5">
              <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter italic uppercase mb-8">
                REAL RESULTS.<br />
                <span className="text-primary-dim">FOR REAL PEOPLE.</span>
              </h2>
              <p className="font-body text-xl text-on-surface-variant leading-relaxed mb-8">
                We've designed an ecosystem of everyday performance. Miracle Performance is where sustainable growth
                meets scientific restoration, built for anyone ready to pursue their best self.
              </p>
              <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-white/50">
                <span className="w-12 h-px bg-white/30" />
                EVERYDAY PERFORMANCE
              </div>
            </div>

            {/* Right — pillar cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Strength */}
                <div className="group bg-surface-container/40 backdrop-blur-md border border-white/5 p-8 hover:bg-primary-dim/10 hover:border-primary-dim/30 transition-all duration-500">
                  <div className="mb-6">
                    <span className="material-symbols-outlined text-primary-dim text-4xl">fitness_center</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold tracking-tight mb-4 uppercase text-white">STRENGTH</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                    Functional resistance training designed to build a resilient foundation and lasting power.
                  </p>
                  <span className="text-[10px] font-black tracking-widest text-primary-dim uppercase">BUILD POWER</span>
                </div>

                {/* Conditioning */}
                <div className="group bg-surface-container/40 backdrop-blur-md border border-white/5 p-8 hover:bg-primary-dim/10 hover:border-primary-dim/30 transition-all duration-500">
                  <div className="mb-6">
                    <span className="material-symbols-outlined text-primary-dim text-4xl">bolt</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold tracking-tight mb-4 uppercase text-white">CONDITIONING</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                    High-intensity metabolic circuits that push your engine further and torch body fat.
                  </p>
                  <span className="text-[10px] font-black tracking-widest text-primary-dim uppercase">MAX CAPACITY</span>
                </div>

                {/* Recovery */}
                <div className="group bg-surface-container/40 backdrop-blur-md border border-white/5 p-8 hover:bg-redwave/10 hover:border-redwave/30 transition-all duration-500">
                  <div className="mb-6">
                    <span className="material-symbols-outlined text-redwave text-4xl">spa</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold tracking-tight mb-4 uppercase text-white">RECOVERY</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                    Infrared and red-light therapy to reset your nervous system and accelerate repair.
                  </p>
                  <span className="text-[10px] font-black tracking-widest text-redwave uppercase">RESTORE CELLULAR</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MP Class Series */}
      <section id="classes" className="py-32 px-8 bg-surface-container-lowest relative overflow-hidden">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-20">
          <span className="font-headline text-primary-dim font-black tracking-widest text-xs uppercase mb-4 block">
            THE CORE OF THE LAB
          </span>
          <h2 className="font-headline text-4xl md:text-7xl font-black tracking-tighter uppercase italic text-glow">
            <span className="text-primary-dim">MP </span>
            <span className="text-white/20">CLASS SERIES</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              img: "/class-cards/mp-strength.webp",
              badge: "STRENGTH",
              title: "MP STRENGTH",
              bullets: ["Build lean muscle", "Improve bone density", "Increase functional resilience"],
            },
            {
              img: "/class-cards/met-con-circuit.webp",
              badge: "CONDITIONING",
              title: "MET-CON CIRCUIT",
              bullets: ["Maximize calorie burn", "Enhance endurance", "Boost metabolic performance"],
            },
            {
              img: "/class-cards/mp-climb.webp",
              badge: "VERTICAL",
              title: "MP CLIMB",
              bullets: ["Zero-impact training", "Build elite cardio", "Full-body conditioning"],
            },
            {
              img: "/class-cards/boxfit.webp",
              badge: "COMBAT",
              title: "BOXFIT",
              bullets: ["Build striking power", "Improve footwork", "High-energy conditioning"],
            },
          ].map(({ img, badge, title, bullets }) => (
            <div key={title} className="flex flex-col bg-surface-container-high border-b-4 border-primary-dim group">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-all duration-300" />
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-primary-dim text-black px-3 py-1 font-headline text-[10px] font-black tracking-widest uppercase">
                    {badge}
                  </div>
                </div>
                {/* Card title */}
                <div className="absolute bottom-4 left-8 pointer-events-none">
                  <h3 className="font-headline text-2xl font-black text-white leading-none">{title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 space-y-6 flex flex-col flex-1">
                <ul className="space-y-3 flex-1">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[10px] font-bold tracking-tight uppercase text-white">
                      <span className="material-symbols-outlined text-primary-dim text-[14px] leading-none mt-px">check_circle</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.wellnessliving.com/schedule/miracleperformance"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full bg-white text-primary-dim text-[10px] font-black tracking-widest px-4 py-3 uppercase text-center hover:bg-primary-dim hover:text-black transition-colors"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Redwave Studio Feature */}
      <section className="relative py-32 px-8 bg-black overflow-hidden border-t border-redwave/20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">

          {/* Left */}
          <div className="w-full lg:w-1/2 space-y-8">
            <img src="/redwave-logo.webp" alt="Redwave" className="w-48 h-auto" />
            <div className="aspect-[4/3] overflow-hidden red-accent-glow border border-redwave/20">
              <img src="/redwave-studio.jpeg" alt="Redwave Infrared Studio" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <span className="font-headline text-redwave font-black tracking-widest text-xs uppercase block">
                ELITE RECOVERY EXPERIENCE
              </span>
              <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-glow-red">
                <span className="text-redwave">REDWAVE</span>
                <span className="text-white"> INFRARED STUDIO</span>
              </h2>
            </div>

            <p className="font-body text-lg text-on-surface-variant leading-relaxed">
              Redwave Infrared Studio is a modern wellness space combining infrared heat and red light therapy with
              movement, recovery, and relaxation. Infrared helps improve circulation, ease muscle tension, and support
              recovery, while red light therapy may help reduce inflammation, support skin health, and enhance cellular
              repair.
            </p>

            <div>
              <h3 className="font-headline text-xl font-black uppercase mb-6 tracking-tight flex items-center gap-3">
                <span className="w-10 h-[2px] bg-redwave" /> THE BENEFITS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Reduces muscle soreness",
                  "Faster workout recovery",
                  "Improves mobility",
                  "Better circulation",
                  "Promotes relaxation",
                  "Prevents overuse injuries",
                  "Overall performance boost",
                  "Balanced wellness",
                  "Mental reset",
                  "Beyond just a workout",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-redwave text-lg">bolt</span>
                    <span className="text-xs font-bold tracking-tight uppercase text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/redwave"
              className="inline-block bg-redwave text-white font-headline font-bold px-8 py-4 hover:bg-redwave-dark transition-all"
            >
              EXPLORE REDWAVE →
            </Link>
          </div>
        </div>
      </section>

      {/* Redwave Class Series */}
      <section className="py-32 px-8 bg-surface relative overflow-hidden">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-20">
          <span className="font-headline text-redwave font-black tracking-widest text-xs uppercase mb-4 block">
            INFRARED RECOVERY
          </span>
          <h2 className="font-headline text-4xl md:text-7xl font-black tracking-tighter uppercase italic text-glow-red">
            <span className="text-redwave">REDWAVE </span>
            <span className="text-white/20">CLASS SERIES</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {[
            {
              img: "/class-cards/ir-active-recovery.webp",
              badge: "RECOVERY",
              title: "IR ACTIVE RECOVERY",
              bullets: ["Release tension", "Improve mobility", "Accelerate muscle repair"],
            },
            {
              img: "/class-cards/ir-functional-flow.webp",
              badge: "FLOW",
              title: "IR FUNCTIONAL FLOW",
              bullets: ["Improve flexibility", "Enhance stability", "Functional strength"],
            },
            {
              img: "/class-cards/ir-pilates-barre-fusion.webp",
              badge: "SCULPT",
              title: "IR PILATES + BARRE",
              bullets: ["Strengthen core", "Improve posture", "Sculpt lean muscle"],
            },
            {
              img: "/class-cards/ir-climb-yoga.webp",
              badge: "HYBRID",
              title: "IR CLIMB + YOGA",
              bullets: ["Build endurance", "Improve mobility", "Accelerate recovery"],
            },
          ].map(({ img, badge, title, bullets }) => (
            <div key={title} className="flex flex-col bg-surface-container-high border-b-4 border-redwave group">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-redwave-dark/60 to-transparent group-hover:opacity-0 transition-all duration-300" />
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-redwave text-white px-3 py-1 font-headline text-[10px] font-black tracking-widest uppercase">
                    {badge}
                  </div>
                </div>
                <div className="absolute bottom-4 left-8 pointer-events-none">
                  <h3 className="font-headline text-2xl font-black text-white leading-none">{title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 space-y-6 flex flex-col flex-1">
                <ul className="space-y-3 flex-1">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[10px] font-bold tracking-tight uppercase text-white">
                      <span className="material-symbols-outlined text-redwave text-[14px] leading-none mt-px">bolt</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.wellnessliving.com/schedule/miracleperformance"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full bg-white text-redwave-dark text-[10px] font-black tracking-widest px-4 py-3 uppercase text-center hover:bg-redwave hover:text-white transition-colors"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
          ))}

          {/* 5th card — Self-guided session */}
          <div className="flex flex-col bg-surface-container-high border-b-4 border-redwave group">
            {/* No-image panel */}
            <div className="relative aspect-[3/4] overflow-hidden flex items-center justify-center">
              {/* Red glow circle */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <radialGradient id="redGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ff2d2d" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#ff2d2d" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <ellipse cx="150" cy="200" rx="140" ry="140" fill="url(#redGlow)" />
              </svg>
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-redwave text-white px-3 py-1 font-headline text-[10px] font-black tracking-widest uppercase">
                  SELF-GUIDED
                </div>
              </div>
              <div className="absolute bottom-4 left-8 pointer-events-none">
                <h3 className="font-headline text-2xl font-black text-white leading-none">POST-WORKOUT<br />RECOVERY</h3>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 space-y-6 flex flex-col flex-1">
              <ul className="space-y-3 flex-1">
                {["30-min session", "Video-led", "5 phases"].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[10px] font-bold tracking-tight uppercase text-white">
                    <span className="material-symbols-outlined text-redwave text-[14px] leading-none mt-px">bolt</span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                to="/redwave"
                className="block w-full bg-white text-redwave-dark text-[10px] font-black tracking-widest px-4 py-3 uppercase text-center hover:bg-redwave hover:text-white transition-colors"
              >
                LEARN MORE →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-8 bg-surface-container-lowest">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl md:text-7xl font-black tracking-tighter italic uppercase text-white mb-4">
            TIERED ACCESS.
          </h2>
          <p className="font-headline text-xl font-bold uppercase tracking-tight text-white mb-2">MEMBERSHIPS</p>
          <p className="font-body text-on-surface-variant">Month-to-month, upgrade/downgrade, or cancel anytime.</p>
        </div>

        {/* Credit explainer */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-2xl mx-auto">
          {[
            { credits: "1 CREDIT", label: "Redwave Recovery Session" },
            { credits: "3 CREDITS", label: "Any MP Class" },
            { credits: "4 CREDITS", label: "Redwave Premium Classes" },
          ].map(({ credits, label }) => (
            <div key={credits} className="bg-surface-container border border-outline-variant/20 p-4 flex items-center gap-3">
              <span className="font-headline font-black text-2xl text-primary-dim">{credits}</span>
              <span className="text-xs font-bold uppercase tracking-tight text-white">{label}</span>
            </div>
          ))}
        </div>

        {/* Membership cards */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-outline-variant/20 border border-outline-variant/20 mb-8">
          {memberships.map((m) => (
            <div
              key={m.name}
              className={`p-8 flex flex-col justify-between relative ${
                m.popular ? "bg-surface-container-low ring-1 ring-primary-dim/30" : "bg-surface-container"
              }`}
            >
              {m.badge && (
                <div className="absolute top-0 right-0 p-3">
                  <span
                    className={`font-headline text-[9px] font-black tracking-widest px-2 py-1 uppercase ${
                      m.badgeColor === "redwave" ? "bg-redwave text-white" : "bg-primary-dim text-black"
                    }`}
                  >
                    {m.badge}
                  </span>
                </div>
              )}
              <div>
                <h3 className={`font-headline text-xl font-black mb-1 uppercase tracking-tight ${m.popular ? "text-primary-dim" : "text-white"}`}>
                  {m.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="font-headline text-4xl font-black text-white">${m.price}</span>
                  <span className="text-on-surface-variant font-bold text-xs tracking-widest uppercase">/ MO</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {m.features.map((f) => (
                    <li key={f} className="flex gap-2 text-xs font-bold tracking-tight text-white">
                      <span className="material-symbols-outlined text-primary-dim text-base leading-none mt-px">check</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to={m.link}
                className={`block text-center font-headline text-xs font-bold py-4 transition-all ${
                  m.popular
                    ? "bg-primary-dim text-black hover:bg-blue-400"
                    : "border border-outline-variant text-white hover:bg-white hover:text-black"
                }`}
              >
                {m.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Packages */}
        <div className="max-w-[1400px] mx-auto mt-32">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tighter italic uppercase text-white mb-4">
              PACKAGES.
            </h2>
            <p className="font-body text-on-surface-variant">Flexible options for the focused athlete.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/20 border border-outline-variant/20">
            {packages.map((p) => {
              const isRedwave = p.accent === "redwave";
              return (
                <div
                  key={p.name}
                  className={`bg-surface-container p-8 flex flex-col justify-between border-b-4 ${
                    isRedwave ? "border-redwave" : "border-primary-dim"
                  }`}
                >
                  <div>
                    <h3 className={`font-headline text-lg font-black mb-1 uppercase tracking-tight ${isRedwave ? "text-redwave" : "text-primary-dim"}`}>
                      {p.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className={`font-headline text-3xl font-black ${isRedwave ? "text-redwave" : "text-primary-dim"}`}>
                        ${p.price}
                      </span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2 text-xs font-bold tracking-tight text-white">
                          <span className={`material-symbols-outlined text-base leading-none mt-px ${isRedwave ? "text-redwave" : "text-primary-dim"}`}>
                            confirmation_number
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`block text-center font-headline text-[10px] font-bold py-3 uppercase tracking-widest transition-all ${
                      isRedwave
                        ? "bg-redwave text-white hover:bg-redwave-dark"
                        : "bg-primary-dim text-black hover:bg-blue-400"
                    }`}
                  >
                    {p.cta}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center mt-12 font-body text-sm text-on-surface-variant">
          Your first week is always free. Credits roll over month to month. Cancel anytime.
        </p>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-surface-container-lowest py-24 px-8">
        {/* Rating row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 text-center">
          <span className="font-headline text-4xl font-black text-white">5.0</span>
          <span className="text-primary-dim text-xl tracking-widest">★★★★★</span>
          <span className="text-on-surface-variant text-sm">82 Reviews · WellnessLiving Top Choice</span>
        </div>

        {/* Review cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              quote: "I have taken a great number of group workouts at various locations. I am not exaggerating when I say that Miracle Performance offers the very best. The instructors here are more knowledgeable and the programming more thoughtful than anywhere else I've trained.",
              name: "Dean V.",
              source: "Yelp",
            },
            {
              quote: "If you're looking for something beyond the scope of a traditional fitness center, then this place has exactly what you need. Miracle Performance takes a more personal approach — you feel like you actually matter here.",
              name: "Angelo C.",
              source: "Yelp",
            },
            {
              quote: "[PASTE GOOGLE REVIEW 1 HERE]",
              name: "[Name]",
              source: "Google Review",
            },
            {
              quote: "[PASTE GOOGLE REVIEW 2 HERE]",
              name: "[Name]",
              source: "Google Review",
            },
          ].map(({ quote, name, source }) => (
            <div key={name + source} className="bg-surface-container border border-outline-variant/20 p-8">
              <div className="text-primary-dim text-sm mb-4">★★★★★</div>
              <p className="font-body text-on-surface-variant leading-relaxed italic mb-6 text-base">"{quote}"</p>
              <span className="font-headline text-xs font-bold uppercase tracking-widest text-white/50">
                — {name}, {source}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section id="location" className="bg-black py-24 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-6">
            <span className="font-headline text-primary-dim font-black tracking-widest text-xs uppercase block">
              FIND US
            </span>
            <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tighter uppercase italic text-white">
              BEACHWOOD, OH.
            </h2>
            <div className="space-y-1 font-body text-on-surface-variant text-lg">
              <p>23400 Mercantile Rd, Suite 4/5</p>
              <p>Beachwood, OH 44122</p>
            </div>
            <p className="font-body text-on-surface-variant">
              <a href="tel:12168329212" className="hover:text-white transition-colors">(216) 832-9212</a>
            </p>
            <div className="space-y-1 text-xs font-bold uppercase tracking-wide text-white/70">
              <p>Mon–Fri: 5:30am – 8:00pm</p>
              <p>Sat: 7:00am – 12:00pm</p>
              <p>Sun: 8:30am – 10:00am</p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Miracle+Performance+Beachwood+OH"
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-outline-variant text-white px-8 py-4 font-headline font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              GET DIRECTIONS →
            </a>
          </div>

          {/* Right — map */}
          <div className="w-full aspect-video border border-outline-variant/20">
            <iframe
              title="Miracle Performance Location"
              src="https://www.google.com/maps?q=23400%20Mercantile%20Rd%20Suite%205%20Beachwood%20OH%2044122&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0, display: "block" }}
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="bg-primary-dim py-20 px-8 text-center">
        <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tighter uppercase italic text-black">
          YOUR FIRST WEEK IS FREE.
        </h2>
        <p className="font-body text-black/70 text-lg mt-4 mb-10">
          No commitment. No credit card. No obligation. Just show up.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/free-week"
            className="bg-black text-white px-10 py-5 font-headline font-bold text-lg hover:bg-surface-container transition-all"
          >
            BOOK A FREE TRIAL
          </Link>
          <Link
            to="/#classes"
            className="border-2 border-black text-black px-10 py-5 font-headline font-bold text-lg hover:bg-black hover:text-white transition-all"
          >
            VIEW SCHEDULE
          </Link>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="scroll-mt-24 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold">Why People Choose Miracle Performance</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            We design smart training for busy people. Get the support of a coach and the energy of a class without the
            chaos.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border shadow-sm bg-[#0B5ED7] text-white">
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-4 text-[#0B5ED7]">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Redwave Feature */}
      <section id="redwave" className="scroll-mt-24 py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden border bg-white">
              <img
                src="/redwave-studio.webp"
                alt="Redwave Infrared Studio"
                className="w-full h-[360px] object-cover"
                loading="lazy"
              />
            </div>

            <div>
            <div className="flex items-center gap-3">
  <img
    src="/redwave-logo.webp"
    alt="Redwave"
    className="h-12 w-auto"
    loading="lazy"
    decoding="async"
  />
  <p className="text-xs md:text-sm uppercase tracking-wide text-gray-500">
    New
  </p>
</div>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">Redwave Infrared Studio</h2>
              <p className="mt-4 text-gray-600 max-w-2xl">
                Infrared heat + 850nm near-infrared Redlight Therapy in a purpose-built recovery and performance studio. Take
                guided IR classes or book self-led recovery blocks—fully included in your membership and packs.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                {[
                  "Infrared warmth to support deeper mobility and better warm-ups",
                  "850nm near-infrared Redlight Therapy (photobiomodulation) studied for recovery support",
                  "4 Instructor-guided classes + self-led 30-minute recovery blocks",
                  "Perfect add-on to your training program",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-700" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/redwave"
                  className="px-5 py-3 rounded-2xl bg-red-600 text-white font-semibold hover:bg-red-700"
                >
                  Learn More
                </Link>
                <a
                  href="https://www.wellnessliving.com/schedule/miracleperformance"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-2xl border hover:bg-white"
                >
                  Book Redwave
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes */}
      <section id="classes" className="scroll-mt-24 py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold">Classes</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">
            Everything is included in membership + packs. Choose your lane—or mix across the week.
          </p>

          {/* MP classes */}
          <h3 className="mt-10 text-2xl font-bold">Miracle Performance</h3>
          <p className="mt-2 text-gray-600 max-w-2xl">Strength • Met-Con • Climb • Boxing</p>
          <ClassCardGallery items={mpClassCards} />

          {/* Redwave */}
          <div className="mt-14 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h3 className="text-2xl font-bold">Redwave Infrared Studio</h3>
              <p className="mt-2 text-gray-600 max-w-3xl">
                Infrared heat + <strong>850nm near-infrared light</strong> sessions designed for mobility, recovery,
                and performance. Included with membership + packs.
              </p>
            </div>

            <Link
              to="/redwave"
              className="px-5 py-3 rounded-2xl bg-blue-700 text-white font-semibold hover:bg-blue-800"
            >
              Learn More
            </Link>
          </div>

          <ClassCardGallery items={redwaveClassCards} variant="redwave" />
        </div>
      </section>

      {/* Personal Training */}
      <section id="training" className="scroll-mt-24 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold">Personal Training</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Customized coaching for faster results and focused accountability. Choose one-on-one or train with a small
            group.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-semibold">One-on-One Training</h3>
              <p className="text-gray-600 mt-2">
                Fully personalized programming tailored to your goals, schedule, and training history. Perfect for
                maximizing progress with direct coach attention.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 mt-0.5" /> Customized plan and progress tracking
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 mt-0.5" /> Technique coaching every session
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 mt-0.5" /> Flexible scheduling
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:Nate@Mpcle.com?subject=1:1%20Training%20Inquiry"
                  className="px-5 py-3 rounded-2xl bg-black text-white hover:opacity-90"
                >
                  Email Us
                </a>
                <a href="sms:12168329212" className="px-5 py-3 rounded-2xl border hover:bg-gray-50">
                  Text 216-832-9212
                </a>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-semibold">Semi-Private Training (1–4 People)</h3>
              <p className="text-gray-600 mt-2">
                Train with friends or teammates and get individualized coaching in a small group. Same quality as 1:1
                with more energy—and shared cost.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 mt-0.5" /> 1–4 clients per coach, more affordable than 1:1
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 mt-0.5" /> Personalized cues and scaling
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 mt-0.5" /> Contact for pricing & availability
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:Nate@Mpcle.com?subject=Semi-Private%20Training%20Inquiry"
                  className="px-5 py-3 rounded-2xl bg-black text-white hover:opacity-90"
                >
                  Contact for Pricing
                </a>
                <a href="sms:12168329212" className="px-5 py-3 rounded-2xl border hover:bg-gray-50">
                  Text 216-832-9212
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="scroll-mt-24 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold">Schedule</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">View our live class schedule and reserve your spot instantly.</p>

          <div className="mt-8 rounded-2xl border overflow-hidden p-4 bg-white">
            <ScheduleWidget />

            <div className="mt-4 text-sm">
              <a
                href="https://www.wellnessliving.com/schedule/miracleperformance"
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 hover:underline"
              >
                View full schedule
              </a>
            </div>

            <a
              href="https://www.wellnessliving.com/fitness/software/"
              rel="nofollow"
              style={{ display: "block", float: "right", margin: "16px 16px 0 0" }}
            >
              <img
                src="https://d1v4s90m0bk5bo.cloudfront.net/E/S.png"
                alt="Fitness management software"
                height="39"
                width="267"
                style={{ height: 39, width: 267 }}
              />
            </a>
            <div style={{ clear: "both" }} />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-24 py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent Pricing. No Contracts.</h2>
          <p className="mt-3 text-gray-600">Memberships or class packs—choose what fits your routine.</p>

          <h3 className="mt-8 text-xl font-semibold">Memberships</h3>
          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberships.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl border bg-white flex flex-col">
                <div className="flex items-baseline justify-between gap-2">
                  <div className="font-semibold text-lg">{p.name}</div>
                  <span className="text-xs text-gray-500">{p.sub}</span>
                </div>

                <p className="text-4xl font-extrabold mt-2">
                  ${p.price}
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700 flex-1">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>

                {p.link?.startsWith("/") ? (
                  <Link
                    to={p.link}
                    className="mt-6 inline-flex justify-center px-5 py-3 rounded-2xl bg-black text-white hover:opacity-90"
                  >
                    {p.cta}
                  </Link>
                ) : (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex justify-center px-5 py-3 rounded-2xl bg-black text-white hover:opacity-90"
                  >
                    {p.cta}
                  </a>
                )}
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-xl font-semibold">Class Packages</h3>
          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {packages.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl border bg-white flex flex-col">
                <div className="flex items-baseline justify-between gap-2">
                  <div className="font-semibold text-lg">{p.name}</div>
                  <span className="text-xs text-gray-500">{p.sub}</span>
                </div>

                <p className="text-4xl font-extrabold mt-2">${p.price}</p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700 flex-1">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex justify-center px-5 py-3 rounded-2xl bg-black text-white hover:opacity-90"
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Reviews */}
      <section id="map" className="scroll-mt-24 py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Find Us</h2>
              <p className="mt-2 text-gray-600 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                23400 Mercantile Rd, Suite 5, Beachwood, OH 44122
              </p>

              <div className="mt-4 rounded-2xl overflow-hidden border">
                <iframe
                  title="Miracle Performance Map"
                  src="https://www.google.com/maps?q=23400%20Mercantile%20Rd%20Suite%205%20Beachwood%20OH%2044122&output=embed"
                  width="100%"
                  height="320"
                  loading="lazy"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>

              <div className="mt-3 text-sm">
                <a
                  className="inline-flex items-center gap-1 text-blue-700 hover:underline"
                  href="https://www.google.com/maps/search/?api=1&query=Miracle+Performance+Beachwood+OH"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Google Maps <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold">What Members Say</h2>
              <p className="mt-2 text-gray-600">Read verified reviews and see recent ratings.</p>

              <div className="mt-4 grid sm:grid-cols-3 gap-4">
                <a
                  href="https://www.google.com/search?q=miracle+performance+google+reviews"
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 rounded-2xl border bg-white hover:shadow"
                >
                  <div className="font-semibold">Google Reviews</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {REVIEW_SCORES.google ? (
                      <>
                        Average: <span className="font-semibold">{REVIEW_SCORES.google}</span>
                      </>
                    ) : (
                      <>Read latest reviews</>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Opens Google Business listing.</p>
                </a>

                <a
                  href="https://classpass.com/studios/miracle-performance-beachwood"
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 rounded-2xl border bg-white hover:shadow"
                >
                  <div className="font-semibold">ClassPass Reviews</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Average: <span className="font-semibold">{REVIEW_SCORES.classpass}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">From ClassPass members.</p>
                </a>

                <a
                  href="https://www.wellnessliving.com/rs/review-list.html?k_business=136685&k_skin=26608"
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 rounded-2xl border bg-white hover:shadow"
                >
                  <div className="font-semibold">WellnessLiving Reviews</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {REVIEW_SCORES.wellness ? (
                      <>
                        Average: <span className="font-semibold">{REVIEW_SCORES.wellness}</span>
                      </>
                    ) : (
                      <>Read latest reviews</>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Verified clients on WellnessLiving.</p>
                </a>
              </div>

              <p className="text-xs text-gray-500 mt-3">
                (Embedding third-party reviews directly is often restricted; linking avoids cross-site limitations and
                keeps pages fast.)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
