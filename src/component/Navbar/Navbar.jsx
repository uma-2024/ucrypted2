import React from 'react';
import './Navbar.css'; 
import logoImage from '../../Assets/Images/logo.png';
import { Link, useNavigate } from 'react-router-dom'; 


const Navbar = () => {
    const navigate = useNavigate();
    
    const handleShowGiftCards = (e) => {
        e.preventDefault(); 
        navigate("/giftcards"); 
    };
    const handleLogoClick = () => {
        navigate("/"); // Navigates to the home route
      };
      const handleLoginClick = () => {
        navigate("/login"); // Navigates to the home route
      };
    return (
        <nav className="navbar-container">
        
            <div className="navbar-logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
                <img src={logoImage} alt="Logo" className="logo" />
            </div>

        
            <div className='navbar-second-container'>
                <div className="navbar-links">
                    <Link to="/giftcards" onClick={handleShowGiftCards}>Digital Gift Cards</Link>
                    <Link to="/topups">Airtime Top-ups</Link>
                    <Link to="/utility">Utility Payments</Link>
                </div>
                <div className="navbar-actions">
                    <div className="language-selector">
                        <span role="img" aria-label="globe">🌐</span> EN
                    </div>
                    <button className="login-btn" onClick={handleLoginClick} style={{ cursor: "pointer" }}>Login</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
