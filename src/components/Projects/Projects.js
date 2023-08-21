import React from "react";
import Project from "./Project";

import styles from "./Project.module.css";
import gpt from "../../assets/gpt2.png";
import apryse from "../../assets/apryse1.jpeg";
import web from "../../assets/webviewer-ui.png";
import canvas from "../../assets/canvas.png";
import cosedit from "../../assets/cosedit.png";

const Projects = () => {
  const projectList = [
    {
      name: "Apryse",
      description: "Corporate Landing Page",
      src: apryse,
      link: "https://apryse.com/",
    },
    {
      name: "WebViewer",
      description: "Corporate Flagship Product",
      src: web,
      link: "https://showcase.apryse.com/?share=facebook",
    },
    {
      name: "CourseGPT",
      description: "Educational Chat Interface",
      src: gpt,
      link: "https://course-gpt.herokuapp.com/",
    },
    {
      name: "CanvasToPDF",
      description: "Npm Library",
      src: canvas,
      link: "https://npmjs.com/package/@pdftron/canvas-to-pdf",
    },

    {
      name: "Web Cosedit",
      description: "PDF editor",
      src: cosedit,
      link: "https://cosedit.com/",
    },
  ];

  return (
    <div className={styles.projectsContainer}>
      <div id="projects" className={styles.ref}></div>
      <div className={styles.subtitle}>Projects</div>
      <div className={styles.projectList}>
        {projectList.map((project, i) => (
          <Project
            key={i}
            name={project.name}
            src={project.src}
            desc={project.description}
            link={project.link}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
