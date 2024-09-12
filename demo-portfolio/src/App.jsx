import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import TechStackSection from "./components/TechStackSection/TechStackSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/hero-section" element={<HeroSection />} />
        <Route path="/about-section" element={<AboutSection />} />
        <Route path="/tech-stack" element={<TechStackSection />} />
        <Route path="/experience-section" element={<ExperienceSection />} />
        <Route path="/contact-section" element={<ContactSection />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
