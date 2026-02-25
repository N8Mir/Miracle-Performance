import React from "react";
import { Link } from "react-router-dom";
import { Check, Flame, Sparkles, HeartPulse, Timer } from "lucide-react";
import { redwaveBenefits, redwaveClasses } from "../data/redwave";

export default function RedwavePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-30 bg-[url('/redwave-hero.webp')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="text-sm uppercase tracking-wider text-white/70">
            Included with membership + packs
          </p>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold">
            Redwave Infrared Studio
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">
            A purpose-built infrared + 850nm near-infrared light studio designed
            for performance, mobility, and recovery.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.wellnessliving.com/schedule/miracleperformance"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-2xl bg-blue-700 text-white font-semibold hover:bg-blue-800"
            >
              Book Redwave
            </a>
            <Link
              to="/free-week"
              className="px-5 py-3 rounded-2xl border border-white/30 hover:bg-white/10"
            >
              Claim Free Week
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            {["Infrared heat", "850nm near-infrared light", "Guided recovery", "Self-led blocks"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Why Infrared + 850nm?
          </h2>
          <p className="mt-3 text-gray-600 max-w-3xl">
            Redwave sessions are built to make your training feel better and your
            recovery more effective. (Not medical advice—this is wellness + performance programming.)
          </p>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {redwaveBenefits.map((b) => (
              <div key={b.title} className="p-6 rounded-2xl border bg-white">
                <div className="font-semibold">{b.title}</div>
                <p className="mt-2 text-sm text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Science-backed (careful) highlights */}
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Flame className="w-6 h-6" />, title: "Warm up faster", desc: "Infrared warmth supports readiness so movement feels smoother." },
              { icon: <Sparkles className="w-6 h-6" />, title: "Recovery support", desc: "Near-infrared photobiomodulation is studied for recovery, soreness, and inflammation balance." },
              { icon: <HeartPulse className="w-6 h-6" />, title: "Feel-good finish", desc: "Many people leave feeling looser, calmer, and recharged." },
              { icon: <Timer className="w-6 h-6" />, title: "Time efficient", desc: "20-minute self-led blocks and 50–60 minute classes." },
            ].map((x) => (
              <div key={x.title} className="p-6 rounded-2xl border bg-gray-50">
                <div className="w-11 h-11 rounded-xl bg-blue-700/10 text-blue-700 flex items-center justify-center">
                  {x.icon}
                </div>
                <div className="mt-4 font-semibold">{x.title}</div>
                <p className="mt-2 text-sm text-gray-600">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Redwave Difference */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden border bg-white">
              <img
                src="/redwave-studio.webp"
                alt="Redwave Infrared Studio"
                className="w-full h-[340px] object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold">The Redwave Difference</h2>
              <p className="mt-3 text-gray-600">
                Redwave isn’t “just heat.” It’s a structured studio experience built
                to pair with your training: warm-up, recovery, mobility, and performance-focused movement.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                {[
                  "Included in all memberships + class packs",
                  "Guided IR formats + self-led blocks",
                  "Designed to pair before/after Strength, Conditioning, Climb, and Boxing",
                  "Performance vibe: calm, focused, and efficient",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 mt-0.5 text-blue-700" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.wellnessliving.com/schedule/miracleperformance"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-2xl bg-black text-white hover:opacity-90"
                >
                  View Schedule
                </a>
                <Link to="/" className="px-5 py-3 rounded-2xl border hover:bg-white">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Menu */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Redwave Class Menu</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">
            Choose recovery-first sessions or hybrid formats that combine training + infrared-based recovery.
          </p>

          <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {redwaveClasses.map((c) => (
              <div key={c.name} className="p-6 rounded-2xl border bg-white">
                <div className="flex items-baseline justify-between gap-3">
                  <div className="font-semibold text-lg">{c.name}</div>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{c.duration}</span>
                </div>
                <p className="mt-3 text-sm text-gray-600">{c.desc}</p>

                <div className="mt-5 flex gap-3 flex-wrap">
                  <a
                    href="https://www.wellnessliving.com/schedule/miracleperformance"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex px-4 py-2 rounded-xl bg-blue-700 text-white hover:bg-blue-800 text-sm font-semibold"
                  >
                    Book This
                  </a>
                  <a href="sms:12168329212" className="inline-flex px-4 py-2 rounded-xl border hover:bg-gray-50 text-sm font-semibold">
                    Text Questions
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-gray-600">
            Not sure where to start? Text{" "}
            <a href="sms:12168329212" className="text-blue-700 hover:underline">
              216-832-9212
            </a>{" "}
            and we’ll recommend a first session.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">FAQs</h2>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Is Redwave included in my membership/package?",
                a: "Yes — Redwave is included in memberships and class packs. Book it like any other class.",
              },
              {
                q: "Is this a workout or recovery?",
                a: "Both. Some sessions are movement-based (Pilates/Barre, Functional Flow), others are recovery-first (Active Recovery, Self-Led blocks).",
              },
              {
                q: "What should I bring?",
                a: "Comfortable athletic clothing and a water bottle. We’ll guide you through the session.",
              },
              {
                q: "How often should I do it?",
                a: "Most people love 1–3x/week depending on training load—great pre-workout warm-up or post-workout recovery.",
              },
            ].map((f) => (
              <div key={f.q} className="p-6 rounded-2xl border bg-white">
                <div className="font-semibold">{f.q}</div>
                <p className="mt-2 text-sm text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
