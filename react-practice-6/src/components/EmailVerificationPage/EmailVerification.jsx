import React from "react";
import styles from "./EmailVerification.module.scss";

function EmailVerification() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.email_container}>
          <img src="../images/email-icon.svg" alt="mail icon" />

          <div className={styles.text_button_wrap}>
            <div className={styles.text}>
              <h3>Email Verification</h3>
              <p className="grey">
                We have sent you an email verification to{" "}
                <span>jenny.wilson@gmail.com.</span> If you didn’t receive it,
                click the button below.
              </p>
            </div>

            <button>Re-Send Email</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
