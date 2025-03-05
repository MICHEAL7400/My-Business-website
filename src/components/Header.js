import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <h1>Welcome to My Page</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/services">Services</Link>
        </nav>
    </header>
);

export default Header;
