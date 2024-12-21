import React from "react";
import styles from "./Button.module.css";

const HamburgerButton: React.FC<{ label: string }> = ({ label }) => {
  return (
    <button className={`${styles.edit}`}>
      {label}
    </button>
  );
};

export default HamburgerButton;
