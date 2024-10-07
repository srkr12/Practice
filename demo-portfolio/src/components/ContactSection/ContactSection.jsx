import React from "react";
import styles from "./ContactSection.module.scss";

function ContactSection({ isDarkMode }) {
  const handleEmailCopy = () => {
    const emailId = "your.email@gmail.com";
    navigator.clipboard
      .writeText(emailId)
      .then(() => {
        alert("Phone email id copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handlePhoneCopy = () => {
    const phoneNumber = "+91 1234567890";
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert("Phone number copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className={styles.contact_container}>
      <div className={styles.heading_wrap}>
        <span className="route_tab body2_mid">Get in Touch</span>

        <p className={`${isDarkMode ? "white" : "grey"} subtitle`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et omnis
          nisi non aperiam reiciendis obcaecati <br />
          iure provident, amet saepe quis. Lorem ipsum dolor sit
        </p>
      </div>

      <div className={styles.contact_detail_wrap}>
        <div className={styles.contact_detail}>
          <img
            src={
              isDarkMode
                ? "./images/mail-icon-white.svg"
                : "./images/grey-mail-icon.png"
            }
            alt="mail icon"
          />

          <span className="subtitle_semi">your.email@gmail.com</span>

          <img
            className="cp"
            onClick={handleEmailCopy}
            src={
              isDarkMode
                ? "./images/copy-icon-white.svg"
                : "./images/copy-icon.png"
            }
            alt="copy"
          />
        </div>

        <div className={styles.contact_detail}>
          <img
            src={
              isDarkMode
                ? "./images/phone-icon-white.svg"
                : "./images/phone-icon.png"
            }
            alt="phone icon"
          />

          <span className="subtitle_semi">+91 1234567890</span>

          <img
            className="cp"
            onClick={handlePhoneCopy}
            src={
              isDarkMode
                ? "./images/copy-icon-white.svg"
                : "./images/copy-icon.png"
            }
            alt="copy"
          />
        </div>
      </div>

      <div className={styles.icon_wrap}>
        <p className={`${isDarkMode ? "white" : "grey"} body2 `}>
          Feel free to connect with me on these platforms
        </p>

        <div className={styles.icon}>
          <img
            src={
              isDarkMode
                ? "./images/github-icon-white.svg"
                : "./images/github-icon.svg"
            }
            alt="github icon"
          />

          <img
            src={
              isDarkMode
                ? "./images/linkedin-icon-white.svg"
                : "./images/linkedin-icon.svg"
            }
            alt="linkedin icon"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
