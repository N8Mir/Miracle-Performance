import React from "react";
import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/mp-small-logo.png"
              alt="Miracle Performance small logo"
              className="h-12 w-auto"
              loading="lazy"
              decoding="async"
            />
            <span className="font-semibold text-base">Miracle Performance</span>
          </div>
          <p className="mt-2 text-sm opacity-90">Strength • Conditioning • Performance</p>
          <p className="mt-3 max-w-sm opacity-90">
            Boutique group training: strength, conditioning, VersaClimber, boxing — coached in small groups for real progress.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full md:w-auto">
          <div>
            <h4 className="font-semibold mb-3">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/#classes" className="hover:underline">Classes</Link></li>
              <li><Link to="/redwave" className="hover:underline">Redwave</Link></li>
              <li><Link to="/#training" className="hover:underline">Training</Link></li>
              <li><Link to="/#pricing" className="hover:underline">Pricing</Link></li>
              <li><Link to="/#schedule" className="hover:underline">Schedule</Link></li>
              <li><Link to="/#map" className="hover:underline">Find Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Members</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.wellnessliving.com/login/miracleperformance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Member Login
                </a>
              </li>
              <li>
                <a
                  href="https://www.wellnessliving.com/schedule/miracleperformance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Book a Class
                </a>
              </li>
              <li><Link to="/free-week" className="hover:underline">Claim Free Week</Link></li>
            </ul>

            <p className="mt-4 text-xs font-medium uppercase tracking-wide opacity-90">
              Download our Booking App:
            </p>
            <div className="mt-2 flex flex-row gap-3">
              <a
                href="https://apps.apple.com/us/app/wellnessliving-achieve/id1135932782"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
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
                  alt="Google Play"
                  className="h-10"
                />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=23400+Mercantile+Rd,+Suite+5,+Beachwood,+OH+44122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  23400 Mercantile Rd, Suite 5, Beachwood, OH 44122
                </a>
              </li>
              <li><a href="tel:12168329212" className="hover:underline">216-832-9212</a></li>
              <li><a href="mailto:Nate@Mpcle.com" className="hover:underline">Nate@Mpcle.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
