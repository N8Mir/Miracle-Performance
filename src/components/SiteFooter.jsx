import React from "react";
import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 px-8">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Column 1 — Brand */}
        <div>
          <img src="/mp-logo.png" alt="Miracle Performance" className="h-10 w-auto mb-4" />
          <p className="text-on-surface-variant text-xs tracking-widest uppercase">
            STRENGTH · CONDITIONING · RECOVERY
          </p>
          <div className="mt-6 space-y-1 text-sm text-on-surface-variant">
            <p>23400 Mercantile Rd, Suite 4/5</p>
            <p>Beachwood, OH 44122</p>
            <p>
              <a href="tel:12168329212" className="hover:text-white transition-colors">
                (216) 832-9212
              </a>
            </p>
          </div>
        </div>

        {/* Column 2 — Train */}
        <div>
          <h4 className="font-headline font-black text-xs tracking-widest uppercase mb-6 text-white">TRAIN</h4>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li><Link to="/#classes" className="hover:text-white transition-colors">Classes</Link></li>
            <li><Link to="/redwave" className="hover:text-white transition-colors">Redwave Studio</Link></li>
            <li><Link to="/#schedule" className="hover:text-white transition-colors">Schedule</Link></li>
            <li><Link to="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link to="/free-week" className="hover:text-white transition-colors">Free Week Trial</Link></li>
          </ul>
        </div>

        {/* Column 3 — Members */}
        <div>
          <h4 className="font-headline font-black text-xs tracking-widest uppercase mb-6 text-white">MEMBERS</h4>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            <li>
              <a
                href="https://www.wellnessliving.com/login/miracleperformance"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Member Login
              </a>
            </li>
            <li>
              <a
                href="https://www.wellnessliving.com/schedule/miracleperformance"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Book a Class
              </a>
            </li>
          
            
          </ul>
        </div>

        {/* Column 4 — Get the App */}
        <div>
          <h4 className="font-headline font-black text-xs tracking-widest uppercase mb-2 text-white">GET THE APP</h4>
          <p className="text-on-surface-variant text-xs mb-6">Book classes and manage your membership.</p>
          <div className="flex flex-col gap-3">
            <a
              href="https://apps.apple.com/us/app/wellnessliving-achieve/id1135932782"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.wellnessliving.achieve"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10"
              />
            </a>
          </div>
          <p className="text-white/30 text-xs mt-4">Available free for members.</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 mt-12 pt-8 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-white/30 text-xs">© 2025 Miracle Performance. All rights reserved.</span>

        <Link to="/redwave">
          <img src="/redwave-logo.webp" alt="Redwave" className="h-5 w-auto opacity-60" />
        </Link>

        {/* Social links — add hrefs when available */}
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/miracleperformancecle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/miracleperformancecle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
