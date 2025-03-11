import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".home-section");

  function checkScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight * 0.85) {
        section.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
