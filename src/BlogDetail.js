import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

// Assuming blogPosts is defined in the same file, or you can import it if it's in a separate module
const blogPosts = [
  {
    id: 1,
    title: "Crypto Market Overview: Key Trends and Future Predictions",
    image: "../img/blog/b1.jpg",
    altText: "Crypto Market Overview",
    date: "17 August, 2024",
    comments: 13,
    content: "This is a detailed overview of key trends in the crypto market and future predictions...",
  },
  {
    id: 2,
    title: "How Bitcoin's Market Influence is Shaping Global Finance",
    image: "../img/blog/b2.jpg",
    altText: "Bitcoin's Market Influence",
    date: "17 August, 2024",
    comments: 16,
    content: "Bitcoin continues to have a significant influence on global finance...",
  },
  {
    id: 3,
    title: "The Rise of Decentralized Finance: What Investors Should Know",
    image: "../img/blog/b3.jpg",
    altText: "Decentralized Finance",
    date: "17 August, 2024",
    comments: 7,
    content: "Decentralized Finance (DeFi) is rapidly growing and investors need to understand...",
  },
  {
    id: 4,
    title: "Ethereum 2.0: What the Upgrade Means for the Future of Crypto",
    image: "../img/blog/b4.jpg",
    altText: "Ethereum 2.0 Upgrade",
    date: "17 August, 2024",
    comments: 32,
    content: "Ethereum 2.0 is expected to bring significant changes to the crypto ecosystem...",
  },
  {
    id: 5,
    title: "Regulatory Challenges and Their Impact on Crypto Markets",
    image: "../img/blog/b5.jpg",
    altText: "Regulatory Challenges in Crypto",
    date: "17 August, 2024",
    comments: 32,
    content: "The crypto market is facing various regulatory challenges that could impact its growth...",
  },
  {
    id: 6,
    title: "Top 5 Altcoins to Watch in 2024",
    image: "../img/blog/b6.jpg",
    altText: "Altcoins to Watch in 2024",
    date: "17 August, 2024",
    comments: 32,
    content: "Here are the top 5 altcoins to watch in 2024 based on their potential growth and innovation...",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Blog post not found.</div>;
  }

  return (
    <>
      <Header />
        {/* Cryptocurrency Carousel Area */}
  <div className="crypto-carousel-area w-25 h-25" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/bg5.jpg')" }}>

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
          <img src="../img/crypto/cryto6.jpeg" alt="Crypto 1" />
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
          <img src="../img/crypto/cryto2.jpeg" alt="Crypto 2" />
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
          <img src="../img/crypto/cryto3.jpeg" alt="Crypto 3" />
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
    <div className="blog-detail-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="blog-detail-content">
              <h2>{post.title}</h2>
              <div className="blog-meta">
                <span className="admin-type">
                  <i className="fa fa-user" /> Admin
                </span>
                <span className="date-type">
                  <i className="fa fa-calendar" /> {post.date}
                </span>
                <span className="comments-type">
                  <i className="fa fa-comment-o" /> {post.comments} Comments
                </span>
              </div>
              <div className="blog-detail-image">
                <img src={post.image} alt={post.altText} />
              </div>
              <div className="blog-detail-text">
                <p>{post.content}</p>
              </div>
              <Link to="/blog" className="back-to-blog-btn">
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />
      </>
  );
};

export default BlogDetail;




// import React from 'react'
// import Header from './components/Header'
// import Footer from './components/Footer'

// export default function BlogDetail() {
//   return (
//     <>
//       <div>
//       <Header />
//   <div className="page-area">
//     <div className="breadcumb-overlay" />
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12 col-sm-12 col-xs-12">
//           <div className="breadcrumb text-center">
//             <div className="section-headline white-headline">
//               <h3>
//                 Blog Details{' '}
//               </h3>
//             </div>
//             <ul className="breadcrumb-bg">
//               <li className="home-bread">
//                 Home
//               </li>
//               <li>
//                 Blog Details{' '}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="blog-area fix page-padding">
//     <div className="container">
//       <div className="row">
//         <div className="blog-details">
//           <div className="col-md-8 col-sm-8 col-xs-12">
//             <article className="blog-post-wrapper">
//               <div className="blog-banner">
//                 <a
//                   className="blog-images"
//                   href="#"
//                 >
//                   <img
//                     alt=""
//                     src="img/blog/b1.jpg"
//                   />
//                 </a>
//                 <div className="blog-content">
//                   <div className="blog-meta">
//                     <span className="admin-type">
//                       <i className="fa fa-user" />
//                       Admin
//                     </span>
//                     <span className="date-type">
//                       <i className="fa fa-calendar" />
//                       24 april, 2019
//                     </span>
//                     <span className="comments-type">
//                       <i className="fa fa-comment-o" />
//                       07
//                     </span>
//                   </div>
//                   <h4>
//                     The universal acceptance has given a tremendous
//                   </h4>
//                   <p>
//                     The universal acceptance of Consultation has given a tremendous opportunity for merchants to do crossborder transactions instantly and at reduced cost.Consultations are slowly gaining immense recognition and are growing phenomenally with more and more people trading with this digital currency.
//                   </p>
//                   <blockquote>
//                     <p>
//                       Consultations are slowly gaining immense recognition and are growing phenomenally with more and more people trading with this digital currency. The universal acceptance of Consultation.
//                     </p>
//                   </blockquote>
//                   <p>
//                     The universal acceptance of Consultation has given a tremendous opportunity for merchants to do crossborder transactions instantly and at reduced cost.Consultations are slowly gaining immense recognition and are growing phenomenally with more..
//                   </p>
//                   <h5>
//                     With more and more people trading with this digital{' '}
//                   </h5>
//                   <p>
//                     The universal acceptance of Consultation has given a tremendous opportunity for merchants to do crossborder transactions instantly and at reduced cost.Consultations are slowly gaining immense recognition and are growing phenomenally with more..
//                   </p>
//                   <div className="img-blog">
//                     <img
//                       alt=""
//                       src="img/blog/b3.jpg"
//                     />
//                   </div>
//                   <p>
//                     The universal acceptance of Consultation has given a tremendous opportunity for merchants to do crossborder transactions instantly and at reduced cost.Consultations are slowly gaining immense recognition and are growing phenomenally with more..
//                   </p>
//                 </div>
//               </div>
//             </article>
//             <div className="clear" />
//             <div className="related-post">
//               <div className="comments-heading">
//                 <h3>
//                   Related post
//                 </h3>
//               </div>
//               <div className="related-post-list">
//                 <div className="recent-single-post">
//                   <div className="post-img">
//                     <a href="#">
//                       <img
//                         alt=""
//                         src="img/blog/b1.jpg"
//                       />
//                     </a>
//                   </div>
//                   <div className="pst-content">
//                     <p>
//                       <a href="#">
//                         We offer professional Consultant services.
//                       </a>
//                     </p>
//                     <span className="date-type">
//                       27 Jan / 2018
//                     </span>
//                   </div>
//                 </div>
//                 <div className="recent-single-post">
//                   <div className="post-img">
//                     <a href="#">
//                       <img
//                         alt=""
//                         src="img/blog/b2.jpg"
//                       />
//                     </a>
//                   </div>
//                   <div className="pst-content">
//                     <p>
//                       <a href="#">
//                         Aievari is an firm and general group.
//                       </a>
//                     </p>
//                     <span className="date-type">
//                       20 June / 2018
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="clear" />
//             <div className="single-post-comments">
//               <div className="comments-area">
//                 <div className="comments-heading">
//                   <h3>
//                     4 comments
//                   </h3>
//                 </div>
//                 <div className="comments-list">
//                   <ul>
//                     <li>
//                       <div className="comments-details">
//                         <div className="comments-list-img">
//                           <img
//                             alt="post-author"
//                             src="img/blog/avater2.png"
//                           />
//                         </div>
//                         <div className="comments-content-wrap">
//                           <span>
//                             <b>
//                               <a href="#">
//                                 Alens
//                               </a>
//                             </b>
//                             															Post author															
//                             <span className="post-time">
//                               Jan 6, 2018
//                             </span>
//                             <a href="#">
//                               Reply
//                             </a>
//                           </span>
//                           <p>
//                             Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur
//                           </p>
//                         </div>
//                       </div>
//                     </li>
//                     <li className="threaded-comments">
//                       <div className="comments-details">
//                         <div className="comments-list-img">
//                           <img
//                             alt="post-author"
//                             src="img/blog/avater1.png"
//                           />
//                         </div>
//                         <div className="comments-content-wrap">
//                           <span>
//                             <b>
//                               <a href="#">
//                                 admin
//                               </a>
//                             </b>
//                             															Post author															
//                             <span className="post-time">
//                               Jan 7, 2018
//                             </span>
//                             <a href="#">
//                               Reply
//                             </a>
//                           </span>
//                           <p>
//                             Quisque orci nibh, porta vitae sagittis sit amet, vehicula vel mauris. Aenean at justo dolor. Fusce ac sapien bibendum, scelerisque libero nec
//                           </p>
//                         </div>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="comments-details">
//                         <div className="comments-list-img">
//                           <img
//                             alt="post-author"
//                             src="img/blog/avater2.png"
//                           />
//                         </div>
//                         <div className="comments-content-wrap">
//                           <span>
//                             <b>
//                               <a href="#">
//                                 Andre
//                               </a>
//                             </b>
//                             															Post author															
//                             <span className="post-time">
//                               Nov 11, 2017
//                             </span>
//                             <a href="#">
//                               Reply
//                             </a>
//                           </span>
//                           <p>
//                             Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur
//                           </p>
//                         </div>
//                       </div>
//                     </li>
//                     <li className="threaded-comments">
//                       <div className="comments-details">
//                         <div className="comments-list-img">
//                           <img
//                             alt="post-author"
//                             src="img/blog/avater1.png"
//                           />
//                         </div>
//                         <div className="comments-content-wrap">
//                           <span>
//                             <b>
//                               <a href="#">
//                                 admin
//                               </a>
//                             </b>
//                             															Post author															
//                             <span className="post-time">
//                               Nov 12, 2017
//                             </span>
//                             <a href="#">
//                               Reply
//                             </a>
//                           </span>
//                           <p>
//                             Quisque orci nibh, porta vitae sagittis sit amet, vehicula vel mauris. Aenean at justo dolor. Fusce ac sapien bibendum, scelerisque libero nec
//                           </p>
//                         </div>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="comment-respond">
//                 <h3 className="comment-reply-title">
//                   Leave a Reply{' '}
//                 </h3>
//                 <span className="email-notes">
//                   Your email address will not be published. Required fields are marked *
//                 </span>
//                 <form action="#">
//                   <div className="row">
//                     <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
//                       <p>
//                         First Name *
//                       </p>
//                       <input type="text" />
//                     </div>
//                     <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
//                       <p>
//                         Last Name *
//                       </p>
//                       <input type="text" />
//                     </div>
//                     <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
//                       <p>
//                         Email *
//                       </p>
//                       <input type="email" />
//                     </div>
//                     <div className="col-lg-12 col-md-12 col-sm-12 comment-form-comment">
//                       <p>
//                         Massage *
//                       </p>
//                       <textarea
//                         cols="30"
//                         id="message-box"
//                         rows="10"
//                       />
//                       <input
//                         className="add-btn contact-btn"
//                         type="submit"
//                         value="Post Comment"
//                       />
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 col-sm-4 col-xs-12">
//             <div className="left-head-blog right-side">
//               <div className="left-blog-page">
//                 <form action="#">
//                   <div className="blog-search-option">
//                     <input
//                       placeholder="Search..."
//                       type="text"
//                     />
//                     <button
//                       className="button"
//                       type="submit"
//                     >
//                       <i className="fa fa-search" />
//                     </button>
//                   </div>
//                 </form>
//               </div>
//               <div className="left-blog-page">
//                 <div className="left-blog blog-category">
//                   <h4>
//                     categories
//                   </h4>
//                   <ul>
//                     <li>
//                       <span>
//                         12
//                       </span>
//                       <a href="#">
//                         Business
//                       </a>
//                     </li>
//                     <li>
//                       <span>
//                         17
//                       </span>
//                       <a href="#">
//                         Agency{' '}
//                       </a>
//                     </li>
//                     <li>
//                       <span>
//                         07
//                       </span>
//                       <a href="#">
//                         Media
//                       </a>
//                     </li>
//                     <li>
//                       <span>
//                         18
//                       </span>
//                       <a href="#">
//                         Social
//                       </a>
//                     </li>
//                     <li>
//                       <span>
//                         14
//                       </span>
//                       <a href="#">
//                         Photoshop
//                       </a>
//                     </li>
//                     <li>
//                       <span>
//                         10
//                       </span>
//                       <a href="#">
//                         development
//                       </a>
//                     </li>
//                     <li>
//                       <span>
//                         15
//                       </span>
//                       <a href="#">
//                         Design
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="left-blog-page">
//                 <div className="left-blog">
//                   <h4>
//                     recent post
//                   </h4>
//                   <div className="recent-post">
//                     <div className="recent-single-post">
//                       <div className="post-img">
//                         <a href="#">
//                           <img
//                             alt=""
//                             src="img/blog/b1.jpg"
//                           />
//                         </a>
//                       </div>
//                       <div className="pst-content">
//                         <p>
//                           <a href="#">
//                             We offer professional Consultant services.
//                           </a>
//                         </p>
//                         <span className="date-type">
//                           														26 Jan / 2018													
//                         </span>
//                       </div>
//                     </div>
//                     <div className="recent-single-post">
//                       <div className="post-img">
//                         <a href="#">
//                           <img
//                             alt=""
//                             src="img/blog/b2.jpg"
//                           />
//                         </a>
//                       </div>
//                       <div className="pst-content">
//                         <p>
//                           <a href="#">
//                             Lopard is an firm and general group.
//                           </a>
//                         </p>
//                         <span className="date-type">
//                           														20 June / 2018													
//                         </span>
//                       </div>
//                     </div>
//                     <div className="recent-single-post">
//                       <div className="post-img">
//                         <a href="#">
//                           <img
//                             alt=""
//                             src="img/blog/b3.jpg"
//                           />
//                         </a>
//                       </div>
//                       <div className="pst-content">
//                         <p>
//                           <a href="#">
//                             Business man always think positive.
//                           </a>
//                         </p>
//                         <span className="date-type">
//                           														26 Feb / 2018													
//                         </span>
//                       </div>
//                     </div>
//                     <div className="recent-single-post">
//                       <div className="post-img">
//                         <a href="#">
//                           <img
//                             alt=""
//                             src="img/blog/b4.jpg"
//                           />
//                         </a>
//                       </div>
//                       <div className="pst-content">
//                         <p>
//                           <a href="#">
//                             Man can change business policy all time.
//                           </a>
//                         </p>
//                         <span className="date-type">
//                           														13 Nov / 2018													
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="left-blog-page">
//                 <div className="left-tags blog-tags">
//                   <div className="popular-tag left-side-tags left-blog">
//                     <h4>
//                       popular tags
//                     </h4>
//                     <ul>
//                       <li>
//                         <a href="#">
//                           Business
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           Agency{' '}
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           Media
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           Social
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           Photoshop
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           Seo
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           development
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           Search
//                         </a>
//                       </li>
//                       <li>
//                         <a href="#">
//                           Design
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
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
