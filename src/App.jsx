import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, MapPin, Phone, Mail, Dumbbell, Clock, Users, Star, LogIn, Image as ImageIcon, ExternalLink } from "lucide-react";

// --- Review scores (edit here when ratings change) ---
const REVIEW_SCORES = {
  google: "—", // e.g. "4.8 (120+)"
  classpass: "4.9 (2500+)",
  wellness: "—"
};

function PricingPage() {
  const memberships = [
    { name: "4 sessions / mo", sub: "Budget-friendly", price: 69, features: ["All Class Access", "App booking", "Coach feedback"], cta: "Start Free Week" },
    { name: "8 sessions / mo", sub: "Better Resukts", price: 119, features: ["All Class Access", "App booking", "Coach feedback"], cta: "Start Free Week" },
    { name: "12 sessions / mo", sub: "Train 3x/week", price: 149, features: ["All Class Access", "App booking", "Coach feedback"], cta: "Start Free Week" },
    { name: "Unlimited / mo", sub: "Best results", price: 199, features: ["Unlimited classes", "App booking", "Coach feedback"], cta: "Start Free Week" },
  ];
  const packages = [
    { name: "Drop-In", sub: "Single class", price: 22, features: ["Any studio", "Coach guidance"], cta: "Book a Class" },
    { name: "5 Sessions", sub: "Pack of 5", price: 99, features: ["Flexible", "1-Year expiry"], cta: "Get 5-Pack" },
    { name: "10 Sessions", sub: "Pack of 10", price: 169, features: ["Great value", "1-Year expiry"], cta: "Get 10-Pack" },
    { name: "20 Sessions", sub: "Pack of 20", price: 299, features: ["More Savings", "1-Year expiry"], cta: "Get 20-Pack" },
    { name: "30 Sessions", sub: "Pack of 30", price: 399, features: ["Best Per Class Price", "1-Year expiry"], cta: "Get 30-Pack" },
  ];

  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Pricing</h1>
          <p className="mt-3 text-gray-600">Update these plan names, prices, and bullets anytime. The big black button text can also be edited per plan.</p>

          {/* Memberships */}
          <h2 className="mt-10 text-2xl font-bold">Memberships</h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberships.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl border bg-white flex flex-col">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <span className="text-xs text-gray-500">{p.sub}</span>
                </div>
                <p className="text-4xl font-extrabold mt-2">${p.price}<span className="text-base font-medium text-gray-500">/mo</span></p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5"/> {f}</li>
                  ))}
                </ul>
                <a href="#trial" className="mt-6 inline-flex px-5 py-3 rounded-2xl bg-black text-white hover:opacity-90">{p.cta}</a>
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
                    <li key={idx} className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5"/> {f}</li>
                  ))}
                </ul>
                <a href="https://www.wellnessliving.com/schedule/miracleperformance" className="mt-6 inline-flex px-5 py-3 rounded-2xl bg-black text-white hover:opacity-90">{p.cta}</a>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm text-gray-500">*These are placeholder prices. Replace with your real rates and add any discounts or annual options.</div>
        </div>
      </section>
    </main>
  );
}

function HomePage() {
  const features = [
    { icon: <Dumbbell className="w-6 h-6" />, title: "4 Studios, 1 Membership", desc: "Strength, Conditioning, VersaClimber, and a Boxing class—mix & match your week." },
    { icon: <Users className="w-6 h-6" />, title: "Small Group Training", desc: "Small groups with personal attention in every session." },
    { icon: <Clock className="w-6 h-6" />, title: "60+ Classes/Week", desc: "Early mornings, evenings, and weekends to fit any schedule." },
    { icon: <Star className="w-6 h-6" />, title: "Expert Coaches", desc: "Certified trainers who program for progress, not burnout." },
  ];

  const trainers = [
    { name: "Nate M.", role: "Head Coach", img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=400&auto=format&fit=crop", blurb: "Strength & conditioning specialist. Loves building smart, sustainable progress." },
    { name: "Alex P.", role: "Performance Coach", img: "https://images.unsplash.com/photo-1526401485004-2fda9f4c1589?q=80&w=400&auto=format&fit=crop", blurb: "VersaClimber & conditioning focus. Keeps classes high-energy and form-first." },
    { name: "Jordan K.", role: "Coach", img: "https://images.unsplash.com/photo-1581009137042-c552e4856971?q=80&w=400&auto=format&fit=crop", blurb: "Technique-driven coaching with a knack for motivating beginners and vets alike." },
    { name: "Coach 4", role: "Coach", img: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=400&auto=format&fit=crop", blurb: "Short bio here." },
    { name: "Coach 5", role: "Coach", img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?q=80&w=400&auto=format&fit=crop", blurb: "Short bio here." },
    { name: "Coach 6", role: "Coach", img: "https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=400&auto=format&fit=crop", blurb: "Short bio here." },
    { name: "Coach 7", role: "Coach", img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=400&auto=format&fit=crop", blurb: "Short bio here." },
    { name: "Coach 8", role: "Coach", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=400&auto=format&fit=crop", blurb: "Short bio here." },
  ];

  const memberships = [
    { name: "4 sessions / mo", sub: "Budget-friendly", price: 69, features: ["All Class Access", "App booking", "Coach feedback"], cta: "Start Free Week" },
    { name: "8 sessions / mo", sub: "Most popular", price: 119, features: ["All Class Access", "App booking", "Coach feedback"], cta: "Start Free Week" },
    { name: "12 sessions / mo", sub: "Train 3x/week", price: 149, features: ["All Class Access", "App booking", "Coach feedback"], cta: "Start Free Week" },
    { name: "Unlimited / mo", sub: "Best results", price: 199, features: ["Unlimited classes",  "App booking", "Coach feedback"], cta: "Start Free Week" },
  ];
  const packages = [
    { name: "Drop-In", sub: "Single class", price: 22, features: ["Any studio", "Coach guidance"], cta: "Book a Class" },
    { name: "5 Sessions", sub: "Pack of 5", price: 99, features: ["Flexible", "3-month expiry"], cta: "Get 5-Pack" },
    { name: "10 Sessions", sub: "Pack of 10", price: 169, features: ["Great value", "1-year expiry"], cta: "Get 10-Pack" },
    { name: "20 Sessions", sub: "Pack of 20", price: 299, features: ["Great Savings", "1-year expiry"], cta: "Get 20-Pack" },
    { name: "30 Sessions", sub: "Pack of 30", price: 399, features: ["Best per-class price", "1-year expiry"], cta: "Get 30-Pack" },
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
          <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Miracle Performance — <span className="text-white/80">4 Studios, 1 Membership</span>
          </motion.h1>
          <p className="mt-4 md:mt-6 text-white/80 max-w-2xl">
            Strength. Conditioning. VersaClimber. Boxing. Small-group classes with expert coaches so you get real coaching in every class. Zero intimidation with fun, supportive environment!
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#trial" className="px-5 py-3 rounded-2xl bg-white text-gray-900 font-semibold hover:opacity-90">Start Free Week</a>
            <a href="https://www.wellnessliving.com/schedule/miracleperformance" className="px-5 py-3 rounded-2xl bg-blue-700 text-white hover:bg-blue-800">Book Now</a>
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
  <div
    key={i}
    className="p-6 rounded-2xl border shadow-sm bg-[#0B5ED7] text-white"
  >
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

      {/* Studios */}
      <section id="studios" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold">Four Studios. Endless Variety.</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">Mix modalities across your week to build strength, stamina, and mobility without plateaus.</p>
          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {["Strength","Conditioning","VersaClimber","Boxing Class"].map((s, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border bg-white">
                <div className="h-44 bg-cover bg-center" style={{backgroundImage: `url(https://source.unsplash.com/collection/483251/${i})`}} />
                <div className="p-5">
                  <h3 className="font-semibold text-lg">{s}</h3>
                  <p className="text-sm text-gray-600 mt-2">Programmed sessions that scale to your level, coached in small groups for focused feedback.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section id="trainers" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Trainers</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">A coaching team focused on safe progress, great form, and fun sessions.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Nate M.", role: "Head Coach", img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=400&auto=format&fit=crop", blurb: "Strength & conditioning specialist. Loves building smart, sustainable progress." },
              { name: "Alex P.", role: "Performance Coach", img: "https://images.unsplash.com/photo-1526401485004-2fda9f4c1589?q=80&w=400&auto=format&fit=crop", blurb: "VersaClimber & conditioning focus. High-energy, form-first." },
              { name: "Jordan K.", role: "Coach", img: "https://images.unsplash.com/photo-1581009137042-c552e4856971?q=80&w=400&auto=format&fit=crop", blurb: "Technique-driven coaching for all levels." },
              { name: "Coach 4", role: "Coach", img: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=400&auto=format&fit=crop", blurb: "Short bio here." },
              { name: "Coach 5", role: "Coach", img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?q=80&w=400&auto=format&fit=crop", blurb: "Short bio here." },
              { name: "Coach 6", role: "Coach", img: "https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=400&auto=format&fit=crop", blurb: "Short bio here." },
              { name: "Coach 7", role: "Coach", img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=400&auto=format&fit=crop", blurb: "Short bio here." },
              { name: "Coach 8", role: "Coach", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=400&auto=format&fit=crop", blurb: "Short bio here." },
            ].slice(0,8).map((t, i) => (
              <div key={i} className="rounded-2xl border bg-white p-5 text-center">
                <div className="mx-auto h-28 w-28 rounded-full overflow-hidden bg-gray-100">
                  <img src={t.img} alt={t.name} className="h-full w-full object-cover" />
                </div>
                <div className="mt-3 font-semibold">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
                <p className="text-sm text-gray-600 mt-2">{t.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">60+ Classes Every Week</h2>
              <p className="mt-3 text-gray-600">Early mornings, lunch, evenings, and weekends—pick your perfect time. Book on the go with our app.</p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-start gap-3"><Check className="mt-0.5 w-5 h-5"/> Strength </li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 w-5 h-5"/> Conditioning Interval Training</li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 w-5 h-5"/> VersaClimber </li>
                <li className="flex items-start gap-3"><Check className="mt-0.5 w-5 h-5"/> Boxing </li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="#trial" className="px-5 py-3 rounded-2xl bg-black text-white hover:opacity-90">Start Free Week</a>
                <a href="https://www.wellnessliving.com/schedule/miracleperformance" className="px-5 py-3 rounded-2xl bg-blue-700 text-white hover:bg-blue-800">Book Class</a>
              </div>
            </div>
            <div className="rounded-2xl border overflow-hidden p-4 bg-white">
              <div dangerouslySetInnerHTML={{ __html: `
                <div class="wl-widget" data="k_skin=28591&amp;k_business=136685"></div>
                <script src="https://www.wellnessliving.com/rs/skin-widget-static.js" type="text/javascript"></script>
                <a href="https://www.wellnessliving.com/fitness/software/" rel="nofollow" style="display: block; float: right; margin: 16px 16px 0 0;">
                  <img src="https://d1v4s90m0bk5bo.cloudfront.net/E/S.png" alt="Fitness management software" height="39" width="267" style="height:39px; width:267px;" />
                </a>
              `}} />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing on Homepage */}
      <section id="pricing" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent Pricing</h2>
          <p className="mt-3 text-gray-600">Memberships or class packs—choose what fits your routine.</p>

          <h3 className="mt-8 text-xl font-semibold">Memberships</h3>
          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberships.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl border bg-white flex flex-col">
                <div className="flex items-baseline justify-between">
                  <div className="font-semibold text-lg">{p.name}</div>
                  <span className="text-xs text-gray-500">{p.sub}</span>
                </div>
                <p className="text-4xl font-extrabold mt-2">${p.price}<span className="text-base font-medium text-gray-500">/mo</span></p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5"/> {f}</li>
                  ))}
                </ul>
                <a href="#trial" className="mt-6 inline-flex px-5 py-3 rounded-2xl bg-black text-white hover:opacity-90">{p.cta}</a>
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
                    <li key={idx} className="flex items-start gap-2"><Check className="w-5 h-5 mt-0.5"/> {f}</li>
                  ))}
                </ul>
                <a href="https://www.wellnessliving.com/schedule/miracleperformance" className="mt-6 inline-flex px-5 py-3 rounded-2xl bg-black text-white hover:opacity-90">{p.cta}</a>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-4">*Prices are placeholders—replace with your actual rates and discounts.</p>
        </div>
      </section>

      {/* Map & Reviews */}
      <section id="map" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Find Us</h2>
              <p className="mt-2 text-gray-600 flex items-center gap-2"><MapPin className="w-4 h-4"/>23400 Mercantile Rd, Suite 5, Beachwood, OH 44122</p>
              <div className="mt-4 rounded-2xl overflow-hidden border">
                <iframe title="Miracle Performance Map" src="https://www.google.com/maps?q=23400%20Mercantile%20Rd%20Suite%205%20Beachwood%20OH%2044122&output=embed" width="100%" height="320" loading="lazy" style={{border:0}} allowFullScreen />
              </div>
              <div className="mt-3 text-sm">
                <a className="inline-flex items-center gap-1 text-blue-700 hover:underline" href="https://www.google.com/maps/search/?api=1&query=Miracle+Performance+Beachwood+OH" target="_blank" rel="noreferrer">View on Google Maps <ExternalLink className="w-4 h-4"/></a>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">What Members Say</h2>
              <p className="mt-2 text-gray-600">Read verified reviews and see recent ratings.</p>
              <div className="mt-4 grid sm:grid-cols-3 gap-4">
                <a href="https://www.google.com/search?q=miracle+performance+google+reviews" target="_blank" rel="noreferrer" className="p-5 rounded-2xl border bg-white hover:shadow">
                  <div className="font-semibold">Google Reviews</div>
                  <div className="text-sm text-gray-600 mt-1">Average: 5.0 <span className="font-semibold">{REVIEW_SCORES.google}</span></div>
                  <p className="text-xs text-gray-500 mt-2">Opens Google Business listing.</p>
                </a>
                <a href="https://classpass.com/studios/miracle-performance-beachwood" target="_blank" rel="noreferrer" className="p-5 rounded-2xl border bg-white hover:shadow">
                  <div className="font-semibold">ClassPass Reviews</div>
                  <div className="text-sm text-gray-600 mt-1">Average: <span className="font-semibold">{REVIEW_SCORES.classpass}</span></div>
                  <p className="text-xs text-gray-500 mt-2">From ClassPass members.</p>
                </a>
                <a href="https://www.wellnessliving.com/rs/review-list.html?k_business=136685&k_skin=26608" target="_blank" rel="noreferrer" className="p-5 rounded-2xl border bg-white hover:shadow">
                  <div className="font-semibold">WellnessLiving Reviews</div>
                  <div className="text-sm text-gray-600 mt-1">Average: 5.0 <span className="font-semibold">{REVIEW_SCORES.wellness}</span></div>
                  <p className="text-xs text-gray-500 mt-2">Verified clients on WellnessLiving.</p>
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-3">(Embedding third-party reviews directly is often restricted; linking avoids cross-site limitations and keeps pages fast.)</p>
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
              <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs text-gray-600">Logo</span>
              </div>
              <span className="font-semibold">Miracle Performance</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="/#studios" className="hover:text-black">Studios</a>
              <a href="/#trainers" className="hover:text-black">Trainers</a>
              <a href="/#pricing" className="hover:text-black">Pricing</a>
              <a href="/#map" className="hover:text-black">Find Us</a>
              <a href="https://www.wellnessliving.com/login/miracleperformance" className="inline-flex items-center gap-1 px-3 py-2 rounded-xl border hover:bg-gray-50"><LogIn className="w-4 h-4"/>Member Login</a>
            </nav>
            <div className="flex items-center gap-2">
              <a href="https://www.wellnessliving.com/schedule/miracleperformance" className="px-3 py-2 rounded-xl bg-blue-700 text-white hover:bg-blue-800">Book Now</a>
              <a href="/#trial" className="inline-flex items-center px-4 py-3 rounded-2xl shadow-sm border bg-black text-white hover:opacity-90">Claim Free Week</a>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>

        {/* Footer */}
        <footer className="border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <ImageIcon className="w-5 h-5 text-gray-500" />
                </div>
                <span className="font-semibold text-gray-900">Miracle Performance</span>
              </div>
              <p className="mt-3 max-w-sm">Boutique group training: strength, conditioning, VersaClimber, boxing classes —coached in small groups for real progress.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full md:w-auto">
              <div>
                <p className="font-semibold text-gray-900">Explore</p>
                <ul className="mt-3 space-y-2">
                  <li><a href="/#studios" className="hover:text-black">Studios</a></li>
                  <li><a href="/#trainers" className="hover:text-black">Trainers</a></li>
                  <li><a href="/#pricing" className="hover:text-black">Pricing</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Members</p>
                <ul className="mt-3 space-y-2">
                  <li><a href="https://www.wellnessliving.com/schedule/miracleperformance" className="hover:text-black">Book Class</a></li>
                  <li><a href="https://www.wellnessliving.com/login/miracleperformance" className="hover:text-black">Login</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Contact</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center gap-2"><MapPin className="w-4 h-4"/>23400 Mercantile Rd, Suite 5, Beachwood, OH 44122</li>
                  <li className="flex items-center gap-2"><Phone className="w-4 h-4"/>216-832-9212</li>
                  <li className="flex items-center gap-2"><Mail className="w-4 h-4"/>Nate@Mpcle.com</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
