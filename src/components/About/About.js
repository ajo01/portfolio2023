import React from "react";
import styles from "./About.module.css";
import Aurora from "../Aurora/Aurora";
import Menu from "../Menu";

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <Aurora />
      <div className="auroraWrapper" />
      <div className={styles.about}>
        <div className={styles.container}>
          <div id="about" className={styles.ref}></div>

          <div className={styles.title}>Welcome</div>
          <div className={styles.text}>
            I'm Amy, a senior student pursuing Computer Science at the
            University of British Columbia based in Vancouver, Canada. I am
            experienced in frontend and fullstack development, having previously
            designed high performance user interfaces and pixel-perfect landing
            pages.
          </div>
          <br />
          <div className={styles.text}>
            I have a passion for creating cutting-edge digital experiences that
            are interactive and immersive, and I enjoy experimenting with what
            is possible on the web.
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default About;
