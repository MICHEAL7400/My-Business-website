import React, { useState } from "react";
import "../App.css";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      title: "Full-Stack Development",
      content:
        "As a full-stack developer, I offer comprehensive development services that cover both frontend and backend technologies. My expertise includes building responsive user interfaces, developing robust server-side applications, and integrating APIs. I specialize in creating scalable solutions using modern frameworks and technologies.",
    },
    {
      title: "Software Engineering",
      content:
        "With a solid foundation in software engineering principles, I provide services that include software design, architecture, and development. My approach involves writing efficient, maintainable code, conducting thorough testing, and ensuring high performance and reliability in software applications.",
    },
    {
      title: "IT Consulting",
      content:
        "My IT consulting services include technology assessments, project management, and strategic planning. I help organizations leverage technology to achieve their goals by optimizing their IT infrastructure, improving system integration, and addressing technical challenges.",
    },
    {
      title: "Leadership and Team Development",
      content:
        "Leveraging my extensive experience as Secretary of CUZITA and Prime Minister of the Meheba Former Leaders Association, I offer consulting and training in leadership and team development. Whether you're looking to improve team dynamics, develop effective leaders, or enhance organizational culture, I provide personalized solutions to help your team thrive.",
    },
    {
      title: "Entrepreneurial Guidance and Business Development",
      content:
        "As an entrepreneur with a keen eye for innovative income-generating opportunities, I offer mentorship and guidance for aspiring entrepreneurs. From business planning and strategy to market analysis and growth tactics, my services are designed to help you turn your entrepreneurial vision into reality.",
    },
    {
      title: "Community and School Engagement Programs",
      content:
        "With a rich background in community and school leadership, including roles like School Headboy and JETS Treasurer, I offer programs and initiatives aimed at enhancing student and community engagement. These programs focus on fostering leadership, teamwork, and active participation in community and school activities.",
    },
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
              {service.title} <span className="indicator">{activeIndex === index ? "▼" : "▶"}</span>
            </button>
            <div className="accordion-content" style={{ maxHeight: activeIndex === index ? "300px" : "0" }}>
              <p>{service.content}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Services;
