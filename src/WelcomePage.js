import React, { useState } from 'react';
// import './App.css';
// import './Header.css';
// import { Link } from 'react-router-dom';
import Header from './components/Header';

function WelcomePage() {
  // const [navClass, setNavClass] = useState('navbar navbar-default');
  // const [menuVisible, setMenuVisible] = useState(false);

  // const toggleMenu = () => {
  //   setMenuVisible((prevVisible) => !prevVisible);
  //   setNavClass((prevClass) =>
  //     prevClass.includes('active')
  //       ? 'navbar navbar-default'
  //       : 'navbar navbar-default active'
  //   );
  // };

  return (
    <>
      <div>

  {/* <div id="preloader" /> */}
     <Header />
  {/* header end */}
  <div className style={{"padding-top":"50px","border":"2px solid #000033"}}>
  </div>
  {/* Cryptocurrency Carousel Area */}
  <div className="crypto-carousel-area" style={{"background-image":"url('./img/crypto/crytp4.jpeg')"}}>
    <div id="cryptoCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#cryptoCarousel" data-slide-to={0} className="active" />
        <li data-target="#cryptoCarousel" data-slide-to={1} />
        <li data-target="#cryptoCarousel" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="item active">
          <div className="carousel-content">
            <div className="carousel-image col-sm-4">
              <img src="./img/crypto/cryto6.jpeg" alt="Crypto 1" />
            </div>
            <div className="carousel-text col-sm-8">
              <h2 className="text-white" style={{"color":"#fff"}}>Invest in Cryptocurrency</h2>
              <p className="text-white" style={{"color":"#fff"}}>Secure your future with digital assets.</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="carousel-content">
            <div className="carousel-image col-sm-4">
              <img src="./img/crypto/cryto2.jpeg" alt="Crypto 2" />
            </div>
            <div className="carousel-text col-sm-8">
              <h2 className="text-white" style={{"color":"#fff"}}>Trusted Digital Payouts</h2>
              <p className="text-white" style={{"color":"#fff"}}>Fast and reliable transactions.</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="carousel-content">
            <div className="carousel-image col-sm-4">
              <img src="./img/crypto/cryto3.jpeg" alt="Crypto 3" />
            </div>
            <div className="carousel-text col-sm-8">
              <h2 className="text-white" style={{"color":"#fff"}}>Future of Finance</h2>
              <p className="text-white" style={{"color":"#fff"}}>Join the revolution in digital currency.</p>
            </div>
          </div>
        </div>
      </div>
      <a className="left carousel-control" href="#cryptoCarousel" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#cryptoCarousel" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
      {/* <a href="#" class="btn btn-primary animated bounceIn" style="position: absolute; bottom: 5px; padding: 15px; left: 50%; transform: translateX(-50%); z-index: 3;">Get Started</a> */}
      <div className="layer-1-3">
        <a href="#" className="ready-btn left-btn animated bounceIn" style={{"position":"absolute","top":"210px","padding":"5px","left":"50%","-webkit-transform":"translateX(-50%)","-ms-transform":"translateX(-50%)","transform":"translateX(-50%)","z-index":"-3"}}>Get started</a>
      </div>
    </div>
  </div>
  {/* Start Count area */}
  <div className="counter-area fix area-padding-2" style={{"padding-top":"50px","border":"2px solid #000033","border-radius":"25px"}}>
    <div className="container">
      <div className="section-headline text-center">
        <h3>Testimonials </h3>
      </div>
      {/* Start Carousel */}
      <div id="counterCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="item active">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12 testimonial-card">
                {/* fun_text  */}
                <div className="fun_text">
                  <span className="counter-icon"><i className="flaticon-035-savings" /></span>
                  <span className="counter" style={{"color":"#fff"}}>$5974544</span>
                  <h4 className="text-white" style={{"color":"#fff"}}>- Sarah Wilson</h4>
                  <p className="text-white" style={{"color":"#fff"}}>"I initially invested $12,000 and received $18,000 back. Digital Payout Crypto is an amazing platform that delivers impressive returns."</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 testimonial-card">
                {/* fun_text  */}
                <div className="fun_text">
                  <span className="counter-icon"><i className="flaticon-034-reward" /></span>
                  <span className="counter" style={{"color":"#fff"}}>$15,000</span>
                  <h4 className="text-white" style={{"color":"#fff"}}>- Michael Brown</h4>
                  <p className="text-white" style={{"color":"#fff"}}>"Invested $15,000 and gained $22,500. The returns have been exceptional, and I am impressed with how easy it was to track and manage my investments."</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 testimonial-card">
                {/* fun_text  */}
                <div className="fun_text">
                  <span className="counter-icon"><i className="flaticon-016-graph" /></span>
                  <span className="counter" style={{"color":"#fff"}}>$3974544</span>
                  <h4 style={{"color":"#fff"}}>- James Williams</h4>
                  <p style={{"color":"#fff"}}>"I put in $20,000 and made a remarkable $30,000 profit. Digital Payout Crypto has proven to be a reliable platform for growing investments!"</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 testimonial-card">
                {/* fun_text  */}
                <div className="fun_text">
                  <span className="counter-icon"><i className="flaticon-043-world" /></span>
                  <span className="counter" style={{"color":"#fff"}}>$800</span>
                  <h4 style={{"color":"#fff"}}>Verified security</h4>
                  <p style={{"color":"#fff"}}>Replacing a  maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12 testimonial-card">
                {/* fun_text  */}
                <div className="fun_text">
                  <span className="counter-icon"><i className="flaticon-035-savings" /></span>
                  <span className="counter" style={{"color":"#fff"}}>$2974544</span>
                  <h4 style={{"color":"#fff"}}>- James Williams</h4>
                  <p style={{"color":"#fff"}}>"I put in $20,000 and made a remarkable $30,000 profit. Digital Payout Crypto has proven to be a reliable platform for growing investments!"</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 testimonial-card">
                {/* fun_text  */}
                <div className="fun_text">
                  <span className="counter-icon"><i className="flaticon-034-reward" /></span>
                  <span className="counter" style={{"color":"#fff"}}>500</span>
                  <h4 style={{"color":"#fff"}}>- James Williams</h4>
                  <p style={{"color":"#fff"}}>"I put in $20,000 and made a remarkable $30,000 profit. Digital Payout Crypto has proven to be a reliable platform for growing investments!"</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 testimonial-card">
                {/* fun_text  */}
                <div className="fun_text">
                  <span className="counter-icon"><i className="flaticon-016-graph" /></span>
                  <span className="counter" style={{"color":"#fff"}}>$1500000</span>
                  <h4 style={{"color":"#fff"}}>- Michael Brown</h4>
                  <p style={{"color":"#fff"}}>"Invested $15,000 and gained $22,500. The returns have been exceptional, and I am impressed with how easy it was to track and manage my investments."</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 testimonial-card">
                {/* fun_text  */}
                <div className="fun_text">
                  <span className="counter-icon"><i className="flaticon-043-world" /></span>
                  <span className="counter" style={{"color":"#fff"}}>10</span>
                  <h4 style={{"color":"#fff"}}>- Alex Johnson</h4>
                  <p style={{"color":"#fff"}}>"I invested $10,000 with Digital Payout Crypto, and within six months, I saw a return of $15,000. It's incredible how this platform has helped me grow my wealth efficiently!"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Controls */}
        <a className="left carousel-control" href="#counterCarousel" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#counterCarousel" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
  {/* End Count area */}
  {/* Start Invest area */}
  <div className="invest-area bg-color area-padding-2">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="section-headline text-center">
            <h3>The best investment plan</h3>
            <p>Help agencies to define their new business objectives and then create professional software.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="pricing-content">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="pri_table_list">
              <div className="top-price-inner">
                <div className="rates">
                  <span className="prices">5%</span><span className="users">Daily</span>
                </div>
                <span className="per-day">10 days</span>
              </div>
              <ol className="pricing-text">
                <li className="check">Minimam Invest : $100</li>
                <li className="check">Maximam Invest : $1000</li>
                <li className="check">Avarage Monthly : 50% </li>
              </ol>
              <div className="price-btn blue">
                <a className="blue" href="signup.html">Deposite</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="pri_table_list">
              <div className="top-price-inner">
                <div className="rates">
                  <span className="prices">15%</span><span className="users">Daily</span>
                </div>
                <span className="per-day">30 days</span>
              </div>
              <ol className="pricing-text">
                <li className="check">Minimam Invest : $1000</li>
                <li className="check">Maximam Invest : $10000</li>
                <li className="check">Avarage Monthly :100% </li>
              </ol>
              <div className="price-btn blue">
                <a className="blue" href="signup.html">Deposite</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="pri_table_list">
              <div className="top-price-inner">
                <span className="base">Popular</span>
                <div className="rates">
                  <span className="prices">50%</span><span className="users">Daily</span>
                </div>
                <span className="per-day">45 days</span>
              </div>
              <ol className="pricing-text">
                <li className="check">Minimam Invest : $1000</li>
                <li className="check">Maximam Invest : $50000</li>
                <li className="check">Avarage Monthly : 200% </li>
              </ol>
              <div className="price-btn blue">
                <a className="blue" href="signup.html">Deposite</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="pri_table_list">
              <span className="base">Best sale</span>
              <div className="top-price-inner">
                <div className="rates">
                  <span className="prices">100%</span><span className="users">Daily</span>
                </div>
                <span className="per-day">60 days</span>
              </div>
              <ol className="pricing-text">
                <li className="check">Minimam Invest : $1000</li>
                <li className="check">Maximam Invest : $50000</li>
                <li className="check">Avarage Monthly : 250% </li>
              </ol>
              <div className="price-btn blue">
                <a className="blue" href="signup.html">Deposite</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Invest area */}
  {/* Start Support-service Area */}
  <div className="support-service-area fix area-padding-2">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="section-headline text-center">
            <h3>Why choose investment plan</h3>
            <p>Help agencies to define their new business objectives and then create professional software.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="support-all">
          {/* Start About */}
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="support-services wow ">
              <a className="support-images" href="#"><i className="flaticon-023-management" /></a>
              <div className="support-content">
                <h4>Expert management</h4>
                <p>Replacing a  maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create</p>
              </div>
            </div>
          </div>
          {/* Start About */}
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="support-services ">
              <a className="support-images" href="#"><i className="flaticon-036-security" /></a>
              <div className="support-content">
                <h4>Secure investment</h4>
                <p>Replacing a  maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create</p>
              </div>
            </div>
          </div>
          {/* Start services */}
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="support-services ">
              <a className="support-images" href="#"><i className="flaticon-003-approve" /></a>
              <div className="support-content">
                <h4>Registered company</h4>
                <p>Replacing a  maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create</p>
              </div>
            </div>
          </div>
          {/* Start services */}
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="support-services">
              <a className="support-images" href="#"><i className="flaticon-042-wallet" /></a>
              <div className="support-content">
                <h4>Instant withdrawal</h4>
                <p>Replacing a  maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create</p>
              </div>
            </div>
          </div>
          {/* Start services */}
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="support-services ">
              <a className="support-images" href="#"><i className="flaticon-032-report" /></a>
              <div className="support-content">
                <h4>Verified security</h4>
                <p>Replacing a  maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Support-service Area */}
  {/* Start Work proses Area */}
  <div className="work-proses fix bg-color area-padding-2">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="section-headline text-center">
            <h3>Referral bonus level</h3>
            <p>Help agencies to define their new business objectives and then create professional software.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="row">
            <div className="work-proses-inner text-center">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="single-proses">
                  <div className="proses-content">
                    <div className="proses-icon point-blue">
                      <span className="point-view">01</span>
                      <a href="#"><i className="ti-briefcase" /></a>
                    </div>
                    <div className="proses-text">
                      <h4>Level 01 instant 30% commission</h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* End column */}
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="single-proses">
                  <div className="proses-content">
                    <div className="proses-icon point-orange">
                      <span className="point-view">02</span>
                      <a href="#"><i className="ti-layers" /></a>
                    </div>
                    <div className="proses-text">
                      <h4>Level 02 instant 20% commission</h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* End column */}
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="single-proses last-item">
                  <div className="proses-content">
                    <div className="proses-icon point-green">
                      <span className="point-view">03</span>
                      <a href="#"><i className="ti-bar-chart-alt" /></a>
                    </div>
                    <div className="proses-text">
                      <h4>Level 03 instant 10% commission</h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* End column */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Work proses Area */}
  {/*Start payment-history area */}
  <div className="payment-history-area bg-color fix area-padding-2">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="section-headline text-center">
            <h3>Deposite and withdrawals history</h3>
            <p>Help agencies to define their new business objectives and then create professional software.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="deposite-content">
            <div className="diposite-box">
              <h4>Last deposite</h4>
              <span><i className="flaticon-005-savings" /></span>
              <div className="deposite-table">
                <table>
                  <tbody><tr style={{"background-color":"#000033","color":"#fff"}}>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Currency</th>
                    </tr>
                    <tr>
                      <td>Admond sayhel</td>
                      <td>Jan 02, 2020</td>
                      <td>$1000</td>
                      <td>Bitcoin</td>
                    </tr>
                    <tr>
                      <td>Jonshon</td>
                      <td>Dec 12, 2019</td>
                      <td>$5000</td>
                      <td>USD</td>
                    </tr>
                    <tr>
                      <td>Hopper</td>
                      <td>Dec 22, 2019</td>
                      <td>$4000</td>
                      <td>Ripple</td>
                    </tr>
                    <tr>
                      <td>Admond sayhel</td>
                      <td>Jan 02, 2020</td>
                      <td>$3000</td>
                      <td>Bitcoin</td>
                    </tr>
                    <tr>
                      <td>Anjel july</td>
                      <td>Jan 05, 2020</td>
                      <td>$500</td>
                      <td>USD</td>
                    </tr>
                    <tr>
                      <td>Lagisha</td>
                      <td>Jan 12, 2020</td>
                      <td>$5000</td>
                      <td>Bitcoin</td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
          </div>
          <div className="deposite-content">
            <div className="diposite-box">
              <h4>Last withdrawals</h4>
              <span><i className="flaticon-042-wallet" /></span>
              <div className="deposite-table">
                <table>
                  <tbody><tr style={{"background-color":"#000033","color":"#fff"}}>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Currency</th>
                    </tr>
                    <tr>
                      <td>Arnold</td>
                      <td>Jan 04, 2020</td>
                      <td>$1000</td>
                      <td>USD</td>
                    </tr>
                    <tr>
                      <td>Jhon Abra</td>
                      <td>Jan 07, 2020</td>
                      <td>$6000</td>
                      <td>USD</td>
                    </tr>
                    <tr>
                      <td>Lanisha</td>
                      <td>Jan 13, 2020</td>
                      <td>$5000</td>
                      <td>USD</td>
                    </tr>
                    <tr>
                      <td>Gongales</td>
                      <td>Jan 12, 2020</td>
                      <td>$2000</td>
                      <td>USD</td>
                    </tr>
                    <tr>
                      <td>Admond sayhel</td>
                      <td>Jan 10, 2020</td>
                      <td>$1000</td>
                      <td>USD</td>
                    </tr>
                    <tr>
                      <td>Remond</td>
                      <td>Jan 02, 2020</td>
                      <td>$3000</td>
                      <td>USD</td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End payment-history area */}
  {/* Start Banner Area */}
  <div className="banner-area area-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="banner-all area-80 text-center">
            <div className="banner-content">
              <h3>Our investment plan world wide business relations for development</h3>
              <a className="banner-btn" href="signup.html">Sign up now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Banner Area */}
  {/* Start Blog Area*/}
  <div className="blog-area fix bg-color area-padding-2">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="section-headline text-center">
            <h3>Global investment plan news</h3>
            <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="blog-grid home-blog">
          {/* Start single blog */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="single-blog">
              <div className="blog-image">
                <a className="image-scale" href="#">
                  <img src="img/blog/b1.jpg" alt />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="admin-type">
                    <i className="fa fa-user" />
                    Admin
                  </span>
                  <span className="date-type">
                    <i className="fa fa-calendar" />
                    20 july, 2019
                  </span>
                  <span className="comments-type">
                    <i className="fa fa-comment-o" />
                    13
                  </span>
                </div>
                <a href="#">
                  <h4>Creative design clients response is better</h4>
                </a>
              </div>
            </div>
          </div>
          {/* End single blog */}
          {/* Start single blog */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="single-blog">
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="admin-type">
                    <i className="fa fa-user" />
                    Admin
                  </span>
                  <span className="date-type">
                    <i className="fa fa-calendar" />
                    13 may, 2018
                  </span>
                  <span className="comments-type">
                    <i className="fa fa-comment-o" />
                    16
                  </span>
                </div>
                <a href="#">
                  <h4>Web development is a best work in future world</h4>
                </a>
              </div>
              <div className="blog-image">
                <a className="image-scale" href="#">
                  <img src="img/blog/b2.jpg" alt />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="single-blog">
              <div className="blog-image">
                <a className="image-scale" href="#">
                  <img src="img/blog/b3.jpg" alt />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="admin-type">
                    <i className="fa fa-user" />
                    Admin
                  </span>
                  <span className="date-type">
                    <i className="fa fa-calendar" />
                    24 april, 2019
                  </span>
                  <span className="comments-type">
                    <i className="fa fa-comment-o" />
                    07
                  </span>
                </div>
                <a href="#">
                  <h4>You can trust me and business with together</h4>
                </a>
              </div>
            </div>
          </div>
          {/* End single blog */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="single-blog">
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="admin-type">
                    <i className="fa fa-user" />
                    Admin
                  </span>
                  <span className="date-type">
                    <i className="fa fa-calendar" />
                    28 june, 2019
                  </span>
                  <span className="comments-type">
                    <i className="fa fa-comment-o" />
                    32
                  </span>
                </div>
                <a href="#">
                  <h4>business man want to be benifit any way</h4>
                </a>
              </div>
              <div className="blog-image">
                <a className="image-scale" href="#">
                  <img src="img/blog/b4.jpg" alt />
                </a>
              </div> 
            </div>
          </div>
          {/* End single blog */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="single-blog">
              <div className="blog-image">
                <a className="image-scale" href="#">
                  <img src="img/blog/b5.jpg" alt />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="admin-type">
                    <i className="fa fa-user" />
                    Admin
                  </span>
                  <span className="date-type">
                    <i className="fa fa-calendar" />
                    28 june, 2019
                  </span>
                  <span className="comments-type">
                    <i className="fa fa-comment-o" />
                    32
                  </span>
                </div>
                <a href="#">
                  <h4>business man want to be benifit any way</h4>
                </a>
              </div> 
            </div>
          </div>
          {/* End single blog */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="single-blog">
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="admin-type">
                    <i className="fa fa-user" />
                    Admin
                  </span>
                  <span className="date-type">
                    <i className="fa fa-calendar" />
                    28 june, 2019
                  </span>
                  <span className="comments-type">
                    <i className="fa fa-comment-o" />
                    32
                  </span>
                </div>
                <a href="#">
                  <h4>business man want to be benifit any way</h4>
                </a>
              </div>
              <div className="blog-image">
                <a className="image-scale" href="#">
                  <img src="img/blog/b6.jpg" alt />
                </a>
              </div>
            </div>
          </div>
          {/* End single blog */}
        </div>
      </div>
      {/* End row */}
    </div>
  </div>
  {/* End Blog Area*/}
  {/* Start Footer Area */}
  <footer className="footer1" style={{"color":"#fff","background-color":"#000033"}}>
    <div className="footer-area" style={{"color":"#fff","background-color":"#000033"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-5 col-xs-12">
            <div className="footer-content logo-footer">
              <div className="footer-head">
                <div className="footer-logo">
                  <a className="footer-black-logo" href="#"><img src="./images/instruction-4.png" alt /></a>
                </div>
                <p>
                  Are you looking for professional advice for your new business. Are you looking for professional advice for your new business. Are you looking for professional advice for your new business.
                </p>
                <div className="subs-feilds">
                  <div className="suscribe-input">
                    <input type="email" className="email form-control width-80" id="sus_email" placeholder="Type Email" />
                    <button type="submit" id="sus_submit" className="add-btn">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end single footer */}
          <div className="col-md-4 col-sm-3 col-xs-12">
            <div className="footer-content">
              <div className="footer-head">
                <h4>Services Link</h4>
                <ul className="footer-list">
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Services </a></li>
                  <li><a href="#">Events</a></li>
                  <li><a href="#">Promotion</a></li>
                  <li><a href="#">Transition</a></li>
                  <li><a href="#">Social Media</a></li>
                </ul>
                <ul className="footer-list hidden-sm">
                  <li><a href="#">Customer Care</a></li>
                  <li><a href="#">Live chat</a></li>
                  <li><a href="#">Notification</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Terms &amp; Condition</a></li>
                  <li><a href="#">Contact us </a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* end single footer */}
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
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-area-bottom" style={{"color":"#fff","background-color":"#000033"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="copyright">
              <p>
                Copyright © 2020
                <a href="#">Aievari</a> All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* End Footer area */}
      </div>
    </>
  );
}

export default WelcomePage;

