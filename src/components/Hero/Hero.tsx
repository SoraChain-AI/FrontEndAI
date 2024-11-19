import React from "react";
import styles from "./Hero.module.css";

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/ae1a574c40cc467faaa61354a5b36b7e/9978017b1f9088ccd006ff9a42e67c0103f74fab7c5d9d0f0c28fbf0b8b95fd3?apiKey=ae1a574c40cc467faaa61354a5b36b7e&"
        alt="Sorachain AI platform visualization"
        className={styles.heroImage}
      />

      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Sorachain AI</h1>
        <p className={styles.description}>
          Start creating, validating, and training with your MetaMask wallet. No
          account required.
        </p>
        <button
          className={styles.connectButton}
          type="button"
          onClick={() => {
            /* Wallet connect logic */
          }}
        >
          Connect Wallet
        </button>
      </div>
    </section>
  );
};
