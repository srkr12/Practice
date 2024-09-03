import React from "react";
import { useState } from "react";
import styles from "./SignIn.module.scss";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeButton, setActiveButton] = useState("signIn");

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.form_heading}>
          <h1>Welcome to Crypto App</h1>
          <p className="grey">Create a free account by filling data below.</p>
        </div>

        <form className={styles.form_content} action="submit">
          <div className={styles.form_items}>
            <label htmlFor="email">Email</label>

            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.form_items}>
            <label htmlFor="password">Password</label>

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.checkbox_items}>
            <div className={styles.checkbox}>
              <input type="checkbox" name="user" id="user" />
              <label htmlFor="user">Remember Me</label>
            </div>

            <p className="red cp">Forgot Password?</p>
          </div>

          <div className={styles.button_wrap}>
            <button
              className={activeButton === "signIn" ? `${styles.active}` : ""}
              onClick={() => setActiveButton("signIn")}
            >
              Sign In
            </button>

            <button
              className={
                activeButton === "createAccount" ? `${styles.active}` : ""
              }
              onClick={() => setActiveButton("createAccount")}
            >
              Create New Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
