// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import CarDetails from "./components/CarDetails";
import ComparePage from "./components/ComparePage";
import WhyChoose from "./components/WhyChoose";
import FourthPage from "./components/FourthPage";
import About from "./components/About"; // ✅ New import here

function HomePage() {
  return (
    <>
      <FirstPage />
      <WhyChoose />
      <FourthPage />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/about" element={<About />} /> {/* ✅ Add this line */}
      </Routes>
    </Router>
  );
}

export default App;
