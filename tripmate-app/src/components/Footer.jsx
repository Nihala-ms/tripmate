import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold text-white"
            >
              <span className="text-3xl">✈️</span>
              <span>TripMate</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Your AI-powered travel companion for creating personalized
              and memorable travel experiences.
            </p>

            <div className="mt-5 inline-flex items-center rounded-full bg-teal-500/10 px-3 py-1.5 text-xs font-medium text-teal-300">
              🤖 Powered by AI
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-300">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/plan-trip"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Plan Trip
              </Link>

              <Link
                to="/saved-trips"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Saved Trips
              </Link>

              <Link
                to="/about"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                About
              </Link>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-300">
              TripMate Features
            </h3>

            <div className="mt-5 space-y-3">
              <p className="text-sm text-slate-400">
                🤖 AI-Powered Itineraries
              </p>

              <p className="text-sm text-slate-400">
                🎯 Personalized Recommendations
              </p>

              <p className="text-sm text-slate-400">
                💰 Budget-Based Planning
              </p>

              <p className="text-sm text-slate-400">
                ❤️ Save Your Trips
              </p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">

            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} TripMate. All rights reserved.
            </p>

            <p className="text-xs text-slate-500">
              Plan smarter. Travel better. ✈️
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
