import { Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import About from "./pages/About";
import MedicalInfo from "./pages/MedicalInfo";
import Footer from "./components/Footer";
import Tracker from "./pages/Tracker";
import { useState } from "react";

export default function App() {
  const [trackerData, setTrackerData] = useState([]); // State for tracker data

  return (
    <div>
      <Banner />
      <Routes>
        <Route
          path="/"
          element={<Home trackerData={trackerData} setTrackerData={setTrackerData} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/medical-info" element={<MedicalInfo />} />
        <Route
          path="/tracker"
          element={
            <Tracker trackerData={trackerData} setTrackerData={setTrackerData} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}