import { Link } from "react-router-dom";

function SavedTrips() {
  const savedTrips = JSON.parse(localStorage.getItem("savedTrips")) || [];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center">
          <div className="inline-flex items-center rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
            ❤️ Your Travel Collection
          </div>

          <h1 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl">
            Saved Trips
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Keep your favorite travel plans in one place and revisit them
            whenever you want.
          </p>
        </div>

        {/* No Trips */}
        {savedTrips.length === 0 ? (
          <div className="mx-auto mt-12 max-w-lg rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-teal-50 text-4xl">
              ✈️
            </div>

            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              No Saved Trips Yet
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Create your first personalized trip and save it here for
              later.
            </p>

            <Link
              to="/plan-trip"
              className="mt-6 inline-flex rounded-xl bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              ✨ Plan Your First Trip
            </Link>
          </div>
        ) : (
          <>
            {/* Trip Count */}
            <div className="mt-10 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                My Trips
              </h2>

              <span className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
                {savedTrips.length}{" "}
                {savedTrips.length === 1 ? "Trip" : "Trips"}
              </span>
            </div>

            {/* Saved Trip Cards */}
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {savedTrips.map((savedTrip) => (
                <article
                  key={savedTrip.id}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  {/* Card Header */}
                  <div className="bg-slate-900 p-6 text-white">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-teal-300">
                          Destination
                        </p>

                        <h3 className="mt-2 text-2xl font-bold">
                          📍 {savedTrip.destination}
                        </h3>
                      </div>

                      <span className="text-2xl">✈️</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-xs text-slate-500">
                          Duration
                        </p>

                        <p className="mt-1 font-semibold text-slate-900">
                          📅 {savedTrip.days}{" "}
                          {Number(savedTrip.days) === 1
                            ? "Day"
                            : "Days"}
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-xs text-slate-500">
                          Travelers
                        </p>

                        <p className="mt-1 font-semibold text-slate-900">
                          👥 {savedTrip.travelers}
                        </p>
                      </div>

                      <div className="col-span-2 rounded-xl bg-slate-50 p-3">
                        <p className="text-xs text-slate-500">
                          Budget
                        </p>

                        <p className="mt-1 font-semibold text-slate-900">
                          💰 {savedTrip.budget}
                        </p>
                      </div>
                    </div>

                    {/* Interests */}
                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Interests
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {savedTrip.interests?.slice(0, 4).map((interest) => (
                          <span
                            key={interest}
                            className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Trip */}
                    <Link
                      to="/trip-result"
                      state={savedTrip}
                      className="mt-6 block rounded-xl border border-teal-600 px-4 py-3 text-center text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
                    >
                      View Trip →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/plan-trip"
            className="inline-flex rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            ✨ Create Another Trip
          </Link>
        </div>

      </div>
    </main>
  );
}

export default SavedTrips;