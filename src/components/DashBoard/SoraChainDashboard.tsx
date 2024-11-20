import React from "react";
import { useState, useEffect, useContext } from "react";
import styles from "./SoraChainDashboard.module.css";
import { NavLink } from "./NavLink";
import { RoleOption } from "./RoleOption";
import { RolePanel } from "./RolePanel";
import { useRole } from "../hooks/useRole";
import { Role, RoleData } from "../types/RoleTypes";
import { AccountContext } from "../../Contexts/AccountContext";

const navItems = [
  { text: "Home", width: "38px" },
  { text: "Create", width: "45px" },
  { text: "Tasks", width: "38px" },
  { text: "Leaderboard", width: "87px" },
];

const roleOptions: (RoleData & { role: Role })[] = [
  {
    title: "Task Creator",
    width: "85px",
    role: "taskCreator",
    content: "Task Creator content",
  },
  {
    title: "Aggregator/Validator",
    width: "143px",
    role: "aggregator",
    content: "Aggregator content",
  },
  {
    title: "Trainer",
    width: "47px",
    role: "trainer",
    content: "Trainer content",
  },
];

export const SoraChainDashboard: React.FC = () => {
  const { activeRole, handleRoleChange } = useRole();
  const [currentAddress, setCurrentAddress] = useState<string | null>(null);
  const context = useContext(AccountContext);

  useEffect(() => {
    const data = context?.accountAddress;
    setCurrentAddress(data);
  });
  return (
    <div className={styles.container}>
      <header className={styles.header} role="banner">
        <div className={styles.logoSection}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/ae1a574c40cc467faaa61354a5b36b7e/d1b3f2a77b4234f1d411faf80f19c7b260f1de2798b2578a476dffad6dfba351?apiKey=ae1a574c40cc467faaa61354a5b36b7e&"
            className={styles.logo}
            alt="SoraChain AI Logo"
          />
          <h1 className={styles.brandName}>SoraChain AI</h1>
        </div>

        <nav className={styles.navigation} role="navigation">
          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <NavLink key={item.text} text={item.text} />
            ))}
          </div>
          <span
            className={styles.connectWallet}
            aria-label={context?.accountAddress}
          >
            {currentAddress}
          </span>
        </nav>
      </header>

      <main className={styles.mainContent} role="main">
        <section className={styles.welcomeSection}>
          <h2 className={styles.welcomeTitle}>Welcome to SoraChain AI</h2>

          <nav
            className={styles.roleNavigation}
            role="navigation"
            aria-label="Role selection"
          >
            {roleOptions.map((role) => (
              <RoleOption
                key={role.title}
                title={role.title}
                role={role.role}
                isActive={activeRole === role.role}
                onSelect={handleRoleChange}
              />
            ))}
          </nav>

          <p className={styles.instructions}>
            Choose your role, connect your wallet and get started.
          </p>

          {activeRole && <RolePanel role={activeRole} />}

          {activeRole && (
            <button
              className={styles.continueButton}
              aria-label={`Continue as ${activeRole}`}
            >
              Continue as{" "}
              {roleOptions.find((r) => r.role === activeRole)?.title}
            </button>
          )}
        </section>
      </main>
    </div>
  );
};
