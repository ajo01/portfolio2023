import React from "react";
import styles from "./Project.module.css";
const Project = ({ src, desc, link, index }) => {
  const isEven = index % 2 === 0;
  if (!isEven) {
    return (
      <div className={styles.project}>
        <div className={styles.info}>
          <div>{desc}</div>
          <br />
          <div>
            <a href={link}>See here</a>
          </div>
        </div>

        <img
          className={styles.img}
          src={src}
          alt=""
          style={index === 3 ? { position: "absolute", right: 0 } : null}
        />
      </div>
    );
  }
  return (
    <div className={styles.project}>
      <img className={styles.img} src={src} alt="" />
      <div className={styles.info}>
        <div>{desc}</div>
        <br />
        <div>
          <a href={link}>See here</a>
        </div>
      </div>
    </div>
  );
};

export default Project;