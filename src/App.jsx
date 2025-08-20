import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Check, MapPin, Phone, Mail, Dumbbell, Clock, Users, Star, LogIn,
  Image as ImageIcon, ExternalLink
} from "lucide-react";
import ScheduleWidget from "./components/ScheduleWidget";

// --- Review scores (edit here when ratings change) ---
const REVIEW_SCORES = {
  google: "—", // e.g. "4.8 (120+)"
  classpass: "4.9 (2500+)",
  wellness: "—"
};

// --- Free Week Trial Page ---
function FreeWeekPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top banner */}
      <section className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-3xl md:text-5xl font-extrabold">Your First Week Is On Us</h1>
          <p className="mt-4 text-white/90 max-w-2xl">
            Try Miracle Performance for 7 days. No pushy sales, no long-term contracts—just great coaching, fun classes, and real results.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#steps" className="px-5 py-3 rounded-2xl bg-white text-blue-700 font-semibold hover:opacity-90">
              See How It Works
            </a>
            <a href="#schedule" className="px-5 py-3 rounded-2xl border border-white/40 hover:bg-white/10">
              Book Your First Class
            </a>
          </div>
        </div>
      </section>

      {/* Why this works */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">What You’ll Experience This Week</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Coached Small Groups", desc: "Hands-on coaching every class—get real feedback, not guesswork." },
              { title: "4 Classes, One Membership", desc: "Strength, Metabolic Conditioning, VersaClimber, and Boxing." },
              { title: "Beginner-Friendly", desc: "We scale everything to your level. No intimidation, ever." },
              { title: "Flexible Schedule", desc: "Early AM, evenings, and weekends. Book from your phone." },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border bg-white">
                <div className="font-semibold">{f.title}</div>
                <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="steps" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">How To Claim Your Free Week</h2>
          <ol className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <li className="p-6 rounded-2xl border bg-white">
              <div className="text-sm uppercase tracking-wide text-gray-500">Step 1</div>
              <div className="mt-2 font-semibold">Book Your First Session</div>
              <p className="text-sm text-gray-600 mt-2">Pick any class from our live schedule below to get started.</p>
              <a href="#schedule" className="mt-4 inline-block text-blue-700 hover:underline">Jump to Schedule</a>
            </li>
            <li className="p-6 rounded-2xl border bg-white">
              <div className="text-sm uppercase tracking-wide text-gray-500">Step 2</div>
              <div className="mt-2 font-semibold">Create Your Account</div>
              <p className="text-sm text-gray-600 mt-2">During checkout you’ll be prompted to make a WellnessLiving account.</p>
            </li>
            <li className="p-6 rounded-2xl border bg-white">
              <div className="text-sm uppercase tracking-wide text-gray-500">Step 3</div>
              <div className="mt-2 font-semibold">Choose “Free Week Trial” at Payment</div>
              <p className="text-sm text-gray-600 mt-2">
                Select the <strong>Free Week Trial</strong> option to finish booking at $0.
              </p>
            </li>
            <li className="p-6 rounded-2xl border bg-white">
              <div className="text-sm uppercase tracking-wide text-gray-500">Step 4</div>
              <div className="mt-2 font-semibold">Book More Classes This Week</div>
              <p className="text-sm text-gray-600 mt-2">Use the web schedule or our mobile app to reserve the rest of your week.</p>
              <div className="mt-3 space-x-3">
                <a href="https://apps.apple.com/us/app/wellnessliving-achieve/id1135932782" target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-2 rounded-xl border hover:bg-gray-50 text-sm">iPhone App</a>
                <a href="https://play.google.com/store/apps/details?id=com.wellnessliving.achieve" target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-2 rounded-xl border hover:bg-gray-50 text-sm">Android App</a>
              </div>
            </li>
          </ol>
          <p className="mt-6 text-sm text-gray-600">
            Questions? <a href="sms:12168329212" className="text-blue-700 hover:underline">Text us at 216-832-9212</a>.
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Book Your First Class</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">Choose any class to begin your free week. You’ll create your account during checkout.</p>
          <div className="mt-6 rounded-2xl border bg-white p-4">
            <ScheduleWidget />
            <div className="mt-4 text-sm">
              <a href="https://www.wellnessliving.com/schedule/miracleperformance" target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                Open full schedule ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">What to Expect</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border bg-white">
              <div className="font-semibold">Do I need experience?</div>
              <p className="text-sm text-gray-600 mt-2">Nope! We coach beginners and seasoned athletes. We’ll scale movements to your level.</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <div className="font-semibold">What should I bring?</div>
              <p className="text-sm text-gray-600 mt-2">Athletic shoes, a water bottle, and a can-do attitude. We handle the programming and coaching.</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <div className="font-semibold">Where are you located?</div>
              <p className="text-sm text-gray-600 mt-2">23400 Mercantile Rd, Suite 5, Beachwood, OH 44122. Plenty of parking on site.</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white">
              <div className="font-semibold">Who is the trial for?</div>
              <p className="text-sm text-gray-600 mt-2">New local clients only. One per person. No obligation—continue only if you love it.</p>
            </div>
          </div>
          <div className="mt-8 text-sm text-gray-600">
            Still unsure? <a href="sms:12168329212" className="text-blue-700 hover:underline">Text us</a> and we’ll help you pick the right first class.
          </div>
        </div>
      </section>
    </main>
  );
}

function PricingPage() {
  const memberships = [
    { 
      name: "4 sessions / mo", 
      sub: "Budget-friendly", 
      price: 69, 
      features: ["All Class Access", "App booking", "Coach feedback"], 
      cta: "Start Free Week",
      link: "/free-week"
    },
    { 
      name: "8 sessions / mo", 
      sub: "Most popular", 
      price: 119, 
      features: ["All Class Access", "App booking", "Coach feedback"], 
      cta: "Start Free Week",
      link: "/free-week"
    },
    { 
      name: "12 sessions / mo", 
      sub: "Train 3x/week", 
      price: 149, 
      features: ["All Class Access", "App booking", "Coach feedback"], 
      cta: "Start Free Week",
      link: "/free-week"
    },
    { 
      name: "Unlimited / mo", 
      sub: "Best results", 
      price: 199, 
      features: ["Unlimited classes", "App booking", "Coach feedback"], 
      cta: "Start Free Week",
      link: "/free-week"
    },
  ];

  const packages = [
    { 
      name: "Drop-In", 
      sub: "Single class", 
      price: 22, 
      features: ["Any studio", "Coach guidance"], 
      cta: "Book a Class",
      link: "https://www.wellnessliving.com/rs/catalog-view.html?k_business=136685&id_sale=1&k_id=233847"
    },
    { 
      name: "5 Sessions", 
      sub: "$19.80/session", 
      price: 99, 
      features: ["Flexible", "3-month expiry"], 
      cta: "Get 5-Pack",
      link: "https://www.wellnessliving.com/rs/catalog-view.html?k_business=136685&id_sale=1&k_id=233849"
    },
    { 
      name: "10 Sessions", 
      sub: "$16.90/session", 
      price: 169, 
      features: ["Great value", "1-year expiry"], 
      cta: "Get 10-Pack",
      link: "https://www.wellnessliving.com/rs/catalog-view.html?k_business=136685&id_sale=1&k_id=233855"
    },
    { 
      name: "20 Sessions", 
      sub: "$14.95/session", 
      price: 299, 
      features: ["Great Savings", "1-year expiry"], 
      cta: "Get 20-Pack",
      link: "https://www.wellnessliving.com/rs/catalog-view.html?k_business=136685&id_sale=1&k_id=233862"
    },
    { 
      name: "30 Sessions", 
      sub: "$13.30/session", 
      price: 399, 
      features: ["Best per-class price", "1-year expiry"], 
      cta: "Get 30-Pack",
      link: "https://www.wellnessliving.com/rs/catalog-view.html?k_business=136685&id_sale=1&k_id=233865"
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Pricing</h1>
          <p className="mt-3 text-gray-600">
            Update these plan names, prices, and bullets anytime. The big black button text can also be edited per plan.
          </p>

          {/* Memberships */}
          <h3 className="mt-8 text-xl font-semibold">Memberships</h3>
          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberships.map((m, i) => (
              <div key={i} className="p-6 rounded-2xl border bg-white flex flex-col">
                <div className="flex items-baseline justify-between">
                  <div className="font-semibold text-lg">{m.name}</div>
                  {m.sub && <span className="text-xs text-gray-500">{m.sub}</span>}
                </div>

                <p className="text-4xl font-extrabold mt-2">
                  ${m.price}<span className="text-base font-medium text-gray-500">/mo</span>
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700 flex-1">
                  {m.features?.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      • {f}
                    </li>
                  ))}
                </ul>

                {m.link?.startsWith("/") ? (
                  <Link
                    to={m.link}
                    className="mt-6 inline-flex px-5 py-3 rounded-2xl bg-blue-700 text-white font-semibold hover:bg-blue-800 text-center"
                  >
                    {m.cta || "Learn More"}
                  </Link>
                ) : (
                  <a
                    href={m.link || "#"}
                    target={m.link ? "_blank" : undefined}
                    rel={m.link ? "noreferrer" : undefined}
                    className="mt-6 inline-flex px-5 py-3 rounded-2xl bg-blue-700 text-white font-semibold hover:bg-blue-800 text-center"
                  >
                    {m.cta || "Learn More"}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Packages */}
          <h2 className="mt-12 text-2xl font-bold">Class Packages</h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {packages.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl border bg-white flex flex-col">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <span className="text-xs text-gray-500">{p.sub}</span>
                </div>
                <p className="text-4xl font-extrabold mt-2">${p.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="https://www.wellnessliving.com/schedule/miracleperformance" className="mt-6 inline-flex px-5 py-3 rounded-2xl bg-black text-white hover:opacity-90">
                  {p.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm text-gray-500">
            *These are placeholder prices. Replace with your real rates and add any discounts or annual options.
          </div>
        </div>
      </section>
    </main>
  );
}

function HomePage() {
  const features = [
    { icon: <Dumbbell className="w-6 h-6" />, title: "4 Studios, 1 Membership", desc: "Strength, Conditioning, VersaClimber, and a Boxing class—mix & match your week." },
    { icon: <Users className="w-6 h-6" />, title: "Small Group Training", desc: "Small groups with personal attention in every session." },
    { icon: <Clock className="w-6 h-6" />, title: "40+ Classes/Week", desc: "Early mornings, evenings, and weekends to fit any schedule." },
    { icon: <Star className="w-6 h-6" />, title: "Expert Coaches", desc: "Certified trainers who program for progress, not burnout." },
  ];

  // memberships WITH internal links to /free-week
  const memberships = [
    { name: "4 sessions / mo", sub: "Budget-friendly", price: 69, features: ["All Class Access", "App booking", "Coach feedback"], cta: "Start Free Week", link: "/free-week" },
    { name: "8 sessions / mo", sub: "Most popular", price: 119, features: ["All Class Access", "App booking", "Coach feedback"], cta: "Start Free Week", link: "/free-week" },
    { name: "12 sessions / mo", sub: "Train 3x/week", price: 149, features: ["All Class Access", "App booking", "Coach feedback"], cta: "Start Free Week", link: "/free-week" },
    { name: "Unlimited / mo", sub: "Best results", price: 199, features: ["Unlimited classes", "App booking", "Coach feedback"], cta: "Start Free Week", link: "/free-week" },
  ];

  // ADD THIS: packages for the homepage pricing grid
  const packages = [
    { 
      name: "Drop-In", 
      sub: "Single class", 
      price: 22, 
      features: ["Any studio", "Coach guidance"], 
      cta: "Book a Class",
      link: "https://www.wellnessliving.com/rs/catalog-view.html?k_business=136685&id_sale=1&k_id=233847"
    },
    { 
      name: "5 Sessions", 
      sub: "$19.80/session", 
      price: 99, 
      features: ["Flexible", "3-month expiry"], 
      cta: "Get 5-Pack",
      link: "https://www.wellnessliving.com/rs/catalog-view.html?k_business=136685&id_sale=1&k_id=233849"
    },
    { 
      name: "10 Sessions", 
      sub: "$16.90/session", 
      price: 169, 
      features: ["Great value", "1-year expiry"], 
      cta: "Get 10-Pack",
      link: "https://www.wellnessliving.com/rs/catalog-view.html?k_business=136685&id_sale=1&k_id=233855"
    },
    { 
      name: "20 Sessions", 
      sub: "$14.95/session", 
      price: 299, 
      features: ["Great Savings", "1-year expiry"], 
      cta: "Get 20-Pack",
      link: "https://www.wellnessliving.com/rs/catalog-view.html?k_business=136685&id_sale=1&k_id=233862"
    },
    { 
      name: "30 Sessions", 
      sub: "$13.30/session", 
      price: 399, 
      features: ["Best per-class price", "1-year expiry"], 
      cta: "Get 30-Pack",
      link: "https://www.wellnessliving.com/rs/catalog-view.html?k_business=136685&id_sale=1&k_id=233865"
    },
  ];

  return (
    <>
      {/* Lead Magnet Banner */}
      <div id="trial" className="bg-yellow-400 text-black text-center py-3 text-sm">
        <strong>First Week Free — No Obligation.</strong> Try us out and feel the difference.
      </div>

     {/* Hero */}
<section id="top" className="relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700" />
  <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
      {/* LEFT: logo + tagline + copy + CTAs */}
      <div className="flex-1 text-white text-center md:text-left">
        <motion.img
          src="/mp-hero-logo.png"  // rename the file or encode the space
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
  4 Classes – 1 Membership
</motion.h1>

        <p className="mt-4 md:mt-6 text-white/80 max-w-2xl mx-auto md:mx-0">
          Strength. Conditioning. VersaClimber. Boxing. Small-group classes with expert coaches so you get real coaching in every class — zero intimidation with a fun, supportive environment!
        </p>

        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
          <Link
            to="/free-week"
            className="px-5 py-3 rounded-2xl bg-white text-gray-900 font-semibold hover:opacity-90"
          >
            Start Free Week
          </Link>
          <a
            href="https://www.wellnessliving.com/schedule/miracleperformance"
            className="px-5 py-3 rounded-2xl bg-blue-700 text-white hover:bg-blue-800"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* RIGHT: video */}
      <div className="w-full md:w-1/3 flex justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
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
      <section id="why" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold">Why People Choose Miracle Performance</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">We design smart training for busy people. Get the support of a coach and the energy of a class without the chaos.</p>
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

      {/* Classes Section */}
      <section id="classes" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold">Four Classes. Endless Results.</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Mix modalities across your week to build strength, stamina, and mobility without plateaus.
          </p>
          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Strength */}
            <div className="rounded-2xl overflow-hidden border bg-black text-white">
              <div className="h-44 bg-cover bg-center" style={{ backgroundImage: "url('/strength.webp')" }} />
              <div className="p-5">
                <h3 className="font-semibold text-lg text-blue-500">Strength</h3>
                <p className="text-sm mt-2">Progressive resistance training in a supportive group setting, designed to build lean muscle and long-term durability.</p>
              </div>
            </div>

            {/* Conditioning */}
            <div className="rounded-2xl overflow-hidden border bg-black text-white">
              <div className="h-44 bg-cover bg-center" style={{ backgroundImage: "url('/conditioning.webp')" }} />
              <div className="p-5">
                <h3 className="font-semibold text-lg text-blue-500">Metabolic Conditioning</h3>
                <p className="text-sm mt-2">High-energy sessions combining cardio and strength intervals to maximize calorie burn and endurance.</p>
              </div>
            </div>

            {/* VersaClimber */}
            <div className="rounded-2xl overflow-hidden border bg-black text-white">
              <div className="h-44 bg-cover bg-center" style={{ backgroundImage: "url('/versaclimber.webp')" }} />
              <div className="p-5">
                <h3 className="font-semibold text-lg text-blue-500">VersaClimber</h3>
                <p className="text-sm mt-2">Low-impact, total-body cardio on the VersaClimber that skyrockets endurance and torches calories in record time.</p>
              </div>
            </div>

            {/* Boxing */}
            <div className="rounded-2xl overflow-hidden border bg-black text-white">
              <div className="h-44 bg-cover bg-center" style={{ backgroundImage: "url('/boxing.webp')" }} />
              <div className="p-5">
                <h3 className="font-semibold text-lg text-blue-500">Boxing</h3>
                <p className="text-sm mt-2">Technique-driven boxing workouts that sharpen skills, improve agility, and build serious stamina — no experience needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-16 md:py-20">
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
              style={{ display: 'block', float: 'right', margin: '16px 16px 0 0' }}
            >
              <img
                src="https://d1v4s90m0bk5bo.cloudfront.net/E/S.png"
                alt="Fitness management software"
                height="39"
                width="267"
                style={{ height: 39, width: 267 }}
              />
            </a>
            <div style={{ clear: 'both' }} />
          </div>
        </div>
      </section>

      {/* Pricing on Homepage */}
      <section id="pricing" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent Pricing. No Contracts.</h2>
          <p className="mt-3 text-gray-600">Memberships or class packs—choose what fits your routine.</p>

          <h3 className="mt-8 text-xl font-semibold">Memberships</h3>
          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberships.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl border bg-white flex flex-col">
                <div className="flex items-baseline justify-between">
                  <div className="font-semibold text-lg">{p.name}</div>
                  <span className="text-xs text-gray-500">{p.sub}</span>
                </div>
                <p className="text-4xl font-extrabold mt-2">
                  ${p.price}<span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>

                {p.link?.startsWith("/") ? (
                  <Link
                    to={p.link}
                    className="mt-6 inline-flex px-5 py-3 rounded-2xl bg-black text-white hover:opacity-90"
                  >
                    {p.cta}
                  </Link>
                ) : (
                  <a
                    href={p.link || "#"}
                    target={p.link ? "_blank" : undefined}
                    rel={p.link ? "noreferrer" : undefined}
                    className="mt-6 inline-flex px-5 py-3 rounded-2xl bg-black text-white hover:opacity-90"
                  >
                    {p.cta}
                  </a>
                )}
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-xl font-semibold">Class Packages</h3>
          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {packages.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl border bg-white flex flex-col">
                <div className="flex items-baseline justify-between">
                  <div className="font-semibold text-lg">{p.name}</div>
                  <span className="text-xs text-gray-500">{p.sub}</span>
                </div>
                <p className="text-4xl font-extrabold mt-2">${p.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
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
                  className="mt-6 inline-flex px-5 py-3 rounded-2xl bg-black text-white hover:opacity-90"
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-4">
            *Prices are placeholders—replace with your actual rates and discounts.
          </p>
        </div>
      </section>

      {/* Map & Reviews */}
      <section id="map" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:3xl font-bold">Find Us</h2>
              <p className="mt-2 text-gray-600 flex items-center gap-2">
                <MapPin className="w-4 h-4" />23400 Mercantile Rd, Suite 5, Beachwood, OH 44122
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
              <h2 className="text-2xl md:3xl font-bold">What Members Say</h2>
              <p className="mt-2 text-gray-600">Read verified reviews and see recent ratings.</p>
              <div className="mt-4 grid sm:grid-cols-3 gap-4">
                <a href="https://www.google.com/search?q=miracle+performance+google+reviews" target="_blank" rel="noreferrer" className="p-5 rounded-2xl border bg-white hover:shadow">
                  <div className="font-semibold">Google Reviews</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Average: 5.0 <span className="font-semibold">{REVIEW_SCORES.google}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Opens Google Business listing.</p>
                </a>
                <a href="https://classpass.com/studios/miracle-performance-beachwood" target="_blank" rel="noreferrer" className="p-5 rounded-2xl border bg-white hover:shadow">
                  <div className="font-semibold">ClassPass Reviews</div>
                  <div className="text-sm text-gray-600 mt-1">Average: <span className="font-semibold">{REVIEW_SCORES.classpass}</span></div>
                  <p className="text-xs text-gray-500 mt-2">From ClassPass members.</p>
                </a>
                <a href="https://www.wellnessliving.com/rs/review-list.html?k_business=136685&k_skin=26608" target="_blank" rel="noreferrer" className="p-5 rounded-2xl border bg-white hover:shadow">
                  <div className="font-semibold">WellnessLiving Reviews</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Average: 5.0 <span className="font-semibold">{REVIEW_SCORES.wellness}</span>
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


export default function MiraclePerformanceApp() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
  <img
    src="/mp-small-logo.png"
    alt="Miracle Performance logo"
    className="h-10 w-auto"
    loading="eager"
  />
  <span className="font-semibold hidden sm:inline">Miracle Performance</span>
</Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="/#classes" className="hover:text-black">Classes</a>
              <a href="/#training" className="hover:text-black">Training</a> 
              <a href="/#trainers" className="hover:text-black">Trainers</a>
              <a href="/#schedule" className="hover:text-black">Schedule</a>
              <a href="/#pricing" className="hover:text-black">Pricing</a>
              <a href="/#map" className="hover:text-black">Find Us</a>
              <a href="https://www.wellnessliving.com/login/miracleperformance" className="inline-flex items-center gap-1 px-3 py-2 rounded-xl border hover:bg-gray-50">
                <LogIn className="w-4 h-4" />Member Login
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <a href="https://www.wellnessliving.com/schedule/miracleperformance" className="px-3 py-2 rounded-xl bg-blue-700 text-white hover:bg-blue-800">Book Now</a>
              <Link to="/free-week" className="inline-flex items-center px-4 py-3 rounded-2xl shadow-sm border bg-black text-white hover:opacity-90">Claim Free Week</Link>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/free-week" element={<FreeWeekPage />} />
        </Routes>

        {/* Footer */}
        <footer className="border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div>
             <div className="flex items-center gap-2">
  <img
    src="/mp-logo-small.png"
    alt="Miracle Performance logo"
    className="h-12 w-auto"
  />
</div>

                <span className="font-semibold text-gray-900">Miracle Performance</span>
              </div>
              <p className="mt-3 max-w-sm">
                Boutique group training: strength, conditioning, VersaClimber, boxing classes —coached in small groups for real progress.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full md:w-auto">
              <div>
                <p className="font-semibold text-gray-900">Explore</p>
                <ul className="mt-3 space-y-2">
                  <li><a href="/#classes" className="hover:text-black">Studios</a></li>
                  <li><a href="/#training" className="hover:text-black">Training</a></li>
                  <li><a href="/#trainers" className="hover:text-black">Trainers</a></li>
                  <li><a href="/#pricing" className="hover:text-black">Pricing</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Members</p>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a href="https://www.wellnessliving.com/schedule/miracleperformance" className="hover:text-black">
                      Book Class
                    </a>
                  </li>
                  <li>
                    <a href="https://www.wellnessliving.com/login/miracleperformance" className="hover:text-black">
                      Login
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                      alt="iPhone"
                      className="w-4 h-4"
                    />
                    <a
                      href="https://apps.apple.com/us/app/wellnessliving-achieve/id1135932782"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-black"
                    >
                      Download iPhone App
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                      alt="Android"
                      className="w-4 h-4"
                    />
                    <a
                      href="https://play.google.com/store/apps/details?id=com.wellnessliving.achieve"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-black"
                    >
                      Download Android App
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Contact</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />23400 Mercantile Rd, Suite 5, Beachwood, OH 44122
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />216-832-9212
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />Nate@Mpcle.com
                  </li>
                </ul>

                {/* Social Links */}
                <p className="font-semibold text-gray-900 mt-6">Follow Us</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center gap-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                      alt="Instagram"
                      className="w-5 h-5"
                    />
                    <a
                      href="https://www.instagram.com/miracle_performance/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-black"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                      alt="Facebook"
                      className="w-5 h-5"
                    />
                    <a
                      href="https://www.facebook.com/MiraclePerformance/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-black"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
