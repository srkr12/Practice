// import { useState } from "react";
// import styles from "./GamePage.module.scss";

// function GamePage() {
//   const [selectedNumber, setSelectedNumber] = useState(0);
//   const [showRules, setShowRules] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [currentDice, setCurrentDice] = useState(1);
//   const [isRolling, setIsRolling] = useState(false);
//   const [totalScore, setTotalScore] = useState(0); // New state for total score

//   const diceImages = [
//     "Images/dice_1.svg",
//     "Images/dice_2.svg",
//     "Images/dice_3.svg",
//     "Images/dice_4.svg",
//     "Images/dice_5.svg",
//     "Images/dice_6.svg",
//   ];

//   const handleNumberClick = (number) => {
//     setSelectedNumber(number);
//     setErrorMessage(""); // Clear the error message when a number is selected
//   };

//   const handleShowRules = () => {
//     setShowRules(!showRules);
//   };

//   const handleResetScore = () => {
//     setSelectedNumber(0);
//     setErrorMessage(""); // Clear the error message when a number is selected
//     setTotalScore(0);
//   };

//   const handleDiceClick = () => {
//     if (selectedNumber === 0) {
//       setErrorMessage("*You have not selected any number");
//     } else {
//       setErrorMessage(""); // Clear the error message if the dice is clicked with a number selected
//       setIsRolling(true);

//       // Simulate dice roll with a timeout
//       setTimeout(() => {
//         const randomSide = Math.floor(Math.random() * 6) + 1;
//         setCurrentDice(randomSide);
//         setIsRolling(false);

//         // Update the score based on the dice roll
//         if (selectedNumber === randomSide) {
//           setTotalScore(totalScore + randomSide); // Add dice number to the score
//         } else {
//           setTotalScore(totalScore - 2); // Deduct 2 points if the guess was wrong
//         }
//       }, 1000); // Dice rolls for 1 second
//     }
//   };

//   return (
//     <div className={styles.game_page_container}>
//       <div className={styles.select_boxes}>
//         <div className={styles.display_num}>
//           <h1>{totalScore}</h1>
//           <p>Total Score</p>
//         </div>

//         <div className={styles.num_boxes}>
//           {errorMessage && (
//             <div className={styles.error_message}>
//               <p>{errorMessage}</p>
//             </div>
//           )}

//           <ul>
//             {[1, 2, 3, 4, 5, 6].map((num) => (
//               <li
//                 key={num}
//                 onClick={() => handleNumberClick(num)}
//                 className={selectedNumber === num ? styles.selected : ""}
//               >
//                 {num}
//               </li>
//             ))}
//           </ul>

//           <p>Select Number</p>
//         </div>
//       </div>

//       <div className={styles.dice_wrap}>
//         <div className={styles.img_wrap}>
//           <img
//             src={diceImages[currentDice - 1]}
//             alt={`Dice side ${currentDice}`}
//             className={isRolling ? styles.rolling : ""}
//             onClick={handleDiceClick}
//           />

//           <p>Click on Dice to roll</p>
//         </div>

//         <div className={styles.button_wrap}>
//           <button
//             className="outline_button primary_button"
//             onClick={handleResetScore}
//           >
//             Reset Score
//           </button>

//           <button
//             className="primary_button alter_padding"
//             onClick={handleShowRules}
//           >
//             Show Rules
//           </button>
//         </div>
//       </div>

//       {showRules && (
//         <div className={styles.rules_wrap}>
//           <p>How to play dice game</p>

//           <ul>
//             <li>Select any number</li>
//             <li>Click on dice image</li>
//             <li>
//               After clicking on the dice, if the selected number matches the
//               dice number, you will get the same points as the dice
//             </li>
//             <li>If you guess wrong, 2 points will be deducted</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default GamePage;

import { useState } from "react";
import styles from "./GamePage.module.scss";

function GamePage() {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [initialScore, setInitialScore] = useState(0); // Store the initial score
  const [showRules, setShowRules] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentDice, setCurrentDice] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [totalScore, setTotalScore] = useState(null); // State for total score, initialized as null

  const diceImages = [
    "Images/dice_1.svg",
    "Images/dice_2.svg",
    "Images/dice_3.svg",
    "Images/dice_4.svg",
    "Images/dice_5.svg",
    "Images/dice_6.svg",
  ];

  const handleNumberClick = (number) => {
    setSelectedNumber(number);
    setInitialScore(number); // Store the selected number as the initial score
    setTotalScore(null); // Reset total score when a new number is selected
    setErrorMessage(""); // Clear the error message when a number is selected
  };

  const handleShowRules = () => {
    setShowRules(!showRules);
  };

  const handleResetScore = () => {
    setSelectedNumber(0);
    setInitialScore(0); // Reset the initial score
    setTotalScore(null); // Reset the total score
    setErrorMessage(""); // Clear the error message when a number is selected
  };

  const handleDiceClick = () => {
    if (selectedNumber === 0) {
      setErrorMessage("*You have not selected any number");
    } else {
      setErrorMessage(""); // Clear the error message if the dice is clicked with a number selected
      setIsRolling(true);

      // Simulate dice roll with a timeout
      setTimeout(() => {
        const randomSide = Math.floor(Math.random() * 6) + 1;
        setCurrentDice(randomSide);
        setIsRolling(false);

        // Update the score based on the dice roll
        if (selectedNumber === randomSide) {
          setTotalScore(initialScore + randomSide); // Add initial score and dice number to get total score
        } else {
          setTotalScore(initialScore - 2); // Deduct 2 points from the initial score if the guess was wrong
        }
      }, 1000); // Dice rolls for 1 second
    }
  };

  return (
    <div className={styles.game_page_container}>
      <div className={styles.select_boxes}>
        <div className={styles.display_num}>
          <h1>{totalScore !== null ? totalScore : initialScore}</h1>{" "}
          {/* Show totalScore if available, otherwise show initialScore */}
          <p>{totalScore !== null ? "Total Score" : "Initial Score"}</p>{" "}
          {/* Show label based on the score state */}
        </div>

        <div className={styles.num_boxes}>
          {errorMessage && (
            <div className={styles.error_message}>
              <p>{errorMessage}</p>
            </div>
          )}

          <ul>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <li
                key={num}
                onClick={() => handleNumberClick(num)}
                className={selectedNumber === num ? styles.selected : ""}
              >
                {num}
              </li>
            ))}
          </ul>

          <p>Select Number</p>
        </div>
      </div>

      <div className={styles.dice_wrap}>
        <div className={styles.img_wrap}>
          <img
            src={diceImages[currentDice - 1]}
            alt={`Dice side ${currentDice}`}
            className={isRolling ? styles.rolling : ""}
            onClick={handleDiceClick}
          />

          <p>Click on Dice to roll</p>
        </div>

        <div className={styles.button_wrap}>
          <button
            className="outline_button primary_button"
            onClick={handleResetScore}
          >
            Reset Score
          </button>

          <button
            className="primary_button alter_padding"
            onClick={handleShowRules}
          >
            Show Rules
          </button>
        </div>
      </div>

      {showRules && (
        <div className={styles.rules_wrap}>
          <p>How to play dice game</p>

          <ul>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>
              After clicking on the dice, if the selected number matches the
              dice number, your total score will be the sum of your initial
              score and the dice number.
            </li>
            <li>
              If your guess is wrong, 2 points will be deducted from your
              initial score.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default GamePage;
