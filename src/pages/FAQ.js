import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is your background?", answer: "I am a student...", link: "/about", linkText: "Read More" },
    { question: "What projects have you worked on?", answer: "I have worked on...", link: "/projects", linkText: "Read More" },
    { question: "How can I contact you?", answer: "You can contact me...", link: "/contact", linkText: "Click here" },
    { question: "What services do you offer?", answer: "Thank you very much...", link: "/blog", linkText: "Click here" },
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