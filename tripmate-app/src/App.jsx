import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import TripResult from "./pages/TripResult";
import SavedTrips from "./pages/SavedTrips";
import About from "./pages/About";
import PlanTrip from "./pages/PlanTrips";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan-trip" element={<PlanTrip />} />
        <Route path="/trip-result" element={<TripResult />} />
        <Route path="/saved-trips" element={<SavedTrips />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;