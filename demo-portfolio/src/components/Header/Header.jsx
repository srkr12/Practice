import React from "react";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header_container}>
      <img src="./images/logo.png" alt="portfolio logo" />

      <ul className={styles.router_links}>
        <li className="cp">About</li>

        <li className="cp">Tech Stack</li>

        <li className="cp">Experience</li>

        <li className="cp">Contact</li>

        <img className="cp" src="./images/sun-icon.svg" alt="light mode icon" />

        <a href="/resume.pdf" download="resume.pdf" className="primary_button">
          <span>Resume</span>

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
