import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header_container}>
      <img src="./images/logo.png" alt="portfolio logo" />

      <ul className={styles.router_links}>
        <Link to="/about-section">
          <li className="cp">About</li>
        </Link>

        <Link to="/tech-stack">
          <li className="cp">Tech Stack</li>
        </Link>

        <Link to="/experience-section">
          <li className="cp">Experience</li>
        </Link>

        <Link to="/contact-section">
          <li className="cp">Contact</li>
        </Link>

        <img className="cp" src="./images/sun-icon.svg" alt="light mode icon" />

        <button className="primary_button">
          <span>Resume</span>

          <img src="./images/download-icon.svg" alt="resume download icon" />
        </button>
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
