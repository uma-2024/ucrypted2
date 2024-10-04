import React from "react";
import "./LoginComponent.css"; // Create this CSS file for styling
import headerImage from "../../Assets/Images/Group.png";
import { Link } from 'react-router-dom';

const LoginComponent = () => {
  return (
    <div className="unique-login-container">
      <div className="unique-login-left">
        <img
          src={headerImage}
          alt="Login Illustration"
          className="unique-login-image"
        />
      </div>
      <div className="unique-login-right">
        <h4>
          Not registered?{" "}
          <Link to="/register">
            <span>Create an account</span>
          </Link>
        </h4>
        <div className="unique-login-header">
          <h2 className="unique-welcome-text">Welcome back! 👋</h2>
          <h3>Login to your account</h3>
        </div>

        <form className="unique-login-form">
          <div className="unique-input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Please enter your email"
              className="unique-input"
            />
          </div>

          <div className="unique-input-group">
            <label htmlFor="password">Password</label>
            <div className="unique-password-wrapper">
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="unique-input"
              />
            </div>
          </div>

          <button type="submit" className="unique-login-button">
            Login
          </button>
        </form>

        <div className="unique-login-footer">
          <a href="#" className="unique-forgot-password">
            Forgot Password?
          </a>

          <div className="unique-or-divider">
            <span>Or</span>
          </div>
          <p>Login using</p>
          <div className="unique-social-login">
            <button className="unique-social-button google">Google</button>
            <button className="unique-social-button microsoft">
              Microsoft
            </button>
            <button className="unique-social-button yahoo">Yahoo</button>
            <button className="unique-social-button apple">Apple</button>
            <button className="unique-social-button facebook">Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
