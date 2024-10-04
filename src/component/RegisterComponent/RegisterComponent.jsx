import React from 'react';
import './RegisterComponent.css'; // Ensure this CSS file contains updated styles
import headerImage from "../../Assets/Images/Group.png";

const RegisterComponent = () => {
  return (
    <div className="unique-register-container">
      <div className="unique-register-left">
        <img
          src={headerImage}
          alt="Register Illustration"
          className="unique-register-image"
        />
      </div>
      <div className="unique-register-right">
        <div className="unique-register-header">
          <h2 className="unique-welcome-text">Create your account! 👋</h2>
          <h3>Register to get started</h3>
        </div>

        <form className="unique-register-form">
          <div className="unique-row">
            <div className="unique-input-group">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                placeholder="First Name"
                className="unique-input21"
                required
              />
            </div>

            <div className="unique-input-group">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                placeholder="Last Name"
                className="unique-input21"
                required
              />
            </div>
          </div>

          <div className="unique-row">
            <div className="unique-input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Please enter your email"
                className="unique-input21"
                required
              />
            </div>

            <div className="unique-input-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="text"
                id="mobile"
                placeholder="Mobile Number"
                className="unique-input21"
                required
              />
            </div>
          </div>

          <div className="unique-row">
            <div className="unique-input-group">
              <label htmlFor="password">Password</label>
              <div className="unique-password-wrapper">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="unique-input21"
                  required
                />
              
              </div>
            </div>

            <div className="unique-input-group">
              <label htmlFor="wallet-address">Wallet Address (Optional)</label>
              <input
                type="text"
                id="wallet-address"
                placeholder="Enter your wallet address"
                className="unique-input"
              />
            </div>
          </div>

          <button type="submit" className="unique-register-button">
           Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
