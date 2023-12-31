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
import scatter from "../../assets/scatter.png";

const Projects = () => {
  const projectList = [
    // Data Visualization Scrolly Telling App
    {
      name: "Loneliness: A Data Visualization Story",
      description: "Coming soon",
      src: scatter,
      link: "",
      tags: ["JavaScript", "D3.js", "React"],
      year: 2023,
    },
    {
      name: "Apryse",
      description: "Corporate Landing Page",
      src: apryse,
      link: "https://apryse.com/",
      tags: ["TypeScript", "Next.js", "TailwindCSS", "Sanity"],
      year: 2022,
    },
    {
      name: "WebViewer",
      description: "Company Flagship Product",
      src: web,
      link: "https://showcase.apryse.com/?share=facebook",
      tags: ["JavaScript", "React", "Firebase"],
      year: 2022,
    },
    {
      name: "CourseGPT",
      description: "Educational Chat Interface",
      src: gpt,
      link: "https://course-gpt.herokuapp.com/",
      tags: ["MERN", "OpenAI", "D3.js", "FramerMotion", "Tensorflow"],
      year: 2023,
    },
    {
      name: "Web Cosedit",
      description: "Object-Level PDF Editor",
      src: cosedit,
      link: "https://cosedit.com/",
      tags: ["React", "JavaScript", "MaterialUI", "PDFNet"],
      year: 2022,
    },
    {
      name: "CanvasToPDF",
      description: "Vector Graphics Library",
      src: canvas,
      link: "https://npmjs.com/package/@pdftron/canvas-to-pdf",
      tags: ["JavaScript", "npm", "Webpack"],
      year: 2022,
    },
    {
      name: "Aurora",
      description: "UI Component Library",
      src: aurora,
      link: "https://www.npmjs.com/package/@nwplusdev/aurora",
      tags: ["React", "Styled Components", "Storybook", "npm"],
      year: 2022,
    },
    {
      name: "QR Scanner",
      description: "Internal Progressive Web App",
      src: qr,
      link: "",
      tags: ["TypeScript", "Firebase"],
      year: 2022,
    },
  ];

  return (
    <div className={styles.projectsWrapper}>
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
              year={project.year}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
