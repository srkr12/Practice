import React from "react";
import styles from "./Header.module.scss";

function Header({ isDarkMode, toggleTheme }) {
  return (
    <header className={styles.header_container}>
      <img src="./images/logo.svg" alt="portfolio logo" />

      <ul className={styles.router_links}>
        <li className="cp body2_mid">About</li>

        <li className="cp body2_mid">Tech Stack</li>

        <li className="cp body2_mid">Experience</li>

        <li className="cp body2_mid">Contact</li>

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
        <img className="cp" src="./images/github-icon.svg" alt="github icon" />

        <img
          className="cp"
          src="./images/linkedin-icon.svg"
          alt="linkedin icon"
        />

        <img className="cp" src="./images/mail-icon.svg" alt="mail icon" />
      </div>
    </header>
  );
}

export default Header;
