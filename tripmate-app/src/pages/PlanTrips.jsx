import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendTripDetails } from "../services/api";

function PlanTrips() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    destination: "",
    days: "",
    budget: "",
    travelers: "",
    interests: [],
  });

  const [loading, setLoading] = useState(false);

  const interests = [
    "🏖️ Beaches",
    "🍜 Food",
    "🌿 Nature",
    "🏛️ History",
    "🛍️ Shopping",
    "📸 Photography",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInterestChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((item) => item !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.destination) {
      alert("Please enter a destination.");
      return;
    }

    if (!formData.days) {
      alert("Please select the number of days.");
      return;
    }

    if (!formData.travelers) {
      alert("Please enter the number of travelers.");
      return;
    }

    if (!formData.budget) {
      alert("Please select a budget.");
      return;
    }

    if (formData.interests.length === 0) {
      alert("Please select at least one interest.");
      return;
    }

    try {
      setLoading(true);

      const response = await sendTripDetails(formData);

      console.log("AI response:", response);

      navigate("/trip-result", {
  state: {
    ...formData,
    itinerary: response.itinerary,
    daysData: response.daysData,
  },
});
    } catch (error) {
  console.error("Error:", error);
  alert(`Error: ${error.message}`);
} finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
            ✨ AI Travel Planner
          </div>

          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Plan Your Perfect Trip ✈️
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Tell us about your trip and TripMate will create a personalized
            travel itinerary for you.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          {/* Destination */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              📍 Destination
            </label>

            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Example: Kochi"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </div>

          {/* Days + Travelers */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                📅 Number of Days
              </label>

              <select
                name="days"
                value={formData.days}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              >
                <option value="">Select days</option>
                <option value="1">1 Day</option>
                <option value="2">2 Days</option>
                <option value="3">3 Days</option>
                <option value="4">4 Days</option>
                <option value="5">5 Days</option>
                <option value="6">6 Days</option>
                <option value="7">7 Days</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                👥 Travelers
              </label>

              <input
                type="number"
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                min="1"
                placeholder="Example: 2"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />
            </div>
          </div>

          {/* Budget */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              💰 Budget
            </label>

            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            >
              <option value="">Select budget</option>
              <option value="Budget">Budget Friendly</option>
              <option value="Moderate">Moderate</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>

          {/* Interests */}
          <div className="mt-6">
            <label className="mb-3 block text-sm font-semibold text-slate-700">
              ❤️ What are you interested in?
            </label>

            <div className="grid gap-3 sm:grid-cols-2">
              {interests.map((interest) => {
                const selected = formData.interests.includes(interest);

                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestChange(interest)}
                    className={`rounded-xl border px-4 py-3 text-left font-medium transition ${
                      selected
                        ? "border-teal-600 bg-teal-50 text-teal-700"
                        : "border-slate-200 bg-white text-slate-600 hover:border-teal-300 hover:bg-slate-50"
                    }`}
                  >
                    {interest}

                    {selected && (
                      <span className="float-right text-teal-700">✓</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full rounded-xl bg-teal-700 px-6 py-4 font-semibold text-white shadow-sm transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "🤖 Creating Your Trip..." : "✨ Generate My Trip"}
          </button>

          <p className="mt-4 text-center text-xs text-slate-500">
            TripMate uses AI to personalize your travel recommendations.
          </p>
        </form>
      </div>
    </div>
  );
}

export default PlanTrips;





