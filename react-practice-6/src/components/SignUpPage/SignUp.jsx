import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import styles from "./SignUp.module.scss";

function SignUp() {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Check if email or password is empty
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    if (!password) {
      alert("Please enter your password.");
      return;
    }

    // Check if passwords match
    if (password !== repeatPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Proceed with form submission if all validations pass
    alert("Form submitted successfully!");
    console.log("Form submitted with:", { name, surName, email, password });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.form_heading}>
          <h1>Welcome to Crypto App</h1>
          <p className="grey">Create a free account by filling data below.</p>
        </div>

        <form className={styles.form_content} onSubmit={handleSubmit}>
          <div className={styles.name}>
            <div className={styles.form_items}>
              <label htmlFor="name">Name</label>

              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            <div className={styles.form_items}>
              <label htmlFor="name">Surname</label>

              <input
                type="text"
                name="surname"
                id="surname"
                value={surName}
                onChange={(e) => setSurName(e.target.value)}
                placeholder="Enter your surname"
              />
            </div>
          </div>

          <div className={styles.form_items}>
            <label htmlFor="email">
              Email<span className="red">*</span>
            </label>

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
            <label htmlFor="password">
              Password<span className="red">*</span>
            </label>

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.form_items}>
            <label htmlFor="password">Repeat Password</label>

            <input
              type="password"
              name="repeatPassword"
              id="repeatPassword"
              placeholder="Enter your password again"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" name="term" id="term" />
            <label htmlFor="term">
              I agree with <span className="red">Terms & Conditions.</span>
            </label>
          </div>

          <button type="submit">Create New Account</button>

          <span className="grey">
            Already have an account? {""}
            <Link to="/sign-in" className="red">
              Sign In
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
