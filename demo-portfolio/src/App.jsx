import React, { useState } from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import TechStackSection from "./components/TechStackSection/TechStackSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
