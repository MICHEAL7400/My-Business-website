import React, { useState } from "react";
import "../App.css";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    { title: "Full-Stack Development", content: "Description here..." },
    { title: "Software Engineering", content: "Description here..." },
    { title: "IT Consulting", content: "Description here..." },
    { title: "Leadership and Team Development", content: "Description here..." },
    { title: "Entrepreneurial Guidance and Business Development", content: "Description here..." },
    { title: "Community and School Engagement Programs", content: "Description here..." },
  ];

  return (
    <main className="services-container">
      <h3>Services</h3>
      <div className="accordion">
        {services.map((service, index) => (
          <div key={index}>
            <button
              className={`accordion-button ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              {service.title} <span>{activeIndex === index ? "▼" : "▶"}</span>
            </button>
            <div className={`accordion-content ${activeIndex === index ? "open" : ""}`}>
              <p>{service.content}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Services;