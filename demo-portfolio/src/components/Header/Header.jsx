import React from "react";
import styles from "./Header.module.scss";

function Header({ isDarkMode, toggleTheme }) {
  return (
    <header className={styles.header_container}>
      <img
        src={isDarkMode ? "./images/logo-white.svg" : "./images/logo.svg"}
        alt="portfolio logo"
      />

      <ul className={styles.router_links}>
        <li>
          <a
            className={`${isDarkMode ? styles.dark : ""} cp body2_mid`}
            href="#about"
          >
            About
          </a>
        </li>

        <li>
          <a
            className={`${isDarkMode ? styles.dark : ""} cp body2_mid`}
            href="#techstack"
          >
            Tech Stack
          </a>
        </li>

        <li>
          <a
            className={`${isDarkMode ? styles.dark : ""} cp body2_mid`}
            href="#experience"
          >
            Experience
          </a>
        </li>

        <li>
          <a
            className={`${isDarkMode ? styles.dark : ""} cp body2_mid`}
            href="#contact"
          >
            Contact
          </a>
        </li>

        <img
          className="cp"
          src={isDarkMode ? "./images/sun-icon.png" : "./images/moon-icon.png"}
          alt={isDarkMode ? "light mode icon" : "dark mode icon"}
          onClick={toggleTheme}
        />

        <a href="/resume.pdf" download="resume.pdf" className="primary_button">
          <span className="mid_button">Resume</span>

          <img src="./images/download-icon.svg" alt="resume download icon" />
        </a>
      </ul>

      <div className={styles.icon_wrap}>
        <img
          className="cp"
          src={
            isDarkMode
              ? "./images/mail-icon-white.svg"
              : "./images/mail-icon.svg"
          }
          alt="mail icon"
        />

        <img
          className="cp"
          src={
            isDarkMode
              ? "./images/github-icon-white.svg"
              : "./images/github-icon.svg"
          }
          alt="github icon"
        />

        <img
          className="cp"
          src={
            isDarkMode
              ? "./images/linkedin-icon-white.svg"
              : "./images/linkedin-icon.svg"
          }
          alt="linkedin icon"
        />
      </div>
    </header>
  );
}

export default Header;
