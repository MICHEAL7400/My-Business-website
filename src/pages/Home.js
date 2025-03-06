import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Ensure you have a separate CSS file for home styles

const Home = () => {
  return (
    <section id="home">
     <img
  src={require("../images/Profile_picture.jpg")} // Adjust the path as needed
  alt="Professional"
  className="profile-image"
/>
      <h1>MICHEAL K MATANDA</h1>
      <h3>SOFTWARE ENGINEER AND TECH-ENTHUSIAST</h3>

      {/* Hire Me Button (Now a Link) */}
      <Link to="/contact">
        <button className="hire-button">HIRE ME</button>
      </Link>
    </section>
  );
};

export default Home;