import React from "react";
import styles from "./Tag.module.css";
import theme from "../../../styles/colors";

const Tag = ({ text }) => {
  const getColor = (text) => {
    if (text === "JavaScript") {
      return theme.tags.yellow;
    } else if (text === "TypeScript") {
      return theme.tags.blue;
    } else if (text === "React") {
      return theme.tags.lightBlue;
    } else if (text === "ChakraUI") {
      return theme.tags.green;
    } else if (text === "Styled Components") {
      return theme.tags.purple;
    } else if (text === "Tensorflow") {
      return theme.tags.purple;
    } else if (text === "Next.js") {
      return theme.tags.indigo;
    } else if (text === "MaterialUI") {
      return theme.tags.purple;
    } else if (text === "PDFNet") {
      return theme.tags.blue;
    } else if (text === "Storybook") {
      return theme.tags.pink;
    } else if (text === "npm") {
      return theme.tags.red;
    } else if (text === "Firebase") {
      return theme.tags.orange;
    } else if (text === "D3.js") {
      return theme.tags.orange;
    } else if (text === "OpenAI") {
      return theme.tags.grey;
    } else if (text === "Sanity") {
      return theme.tags.peach;
    } else if (text === "TailwindCSS") {
      return theme.tags.lightBlue;
    } else if (text === "FramerMotion") {
      return theme.tags.pink;
    }
    return "white";
  };
  return (
    <div className={styles.tag} style={{ backgroundColor: getColor(text) }}>
      {text}
    </div>
  );
};

export default Tag;
