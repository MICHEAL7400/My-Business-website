import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contact">
                <h3>My Contacts</h3>
                <p>To easily find me, below are my particulars and contacts.</p>
                <button><a href="/contact">Read More</a></button>
            </div>
            {/* Social Media Links */}
            <section className="social-media">
                      <ul className="social-links">
                          <li>
                              <a href="https://wa.me/qr/II5KAN33R6PTO1" target="_blank" rel="noopener noreferrer">
                                  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                              </a>
                          </li>
                          <li>
                              <a href="https://www.instagram.com/mmk209503" target="_blank" rel="noopener noreferrer">
                                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                              </a>
                          </li>
                          <li>
                              <a href="https://www.linkedin.com/in/micheal-matanda" target="_blank" rel="noopener noreferrer">
                                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                              </a>
                          </li>
                          <li>
                              <a href="https://www.facebook.com/michaelk.matanda" target="_blank" rel="noopener noreferrer">
                                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                              </a>
                          </li>
                      </ul>
                  </section>
      
            <div className="copyright">© 2024 MICHEAL MATANDA. All rights reserved.</div>
        </footer>
    );
};

export default Footer;
