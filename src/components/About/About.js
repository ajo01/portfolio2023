import React from "react";
import styles from "./About.module.css";
import Aurora from "../Aurora/Aurora";

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <Aurora />
      <div className="auroraWrapper" />
      <div className={styles.about}>
        <div className={styles.container}>
          <div id="about" className={styles.ref}></div>

          <div className="subtitle">About</div>
          <div className={styles.text}>
            I'm a senior student pursuing Computer Science at the University of
            British Columbia in Vancouver. I have a combined 16 months of
            industry experience in fullstack web development at Jostle and
            Apryse. My work experience encompasses researching and developing
            technologies, building internal tools, API design, publishing npm
            libraries, and crafting pixel perfect corporate landing pages. I
            have a passion for creating digital experiences that are interactive
            and immersive, and I take pleasure in experimenting with what is
            possible on the web.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
