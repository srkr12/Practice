import React from "react";
import styles from "./TechStackSection.module.scss";

function TechStackSection({ isDarkMode }) {
  return (
    <div className={styles.tech_container}>
      <div className={styles.heading_wrap}>
        <span className="route_tab body2_mid">Tech Stack</span>

        <p className={`${isDarkMode ? "white" : "grey"}subtitle`}>
          Example of some technologies that you might have experienced with
        </p>
      </div>

      <div className={styles.tech_wrap}>
        <div className={styles.tech}>
          <img src="./images/javascript-icon.svg" alt="javascript" />
          <p className={`${isDarkMode ? "white" : "grey"}body1`}>Javascript</p>
        </div>

        <div className={styles.tech}>
          <img src="./images/typescript-icon.svg" alt="typescript" />
          <p className={`${isDarkMode ? "white" : "grey"}body1`}>Typescript</p>
        </div>

        <div className={styles.tech}>
          <img src="./images/nest-icon.svg" alt="nest.js" />
          <p className={`${isDarkMode ? "white" : "grey"}body1`}>Nest.js</p>
        </div>

        <div className={styles.tech}>
          <img src="./images/react-icon.svg" alt="react.js" />
          <p className={`${isDarkMode ? "white" : "grey"}body1`}>React</p>
        </div>

        <div className={styles.tech}>
          <img src="./images/express-icon.svg" alt="express.js" />
          <p className={`${isDarkMode ? "white" : "grey"}body1`}>Express.js</p>
        </div>

        <div className={styles.tech}>
          <img src="./images/next-icon.svg" alt="next.js" />
          <p className={`${isDarkMode ? "white" : "grey"}body1`}>Next.js</p>
        </div>
      </div>
    </div>
  );
}

export default TechStackSection;
