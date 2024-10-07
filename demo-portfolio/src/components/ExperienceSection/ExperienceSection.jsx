import React from "react";
import styles from "./ExperienceSection.module.scss";

function ExperienceSection({ isDarkMode }) {
  console.log(styles.company);

  return (
    <div className={styles.experience_container}>
      <div className={styles.heading}>
        <span className="route_tab body2_mid">Experience</span>

        <p className={`${isDarkMode ? "white" : "grey"} subtitle`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className={`${styles.company} ${isDarkMode ? "bg" : ""} `}>
        <img src="./images/company-logo-1.png" alt="company logo" />

        <div className={styles.job_role}>
          <span className={`${isDarkMode ? "white" : ""} subtitle_semi`}>
            Full Stack Developer
          </span>

          <ul className={isDarkMode ? "white" : ""}>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, laboriosam cum hic tempora dolorem.
            </li>

            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, laboriosam cum hic tempora dolorem.
            </li>

            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, laboriosam cum hic tempora dolorem.
            </li>
          </ul>
        </div>

        <span className={`${isDarkMode ? "white" : ""} body2`}>DD/MM/YYYY</span>
      </div>

      <div className={`${styles.company} ${isDarkMode ? "bg" : ""} `}>
        <img src="./images/company-logo-1.png" alt="company logo" />

        <div className={styles.job_role}>
          <span className={`${isDarkMode ? "white" : ""} subtitle_semi`}>
            Full Stack Developer
          </span>

          <ul className={isDarkMode ? "white" : ""}>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, laboriosam cum hic tempora dolorem.
            </li>

            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, laboriosam cum hic tempora dolorem.
            </li>

            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, laboriosam cum hic tempora dolorem.
            </li>
          </ul>
        </div>

        <span className={`${isDarkMode ? "white" : ""} body2`}>DD/MM/YYYY</span>
      </div>
    </div>
  );
}

export default ExperienceSection;
