import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">

        {/* Left Content */}
        <div>

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
            ✨ Smart Travel Planning
          </div>

          <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Plan your perfect trip
            <span className="block text-teal-700">
              with TripMate ✈️
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Discover amazing destinations and create a personalized
            travel itinerary based on your budget, interests, and time.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              to="/plan-trip"
              className="rounded-full bg-teal-700 px-7 py-3.5 font-semibold text-white shadow-lg transition hover:bg-teal-800 hover:shadow-xl"
            >
              ✨ Plan My Trip
            </Link>

            <a
              href="#features"
              className="rounded-full border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition hover:border-teal-600 hover:text-teal-700"
            >
              Explore Features
            </a>

          </div>

          {/* Small Stats */}
          <div className="mt-10 flex flex-wrap gap-8">

            <div>
              <p className="text-2xl font-bold text-slate-900">🌍</p>
              <p className="mt-1 text-sm text-slate-500">
                Explore destinations
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-slate-900">💰</p>
              <p className="mt-1 text-sm text-slate-500">
                Plan your budget
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-slate-900">🤖</p>
              <p className="mt-1 text-sm text-slate-500">
                Smart suggestions
              </p>
            </div>

          </div>

        </div>


        {/* Right Image */}
        <div className="relative">

          <div className="overflow-hidden rounded-3xl shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1500534623283-312aade485b7"
              alt="Beautiful travel destination"
              className="h-[450px] w-full object-cover sm:h-[500px]"
            />

          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-4 shadow-xl sm:-left-8">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-100 text-xl">
                ✨
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Your trip is ready!
                </p>

                <p className="text-xs text-slate-500">
                  Personalized for you
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Features Section */}
      <section
        id="features"
        className="bg-white px-6 py-20"
      >

        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <div className="mx-auto max-w-2xl text-center">

            <p className="font-semibold text-teal-700">
              WHY TRIPMATE?
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Everything you need for your next adventure
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Plan your journey easily with smart recommendations,
              budget planning, and personalized travel ideas.
            </p>

          </div>


          {/* Feature Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-2xl">
                🤖
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Smart Planning
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Get personalized travel suggestions based on your
                destination, interests, and trip duration.
              </p>

            </div>


            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-2xl">
                💰
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Budget Friendly
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Plan your trip according to your budget and make
                smarter travel decisions.
              </p>

            </div>


            {/* Card 3 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-2xl">
                🌍
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Explore More
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Discover interesting places, experiences, and activities
                for your next adventure.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CTA Section */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl rounded-3xl bg-teal-700 px-6 py-14 text-center shadow-xl sm:px-12">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to plan your next adventure?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-teal-50">
            Tell us where you want to go, and TripMate will help you
            create a personalized travel plan.
          </p>

          <Link
            to="/plan-trip"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 font-semibold text-teal-700 transition hover:bg-slate-100"
          >
            Start Planning ✈️
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;