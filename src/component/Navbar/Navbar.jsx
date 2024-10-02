import React from 'react';
import './Navbar.css'; // Import CSS for styling
import logoImage from '../../Assets/Images/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar-container">
      {/* Left Logo Section */}
      <div className="navbar-logo">
        <img src={logoImage} alt="Logo" className="logo" />
        
      </div>

      {/* Middle Links Section */}
      <div className='navbar-second-container'>

     
      <div className="navbar-links">
        <a href="#gift-cards">Digital Gift Cards</a>
        <a href="#airtime-topups">Airtime Top-ups</a>
        <a href="#utility-payments">Utility Payments</a>
      </div>

      {/* Right Actions Section */}
      <div className="navbar-actions">
        <div className="language-selector">
          <span role="img" aria-label="globe">🌐</span> EN
        </div>
        <button className="login-btn">Login</button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
