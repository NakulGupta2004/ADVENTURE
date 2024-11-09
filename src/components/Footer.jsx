import React from "react";
import "../Style.css"; 

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2024 ExploreXperts. All rights reserved.</p>
          <div className="social-media">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="ri-linkedin-fill"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="ri-twitter-line"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="ri-youtube-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
