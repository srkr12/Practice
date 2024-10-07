import React from "react";
import styles from "./AboutSection.module.scss";

function AboutSection({ isDarkMode }) {
  return (
    <div className={styles.about_sec_container}>
      <div className={styles.heading}>
        <span className="route_tab body2_mid">About Me</span>
      </div>

      <div className={styles.content_wrap}>
        <div className={styles.img_wrap}>
          <img src="./images/programmer.png" alt="programmer image" />
        </div>

        <div className={styles.text_wrap}>
          <h3 className={`${isDarkMode ? "teal" : "red"} mid_heading`}>
            Want to know more about me?
          </h3>

          <span>
            <p className={`${isDarkMode ? "white" : "grey"} body2`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              debitis impedit consequuntur excepturi adipisci nesciunt
              perferendis velit libero quia, nulla nisi cumque, laborum nemo
              recusandae praesentium voluptatibus tempore non vitae.
            </p>

            <p className={`${isDarkMode ? "white" : "grey"} body2`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              debitis impedit consequuntur excepturi adipisci nesciunt
              perferendis velit libero quia, nulla nisi cumque, laborum nemo
              recusandae praesentium voluptatibus tempore non vitae.
            </p>

            <p className={`${isDarkMode ? "white" : "grey"} body2`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              debitis impedit consequuntur excepturi adipisci nesciunt
              perferendis velit libero quia, nulla nisi cumque, laborum nemo
              recusandae praesentium voluptatibus tempore non vitae.
            </p>

            <p className={`${isDarkMode ? "white" : "grey"} body2`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              debitis impedit consequuntur excepturi adipisci nesciunt
              perferendis velit libero quia, nulla nisi cumque, laborum nemo
              recusandae praesentium voluptatibus tempore non vitae.
            </p>

            <p className={`${isDarkMode ? "white" : "grey"} body2`}>
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
