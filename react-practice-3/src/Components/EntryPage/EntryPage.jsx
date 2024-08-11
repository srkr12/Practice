import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EntryPage.module.scss";

function EntryPage() {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/game-page");
  };

  return (
    <div className={styles.entry_page_container}>
      <div className={styles.img_wrap}>
        <img src="Images/dice_group.png" alt="entry page image" />
      </div>

      <div className={styles.text_wrap}>
        <h1>DICE GAME</h1>

        <button className="primary_button" onClick={goToNextPage}>
          Play Now
        </button>
      </div>
    </div>
  );
}

export default EntryPage;
