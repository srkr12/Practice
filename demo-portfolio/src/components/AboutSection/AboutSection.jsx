import React from "react";
import styles from "./AboutSection.module.scss";

function AboutSection() {
  return (
    <div className={styles.about_sec_container}>
      <div className={styles.heading}>
        <span className="route_tab body2_mid">About me</span>
      </div>

      <div className={styles.content_wrap}>
        <div className={styles.img_wrap}>
          <img src="./images/programmer.png" alt="programmer image" />
        </div>

        <div className={styles.text_wrap}>
          <h3 className="mid_heading red">Want to know more about me?</h3>

          <span>
            <p className="grey body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              debitis impedit consequuntur excepturi adipisci nesciunt
              perferendis velit libero quia, nulla nisi cumque, laborum nemo
              recusandae praesentium voluptatibus tempore non vitae.
            </p>

            <p className="grey body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              debitis impedit consequuntur excepturi adipisci nesciunt
              perferendis velit libero quia, nulla nisi cumque, laborum nemo
              recusandae praesentium voluptatibus tempore non vitae.
            </p>

            <p className="grey body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              debitis impedit consequuntur excepturi adipisci nesciunt
              perferendis velit libero quia, nulla nisi cumque, laborum nemo
              recusandae praesentium voluptatibus tempore non vitae.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
