import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CryptoCurrencyCarouselArea.css';


const CryptoCurrencyCarouselArea = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const autoScrollInterval = 3000; // Interval for auto-scrolling

  // Images and text content for the carousel
  const carouselItems = [
    {
      id: 1,
      imgSrc: './img/crypto/cryto6.jpeg',
      title: 'Join the Digital PayOut community',
      benefits: [
        'Potential for high returns on investment',
        'Investing and investment withdrawal'
      ]
    },
    {
      id: 2,
      imgSrc: './img/crypto/cryto2.jpeg',
      title: 'Join the Digital PayOut community',
      benefits: [
        'Diversification of your investment portfolio',
        'Investing and investment withdrawal'
      ]
    },
    {
      id: 3,
      imgSrc: './img/crypto/cryto3.jpeg',
      title: 'Join the Digital PayOut community',
      benefits: [
        'Investing and investment withdrawal',
        'Diversification of your investment portfolio'
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
      }
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [isPaused, carouselItems.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  const handleMouseEnter = () => {
    setIsPaused(true); // Pause auto-scroll on mouse enter
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Resume auto-scroll on mouse leave
  };

  return (
    <div className="crypto-carousel-area w-25 h-25" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./images/bg5.jpg')" }}>
      <div id="cryptoCarousel" className="carousel slide" data-ride="carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ol className="carousel-indicators">
          {carouselItems.map((item, index) => (
            <li key={item.id} data-target="#cryptoCarousel" data-slide-to={index} className={index === currentIndex ? 'active' : ''} />
          ))}
        </ol>
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div key={item.id} className={`item ${index === currentIndex ? 'active' : ''}`}>
              <div className="carousel-content">
                <div className="carousel-image col-sm-4">
                  <img src={item.imgSrc} alt={`Crypto ${item.id}`} />
                </div>
                <div className="carousel-text col-sm-12">
                  <h2 className="text-white" style={{ fontWeight: "bold", color: "#fff", fontSize: "16px", lineHeight: "1.2" }}>
                    {item.title}
                  </h2>
                  {item.benefits.map((benefit, idx) => (
                    <p key={idx} className="text-white" style={{ fontWeight: "bold", color: "#fff", fontSize: "12px", lineHeight: "1.2" }}>
                      - {benefit}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <a className="left carousel-control" href="#cryptoCarousel" role="button" data-slide="prev" onClick={handlePrev}>
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#cryptoCarousel" role="button" data-slide="next" onClick={handleNext}>
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
        <div className="layer-1-3">
          <Link to="/register" className="ready-btn left-btn animated bounceIn" style={{ position: "absolute", top: "210px", padding: "5px", left: "50%", transform: "translateX(-50%)", zIndex: "-3" }}>Get started</Link>
        </div>
      </div>
    </div>
  );
};

export default CryptoCurrencyCarouselArea;
