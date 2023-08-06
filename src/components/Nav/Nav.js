import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Nav = () => {
  const detachNav = useSelector((state) => state.ui.detachNav);
  const navDivStyles = {
    background: "black",
  };

  const NavDiv = ({ id, text }) => (
    <div
      style={detachNav ? navDivStyles : null}
      onClick={() => document.getElementById(id).scrollIntoView()}
    >
      {text}
    </div>
  );

  return (
    <motion.div
      className="nav"
      animate={
        detachNav
          ? { position: "fixed", top: 0, background: "black" }
          : { position: "absolute", top: "80%" }
      }
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div
        className="navDivContainer"
        style={detachNav ? { background: "black" } : null}
      >
        <NavDiv id="home" text="Home" />
        <NavDiv id="about" text="About" />
        <NavDiv id="projects" text="Projects" />
        <NavDiv id="contact" text="Contact" />
      </div>
    </motion.div>
  );
};

export default Nav;
