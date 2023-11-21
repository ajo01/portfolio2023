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
            I'm Amy, a senior student pursuing Computer Science at the
            University of British Columbia based in Vancouver, Canada. Skilled
            in frontend and web development, I have designed cutting-edge
            libraries, high performance user interfaces, and pixel-perfect
            landing pages. I am also experienced in data processing and creating
            interactive data visualization.
          </div>
          <br />
          <div className={styles.text}>
            I have a passion for engineering seamless digital experiences and
            enjoy experimenting with what is possible on the web.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
