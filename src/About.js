import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <div>
        <Header />
        {/* <div className="page-area" style={{ backgroundImage: "url('./images/fly-coins.jpg')" }} >
          <div className="breadcumb-overlay" />
          <div className="container" >
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="breadcrumb text-center">
                  <div className="section-headline white-headline">
                    <h3>About Us</h3>
                  </div>
                  <ul className="breadcrumb-bg">
                    <li className="home-bread">Home</li>
                    <li>About us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
          <div className="crypto-carousel-area w-25 h-25" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./images/bg5.jpg')" }}>

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
          <p className="text-white" style={{
              fontFamily: "'Brush Script MT', cursive",
              fontWeight: "bold",
              color: "#fff",
              fontSize: "36px",  
              lineHeight: "1.2", 
          }}>
        - Potential for high returns on investment
      </p>
        </div>
        <div className="carousel-text col-sm-8">
          <h2 className="text-white" style={{
              fontFamily: "'Brush Script MT', cursive",
              fontWeight: "bold",
              color: "#fff",
              fontSize: "36px",  
              lineHeight: "1.2", 
          }}>
            
            Join the Digital PayOut community today and discover the benefits of investing in Bitcoin, including:

            </h2>
          <p className="text-white" style={{
              // fontFamily: "'Brush Script MT', cursive",
              fontWeight: "bold",
              color: "#fff",
              fontSize: "36px",  
              lineHeight: "1.2", 
          }}>
        - Potential for high returns on investment
      </p>
        </div>
      </div>
    </div>
    <div className="item">
      <div className="carousel-content">
        <div className="carousel-image col-sm-4">
          <img src="./img/crypto/cryto2.jpeg" alt="Crypto 2" />
        </div>
        <div className="carousel-text col-sm-8">
          <h2 className="text-white"style={{
              fontFamily: "'Brush Script MT', cursive",
              fontWeight: "bold",
              color: "#fff",
              fontSize: "36px",  
              lineHeight: "1.2", 
          }}>
          Join the Digital PayOut community today and discover the benefits of investing in Bitcoin, including:

            </h2>
          <p className="text-white" style={{
    // fontFamily: "'Brush Script MT', cursive",
    fontWeight: "bold",
    color: "#fff",
    fontSize: "36px",  // Adjust the size as needed
    lineHeight: "1.2",  // Adjust the line height if needed
}}>- Diversification of your investment portfolio

</p>
        </div>
      </div>
    </div>
    <div className="item">
      <div className="carousel-content">
        <div className="carousel-image col-sm-4">
          <img src="./img/crypto/cryto3.jpeg" alt="Crypto 3" />
        </div>
        <div className="carousel-text col-sm-8">
          <h2 className="text-white" style={{
              fontFamily: "'Brush Script MT', cursive",
              fontWeight: "bold",
              color: "#fff",
              fontSize: "36px",  
              lineHeight: "1.2", 
          }}>
          Join the Digital PayOut community today and discover the benefits of investing in Bitcoin, including:

            </h2>
          <p className="text-white"  style={{
    // fontFamily: "'Brush Script MT', cursive",
    fontWeight: "bold",
    color: "#fff",
    fontSize: "36px",  // Adjust the size as needed
    lineHeight: "1.2",  // Adjust the line height if needed
}}> - investing and investment withdrawal </p>
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
        <div className="about-area page-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="about-image">
                  <img alt="" src="img/about/ab.jpg" />
                  <div className="video-content">
                    <a
                      className="video-play vid-zone"
                      href="https://www.youtube.com/watch?v=O33uuBh6nXA"
                    >
                      <i className="fa fa-play" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="about-content">
                  <h3>
                    Welcome to Digital PayOut, your gateway to the world of cryptocurrency investment!
                  </h3>
                  <p>
                    Cryptocurrency has revolutionized the way we think about money and financial transactions.
                    With its decentralized nature, limited supply, and increasing adoption, cryptocurrency has 
                    proven to be a lucrative investment opportunity for those who grasp its potential.
                  </p>
                  <p>
                    At Digital PayOut, we offer a secure, user-friendly platform for individuals and institutions 
                    to invest in Bitcoin and tap into its vast potential to earn massive ROI on your investment. 
                    Whether you're a seasoned investor or new to the world of cryptocurrency, our expert team and 
                    cutting-edge technology will guide you every step of the way to invest and earn profits on 
                    your investment.
                  </p>
                  <div className="about-details">
                    <ul className="marker-list">
                      <li>Potential for high returns on investment</li>
                      <li>Diversification of your investment portfolio</li>
                      <li>Investing and investment withdrawal</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-feature-area bg-color area-padding-2">
          <div className="container">
            <div className="row">
              <div className="about-mission">
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="mission-about">
                    <div className="mission-icon">
                      <i className="flaticon-004-bar-chart" />
                    </div>
                    <div className="mission-text">
                      <h4>Our Mission</h4>
                      <p>
                        At Digital PayOut, our mission is to provide a secure and user-friendly platform for 
                        cryptocurrency investment, empowering individuals and institutions to achieve financial 
                        success.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="mission-about">
                    <div className="mission-icon">
                      <i className="flaticon-031-release" />
                    </div>
                    <div className="mission-text">
                      <h4>Our Vision</h4>
                      <p>
                        Our vision is to lead the cryptocurrency investment industry by delivering unparalleled 
                        service and innovative solutions that drive financial growth for our clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="mission-about">
                    <div className="mission-icon">
                      <i className="flaticon-023-management" />
                    </div>
                    <div className="mission-text">
                      <h4>Our Experience</h4>
                      <p>
                        With years of experience in the financial and technology sectors, Digital PayOut is well 
                        equipped to guide investors through the complexities of the cryptocurrency market.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-area area-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="banner-all area-80 text-center">
                  <div className="banner-content">
                    <h3>
                      Take the first step towards building your cryptocurrency investment with Digital PayOut. 
                      Learn more and start investing today!
                    </h3>
                    <Link className="banner-btn" to="/register">
                      Open new account
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feature-area bg-color fix area-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="feature-content">
                  <div className="feature-images">
                    <img alt="" src="img/feature/f1.jpg" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="feature-text">
                  <h3>Your investment money is more safe and secure</h3>
                  <p>
                    At Digital PayOut, we offer a secure, user-friendly platform for individuals and institutions 
                    to invest in Bitcoin and tap into its vast potential to earn massive ROI on your investment. 
                    Whether you're a seasoned investor or new to the world of cryptocurrency, our expert team and 
                    cutting-edge technology will guide you every step of the way to invest and earn profits on 
                    your investment.
                  </p>
                  <Link className="feature-btn" to="/register">
                    Get started now
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="row margin-row">
              <div className="col-md-6 col-sm-6 hidden-xs">
                <div className="feature-text">
                  <h3>Risk-free investment system with our policy</h3>
                  <p>
                    Replacing a selection maintains the amount of lines. When replacing a selection, 
                    agencies can help define new business objectives and create strategies.
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        Innovation idea latest business technology
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Digital content marketing online clients platform
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Safe secure services for your online email account
                      </a>
                    </li>
                  </ul>
                  <a className="feature-btn" href="#">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="overview-images">
                  <canvas height="240" id="bissChart" width="300" />
                </div>
              </div>
              <div className="hidden-md hidden-lg hidden-sm col-xs-12">
                <div className="feature-text">
                  <h3>Easily grow your business and earn more money</h3>
                  <p>
                    Replacing a selection maintains the amount of lines. When replacing a selection, 
                    agencies can help define new business objectives and create strategies.
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        Innovation idea latest business technology
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Digital content marketing online clients platform
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Safe secure services for your online email account
                      </a>
                    </li>
                  </ul>
                  <a className="feature-btn" href="#">
                    Learn more
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
            <Footer />
    </>
  );
}



// import React from 'react'
// import Header from './components/Header'

// export default function About() {
//   return (
//     <>
//        <div>
//        <Header />
//   <div className="page-area">
//     <div className="breadcumb-overlay" />
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12 col-sm-12 col-xs-12">
//           <div className="breadcrumb text-center">
//             <div className="section-headline white-headline">
//               <h3>
//                 About us
//               </h3>
//             </div>
//             <ul className="breadcrumb-bg">
//               <li className="home-bread">
//                 Home
//               </li>
//               <li>
//                 About us
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="about-area page-padding">
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 col-sm-12 col-xs-12">
//           <div className="about-image">
//             <img
//               alt=""
//               src="img/about/ab.jpg"
//             />
//             <div className="video-content">
//               <a
//                 className="video-play vid-zone"
//                 href="https://www.youtube.com/watch?v=O33uuBh6nXA"
//               >
//                 <i className="fa fa-play" />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6 col-sm-12 col-xs-12">
//           <div className="about-content">
//             <h3>
//               A Investment firm is a business of one or more experts that provides professional investment service
//             </h3>
//             <p>
//               The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy text using the starting sequence "Lorem ipsum". Fortunately, the phrase 'Lorem Ipsum' is now recognized by electronic pre-press systems and, when found, an alarm can be raised.
//             </p>
//             <div className="about-details">
//               <ul className="marker-list">
//                 <li>
//                   The phrasal sequence of the Lorem Ipsum text.
//                 </li>
//                 <li>
//                   ducimus adipisci voluptas consectetur adipisicing.
//                 </li>
//                 <li>
//                   consectetur adipisicing elit praesentium maxime.
//                 </li>
//                 <li>
//                   programmes can generate dummy text using..
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="about-feature-area bg-color area-padding-2">
//     <div className="container">
//       <div className="row">
//         <div className="about-mission">
//           <div className="col-md-4 col-sm-4 col-xs-12">
//             <div className="mission-about">
//               <div className="mission-icon">
//                 <i className="flaticon-004-bar-chart" />
//               </div>
//               <div className="mission-text">
//                 <h4>
//                   Our Mission
//                 </h4>
//                 <p>
//                   The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programme
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 col-sm-4 col-xs-12">
//             <div className="mission-about">
//               <div className="mission-icon">
//                 <i className="flaticon-031-release" />
//               </div>
//               <div className="mission-text">
//                 <h4>
//                   Our Vision
//                 </h4>
//                 <p>
//                   The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programme
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 col-sm-4 col-xs-12">
//             <div className="mission-about">
//               <div className="mission-icon">
//                 <i className="flaticon-023-management" />
//               </div>
//               <div className="mission-text">
//                 <h4>
//                   Our Experience
//                 </h4>
//                 <p>
//                   The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programme
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="banner-area area-padding">
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12 col-sm-12 col-xs-12">
//           <div className="banner-all area-80 text-center">
//             <div className="banner-content">
//               <h3>
//                 Our worldwide integration partner work with long time relationship{' '}
//               </h3>
//               <a
//                 className="banner-btn"
//                 href="#"
//               >
//                 Open new account
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="feature-area bg-color fix area-padding">
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 col-sm-6 col-xs-12">
//           <div className="feature-content">
//             <div className="feature-images">
//               <img
//                 alt=""
//                 src="img/feature/f1.jpg"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6 col-sm-6 col-xs-12">
//           <div className="feature-text">
//             <h3>
//               Your investment money more safe and secure
//             </h3>
//             <p>
//               Replacing a  maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create. Replacing a  maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create. Replacing a  maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create.{' '}
//             </p>
//             <a
//               className="feature-btn"
//               href="#"
//             >
//               Get started now
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="row margin-row">
//         <div className="col-md-6 col-sm-6 hidden-xs">
//           <div className="feature-text">
//             <h3>
//               Risk free investment system of our policy
//             </h3>
//             <p>
//               Replacing a  maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create
//             </p>
//             <ul>
//               <li>
//                 <a href="#">
//                   Innovation idea latest business tecnology
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   Digital content marketing online clients plateform
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   Safe secure services for you online email account
//                 </a>
//               </li>
//             </ul>
//             <a
//               className="feature-btn"
//               href="#"
//             >
//               Learn about more
//             </a>
//           </div>
//         </div>
//         <div className="col-md-6 col-sm-6 col-xs-12">
//           <div className="overview-images">
//             <canvas
//               height="240"
//               id="bissChart"
//               width="300"
//             />
//           </div>
//         </div>
//         <div className="hidden-md hidden-lg hidden-sm col-xs-12">
//           <div className="feature-text">
//             <h3>
//               Easily grow your business earn more money
//             </h3>
//             <p>
//               Replacing a  maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create
//             </p>
//             <ul>
//               <li>
//                 <a href="#">
//                   Innovation idea latest business tecnology
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   Digital content marketing online clients plateform
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   Safe secure services for you online email account
//                 </a>
//               </li>
//             </ul>
//             <a
//               className="feature-btn"
//               href="#"
//             >
//               Learn more
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//     </>
//   )
// }
