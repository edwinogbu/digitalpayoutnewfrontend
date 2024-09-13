import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CryptoCurrencyCarouselArea from './components/CryptoCurrencyCarouselArea';

const blogPosts = [
  {
    id: 1,
    title: "Crypto Market Overview: Key Trends and Future Predictions",
    image: "img/blog/b1.jpg",
    altText: "Crypto Market Overview",
    date: "17 August, 2024",
    comments: 13,
  },
  {
    id: 2,
    title: "How Bitcoin's Market Influence is Shaping Global Finance",
    image: "img/blog/b2.jpg",
    altText: "Bitcoin's Market Influence",
    date: "17 August, 2024",
    comments: 16,
  },
  {
    id: 3,
    title: "The Rise of Decentralized Finance: What Investors Should Know",
    image: "img/blog/b3.jpg",
    altText: "Decentralized Finance",
    date: "17 August, 2024",
    comments: 7,
  },
  {
    id: 4,
    title: "Ethereum 2.0: What the Upgrade Means for the Future of Crypto",
    image: "img/blog/b4.jpg",
    altText: "Ethereum 2.0 Upgrade",
    date: "17 August, 2024",
    comments: 32,
  },
  {
    id: 5,
    title: "Regulatory Challenges and Their Impact on Crypto Markets",
    image: "img/blog/b5.jpg",
    altText: "Regulatory Challenges in Crypto",
    date: "17 August, 2024",
    comments: 32,
  },
  {
    id: 6,
    title: "Top 5 Altcoins to Watch in 2024",
    image: "img/blog/b6.jpg",
    altText: "Altcoins to Watch in 2024",
    date: "17 August, 2024",
    comments: 32,
  },
];

const Blog = () => {
  return (
    <>
      <Header />
      
        {/* Cryptocurrency Carousel Area */}
        <CryptoCurrencyCarouselArea />
      <div className="blog-area fix bg-color area-padding-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h3 style={{
        // fontFamily: "'Brush Script MT', cursive",
        fontWeight: "bold",
        color: "#000033",
        fontSize: "46px", 
        lineHeight: "1.2", 
    }}>Global investment plan news</h3>
                <p>
                  Stay updated with the latest trends and insights in the crypto investment world.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="blog-grid home-blog">
              {blogPosts.map((post) => (
                <div key={post.id} className="col-md-4 col-sm-5 col-xs-12"  style={{
                  color: '#fff', 
                  border: '1px solid #f0e000', // Border color and width
                  borderRight: '1px solid #f0e000', // Border color and width
                  borderLeft: '1px solid #f0e000', // Border color and width
                  borderBottom: '1px solid #f0e000', // Border color and width
                  borderRadius: '10px',       // Rounded corners
                  backgroundColor:'#000033',
                  paddingBottom:20,
                  padding:5,
                  justifyContent:'space-between'
                }}>
                  <div className="single-blog">
                    <div className="blog-image">
                      <Link className="image-scale" to={`/blog/${post.id}`}>
                        <img src={post.image} alt={post.altText} />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="admin-type">
                          <i className="fa fa-user" /> Admin
                        </span>
                        <span className="date-type">
                          <i className="fa fa-calendar" /> {post.date}
                        </span>
                        <span className="comments-type">
                          <i className="fa fa-comment-o" /> {post.comments}
                        </span>
                      </div>
                      <Link to={`/blog/${post.id}`}>
                        <h4 style={{color:'#fff'}}>{post.title}</h4>
                      </Link>
                      <Link to={`/blog/${post.id}`} className="read-more-btn" style={{color:'#f0ef00'}}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;



// import React from 'react'
// import Header from './components/Header'
// import Footer from './components/Footer'

// export default function Blog() {
//   return (
//     <>
//        <div>
//        <Header />
//   {/* <div className="page-area" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./images/bg5.jpg')" }}>
//     <div className="breadcumb-overlay" />
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12 col-sm-12 col-xs-12">
//           <div className="breadcrumb text-center">
//             <div className="section-headline white-headline">
//               <h3>
//                 Blog
//               </h3>
//             </div>
//             <ul className="breadcrumb-bg">
//               <li className="home-bread">
//                 Home
//               </li>
//               <li>
//                 Blog
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div> */}
//     <div className="crypto-carousel-area w-25 h-25" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./images/bg5.jpg')" }}>

// <div id="cryptoCarousel" className="carousel slide" data-ride="carousel">
//   <ol className="carousel-indicators">
//     <li data-target="#cryptoCarousel" data-slide-to={0} className="active" />
//     <li data-target="#cryptoCarousel" data-slide-to={1} />
//     <li data-target="#cryptoCarousel" data-slide-to={2} />
//   </ol>
//   <div className="carousel-inner">
//     <div className="item active">
//       <div className="carousel-content">
//         <div className="carousel-image col-sm-4">
//           <img src="./img/crypto/cryto6.jpeg" alt="Crypto 1" />
//           <p className="text-white" style={{
//               fontFamily: "'Brush Script MT', cursive",
//               fontWeight: "bold",
//               color: "#fff",
//               fontSize: "36px",  
//               lineHeight: "1.2", 
//           }}>
//         - Potential for high returns on investment
//       </p>
//         </div>
//         <div className="carousel-text col-sm-8">
//           <h2 className="text-white" style={{
//               fontFamily: "'Brush Script MT', cursive",
//               fontWeight: "bold",
//               color: "#fff",
//               fontSize: "36px",  
//               lineHeight: "1.2", 
//           }}>
            
//             Join the Digital PayOut community today and discover the benefits of investing in Bitcoin, including:

//             </h2>
//           <p className="text-white" style={{
//               // fontFamily: "'Brush Script MT', cursive",
//               fontWeight: "bold",
//               color: "#fff",
//               fontSize: "36px",  
//               lineHeight: "1.2", 
//           }}>
//         - Potential for high returns on investment
//       </p>
//         </div>
//       </div>
//     </div>
//     <div className="item">
//       <div className="carousel-content">
//         <div className="carousel-image col-sm-4">
//           <img src="./img/crypto/cryto2.jpeg" alt="Crypto 2" />
//         </div>
//         <div className="carousel-text col-sm-8">
//           <h2 className="text-white"style={{
//               fontFamily: "'Brush Script MT', cursive",
//               fontWeight: "bold",
//               color: "#fff",
//               fontSize: "36px",  
//               lineHeight: "1.2", 
//           }}>
//           Join the Digital PayOut community today and discover the benefits of investing in Bitcoin, including:

//             </h2>
//           <p className="text-white" style={{
//     // fontFamily: "'Brush Script MT', cursive",
//     fontWeight: "bold",
//     color: "#fff",
//     fontSize: "36px",  // Adjust the size as needed
//     lineHeight: "1.2",  // Adjust the line height if needed
// }}>- Diversification of your investment portfolio

// </p>
//         </div>
//       </div>
//     </div>
//     <div className="item">
//       <div className="carousel-content">
//         <div className="carousel-image col-sm-4">
//           <img src="./img/crypto/cryto3.jpeg" alt="Crypto 3" />
//         </div>
//         <div className="carousel-text col-sm-8">
//           <h2 className="text-white" style={{
//               fontFamily: "'Brush Script MT', cursive",
//               fontWeight: "bold",
//               color: "#fff",
//               fontSize: "36px",  
//               lineHeight: "1.2", 
//           }}>
//           Join the Digital PayOut community today and discover the benefits of investing in Bitcoin, including:

//             </h2>
//           <p className="text-white"  style={{
//     // fontFamily: "'Brush Script MT', cursive",
//     fontWeight: "bold",
//     color: "#fff",
//     fontSize: "36px",  // Adjust the size as needed
//     lineHeight: "1.2",  // Adjust the line height if needed
// }}> - investing and investment withdrawal </p>
//         </div>
//       </div>
//     </div>
//   </div>
//   <a className="left carousel-control" href="#cryptoCarousel" role="button" data-slide="prev">
//     <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
//     <span className="sr-only">Previous</span>
//   </a>
//   <a className="right carousel-control" href="#cryptoCarousel" role="button" data-slide="next">
//     <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
//     <span className="sr-only">Next</span>
//   </a>
//   {/* <a href="#" class="btn btn-primary animated bounceIn" style="position: absolute; bottom: 5px; padding: 15px; left: 50%; transform: translateX(-50%); z-index: 3;">Get Started</a> */}
//   <div className="layer-1-3">
//     <a href="#" className="ready-btn left-btn animated bounceIn" style={{"position":"absolute","top":"210px","padding":"5px","left":"50%","-webkit-transform":"translateX(-50%)","-ms-transform":"translateX(-50%)","transform":"translateX(-50%)","z-index":"-3"}}>Get started</a>
//   </div>
// </div>
// </div>
//   <div className="blog-area fix bg-color page-padding">
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12 col-sm-12 col-xs-12">
//           <div className="section-headline text-center">
//             <h3>
//               Global investment plan news
//             </h3>
//             <p>
//               Dummy text is also used to demonstrate the appearance of different typefaces and layouts
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="blog-grid home-blog">
//           <div className="col-md-4 col-sm-6 col-xs-12">
//             <div className="single-blog">
//               <div className="blog-image">
//                 <a
//                   className="image-scale"
//                   href="#"
//                 >
//                   <img
//                     alt=""
//                     src="img/blog/b1.jpg"
//                   />
//                 </a>
//               </div>
//               <div className="blog-content">
//                 <div className="blog-meta">
//                   <span className="admin-type">
//                     <i className="fa fa-user" />
//                     Admin
//                   </span>
//                   <span className="date-type">
//                     <i className="fa fa-calendar" />
//                     20 july, 2019
//                   </span>
//                   <span className="comments-type">
//                     <i className="fa fa-comment-o" />
//                     13
//                   </span>
//                 </div>
//                 <a href="#">
//                   <h4>
//                     Creative design clients response is better
//                   </h4>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 col-sm-6 col-xs-12">
//             <div className="single-blog">
//               <div className="blog-content">
//                 <div className="blog-meta">
//                   <span className="admin-type">
//                     <i className="fa fa-user" />
//                     Admin
//                   </span>
//                   <span className="date-type">
//                     <i className="fa fa-calendar" />
//                     13 may, 2018
//                   </span>
//                   <span className="comments-type">
//                     <i className="fa fa-comment-o" />
//                     16
//                   </span>
//                 </div>
//                 <a href="#">
//                   <h4>
//                     Web development is a best work in future world
//                   </h4>
//                 </a>
//               </div>
//               <div className="blog-image">
//                 <a
//                   className="image-scale"
//                   href="#"
//                 >
//                   <img
//                     alt=""
//                     src="img/blog/b2.jpg"
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 col-sm-6 col-xs-12">
//             <div className="single-blog">
//               <div className="blog-image">
//                 <a
//                   className="image-scale"
//                   href="#"
//                 >
//                   <img
//                     alt=""
//                     src="img/blog/b3.jpg"
//                   />
//                 </a>
//               </div>
//               <div className="blog-content">
//                 <div className="blog-meta">
//                   <span className="admin-type">
//                     <i className="fa fa-user" />
//                     Admin
//                   </span>
//                   <span className="date-type">
//                     <i className="fa fa-calendar" />
//                     24 april, 2019
//                   </span>
//                   <span className="comments-type">
//                     <i className="fa fa-comment-o" />
//                     07
//                   </span>
//                 </div>
//                 <a href="#">
//                   <h4>
//                     You can trust me and business with together
//                   </h4>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 col-sm-6 col-xs-12">
//             <div className="single-blog">
//               <div className="blog-content">
//                 <div className="blog-meta">
//                   <span className="admin-type">
//                     <i className="fa fa-user" />
//                     Admin
//                   </span>
//                   <span className="date-type">
//                     <i className="fa fa-calendar" />
//                     28 june, 2019
//                   </span>
//                   <span className="comments-type">
//                     <i className="fa fa-comment-o" />
//                     32
//                   </span>
//                 </div>
//                 <a href="#">
//                   <h4>
//                     business man want to be benifit any way
//                   </h4>
//                 </a>
//               </div>
//               <div className="blog-image">
//                 <a
//                   className="image-scale"
//                   href="#"
//                 >
//                   <img
//                     alt=""
//                     src="img/blog/b4.jpg"
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 col-sm-6 col-xs-12">
//             <div className="single-blog">
//               <div className="blog-image">
//                 <a
//                   className="image-scale"
//                   href="#"
//                 >
//                   <img
//                     alt=""
//                     src="img/blog/b5.jpg"
//                   />
//                 </a>
//               </div>
//               <div className="blog-content">
//                 <div className="blog-meta">
//                   <span className="admin-type">
//                     <i className="fa fa-user" />
//                     Admin
//                   </span>
//                   <span className="date-type">
//                     <i className="fa fa-calendar" />
//                     28 june, 2019
//                   </span>
//                   <span className="comments-type">
//                     <i className="fa fa-comment-o" />
//                     32
//                   </span>
//                 </div>
//                 <a href="#">
//                   <h4>
//                     business man want to be benifit any way
//                   </h4>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 col-sm-6 col-xs-12">
//             <div className="single-blog">
//               <div className="blog-content">
//                 <div className="blog-meta">
//                   <span className="admin-type">
//                     <i className="fa fa-user" />
//                     Admin
//                   </span>
//                   <span className="date-type">
//                     <i className="fa fa-calendar" />
//                     28 june, 2019
//                   </span>
//                   <span className="comments-type">
//                     <i className="fa fa-comment-o" />
//                     32
//                   </span>
//                 </div>
//                 <a href="#">
//                   <h4>
//                     business man want to be benifit any way
//                   </h4>
//                 </a>
//               </div>
//               <div className="blog-image">
//                 <a
//                   className="image-scale"
//                   href="#"
//                 >
//                   <img
//                     alt=""
//                     src="img/blog/b6.jpg"
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-12 col-sm-12 col-xs-12">
//             <div className="blog-pagination">
//               <ul className="pagination">
//                 <li>
//                   <a href="#">
//                     Prev
//                   </a>
//                 </li>
//                 <li className="active">
//                   <a href="#">
//                     1
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     2
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     3
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     Next
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <Footer />

//     </>
//   )
// }
