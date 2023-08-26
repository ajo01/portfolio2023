import React from "react";
import styles from "./Project.module.css";
import Tag from "../atoms/Tag";
const Project = ({ src, desc, link, name, tags }) => {
  return (
    <div className={styles.project}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={src} alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>

        <div className={styles.desc}>{desc}</div>
        <div className={styles.tags}>
          {tags.map((text, i) => (
            <Tag key={i} text={text} />
          ))}
        </div>
        {link && <a href={link}>See here</a>}
      </div>
    </div>
  );
};

export default Project;
