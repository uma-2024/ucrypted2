import React from 'react';
import './Footer.css'; // Import CSS for styling
import logoImage from '../../Assets/Images/logo.png'
const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Left Section */}
      <div className="footer-left">
        <div className="footer-logo">
          <img src={logoImage} alt="Logo" className="logo" />
          
          <div className="footer-right">
        <h4>Ready to get started?</h4>
        <button className="get-started-btn">Get started</button>
      </div>
        </div>

        {/* Newsletter Section */}


        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="#facebook"><i className="fab fa-facebook"></i></a>
          <a href="#twitter"><i className="fab fa-twitter"></i></a>
          <a href="#instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      {/* Middle Section */}
      <div className="footer-middle">
      <div className="newsletter-section">
          <h4>Subscribe to our newsletter</h4>
          <div className="newsletter-input">
            <input type="email" placeholder="Email address" />
            <button className="subscribe-btn">{'>'}</button>
          </div>
        </div>
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><a href="#email-marketing">Email Marketing</a></li>
            <li><a href="#coupons">Coupons</a></li>
            <li><a href="#topups">Top-Ups</a></li>
            <li><a href="#offline">Offline</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>About</h4>
          <ul>
            <li><a href="#our-story">Our Story</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#travelling">Travelling</a></li>
            <li><a href="#recharges">Recharges</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Help</h4>
          <ul>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
     

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 Ucrypted. All rights reserved.</p>
        <div className="footer-terms">
          <a href="#terms">Terms & Conditions</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
