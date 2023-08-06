import React from "react";
import { useSelector } from "react-redux";

const Nav = ({ navRef }) => {
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
    <div
      className="nav"
      style={
        detachNav
          ? { position: "fixed", top: 0, background: "black" }
          : { position: "absolute", top: "80%" }
      }
      ref={navRef}
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
    </div>
  );
};

export default Nav;
