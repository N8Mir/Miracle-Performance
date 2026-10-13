import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PILATES_BOOK_URL } from "../data/pilates";

export default function MobileStickyCTA() {
  const { pathname } = useLocation();

  // Pilates page gets its own booking bar in the studio palette.
  if (pathname.startsWith("/pilates")) {
    return (
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-pilates-line bg-pilates-ink p-3 shadow-lg">
        <div className="flex gap-2">
          <a
            href={PILATES_BOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center px-4 py-3 bg-pilates-gold text-pilates-ink font-semibold"
          >
            Book Intro · $50
          </a>
          <a
            href="sms:12168329212"
            className="px-4 py-3 border border-pilates-cream/30 text-pilates-cream font-semibold"
          >
            Text
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t bg-white p-3 shadow-lg">
      <div className="flex gap-2">
        <Link
          to="/free-week"
          className="flex-1 text-center px-4 py-3 rounded-xl bg-blue-700 text-white font-semibold"
        >
          Start Free Week
        </Link>
        <a
          href="tel:12168329212"
          className="px-4 py-3 rounded-xl border font-semibold"
        >
          Call
        </a>
      </div>
    </div>
  );
}
