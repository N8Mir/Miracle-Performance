import React, { useState } from "react";
import { Link } from "react-router-dom";
import { memberships, packages, topups } from "../data/pricing";

const dropins = packages.filter((p) => p.name.startsWith("DROP-IN"));
const sessionPacks = packages.filter((p) => !p.name.startsWith("DROP-IN"));

const FAQ_ITEMS = [
  {
    q: "How do credits work?",
    a: "Credits are the currency you use to book classes. Each class costs a set number of credits: 3 credits for any MP class (Strength, Met-Con, Climb, Boxfit), 1 credit for a Redwave recovery session, and 4 credits for a Redwave premium class. Buy a membership for monthly credits, or grab a pack or drop-in when you need it.",
  },
  {
    q: "Do credits roll over if I don't use them?",
    a: "Yes — unused credits on any active membership roll over month to month automatically. There's no expiry while your membership is active. Package credits have a 1-year expiry from purchase date.",
  },
  {
    q: "Can I cancel my membership anytime?",
    a: "Yes. All memberships are month-to-month with no contracts. Cancel, pause, or upgrade through the WellnessLiving app or by contacting us directly. Cancellations take effect at the end of the current billing cycle.",
  },
  {
    q: "What's the difference between a membership and a package?",
    a: "A membership gives you a set number of credits every month at a lower per-credit rate — best if you train regularly. A package is a one-time credit purchase — best if your schedule varies or you want to try us out before committing to a monthly plan.",
  },
  {
    q: "Is Redwave included in my membership?",
    a: "Redwave access is included in the Essential, Performance, Elite, and Ultimate tiers. Starter members can still access Redwave by purchasing a drop-in or top-up credits. Recovery sessions cost 1 credit; premium Redwave classes cost 4 credits.",
  },
  {
    q: "How do I get started?",
    a: "Your first full week is free — no credit card, no commitment. Click 'Start Free Week', fill out a short form, and we'll get you booked into your first class. After your trial, pick the plan that fits your training frequency and you're set.",
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
          SIMPLE CREDITS.<br />
          <span className="text-primary-dim">NO CONTRACTS.</span>
        </h1>
        <p className="font-body text-on-surface-variant text-xl max-w-lg mx-auto mb-10">
          Buy credits. Use them on any class. Roll them over. Cancel whenever.
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
              { step: "01", heading: "BUY CREDITS", body: "Pick a monthly membership for the best per-credit rate, or grab a class pack whenever you need it." },
              { step: "02", heading: "BOOK ANY CLASS", body: "Use credits on any MP or Redwave class. Mix and match all week — strength, conditioning, recovery, and more." },
              { step: "03", heading: "ROLL THEM OVER", body: "Unused membership credits carry forward automatically. No expiry, no pressure, no waste." },
            ].map(({ step, heading, body }) => (
              <div key={step} className="bg-surface-container p-10 flex flex-col gap-4">
                <span className="font-headline font-black text-5xl text-primary-dim/30 leading-none">{step}</span>
                <h3 className="font-headline font-black text-lg uppercase tracking-tight text-white">{heading}</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Credit cost reference */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              { credits: "1 CREDIT", label: "Redwave Recovery Session" },
              { credits: "3 CREDITS", label: "Any MP Class" },
              { credits: "4 CREDITS", label: "Redwave Premium Classes" },
            ].map(({ credits, label }) => (
              <div key={credits} className="bg-surface-container border border-outline-variant/20 px-6 py-4 flex items-center gap-4">
                <span className="font-headline font-black text-2xl text-primary-dim">{credits}</span>
                <span className="text-xs font-bold uppercase tracking-tight text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-16 md:py-24 px-8 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <SectionTitle
            eyebrow="MONTHLY"
            title="MEMBERSHIPS"
            sub="Month-to-month. Upgrade, downgrade, or cancel anytime."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-outline-variant/20 border border-outline-variant/20">
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
        </div>
      </section>

      {/* Redwave callout band */}
      <div className="bg-black border-t border-b border-redwave/20 py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img src="/redwave-logo.webp" alt="Redwave" className="h-8 w-auto" />
            <p className="font-body text-on-surface-variant text-sm text-center sm:text-left">
              Included in <span className="text-white font-bold">Essential, Performance, Elite,</span> and <span className="text-white font-bold">Ultimate</span> memberships.
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

      {/* Drop-ins */}
      <section className="py-16 md:py-24 px-8 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            eyebrow="NO COMMITMENT"
            title="DROP-INS"
            sub="Pay per visit. No membership required."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-outline-variant/20 border border-outline-variant/20">
            {dropins.map((p) => {
              const isRedwave = p.accent === "redwave";
              return (
                <div key={p.name} className={`bg-surface-container p-10 flex flex-col justify-between border-b-4 ${isRedwave ? "border-redwave" : "border-primary-dim"}`}>
                  <div>
                    <h3 className={`font-headline text-xl font-black mb-1 uppercase tracking-tight ${isRedwave ? "text-redwave" : "text-primary-dim"}`}>
                      {p.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className={`font-headline text-5xl font-black ${isRedwave ? "text-redwave" : "text-primary-dim"}`}>${p.price}</span>
                    </div>
                    <ul className="space-y-3 mb-10">
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
                    className={`block text-center font-headline text-xs font-bold py-4 min-h-[44px] flex items-center justify-center uppercase tracking-widest transition-all ${
                      isRedwave ? "bg-redwave text-white hover:bg-redwave-dark" : "bg-primary-dim text-black hover:bg-blue-400"
                    }`}
                  >
                    {p.cta}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Session Packs */}
      <section className="py-16 md:py-24 px-8 bg-black">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            eyebrow="BETTER VALUE"
            title="PACKAGES"
            sub="One-time credit purchases. Best for flexible athletes."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-outline-variant/20 border border-outline-variant/20">
            {sessionPacks.map((p) => (
              <div key={p.name} className="bg-surface-container p-10 flex flex-col justify-between border-b-4 border-primary-dim">
                <div>
                  <h3 className="font-headline text-xl font-black mb-1 uppercase tracking-tight text-primary-dim">
                    {p.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="font-headline text-5xl font-black text-primary-dim">${p.price}</span>
                  </div>
                  <ul className="space-y-3 mb-10">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2 text-xs font-bold tracking-tight text-white">
                        <span className="material-symbols-outlined text-primary-dim text-base leading-none mt-px">confirmation_number</span>
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

      {/* Top-ups */}
      <section className="py-16 md:py-24 px-8 bg-surface-container-lowest">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            eyebrow="NEED MORE?"
            title="TOP-UPS"
            sub="Add credits to any active membership mid-month."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-outline-variant/20 border border-outline-variant/20">
            {topups.map((t) => (
              <div key={t.name} className="bg-surface-container p-10 flex flex-col justify-between border-b-4 border-primary-dim">
                <div>
                  <h3 className="font-headline text-xl font-black mb-1 uppercase tracking-tight text-primary-dim">{t.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="font-headline text-5xl font-black text-primary-dim">${t.price}</span>
                  </div>
                  <p className="text-xs font-bold tracking-tight uppercase text-white mb-10">{t.credits}</p>
                </div>
                <a
                  href={t.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center bg-primary-dim text-black font-headline text-xs font-bold py-4 min-h-[44px] flex items-center justify-center uppercase tracking-widest hover:bg-blue-400 transition-all"
                >
                  BUY NOW
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
