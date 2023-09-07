import React from "react";
import styles from "./Menu.module.css";

import gpt from "../../assets/gpt2.png";
import apryse from "../../assets/apryse1.jpeg";
import web from "../../assets/webviewer-ui.png";
import canvas from "../../assets/canvas.png";
import cosedit from "../../assets/cosedit.png";
import aurora from "../../assets/aurora.png";
import qr from "../../assets/qr2.png";

const Menu = () => {
  const projectList = [
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

  const MenuItem = ({ src, desc, link, name, tags, year }) => (
    <div className={styles.item}>{name}</div>
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
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
