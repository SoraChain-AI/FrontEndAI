import React from 'react';
import styles from './NavLink.module.css';

interface NavLinkProps {
  text: string;
  isActive?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ text, isActive = false }) => (
  <div className={`${styles.navLink} ${isActive ? styles.active : ''}`}>
    {text}
  </div>
);