import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "STUDIO", to: "/" },
  { label: "CLASSES", to: "/#classes" },
  { label: "RECOVERY", to: "/redwave" },
  { label: "MEMBERSHIP", to: "/#pricing" },
  { label: "SCHEDULE", to: "/#schedule" },
  { label: "PRICING", to: "/pricing" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  function isActive(to) {
    if (to === "/") return location.pathname === "/" && !location.hash;
    if (to.startsWith("/#")) return location.pathname === "/" && location.hash === to.slice(1);
    return location.pathname.startsWith(to);
  }

  return (
    <header
      className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-8 h-20"
      style={{
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        boxShadow: "0 0 20px rgba(0,112,255,0.1)",
      }}
    >
      {/* Logo */}
      <Link to="/">
        <img src="/mp-logo.png" alt="Miracle Performance" className="h-10 w-auto" />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-8 items-center">
        {navItems.map((item) => {
          const active = isActive(item.to);
          const isRecovery = item.label === "RECOVERY";
          return (
            <Link
              key={item.label}
              to={item.to}
              className={[
                "font-headline uppercase tracking-[0.05em] text-xs font-bold transition-colors",
                active
                  ? "text-primary-dim border-b-2 border-primary-dim pb-1"
                  : isRecovery
                  ? "text-white/70 hover:text-redwave"
                  : "text-white/70 hover:text-white",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Desktop CTAs */}
      <div className="hidden md:flex gap-4 items-center">
        <Link
          to="/free-week"
          className="font-headline uppercase tracking-[0.05em] text-xs font-bold text-white/70 hover:text-white transition-colors px-4 py-2"
        >
          FREE TRIAL
        </Link>
        <Link
          to="/free-week"
          className="bg-primary-dim text-black font-headline uppercase tracking-[0.05em] text-xs font-bold px-6 py-3 hover:bg-blue-400 transition-all duration-300"
        >
          JOIN NOW
        </Link>
      </div>

      {/* Mobile actions */}
      <div className="md:hidden flex items-center gap-3">
        <Link
          to="/free-week"
          className="bg-primary-dim text-black font-headline uppercase tracking-[0.05em] text-xs font-bold px-4 py-3 min-h-[44px] flex items-center"
        >
          JOIN NOW
        </Link>
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="p-3 min-h-[44px] min-w-[44px] flex items-center justify-center text-white/70 hover:text-white transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-20 left-0 w-full md:hidden"
          style={{
            background: "rgba(0,0,0,0.95)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <nav className="px-8 py-6 flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActive(item.to);
              const isRecovery = item.label === "RECOVERY";
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    "font-headline uppercase tracking-[0.05em] text-xs font-bold py-3 min-h-[44px] flex items-center border-b transition-colors",
                    "border-white/5",
                    active
                      ? "text-primary-dim"
                      : isRecovery
                      ? "text-white/70 hover:text-redwave"
                      : "text-white/70 hover:text-white",
                  ].join(" ")}
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
              className="font-headline uppercase tracking-[0.05em] text-xs font-bold py-3 min-h-[44px] flex items-center border-b border-white/5 text-white/70 hover:text-white transition-colors"
            >
              BOOK NOW
            </a>
            <a
              href="https://www.wellnessliving.com/login/miracleperformance"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="font-headline uppercase tracking-[0.05em] text-xs font-bold py-3 min-h-[44px] flex items-center border-b border-white/5 text-white/70 hover:text-white transition-colors"
            >
              MEMBER LOGIN
            </a>
            <a
              href="tel:12168329212"
              onClick={() => setMenuOpen(false)}
              className="font-headline uppercase tracking-[0.05em] text-xs font-bold py-3 min-h-[44px] flex items-center text-white/70 hover:text-white transition-colors"
            >
              CALL 216-832-9212
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
