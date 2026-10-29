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

const money = (n) => `$${Number.isInteger(n) ? n : n.toFixed(2)}`;
const perSession = (total, sessions) => {
  const v = total / sessions;
  return Number.isInteger(v) ? `$${v}` : `$${v.toFixed(2)}`;
};

/* ---------- small building blocks ---------- */

function Ornament({ className = "", light = false }) {
  const c = light ? "bg-pilates-gold-light" : "bg-pilates-gold";
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className={`h-px w-10 ${c} opacity-70`} />
      <span className={`w-1.5 h-1.5 rotate-45 ${c}`} />
      <span className={`h-px w-10 ${c} opacity-70`} />
    </div>
  );
}

function Eyebrow({ children, className = "" }) {
  return (
    <p className={`font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-pilates-gold-ink ${className}`}>
      {children}
    </p>
  );
}

function SectionTitle({ eyebrow, title, children, center = false }) {
  return (
    <div className={center ? "text-center flex flex-col items-center" : ""}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium text-pilates-navy leading-[1.05]">{title}</h2>
      {children && (
        <p className={`mt-4 text-pilates-body max-w-2xl leading-relaxed ${center ? "mx-auto" : ""}`}>{children}</p>
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
        <img
          src={slot.src}
          alt={slot.label}
          loading="lazy"
          className="w-full h-full object-cover"
          style={slot.position ? { objectPosition: slot.position } : undefined}
        />
      </div>
    );
  }
  return (
    <div
      className={`relative rounded-sm border border-dashed border-pilates-gold/60 bg-pilates-sky flex flex-col items-center justify-center text-center p-6 ${className}`}
      role="img"
      aria-label={`Photo coming soon: ${slot.label}`}
    >
      <Camera className="w-6 h-6 text-pilates-gold" aria-hidden="true" />
      <div className="mt-3 font-display text-xl text-pilates-navy">{slot.label}</div>
      {slot.hint && <div className="mt-1 text-xs text-pilates-body max-w-[22ch]">{slot.hint}</div>}
    </div>
  );
}

function BookButton({ children = "Book an intro · $50", className = "", onDark = false }) {
  const tone = onDark
    ? "bg-pilates-cream text-pilates-navy hover:bg-white"
    : "bg-pilates-navy text-pilates-cream hover:bg-pilates-navy-deep";
  return (
    <a
      href={PILATES_BOOK_URL}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-7 py-4 min-h-[48px] font-semibold tracking-wide transition-colors ${tone} ${className}`}
    >
      {children}
      <ArrowRight className="w-4 h-4" aria-hidden="true" />
    </a>
  );
}

function PriceTable({ title, rows, unit }) {
  return (
    <div className="border border-pilates-line bg-white">
      <div className="flex items-baseline justify-between px-6 pt-6 pb-4 border-b border-pilates-line">
        <h3 className="font-display text-3xl text-pilates-navy">{title}</h3>
        <span className="text-xs uppercase tracking-[0.2em] text-pilates-body">{unit}</span>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="text-[11px] uppercase tracking-[0.18em] text-pilates-body">
            <th className="px-6 py-3 font-medium">Option</th>
            <th className="px-3 py-3 font-medium text-right">Standard</th>
            <th className="px-6 py-3 font-semibold text-right text-pilates-gold-ink">Member</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="border-t border-pilates-line align-top">
              <td className="px-6 py-4">
                <div className="text-pilates-navy font-medium">{r.label}</div>
                <div className="text-xs text-pilates-body mt-0.5">{r.valid}</div>
              </td>
              <td className="px-3 py-4 text-right">
                <div className="text-pilates-navy tabular-nums">{money(r.std)}</div>
                {r.sessions > 1 && (
                  <div className="text-xs text-pilates-body tabular-nums">{perSession(r.std, r.sessions)}/session</div>
                )}
              </td>
              <td className="px-6 py-4 text-right">
                <div className="text-pilates-gold-ink font-semibold tabular-nums">{money(r.member)}</div>
                {r.sessions > 1 && (
                  <div className="text-xs text-pilates-body tabular-nums">{perSession(r.member, r.sessions)}/session</div>
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
    <main className="bg-pilates-bg text-pilates-body font-body">
      {/* HERO: original navy + wallpaper; logo sits on a framed cream panel so its navy lettering reads */}
      <section className="relative overflow-hidden bg-pilates-navy-deep text-pilates-cream">
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
        <div className="absolute inset-0 bg-gradient-to-b from-pilates-navy-deep/80 via-pilates-navy-deep/65 to-pilates-navy-deep/90" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-24 grid md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-10 md:gap-16 items-center">
          <div className="mx-auto w-[78%] max-w-[320px] md:w-full md:max-w-[420px] bg-pilates-bg p-5 md:p-7 border border-pilates-gold-light/70 shadow-[0_20px_60px_rgba(0,0,0,0.45)] outline outline-1 outline-offset-[6px] outline-pilates-gold-light/40">
            <img
              src={studio.logo.src}
              srcSet={`${studio.logo.srcSmall} 480w, ${studio.logo.src} 900w`}
              sizes="(max-width: 767px) 70vw, 380px"
              alt={`${studio.name}, ${studio.tagline}`}
              width="900"
              height="988"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-pilates-gold-light">{studio.eyebrow}</p>
            <h1 className="mt-4 font-display font-medium text-[2.6rem] sm:text-6xl text-pilates-cream leading-[1.02]">
              {studio.headline}
            </h1>
            <Ornament light className="mt-6 justify-center md:justify-start" />
            <p className="mt-6 text-lg text-pilates-cream/85 leading-relaxed max-w-xl mx-auto md:mx-0">{studio.intro}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <BookButton onDark />
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-7 py-4 min-h-[48px] border border-pilates-cream/40 text-pilates-cream hover:bg-pilates-cream/10 transition-colors"
              >
                See pricing
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap justify-center md:justify-start gap-2 text-[11px] uppercase tracking-[0.16em] text-pilates-cream/85">
              {studio.chips.map((c) => (
                <li key={c} className="px-3 py-1.5 border border-pilates-cream/25 bg-pilates-navy-deep/40">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-24 bg-pilates-surface border-b border-pilates-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="How it works" title="Three steps to your first session" />
          <ol className="mt-12 grid md:grid-cols-3 gap-px bg-pilates-line border border-pilates-line">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-pilates-bg p-8">
                <div className="font-display text-5xl text-pilates-blue leading-none">0{i + 1}</div>
                <div className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-pilates-gold-ink">{s.meta}</div>
                <h3 className="mt-2 font-display text-2xl text-pilates-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FORMATS */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Sessions" title="Private or duet">
            Every session is 50 minutes on a reformer tower, with a 5-minute reset between clients.
          </SectionTitle>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {formats.map((f) => (
              <article key={f.name} className="border border-pilates-line bg-white p-8 md:p-10">
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h3 className="font-display text-4xl text-pilates-navy">{f.name}</h3>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-pilates-blue whitespace-nowrap">
                    {f.people} · {f.length}
                  </span>
                </div>
                <div className="mt-5 h-px bg-gradient-to-r from-pilates-gold to-transparent" />
                <p className="mt-5 leading-relaxed">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 md:py-28 bg-pilates-surface border-y border-pilates-line scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Pricing" title="Start with an intro" center />

          <div className="mt-12 border border-pilates-gold/60 bg-white p-8 md:p-10 grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center">
            <div className="font-display text-7xl text-pilates-gold-ink leading-none tabular-nums">
              {money(pricing.intro.price)}
            </div>
            <div>
              <h3 className="font-display text-3xl text-pilates-navy">Intro session</h3>
              <p className="mt-2 text-sm leading-relaxed max-w-lg">{pricing.intro.note}</p>
              <p className="mt-2 text-sm font-medium text-pilates-blue">Buy a pack within 7 days and your intro is credited.</p>
            </div>
            <BookButton className="w-full md:w-auto">Book intro</BookButton>
          </div>

          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            <PriceTable title="Private" rows={pricing.private} unit="1 client" />
            <PriceTable title="Duet" rows={pricing.duet} unit="Per person" />
          </div>

          <p className="mt-6 text-sm max-w-3xl">
            <span className="font-semibold text-pilates-gold-ink">Member</span> = {pricing.memberNote}
          </p>

          <dl className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-pilates-line border border-pilates-line">
            {policies.map((p) => (
              <div key={p.title} className="bg-pilates-bg p-6">
                <dt className="font-display text-xl text-pilates-navy">{p.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 md:gap-16 items-start">
          <PhotoSlot slot={instructor.photo} className="aspect-[4/5] w-full max-w-sm mx-auto md:max-w-none md:sticky md:top-28" />
          <div>
            <Eyebrow>Your instructor</Eyebrow>
            <h2 className="mt-3 font-display text-5xl md:text-6xl font-medium text-pilates-navy">{instructor.name}</h2>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[11px] uppercase tracking-[0.2em] text-pilates-blue">
              {instructor.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="mt-6 space-y-4 leading-relaxed">
              {instructor.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <h3 className="mt-10 text-[11px] font-semibold uppercase tracking-[0.28em] text-pilates-gold-ink">Certifications</h3>
            <ul className="mt-4 divide-y divide-pilates-line border-y border-pilates-line">
              {instructor.credentials.map((c) => (
                <li key={c.title} className="py-3 flex gap-4">
                  <span className="mt-2 w-1.5 h-1.5 rotate-45 bg-pilates-gold shrink-0" aria-hidden="true" />
                  <div>
                    <div className="text-pilates-navy font-medium">{c.title}</div>
                    <div className="text-sm">{c.detail}</div>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={`https://instagram.com/${instructor.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-medium text-pilates-gold-ink hover:text-pilates-navy"
            >
              <Instagram className="w-4 h-4" aria-hidden="true" />@{instructor.instagram}
            </a>
          </div>
        </div>
      </section>

      {/* THE STUDIO */}
      <section className="py-20 md:py-28 bg-pilates-surface border-y border-pilates-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <SectionTitle eyebrow="The studio" title="A room built for two">
                {equipment.intro}
              </SectionTitle>
              <div className="mt-8 border-l-2 border-pilates-gold pl-5">
                <div className="font-display text-2xl text-pilates-navy">{equipment.model}</div>
                <div className="mt-1 text-sm">{equipment.modelDetail}</div>
              </div>
            </div>
            <div>
              <ul className="space-y-4">
                {equipment.features.map((f) => (
                  <li key={f} className="flex gap-4 leading-relaxed">
                    <span className="mt-2.5 w-1.5 h-1.5 rotate-45 bg-pilates-gold shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-display italic text-2xl text-pilates-navy leading-snug">{equipment.closing}</p>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 md:h-[520px]">
            <PhotoSlot slot={gallery[0]} className="col-span-2 md:row-span-2 aspect-[3/2] md:aspect-auto" />
            <PhotoSlot slot={gallery[1]} className="aspect-square md:aspect-auto" />
            <PhotoSlot slot={gallery[2]} className="aspect-square md:aspect-auto" />
            <PhotoSlot slot={gallery[3]} className="col-span-2 aspect-[3/2] md:aspect-auto" />
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <SectionTitle eyebrow="Who is Pilates for?" title={forWho.title} />
              <p className="mt-6 text-lg leading-relaxed">{forWho.lead}</p>
              <p className="mt-4 leading-relaxed">{forWho.body}</p>
            </div>
            <div className="space-y-px bg-pilates-line border border-pilates-line self-start">
              {forWho.pillars.map((p, i) => (
                <div key={p.title} className="bg-white p-6 flex gap-5">
                  <div className="font-display text-4xl text-pilates-blue leading-none w-8 shrink-0">{i + 1}</div>
                  <div>
                    <h3 className="font-display text-2xl text-pilates-navy">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-14 max-w-3xl mx-auto text-center">
            <p className="leading-relaxed">{forWho.core}</p>
            <Ornament className="mt-8 justify-center" />
            <p className="mt-6 font-display italic text-3xl md:text-4xl text-pilates-navy leading-snug">{forWho.quote}</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-pilates-sky border-y border-pilates-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Kind words" title="From Liz's clients" center />
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <figure key={i} className="bg-white border-t-2 border-pilates-gold p-8">
                <div className="font-display text-6xl leading-none text-pilates-gold" aria-hidden="true">
                  &ldquo;
                </div>
                <blockquote className="mt-1 font-display italic text-2xl text-pilates-navy leading-snug">{t.quote}</blockquote>
                <figcaption className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-pilates-blue">{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-pilates-navy-deep text-pilates-cream">
        <img
          src="/pilates/wallpaper-800.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-pilates-navy-deep/75" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center flex flex-col items-center">
          <Ornament light />
          <h2 className="mt-6 font-display text-5xl md:text-6xl font-medium">Your first session starts here</h2>
          <p className="mt-4 text-pilates-cream/85">45 minutes, $50, solo or with a partner.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <BookButton onDark />
            <a
              href={PILATES_TEXT}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 min-h-[48px] border border-pilates-cream/40 text-pilates-cream hover:bg-pilates-cream/10 transition-colors"
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
