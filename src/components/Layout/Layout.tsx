import React from "react";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoIcon} />
          <div className={styles.logoText}>Sorachain AI</div>
        </div>

        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList}>
            <li>
              <a href="/" className={styles.navLink}>
                Home
              </a>
            </li>
            <li>
              <a href="/docs" className={styles.navLink}>
                Docs
              </a>
            </li>
            <li>
              <a href="/tasks" className={styles.navLink}>
                Tasks
              </a>
            </li>
            <li>
              <a href="/teams" className={styles.navLink}>
                Teams
              </a>
            </li>
            <li>
              <a href="/funding" className={styles.navLink}>
                Funding
              </a>
            </li>
          </ul>

          <button className={styles.createButton} type="button">
            Create Task
          </button>

          <img
            src="https://cdn.builder.io/api/v1/image/assets/ae1a574c40cc467faaa61354a5b36b7e/3823a58a8650cf910c59e31e635c0477c4b7d9bea21a1acf524877273ea0dc21?apiKey=ae1a574c40cc467faaa61354a5b36b7e&"
            alt="User avatar"
            className={styles.userAvatar}
          />
        </nav>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="/privacy" className={styles.footerLink}>
            Privacy Policy
          </a>
          <a href="/terms" className={styles.footerLink}>
            Terms of Service
          </a>
        </div>
        <p className={styles.copyright}>©2024 Sorachain, Inc.</p>
      </footer>
    </>
  );
};
