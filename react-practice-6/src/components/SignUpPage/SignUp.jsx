import React from "react";
import styles from "./SignUp.module.scss";

function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.form_heading}>
          <h1>Welcome to Crypto App</h1>
          <p className="grey">Create a free account by filling data below.</p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
