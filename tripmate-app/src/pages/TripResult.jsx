import React from "react";
import { Link, useLocation } from "react-router-dom";

function TripResult() {
  const location = useLocation();
  const trip = location.state;

  // If no trip data exists
  if (!trip) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6">
        <div className="text-center">
          <div className="text-6xl">✈️</div>

          <h2 className="mt-5 text-2xl font-bold text-slate-900">
            No Trip Found
          </h2>

          <p className="mt-2 text-slate-500">
            Please create a trip first.
          </p>

          <Link
            to="/plan-trip"
            className="mt-6 inline-block rounded-full bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-800"
          >
            Plan a Trip
          </Link>
        </div>
      </div>
    );
  }

  // Split itinerary into individual days
  const itineraryDays = trip.itinerary
    ? trip.itinerary
        .split(/(?=Day\s+\d+)/i)
        .map((day) => day.trim())
        .filter(Boolean)
    : [];

  // Remove Places to Visit from the text
  const removePlacesSection = (content) => {
    return content
      .replace(
        /📍\s*Places to Visit:\s*[\s\S]*?(?=\n(?:🍜|🌅|☀️|🌙|💡)|$)/i,
        ""
      )
      .trim();
  };

  // Save trip
  const handleSaveTrip = () => {
    const savedTrips =
      JSON.parse(localStorage.getItem("savedTrips")) || [];

    const newTrip = {
      id: Date.now(),
      destination: trip.destination,
      days: trip.days,
      budget: trip.budget,
      travelers: trip.travelers,
      interests: trip.interests,
      itinerary: trip.itinerary,
      daysData: trip.daysData,
    };

    savedTrips.push(newTrip);

    localStorage.setItem(
      "savedTrips",
      JSON.stringify(savedTrips)
    );

    alert("Trip saved successfully! ❤️");
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO SECTION */}
      <section className="bg-slate-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">
              Your AI Travel Plan
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Your Trip to {trip.destination}
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              A personalized itinerary created based on your
              destination, budget, interests and travel preferences.
            </p>
          </div>

          {/* TRIP SUMMARY */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
              <p className="text-sm text-slate-400">
                Destination
              </p>

              <p className="mt-1 font-semibold">
                📍 {trip.destination}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
              <p className="text-sm text-slate-400">
                Duration
              </p>

              <p className="mt-1 font-semibold">
                📅 {trip.days} Days
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
              <p className="text-sm text-slate-400">
                Budget
              </p>

              <p className="mt-1 font-semibold">
                💰 {trip.budget}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
              <p className="text-sm text-slate-400">
                Travelers
              </p>

              <p className="mt-1 font-semibold">
                👥 {trip.travelers}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-7xl px-6 py-12">

        {/* TITLE + BUTTONS */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Your Day-by-Day Itinerary
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Explore recommended places and activities for each day.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">

            <button
              onClick={handleSaveTrip}
              className="rounded-full border border-teal-700 px-5 py-2.5 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
            >
              ❤️ Save Trip
            </button>

            <Link
              to="/plan-trip"
              className="rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              ✈️ Plan Another
            </Link>

          </div>
        </div>

        {/* DAY-BY-DAY */}
        <div className="space-y-8">

          {itineraryDays.map((dayContent, index) => {

            const dayData = trip.daysData?.[index];

            return (
              <section
                key={index}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >

                {/* DAY HEADER */}
                <div className="border-b border-slate-200 bg-slate-900 px-6 py-6 text-white sm:px-8">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-600 text-lg font-bold">
                      {index + 1}
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                        Travel Day
                      </p>

                      <h3 className="mt-1 text-2xl font-bold">
                        Day {index + 1}
                      </h3>
                    </div>

                  </div>

                </div>

                {/* DAY CONTENT */}
                <div className="space-y-8 p-6 sm:p-8">

                  {/* PLACES */}
                  {dayData?.places?.length > 0 && (
                    <div>

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-xl">
                          📍
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-slate-900">
                            Places to Visit
                          </h4>

                          <p className="text-sm text-slate-500">
                            Recommended attractions for this day
                          </p>
                        </div>

                      </div>

                      {/* PLACE CARDS */}
                      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {dayData.places.map(
                          (place, placeIndex) => (

                            <div
                              key={placeIndex}
                              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >

                              {/* IMAGE */}
                              <div className="relative h-52 overflow-hidden">

                                {place.image?.url ? (
                                  <img
                                    src={place.image.url}
                                    alt={place.name}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    onError={(e) => {
                                      e.currentTarget.style.display =
                                        "none";

                                      if (
                                        e.currentTarget
                                          .nextElementSibling
                                      ) {
                                        e.currentTarget.nextElementSibling.style.display =
                                          "flex";
                                      }
                                    }}
                                  />
                                ) : null}

                                {/* FALLBACK */}
                                <div
                                  className={`absolute inset-0 items-center justify-center bg-gradient-to-br from-teal-50 via-slate-100 to-slate-200 ${
                                    place.image?.url
                                      ? "hidden"
                                      : "flex"
                                  }`}
                                >

                                  <div className="px-5 text-center">

                                    <div className="text-5xl">
                                      📍
                                    </div>

                                    <p className="mt-3 text-sm font-semibold text-slate-600">
                                      {place.name}
                                    </p>

                                    <p className="mt-1 text-xs text-slate-400">
                                      {trip.destination}
                                    </p>

                                  </div>

                                </div>

                                {/* NUMBER */}
                                <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-sm font-bold text-teal-700 shadow-md">
                                  {placeIndex + 1}
                                </div>

                              </div>

                              {/* PLACE DETAILS */}
                              <div className="p-5">

                                <h5 className="text-lg font-bold text-slate-900">
                                  {place.name}
                                </h5>

                                <p className="mt-2 text-sm text-slate-500">
                                  📍 {trip.destination}
                                </p>

                              </div>

                            </div>

                          )
                        )}

                      </div>
                    </div>
                  )}

                  {/* ITINERARY DETAILS */}
                  <div className="grid gap-5">

                    {removePlacesSection(dayContent)
                      .split(/(?=🍜|🌅|☀️|🌙|💡)/g)
                      .map(
                        (section, sectionIndex) => {

                          const cleanSection =
                            section.trim();

                          if (!cleanSection) {
                            return null;
                          }

                          let icon = "📝";
                          let title = "Travel Details";

                          if (
                            cleanSection.startsWith("🍜")
                          ) {
                            icon = "🍜";
                            title = "Food";
                          } else if (
                            cleanSection.startsWith("🌅")
                          ) {
                            icon = "🌅";
                            title = "Morning";
                          } else if (
                            cleanSection.startsWith("☀️")
                          ) {
                            icon = "☀️";
                            title = "Afternoon";
                          } else if (
                            cleanSection.startsWith("🌙")
                          ) {
                            icon = "🌙";
                            title = "Evening";
                          } else if (
                            cleanSection.startsWith("💡")
                          ) {
                            icon = "💡";
                            title = "Travel Tip";
                          }

                          const text =
                            cleanSection
                              .replace(
                                /^(🍜|🌅|☀️|🌙|💡)\s*/,
                                ""
                              )
                              .trim();

                          return (
                            <div
                              key={sectionIndex}
                              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                            >

                              <div className="flex items-start gap-4">

                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                                  {icon}
                                </div>

                                <div>

                                  <h4 className="font-bold text-slate-900">
                                    {title}
                                  </h4>

                                  <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-600">
                                    {text}
                                  </p>

                                </div>

                              </div>

                            </div>
                          );
                        }
                      )}

                  </div>

                </div>

              </section>
            );
          })}

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-12 rounded-3xl bg-teal-700 p-8 text-center text-white sm:p-10">

          <div className="text-4xl">
            ✈️
          </div>

          <h2 className="mt-4 text-2xl font-bold">
            Ready for another adventure?
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-teal-100">
            Create another personalized travel plan with TripMate.
          </p>

          <Link
            to="/plan-trip"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-700 transition hover:bg-slate-100"
          >
            Create New Trip
          </Link>

        </div>

      </main>
    </div>
  );
}

export default TripResult;