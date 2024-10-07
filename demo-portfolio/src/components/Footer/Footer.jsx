import React from "react";
import styles from "./Footer.module.scss";

function Footer({ isDarkMode }) {
  return (
    <footer className={styles.footer_container}>
      <span className={isDarkMode ? "white" : "grey"}>© 2024 |</span>{" "}
      <span className={isDarkMode ? "teal" : "red"}>Demo project</span>
    </footer>
  );
}

export default Footer;
