import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import styles from "./ForgotPassword.module.scss";

function ForgotPassword() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.form_container}>
          <div className={styles.form_heading}>
            <Link to="/sign-in">
              <img src="./images/back-icon.png" alt="back icon" />
            </Link>

            <div className={styles.heading}>
              <h1>Forgot Password</h1>
              <p className="grey">
                Enter your email address for which account you want to reset
                your password.
              </p>
            </div>
          </div>

          <form className={styles.form_content}>
            <div className={styles.form_items}>
              <label htmlFor="email">Email</label>

              <input type="text" name="email" id="email" />
            </div>

            <button>Reset Password</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
