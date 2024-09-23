import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer_container}>
      <span className="grey">© 2024 |</span>{" "}
      <span className="red">Demo project</span>
    </footer>
  );
}

export default Footer;
