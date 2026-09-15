import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-teal-700"
        >
          <span className="text-3xl">✈️</span>
          <span>TripMate</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="font-medium text-slate-600 transition hover:text-teal-700"
          >
            Home
          </Link>

          <Link
            to="/plan-trip"
            className="font-medium text-slate-600 transition hover:text-teal-700"
          >
            Plan Trip
          </Link>

          <Link
            to="/saved-trips"
            className="font-medium text-slate-600 transition hover:text-teal-700"
          >
            Saved Trips
          </Link>

          <Link
            to="/about"
            className="font-medium text-slate-600 transition hover:text-teal-700"
          >
            About
          </Link>

        </nav>

        {/* Button */}
        <Link
          to="/plan-trip"
          className="rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800 hover:shadow-md"
        >
          Plan a Trip
        </Link>

      </div>
    </header>
  );
}

export default Header;