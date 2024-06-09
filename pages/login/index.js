

import React, { useEffect, useState } from "react";

import GoogleLogo from "../../svg/GoogleLogo";
import LoginForm from "../../components/LoginForm";
import socialLinksData from '../../socialLinks.json';
import Head from 'next/head';  // Import the social links data

function LoginPage() {
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    setIsClient(true);
    setActiveTab(0); // Ensures the first tab is active on load

    // Set social links
    setSocialLinks(socialLinksData);
    const script = document.createElement("script");
    script.src = "/js/app.bundle.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
     }; 
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const formStyleActive = {
    display: 'block', // Show the form
    transition: 'all 0.3s ease'
  };

  const formStyleInactive = {
    display: 'none', // Hide the form
    transition: 'all 0.3s ease'
  };

  return (
    <div>
       <Head>
        <title>My page title</title>

        <link rel="stylesheet" href="/css/vendor/bootstrap.min.css" />
  <link rel="stylesheet" href="/css/styles.min.css" />
  <link rel="stylesheet" href="/css/vendor/simplebar.css" />
 
  <link rel="stylesheet" href="/css/vendor/tiny-slider.css" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
 
    <div className="landing">
      <div className="landing-decoration"></div>
      <div className="landing-info">
        <div className="logo">
          <GoogleLogo />
        </div>
        <h2 className="landing-info-pretitle">Welcome to</h2>
        <h1 className="landing-info-title">Superteam UK</h1>
        <p className="landing-info-text">The fastest growing blockchain network & community! Connect with your friends and play with our quests and badges gamification system!</p>
        <div className="tab-switch">
          <p className={`tab-switch-button ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>
            Login
          </p>
          <p className={`tab-switch-button ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
            Register
          </p>
        </div>
      </div>
      <div className="landing-form">
        {/* Login Form */}
        <div className="form-box login-register-form-element" style={activeTab === 0 ? formStyleActive : formStyleInactive}>
         <LoginForm />  
        </div>

        {/* Register Form */}
        <div className="form-box login-register-form-element" style={activeTab === 1 ? formStyleActive : formStyleInactive}>
          <img className="form-box-decoration overflowing" src="/img/landing/rocket.png" alt="rocket" />
          <h2 className="form-box-title">Create your Account!</h2>
          <form className="form">
            <div className="form-row">
              <div className="form-item">
                <div className="form-input">
                  <label htmlFor="login-username">Username</label>
                  <input type="text" id="login-username" name="login_username" />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <div className="form-input">
                  <label htmlFor="login-email">Your Email</label>
                  <input type="text" id="login-email" name="login_email" />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <div className="form-input">
                  <label htmlFor="login-password">Password</label>
                  <input type="password" id="login-password" name="login_password" />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <div className="form-input">
                  <label htmlFor="login-repeat-password">Repeat Password</label>
                  <input type="password" id="login-repeat-password" name="login_repeat_password" />
                </div>
              </div>
            </div>
            <div className="form-row space-between">
              <div className="form-item">
                <div className="checkbox-wrap">
                  <input type="checkbox" id="login-remember" name="login_remember" />
                  <div className="checkbox-box">
                    <svg className="icon-cross">
                      <use xlinkHref="#svg-cross"></use>
                    </svg>
                  </div>
                  <label htmlFor="login-remember">Remember Me</label>
                </div>
              </div>
              <div className="form-item">
                <a className="form-link" href="#">Forgot Password?</a>
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <button className="button medium secondary">Login to your Account!</button>
              </div>
            </div>
          </form>

          
        </div>
      </div>
    </div></div>
  );
}

export default LoginPage;
