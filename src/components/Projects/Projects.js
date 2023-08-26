import React from "react";
import Project from "./Project";

import styles from "./Project.module.css";
import gpt from "../../assets/gpt2.png";
import apryse from "../../assets/apryse1.jpeg";
import web from "../../assets/webviewer-ui.png";
import canvas from "../../assets/canvas.png";
import cosedit from "../../assets/cosedit.png";
import aurora from "../../assets/aurora.png";
import qr from "../../assets/qr2.png";

const Projects = () => {
  const projectList = [
    {
      name: "Apryse",
      description: "Corporate Landing Page",
      src: apryse,
      link: "https://apryse.com/",
      tags: ["TypeScript", "Next.js", "TailwindCSS", "Sanity"],
    },
    {
      name: "WebViewer",
      description: "Corporate Flagship Product",
      src: web,
      link: "https://showcase.apryse.com/?share=facebook",
      tags: ["JavaScript", "React", "Firebase"],
    },
    {
      name: "CourseGPT",
      description: "Educational Chat Interface",
      src: gpt,
      link: "https://course-gpt.herokuapp.com/",
      tags: ["MERN", "OpenAI", "D3.js", "FramerMotion", "Tensorflow"],
    },
    {
      name: "Web Cosedit",
      description: "Object-Level PDF Editor",
      src: cosedit,
      link: "https://cosedit.com/",
      tags: ["React", "JavaScript", "MaterialUI", "PDFNet"],
    },
    {
      name: "QR Scanner",
      description: "Internal Progressive Web App",
      src: qr,
      link: "",
      tags: ["TypeScript", "Firebase"],
    },
    {
      name: "CanvasToPDF",
      description: "Vector Appearances Library",
      src: canvas,
      link: "https://npmjs.com/package/@pdftron/canvas-to-pdf",
      tags: ["JavaScript", "npm"],
    },
    {
      name: "Aurora",
      description: "UI Component Library",
      src: aurora,
      link: "https://www.npmjs.com/package/@nwplusdev/aurora",
      tags: ["React", "Styled Components", "Storybook"],
    },
  ];

  return (
    <div className={styles.projectsContainer}>
      <div id="projects" className={styles.ref}></div>
      <div className="subtitle">Projects</div>
      <div className={styles.projectList}>
        {projectList.map((project, i) => (
          <Project
            key={i}
            name={project.name}
            src={project.src}
            desc={project.description}
            link={project.link}
            index={i}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
