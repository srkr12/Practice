import React from "react";
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
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
