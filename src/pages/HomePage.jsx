import React from "react";
import ClassCardGallery from "../components/ClassCardGallery";
import { mpClassCards, redwaveClassCards } from "../data/classCards";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Check,
  MapPin,
  Dumbbell,
  Clock,
  Users,
  Star,
  ExternalLink,
} from "lucide-react";
import ScheduleWidget from "../components/ScheduleWidget";
import { memberships, packages } from "../data/pricing";

const REVIEW_SCORES = {
  google: null, // set when you want, e.g. "5.0 (120+)"
  classpass: "4.9 (2500+)",
  wellness: null, // set when you want
};

export default function HomePage() {
  const features = [
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "4 Studios, 1 Membership",
      desc: "Strength, Conditioning, VersaClimber, and Boxing—mix & match your week.",
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
      <section id="top" className="scroll-mt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Left */}
            <div className="flex-1 text-white text-center md:text-left">
              <motion.img
                src="/mp-hero-logo.png"
                alt="Miracle Performance"
                className="h-20 md:h-28 w-auto mx-auto md:mx-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />

              <motion.h1
                className="mt-4 md:mt-6 text-3xl md:text-5xl font-extrabold text-white text-center md:text-left"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                8 Classes — 1 Membership
              </motion.h1>

              <p className="mt-4 md:mt-6 text-white/90 max-w-2xl mx-auto md:mx-0">
                Strength, Conditioning, VersaClimber, Boxing, and Redwave Infrared—mix & match your week. Small-group classes with expert coaches so you get real coaching in every class — zero intimidation and a fun, supportive environment.
              </p>

              {/* Trust tags */}
              <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-2 text-sm">
                {["Beachwood, OH", "Beginner-Friendly", "Small-Group Coaching", "40+ Classes/Week"].map(
                  (item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
                <Link
                  to="/free-week"
                  className="px-5 py-3 rounded-2xl bg-white text-gray-900 font-semibold hover:opacity-90"
                >
                  Start Free Week
                </Link>
                <a
                  href="https://www.wellnessliving.com/schedule/miracleperformance"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-2xl bg-blue-700 text-white hover:bg-blue-800"
                >
                  Book Now
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="w-full md:w-1/3 flex justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/hero-video-poster.jpg"
                className="w-full max-h-[420px] sm:max-h-[480px] md:max-h-[520px] rounded-xl shadow-lg object-cover"
              >
                <source src="/mp_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="scroll-mt-24 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold">Why People Choose Miracle Performance</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            We design smart training for busy people. Get the support of a coach and the energy of a class without the chaos.
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
        <p className="text-sm uppercase tracking-wide text-gray-500">New</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">Redwave Infrared Studio</h2>
        <p className="mt-4 text-gray-600 max-w-2xl">
          Infrared heat + 850nm near-infrared light in a purpose-built recovery and performance studio.
          Take guided IR classes or book self-led recovery blocks—fully included in your membership and packs.
        </p>

        <ul className="mt-6 space-y-3 text-sm text-gray-700">
          {[
            "Infrared warmth to support deeper mobility and better warm-ups",
            "850nm near-infrared (photobiomodulation) studied for recovery support",
            "Guided classes + self-led 20-minute recovery blocks",
            "Perfect add-on before or after training",
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
            className="px-5 py-3 rounded-2xl bg-blue-700 text-white font-semibold hover:bg-blue-800"
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
    <p className="mt-2 text-gray-600 max-w-2xl">
      Strength • Met-Con • Climb • Boxing
    </p>
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

    <ClassCardGallery items={redwaveClassCards} />
  </div>
</section>

            {/* Redwave IR Classes list */}
<div className="mt-12">
  <div className="flex items-end justify-between gap-6 flex-wrap">
    <div>
      <h3 className="text-2xl font-bold">Redwave Infrared Classes</h3>
      <p className="mt-2 text-gray-600 max-w-2xl">
        Included in membership + packs. Infrared heat + 850nm near-infrared light sessions designed for mobility, recovery, and performance.
      </p>
    </div>
    <Link
      to="/redwave"
      className="px-5 py-3 rounded-2xl bg-black text-white font-semibold hover:opacity-90"
    >
      Learn More
    </Link>
  </div>

  <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
    {[
      { title: "IR Active Recovery", desc: "Guided recovery: mobility + stretching + nervous system reset." },
      { title: "IR Pilates / Barre Fusion", desc: "Low-impact strength + core + posture in infrared warmth." },
      { title: "IR Functional Flow", desc: "Flow-based mobility + strength + breathwork." },
      { title: "IR Climb + Yoga", desc: "Cardio + mobility + recovery in one session." },
      { title: "30min Climb + 30min IR Yoga", desc: "High output + deep reset—best of both worlds." },
      { title: "IR Self-Led Recovery", desc: "20-minute open studio blocks with guided routines." },
    ].map((c) => (
      <div key={c.title} className="p-6 rounded-2xl border bg-white">
        <div className="font-semibold">{c.title}</div>
        <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
      </div>
    ))}
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Personal Training */}
      <section id="training" className="scroll-mt-24 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold">Personal Training</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Customized coaching for faster results and focused accountability. Choose one-on-one or train with a small group.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-semibold">One-on-One Training</h3>
              <p className="text-gray-600 mt-2">
                Fully personalized programming tailored to your goals, schedule, and training history. Perfect for maximizing progress with direct coach attention.
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
                <a
                  href="sms:12168329212"
                  className="px-5 py-3 rounded-2xl border hover:bg-gray-50"
                >
                  Text 216-832-9212
                </a>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-semibold">Semi-Private Training (1–4 People)</h3>
              <p className="text-gray-600 mt-2">
                Train with friends or teammates and get individualized coaching in a small group. Same quality as 1:1 with more energy—and shared cost.
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
                <a
                  href="sms:12168329212"
                  className="px-5 py-3 rounded-2xl border hover:bg-gray-50"
                >
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
          <p className="mt-3 text-gray-600 max-w-2xl">
            View our live class schedule and reserve your spot instantly.
          </p>

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
                      <>Average: <span className="font-semibold">{REVIEW_SCORES.google}</span></>
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
                      <>Average: <span className="font-semibold">{REVIEW_SCORES.wellness}</span></>
                    ) : (
                      <>Read latest reviews</>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Verified clients on WellnessLiving.</p>
                </a>
              </div>

              <p className="text-xs text-gray-500 mt-3">
                (Embedding third-party reviews directly is often restricted; linking avoids cross-site limitations and keeps pages fast.)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
