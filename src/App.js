import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import ClubRules from "./pages/ClubRules";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Inspectors from "./pages/Inspectors";
import About from "./pages/About";
import Fangstrapport from "./pages/Fangstrapport";
import Events from "./pages/Events";
import BackToTop from "./components/BackToTop"; // Importera BackToTop
import Footer from "./components/Footer"; 

import "./Layout.css"; // Säkerställ att Layout.css är importerad

function App() {
  return (
    <Router>
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/clubrules" element={<ClubRules />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/inspectors" element={<Inspectors />} />
          <Route path="/about" element={<About />} />
          <Route path="/fangstrapport" element={<Fangstrapport />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        {/* Back to Top-knapp */}
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
