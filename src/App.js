// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import LoginSignup from "./LoginSighup/LoginSignup";
import FirstPage from "./components/FirstPage";
import WhyChoose from "./components/WhyChoose";
import FourthPage from "./components/FourthPage";
import SecondPage from "./components/SecondPage";
import ComparePage from "./components/ComparePage";
import CarDetails from "./components/CarDetails";
import About from "./components/About";
import CarFinderQuiz from "./components/CarFinderQuiz";

function NotFound() {
  return <div><h1>404 - Not Found</h1></div>;
}

function HomePage({ searchQuery }) {
  return (
    <>
      <FirstPage searchQuery={searchQuery} />
      <WhyChoose />
      <FourthPage />
    </>
  );
}

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // ✅ Global search state

  return (
    <Router>
      <Navbar
        onSearch={(value) => setSearchQuery(value)} // ✅ Receive search input from Navbar
        onShowLogin={() => setShowLoginModal(true)}
      />

      {showLoginModal && (
        <LoginSignup onClose={() => setShowLoginModal(false)} />
      )}

      <Routes>
        <Route path="/" element={<HomePage searchQuery={searchQuery} />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/car-finder-quiz" element={<CarFinderQuiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
