import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import WhyChoose from "./components/WhyChoose";
import FourthPage from "./components/FourthPage";
import CarDetails from "./components/CarDetails";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/whychoose" element={<WhyChoose />} />
          <Route path="/fourth" element={<FourthPage />} />
          <Route path="/car/:id" element={<CarDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
