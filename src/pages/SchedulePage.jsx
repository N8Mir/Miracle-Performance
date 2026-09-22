import React from "react";
import { Link } from "react-router-dom";
import ScheduleWidget from "../components/ScheduleWidget";

export default function SchedulePage() {
  return (
    <main className="overflow-x-hidden w-full">
      {/* Hero */}
      <section className="bg-black py-24 md:py-32 px-8 text-center">
        <span className="font-headline text-primary-dim font-black tracking-widest text-xs uppercase mb-6 block">
          BOOK A CLASS
        </span>
        <h1 className="font-headline font-black text-5xl md:text-8xl tracking-tighter italic uppercase text-white leading-none mb-6">
          CLASS SCHEDULE
        </h1>
        <p className="font-body text-on-surface-variant text-xl max-w-lg mx-auto">
          Book your next session — all classes, all times.
        </p>
      </section>

      {/* Live schedule */}
      <section className="py-16 md:py-24 px-8 bg-surface-container-lowest border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScheduleWidget />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary-dim py-12 md:py-20 px-8 text-center">
        <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tighter uppercase italic text-black">
          NEW HERE? TRAIN FREE.
        </h2>
        <p className="font-body text-black/70 text-lg mt-4 mb-10">
          Your first week is on us. No commitment, no credit card.
        </p>
        <Link
          to="/free-week"
          className="inline-block bg-black text-white px-10 py-5 font-headline font-bold text-lg hover:bg-surface-container transition-all min-h-[44px]"
        >
          BOOK A FREE TRIAL
        </Link>
      </section>
    </main>
  );
}
