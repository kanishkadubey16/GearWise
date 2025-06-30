import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import WhyChoose from "./components/WhyChoose";
import FourthPage from "./components/FourthPage";
import CarDetails from "./components/CarDetails";

import "./App.css";

function HomePage() {
  return (
    <>
      <FirstPage />
      {/* <SecondPage /> */}
      <WhyChoose />
      <FourthPage />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/car/:id" element={<CarDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;