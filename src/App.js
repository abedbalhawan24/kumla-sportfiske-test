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

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px", backgroundColor: "#FFFDE2", minHeight: "90vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/clubrules" element={<ClubRules />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/inspectors" element={<Inspectors />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
