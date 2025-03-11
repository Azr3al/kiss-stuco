import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Home from "./Home";
import Policies from "./Policies";
import Candidates from "./Candidates";
import Values from "./Values";
import Interactive from "./Interactive";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Main App  */}
        <Route
          path="/home/*"
          element={
            <>
              <Navbar />
              <TransitionGroup>
                <CSSTransition timeout={500} classNames="page" key={window.location.pathname}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/policies" element={<Policies />} />
                    <Route path="/candidates" element={<Candidates />} />
                    <Route path="/values" element={<Values />} />
                    <Route path="/interactive" element={<Interactive />} />
                  </Routes>
                </CSSTransition>
              </TransitionGroup>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;