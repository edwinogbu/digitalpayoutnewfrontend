// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // Separate icons list
// const icons = [
//   "flaticon-035-savings",
//   "flaticon-034-reward",
//   "flaticon-016-graph",
//   "flaticon-043-world"
// ];

// const TestimonialCarousel = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch testimonials from the API
//     const fetchTestimonials = async () => {
//       try {
//         const response = await axios.get('https://your-api-url.com/testimonials');
//         setTestimonials(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching testimonials:', error);
//         setLoading(false);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   useEffect(() => {
//     // Autoplay the carousel
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 3000); // Change the speed as needed

//     return () => clearInterval(interval);
//   }, [testimonials]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <div className="counter-area fix area-padding-2" style={{ paddingTop: "50px", border: "2px solid #000033", borderRadius: "25px" }}>
//       <div className="container">
//         <div className="section-headline text-center">
//           <h3 style={{ fontWeight: "bold", color: "#000033", fontSize: "16px", lineHeight: "1.2" }}>
//             Testimonials
//           </h3>
//         </div>

//         {loading ? (
//           // Loading spinner
//           <div className="text-center">
//             <div className="spinner-border" role="status" style={{ color: "#000033" }}>
//               <span className="sr-only">Loading...</span>
//             </div>
//           </div>
//         ) : testimonials.length > 0 ? (
//           <div id="counterCarousel" className="carousel slide" data-ride="carousel">
//             <div className="carousel-inner">
//               {testimonials.slice(currentIndex, currentIndex + 4).map((testimonial, idx) => (
//                 <div className={`item ${idx === 0 ? 'active' : ''}`} key={testimonial.id}>
//                   <div className="row">
//                     <div className="col-md-3 col-sm-6 col-xs-12 testimonial-card">
//                       <div className="fun_text">
//                         <span className="counter-icon"><i className={icons[idx % icons.length]} /></span>
//                         <span className="counter" style={{ color: "#fff" }}>${testimonial.amount}</span>
//                         <h4 style={{ color: "#fff" }}>- {testimonial.name}</h4>
//                         <p style={{ color: "#fff" }}>"{testimonial.message}"</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <a className="left carousel-control" href="#counterCarousel" role="button" data-slide="prev" onClick={handlePrev}>
//               <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
//               <span className="sr-only">Previous</span>
//             </a>
//             <a className="right carousel-control" href="#counterCarousel" role="button" data-slide="next" onClick={handleNext}>
//               <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
//               <span className="sr-only">Next</span>
//             </a>
//           </div>
//         ) : (
//           <p>No testimonials available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TestimonialCarousel;



// import React, { useState, useEffect } from 'react';
// import { Modal, Button } from 'react-bootstrap';
// import Swal from 'sweetalert2';

// const TestimonialCarousel = () => {
//   const [testimonials, setTestimonials] = useState(dummyTestimonials); // Using dummy data
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedTestimonial, setSelectedTestimonial] = useState(null);

//   useEffect(() => {
//     // Autoplay the carousel
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 3000); // Change the speed as needed

//     return () => clearInterval(interval);
//   }, [testimonials]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   };

//   const handleTestimonialClick = (testimonial) => {
//     setSelectedTestimonial(testimonial);
//   };

//   const handleCloseModal = () => {
//     setSelectedTestimonial(null);
//   };

//   return (
//     <div className="counter-area fix area-padding-2" style={{ paddingTop: "50px", border: "2px solid #000033", borderRadius: "25px" }}>
//       <div className="container">
//         <div className="section-headline text-center">
//           <h3 style={{ fontWeight: "bold", color: "#000033", fontSize: "16px", lineHeight: "1.2" }}>
//             Testimonials
//           </h3>
//         </div>

//         {testimonials.length > 0 ? (
//           <div id="counterCarousel" className="carousel slide" data-ride="carousel">
//             <div className="carousel-inner">
//               {testimonials.slice(currentIndex, currentIndex + 4).map((testimonial, idx) => (
//                 <div className={`item ${idx === 0 ? 'active' : ''}`} key={testimonial.id} onClick={() => handleTestimonialClick(testimonial)}>
//                   <div className="row">
//                     <div className="col-md-12 col-sm-12 col-xs-12 testimonial-card">
//                       <div className="fun_text">
//                         <img src={testimonial.imagePath} alt={testimonial.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
//                         <span className="counter" style={{ color: "#fff" }}>${testimonial.amount}</span>
//                         <h4 style={{ color: "#fff" }}>- {testimonial.name}</h4>
//                         <p style={{ color: "#fff" }}>"{testimonial.message}"</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <a className="left carousel-control" href="#counterCarousel" role="button" data-slide="prev" onClick={handlePrev}>
//               <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
//               <span className="sr-only">Previous</span>
//             </a>
//             <a className="right carousel-control" href="#counterCarousel" role="button" data-slide="next" onClick={handleNext}>
//               <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
//               <span className="sr-only">Next</span>
//             </a>
//           </div>
//         ) : (
//           <p>No testimonials available.</p>
//         )}

//         {/* Modal */}
//         {selectedTestimonial && (
//           <Modal show={!!selectedTestimonial} onHide={handleCloseModal}>
//             <Modal.Header closeButton>
//               <Modal.Title>{selectedTestimonial.name}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <img src={selectedTestimonial.imagePath} alt={selectedTestimonial.name} style={{ width: '100%' }} />
//               <p><strong>Amount:</strong> ${selectedTestimonial.amount}</p>
//               <p><strong>Message:</strong> {selectedTestimonial.message}</p>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleCloseModal}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         )}
//       </div>
//     </div>
//   );
// };

// // Dummy testimonials data object
// const dummyTestimonials = [
//   {
//     id: 1,
//     name: "John Doe",
//     amount: 150.50,
//     message: "This service is amazing! I've doubled my investment.",
//     imagePath: "https://via.placeholder.com/100"  // Replace with your image URL or use a placeholder
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     amount: 200.00,
//     message: "Fantastic platform. Highly recommend it to everyone.",
//     imagePath: "https://via.placeholder.com/100"
//   },
//   {
//     id: 3,
//     name: "Alice Johnson",
//     amount: 300.75,
//     message: "The returns are consistent and the service is top-notch.",
//     imagePath: "https://via.placeholder.com/100"
//   },
//   {
//     id: 4,
//     name: "Bob Brown",
//     amount: 400.90,
//     message: "A reliable platform for crypto investments.",
//     imagePath: "https://via.placeholder.com/100"
//   }
// ];

// export default TestimonialCarousel;


import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] = useState(dummyTestimonials); // Using dummy data
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const wordLimit = 15; // Set a word limit for the testimonial message
  const autoScrollInterval = 3000; // Interval for auto-scrolling

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 4));
      }
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [testimonials, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 4));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(testimonials.length / 4)) % Math.ceil(testimonials.length / 4));
  };

  const truncateMessage = (message) => {
    const words = message.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return message;
  };

  const handleTestimonialClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const handleCloseModal = () => {
    setSelectedTestimonial(null);
  };

  const handleMouseEnter = () => {
    setIsPaused(true); // Pause auto-scroll on mouse enter
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Resume auto-scroll on mouse leave
  };

  return (
    <div className="counter-area fix area-padding-2" style={{ paddingTop: "50px", border: "2px solid #000033", borderRadius: "25px" }}>
      <div className="container">
        <div className="section-headline text-center">
          <h3 style={{
      // fontFamily: "'Brush Script MT', cursive",
      fontWeight: "bold",
      color: "#000033",
      fontSize: "26px", 
      lineHeight: "1.2", 
  }}>
            Testimonials
          </h3>
          <p  style={{color:'#000033'}}>Welcome to Digital PayOut, your gateway to the world of cryptocurrency investment. Here’s what people are saying about us:</p>

        </div>

        {testimonials.length > 0 ? (
          <div
            id="counterCarousel"
            className="carousel slide"
            data-ride="carousel"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="carousel-inner">
              {Array.from({ length: Math.ceil(testimonials.length / 4) }).map((_, carouselIndex) => (
                <div className={`item ${carouselIndex === currentIndex ? 'active' : ''}`} key={carouselIndex}>
                  <div className="row">
                    {testimonials.slice(carouselIndex * 4, carouselIndex * 4 + 4).map((testimonial) => (
                      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 testimonial-card" key={testimonial.id}>
                        <div className="fun_text" style={{ minHeight: '200px', textAlign: 'center' }}>
                          <img 
                            src={testimonial.imagePath} 
                            alt={testimonial.name} 
                            style={{ 
                              width: '80px', 
                              height: '80px', 
                              borderRadius: '50%',
                              objectFit: 'cover' 
                            }} 
                          />
                          <span className="counter" style={{ color: "#fff", fontSize: "18px", display: 'block', marginTop: '10px' }}>
                            ${testimonial.amount}
                          </span>
                          <h4 style={{ color: "#fff", fontSize: "16px" }}>- {testimonial.name}</h4>
                          <p style={{ color: "#fff", fontSize: "14px", padding: "0 10px" }}>
                            "{truncateMessage(testimonial.message)}"
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <a 
              className="left carousel-control" 
              href="#counterCarousel" 
              role="button" 
              data-slide="prev" 
              onClick={handlePrev}
              style={{ fontSize: "24px" }}
            >
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a 
              className="right carousel-control" 
              href="#counterCarousel" 
              role="button" 
              data-slide="next" 
              onClick={handleNext}
              style={{ fontSize: "24px" }}
            >
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        ) : (
          <p>No testimonials available.</p>
        )}

        {/* Modal */}
        {selectedTestimonial && (
          <Modal show={!!selectedTestimonial} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedTestimonial.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img 
                src={selectedTestimonial.imagePath} 
                alt={selectedTestimonial.name} 
                style={{ width: '100%', borderRadius: '10px' }} 
              />
              <p><strong>Amount:</strong> ${selectedTestimonial.amount}</p>
              <p><strong>Message:</strong> {selectedTestimonial.message}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
};

// Dummy testimonials data object
const dummyTestimonials = [
  {
    id: 1,
    name: "John Doe",
    amount: 150.50,
    message: "This service is amazing! I've doubled my investment.",
    imagePath: "https://via.placeholder.com/100"
  },
  {
    id: 2,
    name: "Jane Smith",
    amount: 200.00,
    message: "Fantastic platform. Highly recommend it to everyone.",
    imagePath: "https://via.placeholder.com/100"
  },
  {
    id: 3,
    name: "Alice Johnson",
    amount: 300.75,
    message: "The returns are consistent and the service is top-notch.",
    imagePath: "https://via.placeholder.com/100"
  },
  {
    id: 4,
    name: "Bob Brown",
    amount: 400.90,
    message: "A reliable platform for crypto investments.",
    imagePath: "https://via.placeholder.com/100"
  },
  {
    id: 5,
    name: "Chris Green",
    amount: 500.00,
    message: "Great experience with this investment platform.",
    imagePath: "https://via.placeholder.com/100"
  },
  {
    id: 6,
    name: "Eve White",
    amount: 600.25,
    message: "Highly satisfied with the returns and service.",
    imagePath: "https://via.placeholder.com/100"
  },
  {
    id: 7,
    name: "Frank Black",
    amount: 700.75,
    message: "Excellent platform with great support.",
    imagePath: "https://via.placeholder.com/100"
  },
  {
    id: 8,
    name: "Grace Blue",
    amount: 800.90,
    message: "I've been using this platform for months, and it's the best.",
    imagePath: "https://via.placeholder.com/100"
  }
];

export default TestimonialCarousel;




// import React, { useState, useEffect } from 'react';
// import { Modal, Button } from 'react-bootstrap';
// import Swal from 'sweetalert2';

// const TestimonialCarousel = () => {
//   const [testimonials, setTestimonials] = useState(dummyTestimonials); // Using dummy data
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedTestimonial, setSelectedTestimonial] = useState(null);

//   useEffect(() => {
//     // Autoplay the carousel
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 4));
//     }, 3000); // Change the speed as needed

//     return () => clearInterval(interval);
//   }, [testimonials]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 4));
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(testimonials.length / 4)) % Math.ceil(testimonials.length / 4));
//   };

//   const handleTestimonialClick = (testimonial) => {
//     setSelectedTestimonial(testimonial);
//   };

//   const handleCloseModal = () => {
//     setSelectedTestimonial(null);
//   };

//   return (
//     <div className="counter-area fix area-padding-2" style={{ paddingTop: "50px", border: "2px solid #000033", borderRadius: "25px" }}>
//       <div className="container">
//         <div className="section-headline text-center">
//           <h3 style={{ fontWeight: "bold", color: "#000033", fontSize: "16px", lineHeight: "1.2" }}>
//             Testimonials
//           </h3>
//         </div>

//         {testimonials.length > 0 ? (
//           <div id="counterCarousel" className="carousel slide" data-ride="carousel">
//             <div className="carousel-inner">
//               {Array.from({ length: Math.ceil(testimonials.length / 4) }).map((_, carouselIndex) => (
//                 <div className={`item ${carouselIndex === currentIndex ? 'active' : ''}`} key={carouselIndex}>
//                   <div className="row">
//                     {testimonials.slice(carouselIndex * 4, carouselIndex * 4 + 4).map((testimonial) => (
//                       <div className="col-md-3 col-sm-6 col-xs-12 testimonial-card" key={testimonial.id}>
//                         <div className="fun_text">
//                           <img src={testimonial.imagePath} alt={testimonial.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
//                           <span className="counter" style={{ color: "#fff" }}>${testimonial.amount}</span>
//                           <h4 style={{ color: "#fff" }}>- {testimonial.name}</h4>
//                           <p style={{ color: "#fff" }}>"{testimonial.message}"</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <a className="left carousel-control" href="#counterCarousel" role="button" data-slide="prev" onClick={handlePrev}>
//               <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
//               <span className="sr-only">Previous</span>
//             </a>
//             <a className="right carousel-control" href="#counterCarousel" role="button" data-slide="next" onClick={handleNext}>
//               <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
//               <span className="sr-only">Next</span>
//             </a>
//           </div>
//         ) : (
//           <p>No testimonials available.</p>
//         )}

//         {/* Modal */}
//         {selectedTestimonial && (
//           <Modal show={!!selectedTestimonial} onHide={handleCloseModal}>
//             <Modal.Header closeButton>
//               <Modal.Title>{selectedTestimonial.name}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <img src={selectedTestimonial.imagePath} alt={selectedTestimonial.name} style={{ width: '100%' }} />
//               <p><strong>Amount:</strong> ${selectedTestimonial.amount}</p>
//               <p><strong>Message:</strong> {selectedTestimonial.message}</p>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleCloseModal}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         )}
//       </div>
//     </div>
//   );
// };

// // Dummy testimonials data object
// const dummyTestimonials = [
//   {
//     id: 1,
//     name: "John Doe",
//     amount: 150.50,
//     message: "This service is amazing! I've doubled my investment.",
//     imagePath: "https://via.placeholder.com/100"  // Replace with your image URL or use a placeholder
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     amount: 200.00,
//     message: "Fantastic platform. Highly recommend it to everyone.",
//     imagePath: "https://via.placeholder.com/100"
//   },
//   {
//     id: 3,
//     name: "Alice Johnson",
//     amount: 300.75,
//     message: "The returns are consistent and the service is top-notch.",
//     imagePath: "https://via.placeholder.com/100"
//   },
//   {
//     id: 4,
//     name: "Bob Brown",
//     amount: 400.90,
//     message: "A reliable platform for crypto investments.",
//     imagePath: "https://via.placeholder.com/100"
//   },
//   {
//     id: 5,
//     name: "Chris Green",
//     amount: 500.00,
//     message: "Great experience with this investment platform.",
//     imagePath: "https://via.placeholder.com/100"
//   },
//   {
//     id: 6,
//     name: "Eve White",
//     amount: 600.25,
//     message: "Highly satisfied with the returns and service.",
//     imagePath: "https://via.placeholder.com/100"
//   },
//   {
//     id: 7,
//     name: "Frank Black",
//     amount: 700.75,
//     message: "Excellent platform with great support.",
//     imagePath: "https://via.placeholder.com/100"
//   },
//   {
//     id: 8,
//     name: "Grace Blue",
//     amount: 800.90,
//     message: "I've been using this platform for months, and it's the best.",
//     imagePath: "https://via.placeholder.com/100"
//   }
// ];

// export default TestimonialCarousel;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Modal, Button } from 'react-bootstrap';

// const TestimonialCarousel = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [selectedTestimonial, setSelectedTestimonial] = useState(null);

//   useEffect(() => {
//     // Fetch testimonials from the API
//     const fetchTestimonials = async () => {
//       try {
//         const response = await axios.get('https://your-api-url.com/testimonials');
//         setTestimonials(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching testimonials:', error);
//         setLoading(false);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   useEffect(() => {
//     // Autoplay the carousel
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 3000); // Change the speed as needed

//     return () => clearInterval(interval);
//   }, [testimonials]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   };

//   const handleTestimonialClick = (testimonial) => {
//     setSelectedTestimonial(testimonial);
//   };

//   const handleCloseModal = () => {
//     setSelectedTestimonial(null);
//   };

//   return (
//     <div className="counter-area fix area-padding-2" style={{ paddingTop: "50px", border: "2px solid #000033", borderRadius: "25px" }}>
//       <div className="container">
//         <div className="section-headline text-center">
//           <h3 style={{ fontWeight: "bold", color: "#000033", fontSize: "16px", lineHeight: "1.2" }}>
//             Testimonials
//           </h3>
//         </div>

//         {loading ? (
//           // Loading spinner
//           <div className="text-center">
//             <div className="spinner-border" role="status" style={{ color: "#000033" }}>
//               <span className="sr-only">Loading...</span>
//             </div>
//           </div>
//         ) : testimonials.length > 0 ? (
//           <div id="counterCarousel" className="carousel slide" data-ride="carousel">
//             <div className="carousel-inner">
//               {testimonials.slice(currentIndex, currentIndex + 4).map((testimonial, idx) => (
//                 <div className={`item ${idx === 0 ? 'active' : ''}`} key={testimonial.id} onClick={() => handleTestimonialClick(testimonial)}>
//                   <div className="row">
//                     <div className="col-md-3 col-sm-6 col-xs-12 testimonial-card">
//                       <div className="fun_text">
//                         <img src={testimonial.imagePath} alt={testimonial.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
//                         <span className="counter" style={{ color: "#fff" }}>${testimonial.amount}</span>
//                         <h4 style={{ color: "#fff" }}>- {testimonial.name}</h4>
//                         <p style={{ color: "#fff" }}>"{testimonial.message}"</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <a className="left carousel-control" href="#counterCarousel" role="button" data-slide="prev" onClick={handlePrev}>
//               <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
//               <span className="sr-only">Previous</span>
//             </a>
//             <a className="right carousel-control" href="#counterCarousel" role="button" data-slide="next" onClick={handleNext}>
//               <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
//               <span className="sr-only">Next</span>
//             </a>
//           </div>
//         ) : (
//           <p>No testimonials available.</p>
//         )}

//         {/* Modal */}
//         {selectedTestimonial && (
//           <Modal show={!!selectedTestimonial} onHide={handleCloseModal}>
//             <Modal.Header closeButton>
//               <Modal.Title>{selectedTestimonial.name}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <img src={selectedTestimonial.imagePath} alt={selectedTestimonial.name} style={{ width: '100%' }} />
//               <p><strong>Amount:</strong> ${selectedTestimonial.amount}</p>
//               <p><strong>Message:</strong> {selectedTestimonial.message}</p>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleCloseModal}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TestimonialCarousel;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Separate icons list
// const icons = [
//   "flaticon-035-savings",
//   "flaticon-034-reward",
//   "flaticon-016-graph",
//   "flaticon-043-world"
// ];

// const ITEMS_PER_PAGE = 4;

// const TestimonialCarousel = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch testimonials from the API
//     const fetchTestimonials = async () => {
//       try {
//         const response = await axios.get('https://your-api-url.com/testimonials');
//         setTestimonials(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching testimonials:', error);
//         setLoading(false);
//         setError('Failed to load testimonials. Please try again later.');
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const currentTestimonials = testimonials.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

//   return (
//     <div className="counter-area fix area-padding-2" style={{ paddingTop: "50px", border: "2px solid #000033", borderRadius: "25px" }}>
//       <div className="container">
//         <div className="section-headline text-center">
//           <h3 style={{ fontWeight: "bold", color: "#000033", fontSize: "16px", lineHeight: "1.2" }}>
//             Testimonials
//           </h3>
//         </div>

//         {loading ? (
//           // Loading spinner
//           <div className="text-center">
//             <div className="spinner-border" role="status" style={{ color: "#000033" }}>
//               <span className="sr-only">Loading...</span>
//             </div>
//           </div>
//         ) : error ? (
//           // Error message
//           <div className="text-center">
//             <p style={{ color: 'red' }}>{error}</p>
//           </div>
//         ) : currentTestimonials.length > 0 ? (
//           <div id="counterCarousel" className="carousel slide" data-ride="carousel">
//             <div className="carousel-inner">
//               {currentTestimonials.map((testimonial, idx) => (
//                 <div className={`item ${idx === 0 ? 'active' : ''}`} key={testimonial.id}>
//                   <div className="row">
//                     <div className="col-md-3 col-sm-6 col-xs-12 testimonial-card">
//                       <div className="fun_text">
//                         <span className="counter-icon"><i className={icons[idx % icons.length]} /></span>
//                         <span className="counter" style={{ color: "#fff" }}>${testimonial.amount}</span>
//                         <h4 style={{ color: "#fff" }}>- {testimonial.name}</h4>
//                         <p style={{ color: "#fff" }}>"{testimonial.message}"</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <a className="left carousel-control" href="#counterCarousel" role="button" data-slide="prev" onClick={() => handlePageChange((currentPage - 1 + totalPages) % totalPages)}>
//               <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
//               <span className="sr-only">Previous</span>
//             </a>
//             <a className="right carousel-control" href="#counterCarousel" role="button" data-slide="next" onClick={() => handlePageChange((currentPage + 1) % totalPages)}>
//               <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
//               <span className="sr-only">Next</span>
//             </a>
//           </div>
//         ) : (
//           <p>No testimonials available.</p>
//         )}

//         {/* Pagination Controls */}
//         {totalPages > 1 && (
//           <div className="pagination text-center" style={{ marginTop: "20px" }}>
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index}
//                 className={`btn ${index === currentPage ? 'btn-primary' : 'btn-secondary'}`}
//                 onClick={() => handlePageChange(index)}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TestimonialCarousel;
