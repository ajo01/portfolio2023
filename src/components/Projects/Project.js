import React from "react";
import styles from "./Project.module.css";
const Project = ({ src, desc, link, name, tags, year }) => {
  return (
    <div className={styles.project}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={src} alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>

        <div className={styles.descContainer}>
          <div>{desc}</div>
          <div className={styles.year}>{year}</div>
        </div>
        {link && <a href={link}>See here</a>}
      </div>
    </div>
  );
};

export default Project;
