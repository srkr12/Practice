import React from "react";
import styles from "./ContactSection.module.scss";

function ContactSection() {
  return (
    <div className={styles.contact_container}>
      <div className={styles.heading_wrap}>
        <span className="route_tab body2_mid">Get in Touch</span>

        <p className="subtitle grey">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et omnis
          nisi non aperiam reiciendis obcaecati <br />
          iure provident, amet saepe quis. Lorem ipsum dolor sit
        </p>
      </div>

      <div className={styles.contact_detail_wrap}>
        <div className={styles.contact_detail}>
          <img src="./images/grey-mail-icon.png" alt="mail icon" />
          <h2>your.email@gmail.com</h2>
          <img src="./images/paste-icon.png" alt="paste" />
        </div>

        <div className={styles.contact_detail}>
          <img src="./images/phone-icon.png" alt="phone icon" />
          <h2>+91 1234567890</h2>
          <img src="./images/paste-icon.png" alt="paste" />
        </div>
      </div>

      <div className={styles.icon_wrap}>
        <p className="body2 grey">
          Feel free to connect with me on these platforms
        </p>

        <div className={styles.icon}>
          <img src="./images/github-icon.svg" alt="github icon" />
          <img src="./images/linkedin-icon.svg" alt="linkedin icon" />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
