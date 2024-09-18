import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';

const BlogDetails = () => {
  const { id } = useParams();  // Get the blog post ID from the URL
  const [blogPost, setBlogPost] = useState(null);
  const [error, setError] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const autoScrollInterval = 3000; // Interval for auto-scrolling

  // Images and text content for the carousel
  const carouselItems = [
    {
      id: 1,
      imgSrc: '../img/crypto/cryto6.jpeg',
      title: 'Join the Digital PayOut community',
      benefits: [
        'Potential for high returns on investment',
        'Investing and investment withdrawal'
      ]
    },
    {
      id: 2,
      imgSrc: '../img/crypto/cryto2.jpeg',
      title: 'Join the Digital PayOut community',
      benefits: [
        'Diversification of your investment portfolio',
        'Investing and investment withdrawal'
      ]
    },
    {
      id: 3,
      imgSrc: '../img/crypto/cryto3.jpeg',
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



  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/api/blogs/view/${id}`);
        if (response && response.data) {
          setBlogPost(response.data.data);
        } else {
          setError('Blog post not found');
        }
      } catch (error) {
        console.error('Unable to fetch blog post', error);
        setError('An error occurred while fetching the blog post');
      }
    };

    fetchBlogPost();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!blogPost) {
    return <div>Loading...</div>;  // Loading state
  }

  return (
    <>
      <Header />
      <div className="crypto-carousel-area w-100 h-100 container-fluid" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/bg5.jpg')" }}>
      <div id="cryptoCarousel" className="carousel slide" data-ride="carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ol className="carousel-indicators">
          {carouselItems.map((item, index) => (
            <li key={item.id} data-target="#cryptoCarousel" data-slide-to={index} className={index === currentIndex ? 'active' : ''} />
          ))}
        </ol>
        <div className="carousel-inner col-sm-12">
          {carouselItems.map((item, index) => (
            <div key={item.id} className={`item ${index === currentIndex ? 'active' : ''}`}>
              <div className="carousel-content container-fluid">
                <div className="carousel-image col-sm-4">
                  <img src={item.imgSrc} alt={`Crypto ${item.id}`} width={400}/>
                  <Link to="/register" className="ready-btn left-btn animated bounceIn"
                   style={{  left: "50%", transform: "translateX(-50%)", zIndex: "-1" }}
                  //  style={{ position: "absolute", top: "210px", padding: "5px", left: "50%", transform: "translateX(-50%)", zIndex: "-3" }}
                   >Get started</Link>

                </div>
                <div className="carousel-text col-sm-12" style={{
                  color: '#fff', 
                  border: '1px solid #f0e000', // Border color and width
                  borderRight: '1px solid #f0e000', // Border color and width
                  borderLeft: '1px solid #f0e000', // Border color and width
                  borderBottom: '1px solid #f0e000', // Border color and width
                  borderRadius: '10px',       // Rounded corners
                  backgroundColor:'#000033',
                  // paddingBottom:20,
                  padding:25,
                  // justifyContent:'space-between'
                }}>
                  <h2 className="text-white" style={{ fontWeight: "bold", color: "#fff", fontSize: "14px", lineHeight: "1.5", borderRadius:1, borderBottom:'2px solid #f0e00f' }}>
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
        {/* <div className="layer-1-3">
          <Link to="/register" className="ready-btn left-btn animated bounceIn" style={{ position: "absolute", top: "210px", padding: "5px", left: "50%", transform: "translateX(-50%)", zIndex: "-3" }}>Get started</Link>
        </div> */}
      </div>
    </div>
      <div className="blog-details-area bg-color area-padding">
        <div className="container" style={{
                  color: '#fff',
                  border: '1px solid #f0e000',
                  borderRadius: '10px',
                  backgroundColor: '#000033',
                  paddingBottom: 20,
                  
                  justifyContent:'center'
                }}>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h2 style={{
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: "26px",
                  lineHeight: "1.2",
                }}>{blogPost.title}</h2>
                <div className="blog-meta" >
                  <span className="admin-type"  style={{
                  fontWeight: "bold",
                  color: "#fff",
                //   fontSize: "46px",
                  lineHeight: "1.2",
                }}>
                    <i className="fa fa-user" /> {blogPost.author}
                  </span>
                  <span className="date-type"  style={{
                  fontWeight: "bold",
                  color: "#fff",
                //   fontSize: "46px",
                  lineHeight: "1.2",
                }}>
                    <i className="fa fa-calendar" /> {blogPost.createdAt}
                  </span>
                  <span className="comments-type"  style={{
                  fontWeight: "bold",
                  color: "#fff",
                //   fontSize: "46px",
                  lineHeight: "1.2",
                }}>
                    <i className="fa fa-comment-o" /> {blogPost.comments || 0} Comments
                  </span>
                </div>
                <p style={{ color: '#000033', marginTop: '10px', backgroundColor:'#fff' }}>
                  <marquee>

                  Stay updated with the latest trends and insights in the crypto investment world.
                  </marquee>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="single-blog-details">
                <div className="blog-details-content" style={{
                  color: '#fff',
                  border: '1px solid #fff',
                  borderRadius: '10px',
                  backgroundColor: '#fff',
                  paddingBottom: 20,
                  justifyContent:'space-around',
                  alignContent:'center',
                  alignSelf:'center',
                  alignItems:'center',
                  flex:1,
                  padding:30,
                }}>
                  {/* Blog Image */}
                  {blogPost.imageUrl && (
                    <img
                      src={`http://localhost:3005/${blogPost.imageUrl}`}
                      alt={blogPost.title}
                      className="img-responsive"
                      style={{ width: '100%', marginBottom: '20px' }}
                    />
                  )}
                  {/* Blog Content */}
                  <p>{blogPost.content}</p>
                </div>
              </div>
            </div>

           
          </div>

          <div className="row">
            <div className="col-md-12">
              <Link to="/blog" className="btn btn-primary">
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
