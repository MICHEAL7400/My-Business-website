import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <header>
      <div className="header-content">
       
        <h1>Welcome to My Page</h1>

        <button className="hamburger" onClick={toggleDrawer}>
          ☰
        </button>
      </div>
      <nav className={`nav-links ${isDrawerOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleDrawer}>Home</Link>
        <Link to="/blog" onClick={toggleDrawer}>Blog</Link>
        <Link to="/about" onClick={toggleDrawer}>About</Link>
        <Link to="/contact" onClick={toggleDrawer}>Contact</Link>
        <Link to="/projects" onClick={toggleDrawer}>Projects</Link>
        <Link to="/faq" onClick={toggleDrawer}>FAQ</Link>
        <Link to="/services" onClick={toggleDrawer}>Services</Link>
      </nav>
    </header>
  );
};

export default Header;