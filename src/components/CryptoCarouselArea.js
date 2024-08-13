import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CryptoCarouselArea.css'; // Assuming you have a CSS file for additional styling

const CryptoCarouselArea = () => {
  return (
    <div className="crypto-carousel-area" style={{ backgroundImage: 'url("./img/crypto/crytp4.jpeg")', position: 'relative', paddingTop: '50px', border: '2px solid #000033' }}>
      <Carousel id="cryptoCarousel">
        <Carousel.Item>
          <div className="carousel-content">
            <div className="carousel-image col-sm-4">
              <img src="./img/crypto/cryto6.jpeg" alt="Crypto 1" />
            </div>
            <div className="carousel-text col-sm-8">
              <h2 className="text-white">Invest in Cryptocurrency</h2>
              <p className="text-white">Secure your future with digital assets.</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-content">
            <div className="carousel-image col-sm-4">
              <img src="./img/crypto/cryto2.jpeg" alt="Crypto 2" />
            </div>
            <div className="carousel-text col-sm-8">
              <h2 className="text-white">Trusted Digital Payouts</h2>
              <p className="text-white">Fast and reliable transactions.</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-content">
            <div className="carousel-image col-sm-4">
              <img src="./img/crypto/cryto3.jpeg" alt="Crypto 3" />
            </div>
            <div className="carousel-text col-sm-8">
              <h2 className="text-white">Future of Finance</h2>
              <p className="text-white">Join the revolution in digital currency.</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="layer-1-3">
        <a href="#" className="ready-btn left-btn animated bounceIn" style={{ position: 'absolute', top: '210px', padding: '5px', left: '50%', transform: 'translateX(-50%)', zIndex: -3 }}>
          Get Started
        </a>
      </div>
    </div>
  );
};

export default CryptoCarouselArea;
