import React from "react";
import styles from "./HeroSection.module.scss";

function HeroSection() {
  return (
    <div className={styles.hero_container}>
      <div className={styles.text_wrap}>
        <h1>
          Hi, I'm "<span className="teal">Your Name</span>"
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam
          voluptate odit dolorum, earum, quidem, ex consectetur delectus ipsum
          illum fugit quam repellat fugiat quae. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          <br />
          Ipsum consequuntur quod iure, illo saepe voluptatibus.
        </p>
      </div>

      <div className={styles.img_wrap}>
        <img src="./images/hero-img.svg" alt="hero image" />
      </div>
    </div>
  );
}

export default HeroSection;
