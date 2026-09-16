const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// -----------------------------
// Gemini AI
// -----------------------------

let GoogleGenAI;

async function getGeminiAI() {
  if (!GoogleGenAI) {
    const gemini = await import("@google/genai");
    GoogleGenAI = gemini.GoogleGenAI;
  }

  return new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
}

// -----------------------------
// Wait helper
// -----------------------------

const wait = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// -----------------------------
// Generate Trip with Gemini
// -----------------------------

async function generateTripWithAI(prompt) {
  const ai = await getGeminiAI();

  const models = [
    "gemini-3.8-flash",
    "gemini-3.6-flash",
    "gemini-3.5-flash",
  ];

  for (const model of models) {
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        console.log(
          `Trying ${model} - attempt ${attempt}...`
        );

        const response = await ai.models.generateContent({
          model,
          contents: prompt,
        });

        console.log(`Gemini success with ${model} ✅`);

        return response.text;
      } catch (error) {
        console.error(
          `${model} attempt ${attempt} failed:`,
          error.message
        );

        if (
          error.message.includes("503") ||
          error.message.includes("UNAVAILABLE")
        ) {
          const delay = 2000 * Math.pow(2, attempt - 1);

          console.log(
            `Waiting ${delay / 1000} seconds before retry...`
          );

          await wait(delay);
        } else {
          throw error;
        }
      }
    }

    console.log(
      `${model} unavailable. Trying the next model...`
    );
  }

  throw new Error(
    "All Gemini models are temporarily unavailable."
  );
}

// -----------------------------
// Unsplash Image Search
// -----------------------------

async function searchPlaceImage(place, destination) {
  const queries = [
    `${place}, ${destination}`,
    `${place} ${destination}`,
    place,
    `${destination} travel`,
  ];

  for (const query of queries) {
    try {
      console.log(`Searching Unsplash for: ${query}`);

      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
          query
        )}&per_page=1&orientation=landscape`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
            "Accept-Version": "v1",
          },
        }
      );

      if (!response.ok) {
        console.log(
          `Unsplash request failed: ${response.status}`
        );
        continue;
      }

      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const photo = data.results[0];

        console.log(`Image found for: ${query} ✅`);

        return {
          url: photo.urls.regular,
          photographer: photo.user.name,
          photographerUrl: photo.user.links.html,
          unsplashUrl: photo.links.html,
        };
      }
    } catch (error) {
      console.error(
        `Image search error for ${query}:`,
        error.message
      );
    }
  }

  console.log(`No image found for ${place}`);

  return null;
}

// -----------------------------
// Home Route
// -----------------------------

app.get("/", (req, res) => {
  res.json({
    message: "TripMate Backend is running successfully 🚀",
  });
});

// -----------------------------
// Trip Route
// -----------------------------

app.post("/api/trip", async (req, res) => {
  try {
    const {
      destination,
      days,
      budget,
      travelers,
      interests,
    } = req.body;

    console.log("Trip details received:", {
      destination,
      days,
      budget,
      travelers,
      interests,
    });

    if (
      !destination ||
      !days ||
      !budget ||
      !travelers ||
      !interests
    ) {
      return res.status(400).json({
        message: "Please provide all trip details.",
      });
    }

    const prompt = `
You are TripMate, an AI travel planner.

Create a personalized travel itinerary.

Destination: ${destination}
Number of days: ${days}
Budget: ${budget}
Number of travelers: ${travelers}
Interests: ${interests.join(", ")}

Create a useful day-by-day travel plan.

For EVERY day, include:

Day X

📍 Places to Visit:
- Give specific real places or attractions.
- Include 2 or 3 places.

🍜 Food:
- Recommend local food or a suitable restaurant area.

🌅 Morning:
- Suggest a specific activity.

☀️ Afternoon:
- Suggest a specific activity.

🌙 Evening:
- Suggest a specific activity.

💡 Travel Tip:
- Give one useful tip.

Make the recommendations practical for the selected budget.

Do not give generic suggestions.

Always give specific place names whenever possible.

Return only the itinerary.
`;

    const itinerary = await generateTripWithAI(prompt);

    const itineraryDays = itinerary
      .split(/(?=Day\s+\d+)/i)
      .map((day) => day.trim())
      .filter(Boolean);

    const daysWithImages = [];

    for (const day of itineraryDays) {
      const placesMatch = day.match(
        /📍\s*Places to Visit:\s*([\s\S]*?)(?=\n(?:🍜|🌅|☀️|🌙|💡)|$)/i
      );

      let places = [];

      if (placesMatch) {
        places = placesMatch[1]
          .split("\n")
          .map((place) =>
            place
              .replace(/^[-•*]\s*/, "")
              .trim()
          )
          .filter(Boolean);
      }

      const placesWithImages = [];

      for (const place of places) {
        const image = await searchPlaceImage(
          place,
          destination
        );

        placesWithImages.push({
          name: place,
          image,
        });
      }

      daysWithImages.push({
        content: day,
        places: placesWithImages,
      });
    }

    res.json({
      message: "AI trip generated successfully!",

      trip: {
        destination,
        days,
        budget,
        travelers,
        interests,
      },

      itinerary,

      daysData: daysWithImages,
    });
  } catch (error) {
    console.error(
      "Trip generation error:",
      error
    );

    res.status(500).json({
      message: "Failed to generate AI trip",
      error: error.message,
    });
  }
});

// -----------------------------
// Export Express App
// -----------------------------

module.exports = app;