import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div id="about" className={styles.ref}></div>
      <div className="subtitle"> About</div>
      <div className="component-text">
        I'm a senior Computer Science student at the University of British
        Columbia with 16 months of industry experience in fullstack web
        development, R&D, and API design. I have a passion for crafting
        interactive and immersive digital experiences, and have worked with
        various technologies including MERN stack, TypeScript, Next.js, Python,
        Java, Tailwind, Webpack, Babel, D3.js, Three.js, Adobe Suite, Docker and
        Firebase. Previous experience includes delivering major features at
        Jostle, as well as researching and developing cutting-edge document
        processing technologies at Apryse.
      </div>
      {/* <div className={styles.luminaireContainer}>
        <div className={styles.luminaire} />
      </div> */}
    </div>
  );
};

export default About;
