import React from "react";
import styles from "./GlowButton.module.css";

const GlowButton = ({ handleClick, isDisabled = false, style, text }) => {
  return (
    <button
      className={styles.glowingBtn}
      onClick={(e) => handleClick}
      disabled={isDisabled}
      style={isDisabled ? null : style}
    >
      <span className={styles.glowingTxt}>{text}</span>
    </button>
  );
};

export default GlowButton;
