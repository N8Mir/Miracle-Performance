import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { memberships, packages } from "../data/pricing";

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Pricing</h1>
          <p className="mt-3 text-gray-600">
            Flexible memberships and class packages—no contracts required.
          </p>

          {/* Memberships */}
          <h2 className="mt-8 text-2xl font-bold">Memberships</h2>
          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberships.map((m, i) => (
              <div key={i} className="p-6 rounded-2xl border bg-white flex flex-col">
                <div className="flex items-baseline justify-between gap-2">
                  <div className="font-semibold text-lg">{m.name}</div>
                  {m.sub && <span className="text-xs text-gray-500">{m.sub}</span>}
                </div>

                <p className="text-4xl font-extrabold mt-2">
                  ${m.price}
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700 flex-1">
                  {m.features?.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>

                {m.link?.startsWith("/") ? (
                  <Link
                    to={m.link}
                    className="mt-6 inline-flex justify-center px-5 py-3 rounded-2xl bg-blue-700 text-white font-semibold hover:bg-blue-800"
                  >
                    {m.cta || "Learn More"}
                  </Link>
                ) : (
                  <a
                    href={m.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex justify-center px-5 py-3 rounded-2xl bg-blue-700 text-white font-semibold hover:bg-blue-800"
                  >
                    {m.cta || "Learn More"}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Packages */}
          <h2 className="mt-12 text-2xl font-bold">Class Packages</h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {packages.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl border bg-white flex flex-col">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-lg">{p.name}</h3>
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

                {/* Fixed: uses p.link (not hardcoded schedule URL) */}
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

          <div className="mt-8 text-sm text-gray-500">
            Questions about which option is best?{" "}
            <a href="sms:12168329212" className="text-blue-700 hover:underline">
              Text us at 216-832-9212
            </a>
            .
          </div>
        </div>
      </section>
    </main>
  );
}
