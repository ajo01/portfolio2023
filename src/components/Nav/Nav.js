import React from "react";
import { motion } from "framer-motion";

const Nav = ({ detachNav }) => {
  const navDivStyles = {
    background: "black",
  };

  return (
    <motion.div
      className="nav"
      animate={
        detachNav
          ? { position: "fixed", top: 0 }
          : { position: "absolute", top: "80%" }
      }
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div
        style={detachNav ? navDivStyles : null}
        onClick={() => document.getElementById("home").scrollIntoView()}
      >
        Home
      </div>
      <div
        style={detachNav ? navDivStyles : null}
        onClick={() => document.getElementById("about").scrollIntoView()}
      >
        About
      </div>
      <div
        style={detachNav ? navDivStyles : null}
        onClick={() => document.getElementById("projects").scrollIntoView()}
      >
        Projects
      </div>
      <div
        style={detachNav ? navDivStyles : null}
        onClick={() => document.getElementById("contact").scrollIntoView()}
      >
        Contact
      </div>
    </motion.div>
  );
};

export default Nav;
