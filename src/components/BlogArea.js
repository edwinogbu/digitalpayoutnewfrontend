import React from 'react';
import { Link } from 'react-router-dom';
import './BlogArea.css'; // Assuming you have a CSS file for additional styling

const BlogArea = () => {
  const blogs = [
    {
      id: 1,
      image: 'img/blog/b1.jpg',
      date: '20 July, 2019',
      comments: 13,
      title: 'Creative design clients response is better',
    },
    {
      id: 2,
      image: 'img/blog/b2.jpg',
      date: '13 May, 2018',
      comments: 16,
      title: 'Web development is a best work in future world',
    },
    {
      id: 3,
      image: 'img/blog/b3.jpg',
      date: '24 April, 2019',
      comments: 7,
      title: 'You can trust me and business with together',
    },
    {
      id: 4,
      image: 'img/blog/b4.jpg',
      date: '28 June, 2019',
      comments: 32,
      title: 'Business man want to be benifit any way',
    },
    {
      id: 5,
      image: 'img/blog/b5.jpg',
      date: '28 June, 2019',
      comments: 32,
      title: 'Business man want to be benifit any way',
    },
    {
      id: 6,
      image: 'img/blog/b6.jpg',
      date: '28 June, 2019',
      comments: 32,
      title: 'Business man want to be benifit any way',
    },
  ];

  return (
    <div className="blog-area fix bg-color area-padding-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="section-headline text-center">
              <h3>Global investment plan news</h3>
              <p>
                Dummy text is also used to demonstrate the appearance of different typefaces and layouts
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="blog-grid home-blog">
            {blogs.map(blog => (
              <div key={blog.id} className="col-md-4 col-sm-6 col-xs-12">
                <div className="single-blog">
                  {blog.image && (
                    <div className="blog-image">
                      <Link className="image-scale" to="#">
                        <img src={blog.image} alt={blog.title} />
                      </Link>
                    </div>
                  )}
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="admin-type">
                        <i className="fa fa-user"></i>
                        Admin
                      </span>
                      <span className="date-type">
                        <i className="fa fa-calendar"></i>
                        {blog.date}
                      </span>
                      <span className="comments-type">
                        <i className="fa fa-comment-o"></i>
                        {blog.comments}
                      </span>
                    </div>
                    <Link to="#">
                      <h4>{blog.title}</h4>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
