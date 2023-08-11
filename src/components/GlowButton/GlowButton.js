import React from "react";
import styles from "./GlowButton.module.css";

const GlowButton = ({
  handleClick,
  isDisabled = false,
  disabledStyle,
  text,
  style,
}) => {
  const getStyles = () => {
    if (isDisabled) {
      return { ...style, ...disabledStyle };
    }
    return style;
  };

  return (
    <button
      className={styles.glowingBtn}
      onClick={(e) => handleClick(e)}
      disabled={isDisabled}
      style={getStyles()}
    >
      <span className={styles.glowingTxt}>{text}</span>
    </button>
  );
};

export default GlowButton;
