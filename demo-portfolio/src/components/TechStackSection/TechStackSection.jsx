import React from "react";
import styles from "./TechStackSection.module.scss";

function TechStackSection() {
  return (
    <div className={styles.tech_container}>
      <div className={styles.heading_wrap}>
        <div className={styles.heading}>
          <span className="route_tab">Tech Stack</span>

          <p className="subtitle grey">
            Example of some technologies that you might have experienced with
          </p>
        </div>

        <p></p>
      </div>

      <div className={styles.tech_wrap}></div>
    </div>
  );
}

export default TechStackSection;
