import React from "react";

import { useNavigate } from "react-router-dom";
import GlowButton from "../GlowButton/GlowButton";
import Aurora from "../Aurora/Aurora";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Aurora />
      <div className="main-bg">
        <div className="text-container">
          <div className="title">AMY JO</div>
          <div className="sub">
            Software Engineer | Web Developer | Data Visualization
          </div>
          <GlowButton
            handleClick={() => navigate("/about")}
            text="START"
            style={{ marginTop: 40 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
