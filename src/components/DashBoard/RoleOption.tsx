import React from "react";
import styles from "./RoleOption.module.css";
import { Role } from "../types/RoleTypes";

interface RoleOptionProps {
  title: string;
  isActive: boolean;
  role: Role;
  onSelect: (role: Role) => void;
}

export const RoleOption: React.FC<RoleOptionProps> = ({
  title,
  isActive,
  role,
  onSelect,
}) => (
  <button
    className={`${styles.roleOption} ${isActive ? styles.active : ""}`}
    onClick={() => onSelect(role)}
    aria-pressed={isActive}
    aria-label={`Select ${title} role`}
  >
    <div className={styles.roleTitle}>{title}</div>
  </button>
);
