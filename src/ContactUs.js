import React from 'react'
import Header from './components/Header'

export default function ContactUs() {
  return (
    <>
       <div>
       <Header />
  <div className="page-area">
    <div className="breadcumb-overlay" />
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="breadcrumb text-center">
            <div className="section-headline white-headline">
              <h3>
                Contact us
              </h3>
            </div>
            <ul className="breadcrumb-bg">
              <li className="home-bread">
                Home
              </li>
              <li>
                Contact us
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="contact-area page-padding">
    <div className="container">
      <div className="row">
        <div className="contact-inner">
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="contact-icon text-center">
              <div className="single-icon">
                <i className="fa fa-mobile" />
                <p>
                  Call : +0011-564-543
                  <br />
                  <span>
                    Monday-Friday (10am-18pm)
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="contact-icon text-center">
              <div className="single-icon">
                <i className="fa fa-envelope-o" />
                <p>
                  Email : Aievar3@gmail.com
                  <br />
                  <span>
                    Web: www.rockstheme.com
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="contact-icon text-center">
              <div className="single-icon">
                <i className="fa fa-map-marker" />
                <p>
                  Location : Newyork city
                  <br />
                  <span>
                    23 house/3 Road
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12">
          <div className="map-area">
            <div
              id="googleMap"
              style={{
                height: '380px',
                width: '100%'
              }}
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12">
          <div className="contact-form">
            <div className="row">
              <form
                action="https://rockstheme.com/rocks/aievari-live/contact.php"
                className="contact-form"
                id="contactForm"
                method="POST"
              >
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <input
                    className="form-control"
                    data-error="Please enter your name"
                    id="name"
                    placeholder="Name"
                    required
                    type="text"
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <input
                    className="email form-control"
                    data-error="Please enter your email"
                    id="email"
                    placeholder="Email"
                    required
                    type="email"
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <input
                    className="form-control"
                    data-error="Please enter your message subject"
                    id="msg_subject"
                    placeholder="Subject"
                    required
                    type="text"
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <textarea
                    className="form-control"
                    data-error="Write your message"
                    id="message"
                    placeholder="Massage"
                    required
                    rows="7"
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                  <button
                    className="add-btn contact-btn"
                    id="submit"
                    type="submit"
                  >
                    Send Message
                  </button>
                  <div
                    className="h3 text-center hidden"
                    id="msgSubmit"
                  />
                  <div className="clearfix" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
