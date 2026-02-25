import React from "react";
import { Link } from "react-router-dom";
import { X, ExternalLink } from "lucide-react";

function CtaButton({ cta, isPrimary, onClose }) {
  if (!cta) return null;

  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-semibold";
  const cls = isPrimary
    ? `${base} bg-blue-700 text-white hover:bg-blue-800`
    : `${base} border hover:bg-gray-50`;

  if (cta.external) {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noreferrer"
        onClick={onClose}
        className={cls}
      >
        {cta.label} <ExternalLink className="w-4 h-4" />
      </a>
    );
  }

  return (
    <Link to={cta.href} onClick={onClose} className={cls}>
      {cta.label}
    </Link>
  );
}

export default function ClassCardGallery({ items }) {
  const [active, setActive] = React.useState(null);

  return (
    <>
      {/* Mobile: swipe | Desktop: grid */}
      <div className="mt-8">
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-6 md:overflow-visible">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item)}
              className="group text-left snap-start shrink-0 w-[78%] sm:w-[48%] md:w-auto"
            >
              <div className="relative overflow-hidden rounded-2xl border bg-black">
                <img
                  src={item.image}
                  alt={`${item.title} info card`}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/5] object-cover group-hover:scale-[1.01] transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0 opacity-70" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-white font-semibold text-sm md:text-base">
                    {item.title}
                  </div>
                  <div className="text-white/80 text-xs mt-1">
                    Tap to view details
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <p className="mt-3 text-xs text-gray-500 md:hidden">
          Swipe to view more classes →
        </p>
      </div>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden">
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-3 right-3 p-2 rounded-xl bg-white/90 border hover:bg-white z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="bg-black">
                <img
                  src={active.image}
                  alt={`${active.title} info card enlarged`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{active.title}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  {active.modalText ||
                    "Book your spot or learn more about this class format."}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <CtaButton cta={active.primaryCta} isPrimary onClose={() => setActive(null)} />
                  <CtaButton cta={active.secondaryCta} onClose={() => setActive(null)} />
                </div>

                <div className="mt-6 text-xs text-gray-500">
                  Included with memberships and class packs.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
