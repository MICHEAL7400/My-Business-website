import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your background?",
      answer:
        "I am a student studying Bachelor of Science in Computing at Cavendish University Zambia. I am also a tech enthusiast specializing in Full Stack web development and system engineering.",
      link: "/about",
      linkText: "Read More",
    },
    {
      question: "What projects have you worked on?",
      answer:
        "I have worked on several projects, including a Booking System that I cloned. For more details, you can visit the Projects page.",
      link: "/projects",
      linkText: "Read More",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can contact me through the Contact page. Feel free to drop me a message, and I'll get back to you as soon as possible.",
      link: "/contact",
      linkText: "Click here",
    },
    {
      question: "What services do you offer?",
      answer:
        "Thank you very much for reaching out. I offer different services, click the link below and check my Blog for the services.",
      link: "/blog",
      linkText: "Click here",
    },
  ];

  return (
    <div className="faq-container">
      <main>
        <section id="faq">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <h3 className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question} <span>{openIndex === index ? "▼" : "▶"}</span>
              </h3>
              <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                <p>{faq.answer}</p>
                <button>
                  <Link to={faq.link}>{faq.linkText}</Link>
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>

      
    </div>
  );
};

export default FAQ;
