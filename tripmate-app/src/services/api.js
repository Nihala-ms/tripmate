const API_URL = "http://localhost:5000/api";

export const sendTripDetails = async (tripData) => {
  try {
    const response = await fetch(`${API_URL}/trip`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tripData),
    });

    const data = await response.json();

    console.log("Backend response:", data);

    if (!response.ok) {
      throw new Error(data.error || data.message || "Server error");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};