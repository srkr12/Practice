import React from "react";
import styles from "./HeroSection.module.scss";

function HeroSection() {
  return (
    <div className={styles.hero_container}>
      <div className={styles.text_wrap}>
        <div className={styles.text}>
          <h1>
            Hi, I'm "<span className="teal">Your Name</span>"
          </h1>

          <p className="grey body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam
            voluptate odit dolorum, earum, quidem, ex consectetur delectus ipsum
            illum fugit quam repellat fugiat quae. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>

          <p className="grey body2">
            Ipsum consequuntur quod iure, illo saepe voluptatibus.
          </p>

          <p className="grey body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            repudiandae quos.
          </p>
        </div>

        <div className={styles.location}>
          <img src="./images/location-icon.svg" alt="location icon" />

          <p className="grey body2">Your city, Your state, Your country</p>
        </div>

        <button className="primary_button">
          <span className="mid_button">Get in touch</span>

          <img src="./images/arrow-icon.svg" alt="arrow icon" />
        </button>
      </div>

      <div className={styles.img_wrap}>
        <img src="./images/hero-img.png" alt="hero image" />
      </div>
    </div>
  );
}

export default HeroSection;
