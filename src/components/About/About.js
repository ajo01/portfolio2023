import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className="subtitle"> About</div>
      <div className="component-text">
        I'm a 4th year Computer Science student at the University of British
        Columbia with 16 months of industry experience in fullstack, web
        development, and API design. I have a passion for creating interactive
        and immersive digital experiences and have worked with technologies such
        as MERN, TypeScript, Next.js, Python, Java, Tailwind, Webpack, D3.js,
        Three.js, Docker, and Firebase. Previous experience includes shipping
        major features at Jostle, as well as researching and developing
        cutting-edge document processing technologies at Apryse.
      </div>
      <div className={styles.luminaireContainer}>
        <div className={styles.luminaire} />
      </div>
    </div>
  );
};

export default About;
