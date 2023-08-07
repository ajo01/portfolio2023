import React from "react";
import Project from "./Project";

import styles from "./Project.module.css";
import gpt from "../../assets/gpt1.gif";
import apryse from "../../assets/apryse.gif";
import web from "../../assets/webviewer.gif";
import canvas from "../../assets/canvas.png";
import cosedit from "../../assets/cosedit.png";

const Projects = () => {
  const projectList = [
    {
      name: "Apryse Landing Page",
      description:
        "Engineered Apryse's new landing page for their 2023 rebranding event",
      src: apryse,
      link: "https://apryse.com/",
    },
    {
      name: "WebViewer",
      description:
        "Developed customized PDF digital signatures feature for the company's flagship product, Webviewer, an industry-leading document processing SDK",
      src: web,
      link: "https://showcase.apryse.com/?share=facebook",
    },
    {
      name: "CourseGPT",
      description:
        "An educational chat interface for students to ask questions related to course content and be provided with accurate and in-depth answers through OpenAI’s custom GPT–4 models. Features user customizable machine learning models, sentiment analytics visualization dashboard, global search, hotkeys, google auth integration, profile customization, and protection against prompt injections",
      src: gpt,
      //   link: "https://course-gpt.herokuapp.com/",
    },
    {
      name: "CanvasToPDF",
      description:
        "An npm library for exporting vector-quality PDFs using the Canvas API",
      src: canvas,
      link: "https://npmjs.com/package/@pdftron/canvas-to-pdf",
    },

    {
      name: "Web Cosedit",
      description:
        "A powerful PDF editor from scratch that parses native document data to enable editing for all low-level object types. Capable of stream manipulation, embedded image extraction, editing document security settings, real-time PDF preview, etc. Highly scalable and works with thousand-paged documents",
      src: cosedit,
      link: "https://cosedit.com/",
    },
  ];

  return (
    <div className={styles.projectsContainer}>
      <div id="projects" className={styles.ref}></div>
      <div className="subtitle" style={{ paddingLeft: 200, paddingBottom: 50 }}>
        Projects
      </div>
      <div className={styles.center}>
        <div className={styles.star} />
        <div className={styles.star} />
        <div className={styles.star} />
        <div className={styles.star} />
        <div className={styles.star} />
        <div className={styles.star} />
        <div className={styles.star} />
        <div className={styles.star} />
      </div>
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
