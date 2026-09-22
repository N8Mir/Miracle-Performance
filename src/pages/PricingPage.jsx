import React, { useState } from "react";
import { Link } from "react-router-dom";
import { memberships, packages } from "../data/pricing";

const INCLUDED = ["STRENGTH", "CONDITIONING", "MP CLIMB", "REDWAVE"];

const FAQ_ITEMS = [
  {
    q: "How do memberships work?",
    a: "Pick the plan that matches how often you train — 2x, 3x, or 4x a week, or Unlimited. Every membership is billed monthly and includes access to all class types. Book your sessions through the WellnessLiving app.",
  },
  {
    q: "Am I locked into a contract?",
    a: "No. All memberships are month-to-month with no contracts. Upgrade, downgrade, pause, or cancel anytime through the WellnessLiving app or by contacting us directly. Cancellations take effect at the end of the current billing cycle.",
  },
  {
    q: "What's included in my membership?",
    a: "Everything we run — strength, conditioning, MP Climb, and Redwave. There are no add-on fees or premium class surcharges. One price, full access.",
  },
  {
    q: "What's the difference between a membership and a package?",
    a: "A membership is a monthly plan at the lowest per-session rate — best if you train on a regular schedule. A package is a one-time purchase of sessions with no monthly commitment — best if your schedule varies or you want to train at your own pace.",
  },
  {
    q: "Is Redwave included?",
    a: "Yes. Redwave is included in every membership and every package at no extra cost — the same as any other class on the schedule.",
  },
  {
    q: "How do I get started?",
    a: "Your first full week is free for new members — no credit card, no commitment. Click 'Start Free Week', fill out a short form, and we'll get you booked into your first class. After your trial, pick the plan that fits your training frequency and you're set.",
  },
];

function SectionTitle({ eyebrow, title, sub }) {
  return (
    <div className="text-center mb-16">
      {eyebrow && (
        <span className="font-headline text-primary-dim font-black tracking-widest text-xs uppercase mb-4 block">
          {eyebrow}
        </span>
      )}
      <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter italic uppercase text-white">
        {title}
      </h2>
      {sub && <p className="font-body text-on-surface-variant mt-4">{sub}</p>}
    </div>
  );
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="overflow-x-hidden w-full">
      {/* Page Header */}
      <section className="bg-black py-24 md:py-32 px-8 text-center">
        <span className="font-headline text-primary-dim font-black tracking-widest text-xs uppercase mb-6 block">
          BEACHWOOD, OH
        </span>
        <h1 className="font-headline font-black text-5xl md:text-8xl tracking-tighter italic uppercase text-white leading-none mb-6">
          SIMPLE PRICING.<br />
          <span className="text-primary-dim">NO CONTRACTS.</span>
        </h1>
        <p className="font-body text-on-surface-variant text-xl max-w-lg mx-auto mb-10">
          Month-to-month memberships. Every class included. Your first week is free.
        </p>
        <Link
          to="/free-week"
          className="inline-block bg-primary-dim text-black font-headline font-bold text-sm uppercase tracking-widest px-10 py-5 hover:bg-blue-400 transition-all"
        >
          START FREE WEEK
        </Link>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 px-8 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="HOW IT WORKS" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20 border border-outline-variant/20">
            {[
              { step: "01", heading: "PICK YOUR PLAN", body: "Choose a membership that matches how often you train, or buy a class pack with no monthly commitment." },
              { step: "02", heading: "BOOK ANY CLASS", body: "Every plan covers every class we run. Mix and match all week — strength, conditioning, climb, and recovery." },
              { step: "03", heading: "STAY FLEXIBLE", body: "Month-to-month, no contracts. Upgrade, downgrade, pause, or cancel whenever you need to." },
            ].map(({ step, heading, body }) => (
              <div key={step} className="bg-surface-container p-10 flex flex-col gap-4">
                <span className="font-headline font-black text-5xl text-primary-dim/30 leading-none">{step}</span>
                <h3 className="font-headline font-black text-lg uppercase tracking-tight text-white">{heading}</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Everything included */}
          <div className="mt-8">
            <p className="text-center font-headline text-primary-dim font-black tracking-widest text-xs uppercase mb-4">
              EVERY PLAN INCLUDES
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {INCLUDED.map((label) => (
                <div key={label} className="bg-surface-container border border-outline-variant/20 px-6 py-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-dim text-base leading-none">check</span>
                  <span className="text-xs font-bold uppercase tracking-tight text-white">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-16 md:py-24 px-8 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <SectionTitle
            eyebrow="MONTHLY"
            title="MEMBERSHIPS"
            sub="Month-to-month. No contracts. First week free for new members."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/20 border border-outline-variant/20">
            {memberships.map((m) => (
              <div
                key={m.name}
                className={`p-8 flex flex-col justify-between relative ${
                  m.popular ? "bg-surface-container-low ring-1 ring-primary-dim/30" : "bg-surface-container"
                }`}
              >
                {m.badge && (
                  <div className="absolute top-0 right-0 p-3">
                    <span className={`font-headline text-[9px] font-black tracking-widest px-2 py-1 uppercase ${
                      m.badgeColor === "redwave" ? "bg-redwave text-white" : "bg-primary-dim text-black"
                    }`}>
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
                  className={`block text-center font-headline text-xs font-bold py-4 min-h-[44px] flex items-center justify-center transition-all ${
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
          <p className="text-center mt-8 font-body text-sm text-on-surface-variant">
            New members train free for a full week before choosing a plan.
          </p>
        </div>
      </section>

      {/* Redwave callout band */}
      <div className="bg-black border-t border-b border-redwave/20 py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img src="/redwave-logo.webp" alt="Redwave" className="h-8 w-auto" />
            <p className="font-body text-on-surface-variant text-sm text-center sm:text-left">
              Included in <span className="text-white font-bold">every membership and every package</span> — no add-on fee.
            </p>
          </div>
          <Link
            to="/redwave"
            className="whitespace-nowrap font-headline font-bold text-xs uppercase tracking-widest border border-redwave text-redwave px-8 py-4 min-h-[44px] flex items-center hover:bg-redwave hover:text-white transition-all"
          >
            LEARN ABOUT REDWAVE →
          </Link>
        </div>
      </div>

      {/* Packages */}
      <section className="py-16 md:py-24 px-8 bg-surface-container-lowest">
        <div className="max-w-[1400px] mx-auto">
          <SectionTitle
            eyebrow="NO COMMITMENT"
            title="PACKAGES"
            sub="One-time purchases. All classes included. No membership required."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-outline-variant/20 border border-outline-variant/20">
            {packages.map((p) => (
              <div
                key={p.name}
                className="relative bg-surface-container p-8 flex flex-col justify-between border-b-4 border-primary-dim"
              >
                {p.badge && (
                  <div className="absolute top-0 right-0 p-3">
                    <span className="font-headline text-[9px] font-black tracking-widest px-2 py-1 uppercase bg-primary-dim text-black">
                      {p.badge}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="font-headline text-xl font-black mb-1 uppercase tracking-tight text-primary-dim">
                    {p.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="font-headline text-4xl font-black text-primary-dim">${p.price}</span>
                  </div>
                  <ul className="space-y-3 mb-10">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2 text-xs font-bold tracking-tight text-white">
                        <span className="material-symbols-outlined text-primary-dim text-base leading-none mt-px">check</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center bg-primary-dim text-black font-headline text-xs font-bold py-4 min-h-[44px] flex items-center justify-center uppercase tracking-widest hover:bg-blue-400 transition-all"
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-8 bg-black">
        <div className="max-w-3xl mx-auto">
          <SectionTitle eyebrow="GOT QUESTIONS?" title="COMMON QUESTIONS" />
          <div className="border-t border-outline-variant/40">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="border-b border-outline-variant/40">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center py-5 min-h-[44px] text-left gap-6"
                >
                  <span className="font-headline font-bold text-sm uppercase tracking-tight text-white">
                    {item.q}
                  </span>
                  <span
                    className="material-symbols-outlined text-on-surface-variant shrink-0 transition-transform duration-300"
                    style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    expand_more
                  </span>
                </button>
                {openFaq === i && (
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed pb-6">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-10 text-center font-body text-sm text-on-surface-variant">
            Still have questions?{" "}
            <a href="sms:12168329212" className="text-primary-dim hover:underline">Text us at 216-832-9212</a>
            {" "}or{" "}
            <a href="mailto:Nate@Mpcle.com" className="text-primary-dim hover:underline">email Nate</a>.
          </p>
        </div>
      </section>

      {/* Bottom CTA Bar */}
      <section className="bg-primary-dim py-12 md:py-20 px-8 text-center">
        <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tighter uppercase italic text-black">
          YOUR FIRST WEEK IS FREE.
        </h2>
        <p className="font-body text-black/70 text-lg mt-4 mb-10">
          New members only. No commitment. No credit card. Just show up.
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
