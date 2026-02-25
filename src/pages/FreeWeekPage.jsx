import React from "react";
import ScheduleWidget from "../components/ScheduleWidget";

export default function FreeWeekPage() {
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
            <a
              href="#steps"
              className="px-5 py-3 rounded-2xl bg-white text-blue-700 font-semibold hover:opacity-90"
            >
              See How It Works
            </a>
            <a
              href="#schedule"
              className="px-5 py-3 rounded-2xl border border-white/40 hover:bg-white/10"
            >
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
              {
                title: "Coached Small Groups",
                desc: "Hands-on coaching every class—get real feedback, not guesswork.",
              },
              {
                title: "4 Classes, One Membership",
                desc: "Strength, Metabolic Conditioning, VersaClimber, and Boxing.",
              },
              {
                title: "Beginner-Friendly",
                desc: "We scale everything to your level. No intimidation, ever.",
              },
              {
                title: "Flexible Schedule",
                desc: "Early AM, evenings, and weekends. Book from your phone.",
              },
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
      <section id="steps" className="scroll-mt-24 py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">How To Claim Your Free Week</h2>

          <ol className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <li className="p-6 rounded-2xl border bg-white">
              <div className="text-sm uppercase tracking-wide text-gray-500">Step 1</div>
              <div className="mt-2 font-semibold">Book Your First Session</div>
              <p className="text-sm text-gray-600 mt-2">
                Pick any class from our live schedule below to get started.
              </p>
              <a href="#schedule" className="mt-4 inline-block text-blue-700 hover:underline">
                Jump to Schedule
              </a>
            </li>

            <li className="p-6 rounded-2xl border bg-white">
              <div className="text-sm uppercase tracking-wide text-gray-500">Step 2</div>
              <div className="mt-2 font-semibold">Create Your Account</div>
              <p className="text-sm text-gray-600 mt-2">
                During checkout you’ll be prompted to make a WellnessLiving account.
              </p>
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
              <p className="text-sm text-gray-600 mt-2">
                Use the web schedule or our mobile app to reserve the rest of your week.
              </p>
              <div className="mt-3 space-x-3">
                <a
                  href="https://apps.apple.com/us/app/wellnessliving-achieve/id1135932782"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-3 py-2 rounded-xl border hover:bg-gray-50 text-sm"
                >
                  iPhone App
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.wellnessliving.achieve"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-3 py-2 rounded-xl border hover:bg-gray-50 text-sm"
                >
                  Android App
                </a>
              </div>
            </li>
          </ol>

          <p className="mt-6 text-sm text-gray-600">
            Questions?{" "}
            <a href="sms:12168329212" className="text-blue-700 hover:underline">
              Text us at 216-832-9212
            </a>
            .
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="scroll-mt-24 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Book Your First Class</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Choose any class to begin your free week. You’ll create your account during checkout.
          </p>

          <div className="mt-6 rounded-2xl border bg-white p-4">
            <ScheduleWidget />
            <div className="mt-4 text-sm">
              <a
                href="https://www.wellnessliving.com/schedule/miracleperformance"
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 hover:underline"
              >
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
              <p className="text-sm text-gray-600 mt-2">
                Nope! We coach beginners and seasoned athletes. We’ll scale movements to your level.
              </p>
            </div>

            <div className="p-6 rounded-2xl border bg-white">
              <div className="font-semibold">What should I bring?</div>
              <p className="text-sm text-gray-600 mt-2">
                Athletic shoes, a water bottle, and a can-do attitude. We handle the programming and coaching.
              </p>
            </div>

            <div className="p-6 rounded-2xl border bg-white">
              <div className="font-semibold">Where are you located?</div>
              <p className="text-sm text-gray-600 mt-2">
                23400 Mercantile Rd, Suite 5, Beachwood, OH 44122. Plenty of parking on site.
              </p>
            </div>

            <div className="p-6 rounded-2xl border bg-white">
              <div className="font-semibold">Who is the trial for?</div>
              <p className="text-sm text-gray-600 mt-2">
                New local clients only. One per person. No obligation—continue only if you love it.
              </p>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-600">
            Still unsure?{" "}
            <a href="sms:12168329212" className="text-blue-700 hover:underline">
              Text us
            </a>{" "}
            and we’ll help you pick the right first class.
          </div>
        </div>
      </section>
    </main>
  );
}
