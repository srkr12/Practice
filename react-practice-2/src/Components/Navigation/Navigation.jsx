import styles from "./Navigation.module.scss";

function Navigation() {
  return (
    <nav className={styles.nav_bar}>
      <img src="Images/logo.png" alt="logo icon" />

      <ul>
        <li href="#">Home</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;
