import React from "react";
import styles from "./Menu.module.css";

const Menu = ({ setSelectedProject, projectList }) => {
  const MenuItem = ({ src, desc, link, name, tags, year, index, onClick }) => (
    <div className={styles.item} onClick={() => onClick(index)}>
      {name}
    </div>
  );

  return (
    <div className={styles.menuSection}>
      <div className={styles.title}>Projects</div>
      <div className={styles.menu}>
        {projectList.map((project, i) => (
          <MenuItem
            key={i}
            name={project.name}
            src={project.src}
            desc={project.description}
            link={project.link}
            index={i}
            tags={project.tags}
            year={project.year}
            onClick={setSelectedProject}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
