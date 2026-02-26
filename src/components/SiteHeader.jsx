import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LogIn, Menu, X } from "lucide-react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Identify if we are currently on the Redwave landing page
  const isRedwaveRoute = location.pathname.startsWith("/redwave");

  const navItems = [
    { label: "Classes", to: "/#classes" },
    { label: "Redwave", to: "/redwave", variant: "redwave" },
    { label: "Training", to: "/#training" },
    { label: "Schedule", to: "/#schedule" },
    { label: "Pricing", to: "/#pricing" },
    { label: "Find Us", to: "/#map" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img
            src="/mp-small-logo.png"
            alt="Miracle Performance"
            className="h-10 w-auto"
            loading="eager"
            decoding="async"
          />
          <span className="font-semibold hidden sm:inline truncate">
            Miracle Performance
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => {
            const isRedwave = item.variant === "redwave";

            // Redwave styled as a pill button in nav
            if (isRedwave) {
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="px-3 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 font-semibold"
                >
                  Redwave
                </Link>
              );
            }

            return (
              <Link key={item.label} to={item.to} className="hover:text-black">
                {item.label}
              </Link>
            );
          })}

          <a
            href="https://www.wellnessliving.com/login/miracleperformance"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 px-3 py-2 rounded-xl border hover:bg-gray-50"
          >
            <LogIn className="w-4 h-4" />
            Member Login
          </a>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://www.wellnessliving.com/schedule/miracleperformance"
            target="_blank"
            rel="noreferrer"
            className={`px-3 py-2 rounded-xl border hover:bg-gray-50 ${
              isRedwaveRoute
                ? "border-red-600 text-red-700 hover:bg-red-50"
                : "border-blue-700 text-blue-700 hover:bg-blue-50"
            }`}
          >
            Book Now
          </a>

          <Link
            to="/free-week"
            className={`inline-flex items-center px-4 py-2 rounded-xl text-white font-semibold ${
              isRedwaveRoute ? "bg-red-600 hover:bg-red-700" : "bg-blue-700 hover:bg-blue-800"
            }`}
          >
            Claim Free Week
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            to="/free-week"
            className={`px-3 py-2 rounded-xl text-white text-sm font-semibold whitespace-nowrap ${
              isRedwaveRoute ? "bg-red-600 hover:bg-red-700" : "bg-blue-700 hover:bg-blue-800"
            }`}
          >
            Free Week
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded-xl border hover:bg-gray-50"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {/* Optional: show Redwave logo at the top of mobile menu */}
            <div className="px-3 py-2 flex items-center gap-3">
              <img
                src="/redwave-logo.webp"
                alt="Redwave"
                className="h-7 w-auto"
                loading="lazy"
              />
              <span className="text-xs uppercase tracking-wide text-gray-500">
                Infrared Studio
              </span>
            </div>

            {navItems.map((item) => {
              const isRedwave = item.variant === "redwave";

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg ${
                    isRedwave
                      ? "bg-red-600 text-white hover:bg-red-700 font-semibold"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <a
              href="https://www.wellnessliving.com/schedule/miracleperformance"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              Book Now
            </a>

            <a
              href="https://www.wellnessliving.com/login/miracleperformance"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              Member Login
            </a>

            <a
              href="tel:12168329212"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              Call 216-832-9212
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
