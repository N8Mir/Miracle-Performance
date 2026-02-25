import React from "react";
import { Link } from "react-router-dom";

export default function MobileStickyCTA() {
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
