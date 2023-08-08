import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
const Nav = () => {
  const detachNav = useSelector((state) => state.ui.detachNav);
  const navDivStyles = {
    background: "black",
  };

  const navigate = useNavigate();

  const NavDiv = ({ id, text, onClick }) => (
    <div
      style={detachNav ? navDivStyles : null}
      onClick={() => {
        onClick ? onClick() : document.getElementById(id).scrollIntoView();
      }}
    >
      {text}
    </div>
  );

  return (
    <div className="nav">
      <div
        className="navDivContainer"
        style={detachNav ? { background: "black" } : null}
      >
        <NavDiv text="Home" onClick={() => navigate("/")} />
        <NavDiv id="about" text="About" />
        <NavDiv id="projects" text="Projects" />
        <NavDiv id="contact" text="Contact" />
      </div>
    </div>
  );
};

export default Nav;
