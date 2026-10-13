import React, { useEffect } from "react";
import { Instagram, MessageSquare, ArrowRight, Camera } from "lucide-react";
import {
  PILATES_BOOK_URL,
  PILATES_TEXT,
  studio,
  steps,
  formats,
  pricing,
  instructor,
  equipment,
  gallery,
  forWho,
  testimonials,
  policies,
} from "../data/pilates";

// Display serif for this page only, so the rest of the site doesn't pay for it.
function useDisplayFont() {
  useEffect(() => {
    const id = "pilates-display-font";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Manrope:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);
}

function usePageTitle(title) {
  useEffect(() => {
    const prev = document.title;
    document.title = title;
    return () => {
      document.title = prev;
    };
  }, [title]);
}

const money = (n) =>
  `$${Number.isInteger(n) ? n : n.toFixed(2)}`;
const perSession = (total, sessions) => {
  const v = total / sessions;
  return Number.isInteger(v) ? `$${v}` : `$${v.toFixed(2)}`;
};

/* ---------- small building blocks ---------- */

function Ornament({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-10 bg-pilates-gold/60" />
      <span className="w-1.5 h-1.5 rotate-45 bg-pilates-gold" />
      <span className="h-px w-10 bg-pilates-gold/60" />
    </div>
  );
}

function Eyebrow({ children, className = "" }) {
  return (
    <p className={`font-body text-[11px] uppercase tracking-[0.28em] text-pilates-gold ${className}`}>
      {children}
    </p>
  );
}

function SectionTitle({ eyebrow, title, children, center = false }) {
  return (
    <div className={center ? "text-center flex flex-col items-center" : ""}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium text-pilates-cream leading-[1.05]">
        {title}
      </h2>
      {children && (
        <p className={`mt-4 text-pilates-mist/80 max-w-2xl leading-relaxed ${center ? "mx-auto" : ""}`}>
          {children}
        </p>
      )}
    </div>
  );
}

// Shows the real photo once `src` is set in data/pilates.js; until then, a labeled frame
// telling you which shot belongs here.
function PhotoSlot({ slot, className = "" }) {
  if (slot.src) {
    return (
      <div className={`overflow-hidden rounded-sm ${className}`}>
        <img src={slot.src} alt={slot.label} loading="lazy" className="w-full h-full object-cover" />
      </div>
    );
  }
  return (
    <div
      className={`relative rounded-sm border border-dashed border-pilates-gold/40 bg-pilates-ink-2 flex flex-col items-center justify-center text-center p-6 ${className}`}
      role="img"
      aria-label={`Photo coming soon: ${slot.label}`}
    >
      <Camera className="w-6 h-6 text-pilates-gold/70" aria-hidden="true" />
      <div className="mt-3 font-display text-xl text-pilates-cream">{slot.label}</div>
      {slot.hint && <div className="mt-1 text-xs text-pilates-mist/60 max-w-[22ch]">{slot.hint}</div>}
    </div>
  );
}

function BookButton({ children = "Book an intro · $50", className = "" }) {
  return (
    <a
      href={PILATES_BOOK_URL}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-7 py-4 min-h-[48px] bg-pilates-gold text-pilates-ink font-semibold tracking-wide hover:bg-pilates-gold-light transition-colors ${className}`}
    >
      {children}
      <ArrowRight className="w-4 h-4" aria-hidden="true" />
    </a>
  );
}

function PriceTable({ title, rows, unit }) {
  return (
    <div className="border border-pilates-line bg-pilates-ink-2/60">
      <div className="flex items-baseline justify-between px-6 pt-6 pb-4 border-b border-pilates-line">
        <h3 className="font-display text-3xl text-pilates-cream">{title}</h3>
        <span className="text-xs uppercase tracking-[0.2em] text-pilates-mist/60">{unit}</span>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="text-[11px] uppercase tracking-[0.18em] text-pilates-mist/60">
            <th className="px-6 py-3 font-medium">Option</th>
            <th className="px-3 py-3 font-medium text-right">Standard</th>
            <th className="px-6 py-3 font-medium text-right text-pilates-gold">Member</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="border-t border-pilates-line/70 align-top">
              <td className="px-6 py-4">
                <div className="text-pilates-cream font-medium">{r.label}</div>
                <div className="text-xs text-pilates-mist/60 mt-0.5">{r.valid}</div>
              </td>
              <td className="px-3 py-4 text-right">
                <div className="text-pilates-cream tabular-nums">{money(r.std)}</div>
                {r.sessions > 1 && (
                  <div className="text-xs text-pilates-mist/60 tabular-nums">{perSession(r.std, r.sessions)}/session</div>
                )}
              </td>
              <td className="px-6 py-4 text-right">
                <div className="text-pilates-gold font-semibold tabular-nums">{money(r.member)}</div>
                {r.sessions > 1 && (
                  <div className="text-xs text-pilates-mist/60 tabular-nums">
                    {perSession(r.member, r.sessions)}/session
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- page ---------- */

export default function PilatesPage() {
  useDisplayFont();
  usePageTitle(`${studio.name} · Private Reformer Pilates in Beachwood | Miracle Performance`);

  return (
    <main className="bg-pilates-ink text-pilates-cream font-body">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <picture>
          <source media="(max-width: 767px)" srcSet="/pilates/wallpaper-800.webp" />
          <img
            src="/pilates/wallpaper-1600.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-45"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-pilates-ink/80 via-pilates-ink/70 to-pilates-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(18,20,42,0.65)_75%)]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 md:pt-44 md:pb-32 text-center flex flex-col items-center">
          <Eyebrow>{studio.eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display font-medium text-6xl sm:text-7xl md:text-8xl leading-none tracking-tight">
            {studio.name}
          </h1>
          <Ornament className="mt-6" />
          <p className="mt-5 font-display italic text-2xl md:text-3xl text-pilates-gold-light">{studio.tagline}</p>
          <p className="mt-6 max-w-xl text-pilates-mist/90 leading-relaxed">{studio.intro}</p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <BookButton />
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-7 py-4 min-h-[48px] border border-pilates-cream/30 text-pilates-cream hover:bg-pilates-cream/10 transition-colors"
            >
              See pricing
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.2em] text-pilates-mist/70">
            {studio.chips.map((c, i) => (
              <li key={c} className="flex items-center gap-6">
                {i > 0 && <span className="w-1 h-1 rotate-45 bg-pilates-teal-light hidden sm:block" aria-hidden="true" />}
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28 border-t border-pilates-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="How it works" title="Three steps to your first session" />
          <ol className="mt-12 grid md:grid-cols-3 gap-px bg-pilates-line">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-pilates-ink p-8">
                <div className="font-display text-5xl text-pilates-teal-light leading-none">0{i + 1}</div>
                <div className="mt-6 text-xs uppercase tracking-[0.2em] text-pilates-gold">{s.meta}</div>
                <h3 className="mt-2 font-display text-2xl text-pilates-cream">{s.title}</h3>
                <p className="mt-3 text-sm text-pilates-mist/80 leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FORMATS */}
      <section className="py-20 md:py-28 bg-pilates-ink-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Sessions" title="Private or duet">
            Every session is 50 minutes on a tower reformer, with a 5-minute reset between clients.
          </SectionTitle>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {formats.map((f) => (
              <article key={f.name} className="border border-pilates-line bg-pilates-ink p-8 md:p-10">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-4xl text-pilates-cream">{f.name}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-pilates-mist/60 whitespace-nowrap">
                    {f.people} · {f.length}
                  </span>
                </div>
                <div className="mt-5 h-px bg-gradient-to-r from-pilates-gold/70 to-transparent" />
                <p className="mt-5 text-pilates-mist/80 leading-relaxed">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 md:py-28 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Pricing" title="Start with an intro" center />

          {/* Intro feature */}
          <div className="mt-12 relative border border-pilates-gold/50 bg-pilates-ink-2 p-8 md:p-10 grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center">
            <div className="font-display text-7xl text-pilates-gold leading-none tabular-nums">
              {money(pricing.intro.price)}
            </div>
            <div>
              <h3 className="font-display text-3xl text-pilates-cream">Intro session</h3>
              <p className="mt-2 text-sm text-pilates-mist/80 leading-relaxed max-w-lg">{pricing.intro.note}</p>
              <p className="mt-2 text-sm text-pilates-teal-light">Buy a pack within 7 days and your intro is credited.</p>
            </div>
            <BookButton className="w-full md:w-auto">Book intro</BookButton>
          </div>

          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            <PriceTable title="Private" rows={pricing.private} unit="1 client" />
            <PriceTable title="Duet" rows={pricing.duet} unit="Per person" />
          </div>

          <p className="mt-6 text-sm text-pilates-mist/70 max-w-3xl">
            <span className="text-pilates-gold">Member</span> = {pricing.memberNote}
          </p>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="py-20 md:py-28 bg-pilates-ink-2 border-y border-pilates-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 md:gap-16 items-center">
          <PhotoSlot slot={instructor.photo} className="aspect-[4/5] w-full max-w-sm mx-auto md:max-w-none" />
          <div>
            <Eyebrow>Your instructor</Eyebrow>
            <h2 className="mt-3 font-display text-5xl md:text-6xl font-medium text-pilates-cream">{instructor.name}</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {instructor.credentials.map((c) => (
                <li key={c} className="px-3 py-1 text-xs border border-pilates-teal/60 text-pilates-teal-light">
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-4 text-pilates-mist/85 leading-relaxed">
              {instructor.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <a
              href={`https://instagram.com/${instructor.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-pilates-gold hover:text-pilates-gold-light"
            >
              <Instagram className="w-4 h-4" aria-hidden="true" />@{instructor.instagram}
            </a>
          </div>
        </div>
      </section>

      {/* THE ROOM */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-end">
            <SectionTitle eyebrow="The studio" title="A room built for two" />
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-pilates-gold">{equipment.title}</div>
              <div className="mt-1 font-display text-2xl text-pilates-cream">{equipment.model}</div>
              <p className="mt-2 text-sm text-pilates-mist/80 leading-relaxed">{equipment.body}</p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 md:h-[520px]">
            <PhotoSlot slot={gallery[0]} className="col-span-2 md:row-span-2 aspect-[3/2] md:aspect-auto" />
            <PhotoSlot slot={gallery[1]} className="aspect-square md:aspect-auto" />
            <PhotoSlot slot={gallery[2]} className="aspect-square md:aspect-auto" />
            <PhotoSlot slot={gallery[3]} className="col-span-2 aspect-[3/2] md:aspect-auto" />
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR + POLICIES */}
      <section className="py-20 md:py-28 bg-pilates-ink-2 border-t border-pilates-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <SectionTitle eyebrow="Who it's for" title="Made for careful, deliberate work" />
            <ul className="mt-8 space-y-4">
              {forWho.map((w) => (
                <li key={w} className="flex gap-4 text-pilates-mist/85 leading-relaxed">
                  <span className="mt-2.5 w-1.5 h-1.5 rotate-45 bg-pilates-gold shrink-0" aria-hidden="true" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle eyebrow="Good to know" title="Studio policies" />
            <dl className="mt-8 grid sm:grid-cols-2 gap-px bg-pilates-line border border-pilates-line">
              {policies.map((p) => (
                <div key={p.title} className="bg-pilates-ink p-6">
                  <dt className="font-display text-xl text-pilates-cream">{p.title}</dt>
                  <dd className="mt-2 text-sm text-pilates-mist/75 leading-relaxed">{p.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Kind words" title="From Liz's clients" center />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <figure key={i} className="border-t border-pilates-gold/50 pt-6">
                <div className="font-display text-6xl leading-none text-pilates-gold/70" aria-hidden="true">
                  &ldquo;
                </div>
                <blockquote className="mt-2 font-display italic text-2xl text-pilates-cream leading-snug">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-pilates-mist/60">{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-pilates-line">
        <img
          src="/pilates/wallpaper-800.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-pilates-ink/80" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center flex flex-col items-center">
          <Ornament />
          <h2 className="mt-6 font-display text-5xl md:text-6xl font-medium">Your first session starts here</h2>
          <p className="mt-4 text-pilates-mist/85">45 minutes, $50, solo or with a partner.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <BookButton />
            <a
              href={PILATES_TEXT}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 min-h-[48px] border border-pilates-cream/30 text-pilates-cream hover:bg-pilates-cream/10 transition-colors"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              Text a question
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
