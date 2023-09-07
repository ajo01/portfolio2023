import React, { useState } from "react";
import styles from "./About.module.css";
import Aurora from "../Aurora/Aurora";
import Menu from "../Menu";

import gpt from "../../assets/gpt2.png";
import apryse from "../../assets/apryse1.jpeg";
import web from "../../assets/webviewer-ui.png";
import canvas from "../../assets/canvas.png";
import cosedit from "../../assets/cosedit.png";
import aurora from "../../assets/aurora.png";
import qr from "../../assets/qr2.png";
import Tag from "../atoms/Tag";

const projectList = [
  {
    name: "Apryse",
    subtitle: "Corporate Landing Page",
    src: apryse,
    link: "https://apryse.com/",
    description:
      "Engineered Apryse's new landing page for their 2023 rebranding event",
    tags: ["TypeScript", "Next.js", "TailwindCSS", "Sanity"],
    year: 2022,
  },
  {
    name: "WebViewer",
    subtitle: "Company Flagship Product",
    description:
      "Developed customized PDF digital signatures feature for the company's flagship product, an industry-leading document processing SDK",

    src: web,
    link: "https://showcase.apryse.com/?share=facebook",
    tags: ["JavaScript", "React", "Firebase"],
    year: 2022,
  },
  {
    name: "CourseGPT",
    subtitle: "Educational Chat Interface",
    description:
      "An educational chat interface for students to ask questions related to course content and be provided with accurate and in-depth answers through OpenAI’s custom GPT–4 models",

    src: gpt,
    link: "https://course-gpt.herokuapp.com/",
    tags: ["MERN", "OpenAI", "D3.js", "FramerMotion", "Tensorflow"],
    year: 2023,
  },
  {
    name: "Web Cosedit",
    subtitle: "Object-Level PDF Editor",
    description:
      "A powerful PDF editor from scratch that parses native document data to enable editing for all low-level object types. Highly scalable and works with thousand-paged documents",

    src: cosedit,
    link: "https://cosedit.com/",
    tags: ["React", "JavaScript", "MaterialUI", "PDFNet"],
    year: 2022,
  },
  {
    name: "CanvasToPDF",
    subtitle: "Vector Graphics Library",
    description:
      "An npm library for exporting vector-quality PDFs using the Canvas API",

    src: canvas,
    link: "https://npmjs.com/package/@pdftron/canvas-to-pdf",
    tags: ["JavaScript", "npm", "Webpack"],
    year: 2022,
  },
  {
    name: "Aurora",
    subtitle: "UI Component Library",
    src: aurora,
    description: "Library",
    link: "https://www.npmjs.com/package/@nwplusdev/aurora",
    tags: ["React", "Styled Components", "Storybook", "npm"],
    year: 2022,
  },
  {
    name: "QR Scanner",
    subtitle: "Internal Progressive Web App",
    description: "Library",
    src: qr,
    link: "",
    tags: ["TypeScript", "Firebase"],
    year: 2022,
  },
];

const About = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const renderMainContent = () => {
    if (selectedProject == null) {
      return (
        <div className={styles.about}>
          <div className={styles.container}>
            <div className={styles.title}>Welcome</div>
            <div className={styles.text}>
              I'm Amy, a senior student pursuing Computer Science at the
              University of British Columbia based in Vancouver, Canada. I am
              experienced in frontend and fullstack development, having
              previously designed high performance user interfaces and
              pixel-perfect landing pages.
            </div>
            <br />
            <div className={styles.text}>
              I have a passion for creating cutting-edge digital experiences
              that are interactive and immersive, and I enjoy experimenting with
              what is possible on the web.
            </div>
          </div>
          <Menu
            setSelectedProject={setSelectedProject}
            projectList={projectList}
          />
        </div>
      );
    }

    return (
      <div className={styles.about}>
        <div className={styles.subcontainer}>
          <div className={styles.subtitle}>
            {projectList[selectedProject].subtitle}
          </div>
          <img
            className={styles.img}
            src={projectList[selectedProject].src}
            alt=""
          />
          <div className={styles.text}>
            {projectList[selectedProject].description}
          </div>
          <div className={styles.tags}>
            {projectList[selectedProject].tags.map((text, i) => (
              <Tag key={i} text={text} />
            ))}
          </div>
          <a href={projectList[selectedProject].link}>See here</a>
        </div>
        <Menu
          setSelectedProject={setSelectedProject}
          projectList={projectList}
        />
      </div>
    );
  };

  return (
    <div className={styles.aboutWrapper}>
      <Aurora />
      <div className={styles.auroraWrapper} />
      {renderMainContent()}
    </div>
  );
};

export default About;
