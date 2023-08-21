import React from "react";
import styles from "./Project.module.css";
const Project = ({ src, desc, link, index, name }) => {
  const isEven = index % 2 === 0;
  // if (!isEven) {
  //   return (
  //     <div className={styles.project}>
  //       <div className={styles.info}>
  //         <div>{name}</div>
  //         <br />
  //         <div>{link && <a href={link}>See here</a>}</div>
  //       </div>

  //       <img className={styles.img} src={src} alt="" />
  //     </div>
  //   );
  // }
  return (
    <div className={styles.project}>
      <div className={styles.imgInfo}>
        <img className={styles.img} src={src} alt="" />
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <br />
          <div>{desc}</div> <br />
          <div>{link && <a href={link}>See here</a>}</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
