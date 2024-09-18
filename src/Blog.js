import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CryptoCurrencyCarouselArea from './components/CryptoCurrencyCarouselArea';
import axios from 'axios';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3005/api/blogs/published');
        if (response && Array.isArray(response.data.data)) {
          setBlogPosts(response.data.data);
        } else {
          setBlogPosts([]);
        }
      } catch (error) {
        console.error('Unable to fetch blogs', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Header />
      <CryptoCurrencyCarouselArea />
      <div className="blog-area fix bg-color area-padding-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h3 style={{
                  fontWeight: "bold",
                  color: "#000033",
                  fontSize: "46px",
                  lineHeight: "1.2",
                }}>Global investment plan news</h3>
                 <p style={{ color: '#fff', marginTop: '10px', backgroundColor:'#000033', border:'2px solid #f0e00f', borderRadius:25 }}>
                  <marquee>

                  Stay updated with the latest trends and insights in the crypto investment world.
                  </marquee>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="blog-grid home-blog">
              {blogPosts.map((post) => (
                <div key={post.id} className="col-md-4 col-sm-5 col-xs-12" style={{
                  color: '#fff',
                  border: '1px solid #f0e000',
                  borderRadius: '10px',
                  backgroundColor: '#000033',
                  paddingBottom: 20,
                  padding: 5,
                  margin:5,
                  justifyContent: 'space-between',
                }}>
                  <div className="single-blog">
                    <div className="blog-image">
                      <Link className="image-scale" to={`/blog/${post.id}`}>
                        {/* Ensure image URL is valid */}
                        <img
                          src={post.imageUrl ? `http://localhost:3005/${post.imageUrl}` : 'images/bg1.jpg'}
                          alt={post.title}
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span className="admin-type">
                          <i className="fa fa-user" /> {post.author}
                        </span>
                        <span className="date-type">
                          <i className="fa fa-calendar" /> {post.createdAt}
                        </span>
                        <span className="comments-type">
                          <i className="fa fa-comment-o" /> {post.comments}
                        </span>
                      </div>
                      <Link to={`/blog/${post.id}`}>
                        <h4 style={{ color: '#fff' }}>{post.title}</h4>
                      </Link>
                      <Link to={`/blog/${post.id}`} className="read-more-btn" style={{ color: '#f0ef00' }}>
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

