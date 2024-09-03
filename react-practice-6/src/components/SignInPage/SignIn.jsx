import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import styles from "./SignIn.module.scss";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeButton, setActiveButton] = useState("signIn");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Handle the form data here (e.g., authentication logic)
    console.log("Form submitted with:", { email, password });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.form_heading}>
          <h1>Welcome to Crypto App</h1>
          <p className="grey">Create a free account by filling data below.</p>
        </div>

        {/* Update the form tag to use onSubmit instead of action */}
        <form className={styles.form_content} onSubmit={handleSubmit}>
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

            {/* Use Link for Forgot Password */}
            <Link to="/forgot-password" className="red cp">
              Forgot Password?
            </Link>
          </div>

          <div className={styles.button_wrap}>
            {/* Button will submit the form, calling handleSubmit */}
            <button
              type="submit"
              className={activeButton === "signIn" ? `${styles.active}` : ""}
              onClick={() => setActiveButton("signIn")}
            >
              Sign In
            </button>

            {/* Use Link for Create New Account */}
            <button
              type="button" // Change to type="button" to prevent form submission
              className={
                activeButton === "createAccount" ? `${styles.active}` : ""
              }
              onClick={() => setActiveButton("createAccount")}
            >
              <Link to="/sign-up">Create New Account</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
