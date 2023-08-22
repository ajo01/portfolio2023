import React from "react";
import styles from "./Project.module.css";
const Project = ({ src, desc, link, index, name }) => {
  return (
    <div className={styles.project}>
      <div className={styles.imgInfo}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={src} alt="" />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>

          <div className={styles.desc}>{desc}</div>
          <div>{link && <a href={link}>See here</a>}</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
