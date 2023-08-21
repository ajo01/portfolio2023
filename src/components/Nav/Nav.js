import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  const navigate = useNavigate();

  const NavDiv = ({ id, text, onClick }) => (
    <div
      className={styles.navDiv}
      onClick={() => {
        onClick ? onClick() : document.getElementById(id).scrollIntoView();
      }}
    >
      {text}
    </div>
  );

  return (
    <div className={styles.nav}>
      <div className={styles.navDivContainer}>
        <NavDiv text="Home" onClick={() => navigate("/")} />
        <NavDiv id="about" text="About" />
        <NavDiv id="projects" text="Projects" />
        <NavDiv id="contact" text="Contact" />
      </div>
    </div>
  );
};

export default Nav;
