import React from "react";
import "../App.css"; // Ensure CSS is imported

const HireMe = () => {
    return (
        <section id="hire-me">
            <h1>Hire Me</h1>
            <p>Interested in working together? Fill out the form below or contact me directly!</p>
            
            {/* Simple Contact Form */}
            <form className="hire-form">
                <label>Name:</label>
                <input type="text" placeholder="Enter your name" required />

                <label>Email:</label>
                <input type="email" placeholder="Enter your email" required />

                <label>Message:</label>
                <textarea placeholder="Enter your message" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default HireMe;
