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
            I'm a senior Computer Science student at the University of British
            Columbia in Vancouver. I have a combined 16 months of industry
            experience in fullstack web development, R&D, and API design. I have
            a passion for crafting interactive and immersive digital
            experiences, and have worked with various technologies such as MERN
            stack, TypeScript, Next.js, Python, Java, Tailwind, Styled
            Components, Framer Motion, MaterialUI, Webpack, Babel, D3.js, Adobe
            Suite, and Docker. Previous experience includes designing major
            features at Jostle, as well as researching and developing
            cutting-edge document processing technologies at Apryse.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
