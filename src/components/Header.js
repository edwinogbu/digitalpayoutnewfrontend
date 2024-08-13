
import React, { useState } from 'react';
// import './App.css';
import './../Header.css';
import { Link } from 'react-router-dom';



const Header = () => {
    const [navClass, setNavClass] = useState('navbar navbar-default');
    const [menuVisible, setMenuVisible] = useState(false);
  
    const toggleMenu = () => {
      setMenuVisible((prevVisible) => !prevVisible);
      setNavClass((prevClass) =>
        prevClass.includes('active')
          ? 'navbar navbar-default'
          : 'navbar navbar-default active'
      );
    };
  
  return (
   <>
      {/* <div id="preloader" /> */}
          <header className="header-one">
            {/* Start top bar */}
            <div className="topbar-area fix hidden-xs" style={{ color: "#fff", backgroundColor: "#000033" }}>
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="topbar-left">
                      <ul>
                        <li><Link href="#"><i className="fa fa-envelope" /> info@digitalpayout.com</Link></li>
                        <li><Link to="/contact-us"><i className="fa fa-phone" /> +234-6542-9805</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="topbar-right">
                      <div className="top-social">
                        <ul>
                          <li><Link href="#"><i className="fa fa-pinterest" /></Link></li>
                          <li><Link href="#"><i className="fa fa-skype" /></Link></li>
                          <li><Link href="#"><i className="fa fa-google" /></Link></li>
                          <li><Link href="#"><i className="fa fa-twitter" /></Link></li>
                          <li><Link href="#"><i className="fa fa-facebook" /></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End top bar */}
            {/* header-area start */}
            <div id="sticker" className="header-area hidden-xs">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div className="row">
                      {/* logo start */}
                      <div className="col-md-3 col-sm-3">
                        <div className="logo">
                          <Link className="navbar-brand page-scroll white-logo" href="index.html">
                            <img src="./images/instruction-4.png" alt="" />
                          </Link>
                          <Link className="navbar-brand page-scroll black-logo" to="/">
                            <img src="./images/instruction-4.png" alt="" />
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-9 col-sm-9">
                        <div className="header-right-link">
                          <Link className="s-menu" to="/login">Account</Link>
                        </div>
                        {/* mainmenu start */}
                        <nav className={navClass}>
                          <div className="collapse navbar-collapse" id="navbar-example">
                            <div className="main-menu">
                              <ul className="nav navbar-nav navbar-right">
                                <li><Link className="pages" to="/">Home</Link></li>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="/investment">Investment</Link></li>
                                {/* <li> */}
                                  {/* <Link className="pages" href="#">Account</Link>
                                  <ul className="sub-menu"> */}
                                    {/* <li><Link href="team.html">team</Link></li> */}
                                    {/* <li><Link href="faq.html">FAQ</Link></li> */}
                                    {/* <li><Link href="review.html">Reviews</Link></li> */}
                                    {/* <li><Link href="login.html">Login</Link></li>
                                    <li><Link href="signup.html">Register</Link></li>
                                  </ul>
                                </li> */}
                                <li>
                                  <Link className="pages" to="/blog">Blog</Link>
                                  {/* <ul className="sub-menu">
                                    <li><Link href="blog.html">Blog grid</Link></li>
                                    <li><Link href="blog-sidebar.html">Blog Sidebar</Link></li>
                                    <li><Link href="blog-details.html">Blog Details</Link></li>
                                  </ul> */}
                                </li>
                                <li><Link to="/contact-us">contacts</Link></li>
                              </ul>
                            </div>
                          </div>
                        </nav>
                        {/* mainmenu end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* header-area end */}
            {/* mobile-menu-area start */}
            <div className={`mobile-menu-area hidden-lg hidden-md hidden-sm ${menuVisible ? 'active' : 'hidden'}`} style={{ color: "#fff", backgroundColor: "#000033" }}>
              <div className="container" style={{ color: "#fff", backgroundColor: "#000033" }}>
                <div className="row" style={{ color: "#fff", backgroundColor: "#000033" }}>
                  <div className="col-md-12" style={{ color: "#fff", backgroundColor: "#000033" }}>
                    <div className="mobile-menu" style={{ color: "#fff", backgroundColor: "#000033" }}>
                      <div className="logo">
                        <Link href="index.html">
                          <img src="./images/instruction-4.png" alt="" />
                        </Link>
                      </div>
                      <nav id="dropdown" style={{ color: "#fff", backgroundColor: "#000033" }}>
                        <ul>
                          <li><Link className="pages" to="/">Home</Link></li>
                          <li><Link to="/about">About us</Link></li>
                          <li><Link to="/investment">Investment</Link></li>
                          {/* <li>
                            <Link className="pages" to="#">Pages</Link>
                            <ul className="sub-menu">
                              <li><Link href="team.html">Account</Link></li> */}
                              {/* <li><Link href="faq.html">FAQ</Link></li> */}
                              {/* <li><Link href="review.html">Reviews</Link></li> */}
                              {/* <li><Link href="login.html">Login</Link></li>
                              <li><Link href="signup.html">Register</Link></li>
                            </ul>
                          </li> */}
                          <li>
                            <Link className="pages" to="/blog">Blog</Link>
                            {/* <ul className="sub-menu">
                              <li><a href="blog.html">Blog grid</a></li>
                              <li><a href="blog-sidebar.html">Blog Sidebar</a></li>
                              <li><a href="blog-details.html">Blog Details</a></li>
                            </ul> */}
                          </li>
                          <li><Link to="/contact-us">contacts</Link></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* mobile-menu-area end */}
            <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </header>
   </>
      
  )
}

export default Header