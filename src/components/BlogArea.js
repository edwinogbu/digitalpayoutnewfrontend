import React from 'react';
import { Link } from 'react-router-dom';

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

const BlogArea = () => {
  return (
    <>
  
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
    
    </>
  );
};

export default BlogArea;


// import React from 'react';
// import { Link } from 'react-router-dom';
// // import './BlogArea.css'; // Assuming you have a CSS file for additional styling

// const BlogArea = () => {
//   const blogs = [
//     {
//       id: 1,
//       image: 'img/blog/b1.jpg',
//       date: '20 July, 2019',
//       comments: 13,
//       title: 'Creative design clients response is better',
//     },
//     {
//       id: 2,
//       image: 'img/blog/b2.jpg',
//       date: '13 May, 2018',
//       comments: 16,
//       title: 'Web development is a best work in future world',
//     },
//     {
//       id: 3,
//       image: 'img/blog/b3.jpg',
//       date: '24 April, 2019',
//       comments: 7,
//       title: 'You can trust me and business with together',
//     },
//     {
//       id: 4,
//       image: 'img/blog/b4.jpg',
//       date: '28 June, 2019',
//       comments: 32,
//       title: 'Business man want to be benifit any way',
//     },
//     {
//       id: 5,
//       image: 'img/blog/b5.jpg',
//       date: '28 June, 2019',
//       comments: 32,
//       title: 'Business man want to be benifit any way',
//     },
//     {
//       id: 6,
//       image: 'img/blog/b6.jpg',
//       date: '28 June, 2019',
//       comments: 32,
//       title: 'Business man want to be benifit any way',
//     },
//   ];

//   return (
//     <div className="blog-area fix bg-color area-padding-2">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12 col-sm-12 col-xs-12">
//             <div className="section-headline text-center">
//               <h3>Global investment plan news</h3>
//               <p>
//                 Dummy text is also used to demonstrate the appearance of different typefaces and layouts
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="blog-grid home-blog">
//             {blogs.map(blog => (
//               <div key={blog.id} className="col-md-4 col-sm-6 col-xs-12"  style={{
//                 color: '#fff', 
//                 // border: '1px solid #f0e000', // Border color and width
//                 borderRight: '1px solid #f0e000', // Border color and width
//                 borderLeft: '1px solid #f0e000', // Border color and width
//                 borderBottom: '1px solid #f0e000', // Border color and width
//                 borderRadius: '10px',       // Rounded corners
//                 backgroundColor:'#000033',
//                 paddingBottom:20,
//               }}>
//                 <div className="single-blog">
//                   {blog.image && (
//                     <div className="blog-image">
//                       <Link className="image-scale" to="#">
//                         <img src={blog.image} alt={blog.title} />
//                       </Link>
//                     </div>
//                   )}
//                   <div className="blog-content">
//                     <div className="blog-meta">
//                       <span className="admin-type">
//                         <i className="fa fa-user"></i>
//                         Admin
//                       </span>
//                       <span className="date-type">
//                         <i className="fa fa-calendar"></i>
//                         {blog.date}
//                       </span>
//                       <span className="comments-type">
//                         <i className="fa fa-comment-o"></i>
//                         {blog.comments}
//                       </span>
//                     </div>
//                     <Link to="#">
//                       <h4 style={{color:'#foef00'}}>{blog.title}</h4>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogArea;
