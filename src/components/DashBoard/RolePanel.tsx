import React from "react";
import styles from "./RolePanel.module.css";
import { Role } from "../types/RoleTypes";

interface RolePanelProps {
  role: Role;
}

const roleContent = {
  taskCreator: (
    <div className={styles.panelContent}>
      <h3>Task Creator Panel</h3>
      <ul>
        <li>Create new AI training tasks</li>
        <li>Set task parameters and rewards</li>
        <li>Monitor task progress</li>
      </ul>
    </div>
  ),
  aggregator: (
    <div className={styles.panelContent}>
      <h3>Aggregator Panel</h3>
      <ul>
        <li>Validate training results</li>
        <li>Aggregate model updates</li>
        <li>Distribute rewards</li>
      </ul>
    </div>
  ),
  trainer: (
    <div className={styles.panelContent}>
      <h3>Trainer Panel</h3>
      <ul>
        <li>Browse available tasks</li>
        <li>Train AI models</li>
        <li>Submit results</li>
      </ul>
    </div>
  ),
};

export const RolePanel: React.FC<RolePanelProps> = ({ role }) => {
  return (
    <section
      className={styles.rolePanel}
      role="region"
      aria-label={`${role} panel content`}
    >
      {roleContent[role]}
    </section>
  );
};
