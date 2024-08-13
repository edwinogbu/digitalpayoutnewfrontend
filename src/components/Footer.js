import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Assuming you have a CSS file for additional styling

const Footer = () => {
  return (
    <footer className="footer1" style={{ color: '#fff', backgroundColor: '#000033' }}>
      <div className="footer-area" style={{ color: '#fff', backgroundColor: '#000033' }}>
        <div className="container">
          <div className="row">
            {/* Footer Content - Logo and Subscription */}
            <div className="col-md-5 col-sm-5 col-xs-12">
              <div className="footer-content logo-footer">
                <div className="footer-head">
                  <div className="footer-logo">
                    <Link className="footer-black-logo" to="#">
                      <img src="./images/instruction-4.png" alt="Footer Logo" />
                    </Link>
                  </div>
                  <p>
                    Are you looking for professional advice for your new business. Are you looking for professional advice for your new business. Are you looking for professional advice for your new business.
                  </p>
                  <div className="subs-feilds">
                    <div className="suscribe-input">
                      <input
                        type="email"
                        className="email form-control width-80"
                        id="sus_email"
                        placeholder="Type Email"
                      />
                      <button
                        type="submit"
                        id="sus_submit"
                        className="add-btn"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Footer Content - Logo and Subscription */}
            
            {/* Footer Content - Services Links */}
            <div className="col-md-4 col-sm-3 col-xs-12">
              <div className="footer-content">
                <div className="footer-head">
                  <h4>Services Link</h4>
                  <ul className="footer-list">
                    <li><Link to="#">About us</Link></li>
                    <li><Link to="#">Services</Link></li>
                    <li><Link to="#">Events</Link></li>
                    <li><Link to="#">Promotion</Link></li>
                    <li><Link to="#">Transition</Link></li>
                    <li><Link to="#">Social Media</Link></li>
                  </ul>
                  <ul className="footer-list hidden-sm">
                    <li><Link to="#">Customer Care</Link></li>
                    <li><Link to="#">Live chat</Link></li>
                    <li><Link to="#">Notification</Link></li>
                    <li><Link to="#">Privacy</Link></li>
                    <li><Link to="#">Terms & Condition</Link></li>
                    <li><Link to="#">Contact us</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Footer Content - Services Links */}
            
            {/* Footer Content - Information and Social Icons */}
            <div className="col-md-3 col-sm-4 col-xs-12">
              <div className="footer-content last-content">
                <div className="footer-head">
                  <h4>Information</h4>
                  <div className="footer-contacts">
                    <p><span>Tel :</span> +0890-564-5644</p>
                    <p><span>Email :</span> info@digitalpayout.com</p>
                    <p><span>Location :</span> House- 65/4, Lagos</p>
                  </div>
                  <div className="footer-icons">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-google"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-pinterest"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* End Footer Content - Information and Social Icons */}
          </div>
        </div>
      </div>
      
      <div className="footer-area-bottom" style={{ color: '#fff', backgroundColor: '#000033' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="copyright">
                <p>
                  Copyright © 2020
                  <Link to="#">Aievari</Link> All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
