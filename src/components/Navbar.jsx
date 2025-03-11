import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaHome, FaGavel, FaUsers, FaSearch, FaHeart, FaGamepad } from "react-icons/fa";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLaptopOrLarger, setIsLaptopOrLarger] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptopOrLarger(window.innerWidth >= 1024);
      if (window.innerWidth < 1024) {
        setIsExpanded(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  const handleMouseEnter = () => {
    if (isLaptopOrLarger) {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (isLaptopOrLarger) {
      setIsExpanded(false);
    }
  };

  return (
      <nav
          className={`side-navbar ${isExpanded ? "expanded" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
      >
        <div className="logo-container">
          <img src="logo.png" alt="Ascend Logo" className="navbar-logo" />
        </div>
        <ul>
          <li>
            <Link to="/home">
              <FaHome className="nav-icon" />
              <span className="nav-text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/home/policies">
              <FaGavel className="nav-icon" />
              <span className="nav-text">Policies</span>
            </Link>
          </li>
          <li>
            <Link to="/home/candidates">
              <FaUsers className="nav-icon" />
              <span className="nav-text">Candidates</span>
            </Link>
          </li>
          <li>
            <Link to="/home/values">
              <FaHeart className="nav-icon" />
              <span className="nav-text">Our Values</span>
            </Link>
          </li>
          <li>
            <Link to="/home/interactive">
              <FaGamepad className="nav-icon" />
              <span className="nav-text">Interactive</span>
            </Link>
          </li>
        </ul>
        <form className="search-bar" onSubmit={handleSearch}>
          <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search"
          />
          <button type="submit" aria-label="Submit Search">
            <FaSearch />
          </button>
        </form>
      </nav>
  );
}

export default Navbar;