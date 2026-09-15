import { Link } from "react-router-dom";

function About() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-slate-900 px-6 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl text-center">

          <div className="inline-flex items-center rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-sm font-semibold text-teal-300">
            ✈️ About TripMate
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Travel Planning, Made Smarter
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            TripMate is an AI-powered travel planner that helps you create
            personalized travel itineraries based on your destination,
            budget, interests, and travel duration.
          </p>

        </div>
      </section>

      {/* About TripMate */}
      <section className="px-6 py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">

          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
              What is TripMate?
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Your personal AI travel companion
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Planning a trip can take a lot of time. TripMate makes the
              process easier by creating a personalized itinerary in just
              a few steps.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Simply enter your destination, number of days, budget,
              travelers, and interests. TripMate uses AI to generate
              practical day-by-day travel suggestions.
            </p>

            <Link
              to="/plan-trip"
              className="mt-7 inline-flex rounded-xl bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800 hover:shadow-md"
            >
              ✨ Plan Your Trip
            </Link>
          </div>

          {/* Feature Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">

            <div className="grid gap-5 sm:grid-cols-2">

              <div className="rounded-2xl bg-teal-50 p-5">
                <div className="text-3xl">🤖</div>

                <h3 className="mt-3 font-bold text-slate-900">
                  AI Powered
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Personalized travel plans generated with AI.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="text-3xl">🎯</div>

                <h3 className="mt-3 font-bold text-slate-900">
                  Personalized
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Plans based on your interests and preferences.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="text-3xl">💰</div>

                <h3 className="mt-3 font-bold text-slate-900">
                  Budget Friendly
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Recommendations tailored to your selected budget.
                </p>
              </div>

              <div className="rounded-2xl bg-teal-50 p-5">
                <div className="text-3xl">⚡</div>

                <h3 className="mt-3 font-bold text-slate-900">
                  Simple & Fast
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Generate a complete itinerary in seconds.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-slate-200 bg-white px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
              How It Works
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Plan your journey in 3 simple steps
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Step 1 */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-lg font-bold text-white">
                01
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Enter Your Preferences
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Tell TripMate where you want to go, how long you want to
                stay, your budget, and what you enjoy.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-700 text-lg font-bold text-white">
                02
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Let AI Plan
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                TripMate processes your preferences and creates a
                personalized day-by-day itinerary.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-lg font-bold text-white">
                03
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Enjoy Your Journey
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Explore your itinerary, save your trip, and use your plan
                whenever you are ready to travel.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="px-6 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
            Built With
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Technologies Behind TripMate
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            TripMate combines modern web technologies with generative AI
            to create a simple and useful travel planning experience.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">

            <span className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm">
              React
            </span>

            <span className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm">
              Tailwind CSS
            </span>

            <span className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm">
              React Router
            </span>

            <span className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm">
              Node.js
            </span>

            <span className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm">
              Express.js
            </span>

            <span className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm">
              Gemini AI
            </span>

            <span className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm">
              REST API
            </span>

            <span className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm">
              LocalStorage
            </span>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-teal-700 px-6 py-12 text-center text-white shadow-sm sm:px-10">

          <div className="text-4xl">🌍</div>

          <h2 className="mt-4 text-3xl font-bold">
            Ready to plan your next adventure?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-teal-50">
            Give TripMate your travel preferences and let AI create a
            personalized itinerary for you.
          </p>

          <Link
            to="/plan-trip"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
          >
            Start Planning ✈️
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-8">
        <p className="text-center text-sm text-slate-500">
          TripMate AI • Plan smarter. Travel better. ✈️
        </p>
      </footer>

    </main>
  );
}

export default About;
