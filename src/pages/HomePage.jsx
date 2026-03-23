import React from "react";
import { Link } from "react-router-dom";
import { memberships, packages } from "../data/pricing";
import ScheduleWidget from "../components/ScheduleWidget";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden w-full">
      {/* Hero */}
      <section id="top" className="relative min-h-screen w-full flex items-center justify-start px-4 md:px-8 overflow-hidden">
        {/* Mobile background image (video hidden on mobile) */}
        <div
          className="md:hidden absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/gym-floor.jpeg)" }}
        />
        {/* Desktop background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/gym-floor.jpeg"
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        >
          <source src="/mp_video.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl">
          {/* Eyebrow */}
          <div className="font-headline text-white font-black text-xs tracking-[0.3em] uppercase mb-4 border-l-4 border-primary-dim pl-4 text-white">
            ELITE FITNESS MEETS ADVANCED RECOVERY
          </div>

          {/* Headline */}
          <h1 className="font-headline font-black leading-none tracking-tighter text-4xl md:text-6xl">
            <span className="text-primary-dim block text-glow">TRAIN SMARTER.</span>
            <span className="text-redwave block text-glow-red">RECOVER FASTER.</span>
          </h1>

          {/* Subline */}
          <p className="font-body text-xl md:text-2xl text-white/70 max-w-xl mb-10">
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
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-6 md:gap-8 mt-10 md:mt-16 pt-8 border-t border-white/10">
            {[
              { stat: "20+", label: "YEARS COACHING" },
              { stat: "60+", label: "WEEKLY CLASSES" },
              { stat: "5",   label: "REDWAVE FORMATS" },
              { stat: "5★",  label: "82 REVIEWS" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <div className="font-headline font-black text-3xl text-primary-dim">{stat}</div>
                <div className="text-white/70 text-xs uppercase tracking-widest mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro — Real Results */}
      <section className="relative py-16 md:py-32 px-8 overflow-hidden md:min-h-[600px] flex items-center video-placeholder">
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left */}
            <div className="lg:col-span-5">
              <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter italic uppercase mb-8 text-white">
                REAL RESULTS.<br />
                <span className="text-primary-dim">FOR REAL PEOPLE.</span>
              </h2>
              <p className="font-body text-xl text-white/70 leading-relaxed mb-8">
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
                  <p className="font-body text-sm text-white/70 leading-relaxed mb-6">
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
                  <p className="font-body text-sm text-white/70 leading-relaxed mb-6">
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
                  <p className="font-body text-sm text-white/70 leading-relaxed mb-6">
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
      <section id="classes" className="py-16 md:py-32 px-8 bg-surface-container-lowest relative overflow-hidden">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-10 md:mb-20">
          <span className="font-headline text-primary-dim font-black tracking-widest text-sm uppercase mb-4 block">
            THE CORE OF THE LAB
          </span>
          <h2 className="font-headline text-4xl md:text-7xl font-black tracking-tighter uppercase italic text-glow">
            <span className="text-primary-dim">MP </span>
            <span className="text-white/20">CLASS SERIES</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
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
                    <li key={b} className="flex items-start gap-2 text-xs font-bold tracking-tight uppercase text-white/80">
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
      <section className="relative py-16 md:py-32 px-8 bg-black overflow-hidden border-t border-redwave/20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-20 items-center">

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
              <span className="font-headline text-redwave font-black tracking-widest text-sm uppercase block">
                ELITE RECOVERY EXPERIENCE
              </span>
              <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-glow-red">
                <span className="text-redwave">REDWAVE</span>
                <span className="text-white"> INFRARED STUDIO</span>
              </h2>
            </div>

            <p className="font-body text-lg text-white/70 leading-relaxed">
              Redwave Infrared Studio is a modern wellness space combining infrared heat and red light therapy with
              movement, recovery, and relaxation. Infrared helps improve circulation, ease muscle tension, and support
              recovery, while red light therapy may help reduce inflammation, support skin health, and enhance cellular
              repair.
            </p>

            <div>
              <h3 className="font-headline text-xl font-black uppercase mb-6 tracking-tight flex items-center gap-3 text-white">
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
      <section className="py-16 md:py-32 px-8 bg-black relative overflow-hidden">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-10 md:mb-20">
          <span className="font-headline text-redwave font-black tracking-widest text-sm uppercase mb-4 block">
            INFRARED RECOVERY
          </span>
          <h2 className="font-headline text-4xl md:text-7xl font-black tracking-tighter uppercase italic text-glow-red">
            <span className="text-redwave">REDWAVE </span>
            <span className="text-white/20">CLASS SERIES</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
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
                    <li key={b} className="flex items-start gap-2 text-xs font-bold tracking-tight uppercase text-white/80">
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
          <div className="col-span-2 xl:col-span-1 flex flex-col bg-surface-container-high border-b-4 border-redwave group">
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
                  <li key={b} className="flex items-start gap-2 text-xs font-bold tracking-tight uppercase text-white/80">
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

      {/* Schedule */}
      <section id="schedule" className="py-16 md:py-24 px-8 bg-surface-container-lowest border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-16">
            <span className="font-headline text-primary-dim font-black tracking-widest text-sm uppercase mb-4 block">
              BOOK A CLASS
            </span>
            <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-white">
              CLASS SCHEDULE
            </h2>
          </div>
          <ScheduleWidget />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-32 px-8 bg-surface-container-lowest">
        {/* Header */}
        <div className="text-center mb-10 md:mb-20">
          <h2 className="font-headline text-4xl md:text-7xl font-black tracking-tighter italic uppercase text-white mb-4">
            TIERED ACCESS.
          </h2>
          <p className="font-headline text-xl font-bold uppercase tracking-tight text-white mb-2">MEMBERSHIPS</p>
          <p className="font-body text-white/70">Month-to-month, upgrade/downgrade, or cancel anytime.</p>
        </div>

        {/* Credit explainer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
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
                  <span className="text-white/70 font-bold text-xs tracking-widest uppercase">/ MO</span>
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
        <div className="max-w-[1400px] mx-auto mt-16 md:mt-32">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tighter italic uppercase text-white mb-4">
              PACKAGES.
            </h2>
            <p className="font-body text-white/70">Flexible options for the focused athlete.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/20 border border-outline-variant/20">
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
        <p className="text-center mt-12 font-body text-sm text-white/70">
          Your first week is always free. Credits roll over month to month. Cancel anytime.
        </p>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-surface-container-lowest py-12 md:py-24 px-8">
        {/* Rating row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 text-center">
          <span className="font-headline text-4xl font-black text-white">5.0</span>
          <span className="text-primary-dim text-xl tracking-widest">★★★★★</span>
          <span className="text-white/70 text-sm">82 Reviews · WellnessLiving Top Choice</span>
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
              <p className="font-body text-white/70 leading-relaxed italic mb-6 text-base">"{quote}"</p>
              <span className="font-headline text-xs font-bold uppercase tracking-widest text-white/50">
                — {name}, {source}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Location */}
      <section id="location" className="bg-black py-12 md:py-24 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-6">
            <span className="font-headline text-primary-dim font-black tracking-widest text-sm uppercase block">
              FIND US
            </span>
            <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tighter uppercase italic text-white">
              BEACHWOOD, OH.
            </h2>
            <div className="space-y-1 font-body text-white/70 text-lg">
              <p>23400 Mercantile Rd, Suite 4/5</p>
              <p>Beachwood, OH 44122</p>
            </div>
            <p className="font-body text-white/70">
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
      <section className="bg-primary-dim py-12 md:py-20 px-8 text-center">
        <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tighter uppercase italic text-black">
          YOUR FIRST WEEK IS FREE.
        </h2>
        <p className="font-body text-black/70 text-lg mt-4 mb-10">
          No commitment. No credit card. No obligation. Just show up.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/free-week"
            className="w-full sm:w-auto bg-black text-white px-10 py-5 font-headline font-bold text-lg hover:bg-surface-container transition-all min-h-[44px]"
          >
            BOOK A FREE TRIAL
          </Link>
          <Link
            to="/#classes"
            className="w-full sm:w-auto border-2 border-black text-black px-10 py-5 font-headline font-bold text-lg hover:bg-black hover:text-white transition-all min-h-[44px]"
          >
            VIEW SCHEDULE
          </Link>
        </div>
      </section>

    </div>
  );
}
