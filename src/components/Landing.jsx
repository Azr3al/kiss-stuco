import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

function Landing() {
  const [isHovered, setIsHovered] = useState(false);
  const [yesSize, setYesSize] = useState(1);
  const [isPromptVisible, setIsPromptVisible] = useState(false);
  const navigate = useNavigate();

  const handleHover = () => {
    setIsHovered(true);
    setIsPromptVisible(true);
  };

  const handleNoClick = () => {
    setYesSize((prevSize) => prevSize + 0.2);
  };

  const handleYesClick = () => {
    navigate("/home");
  };

  return (
    <div className="landing-container">
      <button
        className="load-button"
        onMouseEnter={handleHover}
        onMouseLeave={() => setIsHovered(false)}
      >
        Load
        <div className={`prompt-buttons ${isPromptVisible ? "visible" : ""}`}>
          <button
            className="yes-button"
            style={{ transform: `scale(${yesSize})` }}
            onClick={handleYesClick}
          >
            Yes
          </button>
          <button className="no-button" onClick={handleNoClick}>
            No
          </button>
        </div>
      </button>
    </div>
  );
}

export default Landing;