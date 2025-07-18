import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import page components
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import CarDetails from "./components/CarDetails";
import ComparePage from "./components/ComparePage";
import WhyChoose from "./components/WhyChoose";
import FourthPage from "./components/FourthPage";
import About from "./components/About";
import CarFinderQuiz from "./components/CarFinderQuiz"; // ✅ Add this line


// Optional: NotFound page for routes that don't exist
function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

// Main Homepage combines three sections
function HomePage() {
  return (
    <>
      <FirstPage />
      <WhyChoose />
      <FourthPage />
    </>
  );
}

// App component setting up all routes
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/car-finder-quiz" element={<CarFinderQuiz />} />

      </Routes>
    </Router>
  );
}

export default App;
