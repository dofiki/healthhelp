import { Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import About from "./pages/About";
import MedicalInfo from "./pages/MedicalInfo";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/medical-info" element={<MedicalInfo />} />
      </Routes>
      <Footer />
    </div>
  );
};


