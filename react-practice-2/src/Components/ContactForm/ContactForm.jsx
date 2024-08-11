import styles from "./ContactForm.module.scss";
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "" });

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleName = (e) => {
    const value = e.target.value;
    setName(value);
    if (!validateName(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name should only contain letters and spaces.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateName(name)) {
      alert("Invalid name. Please enter a valid name.");
      return;
    }
    if (!validateEmail(email)) {
      alert("Invalid email. Please enter a valid email.");
      return;
    }
    alert(`${name}, your comment is submitted. Thank you!`);
  };

  return (
    <div className={styles.contact_form_wrap}>
      <div className={styles.form_wrap}>
        <div className={styles.button_wrap}>
          <span>
            <button className={styles.primary_button}>
              <img src="Images/message-icon.svg" alt="message icon" /> VIA
              SUPPORT CHAT
            </button>

            <button
              className={`${styles.primary_button} ${styles.alter_padding}`}
            >
              <img src="Images/phone-icon.svg" alt="phone icon" /> VIA CALL
            </button>
          </span>

          <button
            className={`${styles.primary_button} ${styles.outline_button}`}
          >
            <img src="Images/message-icon-black.svg" alt="black message icon" />{" "}
            VIA EMAIL FORM
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleName}
              required
            />
            {errors.name && <p className={styles.error}>*{errors.name}</p>}
          </div>

          <div className={styles.form_group}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleEmail}
              required
            />
            {errors.email && <p className={styles.error}>*{errors.email}</p>}
          </div>

          <div className={styles.form_group}>
            <label htmlFor="comment">Comment</label>
            <textarea
              name="comment"
              id="comment"
              value={comment}
              onChange={handleComment}
              required
            ></textarea>
          </div>

          <div className={styles.submit}>
            <input
              type="submit"
              className={`${styles.primary_button} ${styles.extra_alter_padding}`}
            />
          </div>
        </form>
      </div>

      <div className={styles.form_img}>
        <img src="Images/contact-img.svg" alt="contact form image" />
      </div>
    </div>
  );
}

export default ContactForm;
