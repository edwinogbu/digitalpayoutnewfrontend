import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CryptoCurrencyCarouselArea from './components/CryptoCurrencyCarouselArea'

export default function ContactUs() {
  return (
    <>
       <div>
       <Header />
  {/* <div className="page-area" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./images/bg2.jpeg')" }} >
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
  </div> */}
  <CryptoCurrencyCarouselArea />
  <div className="contact-area page-padding">
    <div className="container">
      <div className="row">
        <div className="contact-inner">
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="contact-icon text-center" style={{backgroundColor:'#000033', color:'#fff'}}>
              <div className="single-icon">
                <i className="fa fa-mobile" />
                <p style={{backgroundColor:'#000033', color:'#fff'}}>
                  Call : +123-8256-4543
                  <br />
                  <span>
                    Monday-Friday (24 hrs daily)
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12" >
            <div className="contact-icon text-center"style={{backgroundColor:'#000033', color:'#fff'}}>
              <div className="single-icon">
                <i className="fa fa-envelope-o" />
                <p style={{backgroundColor:'#00033', color:'#fff'}}>
                  Email : admin@digitalpayout.com
                  <br />
                  <span>
                    Web: www.digitalpayout.com
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12" >
            <div className="contact-icon text-center" style={{backgroundColor:'#000032', color:'#fff'}}>
              <div className="single-icon">
                <i className="fa fa-map-marker"  />
                <p style={{ color:'#fff'}}>
                  Location : Lagos State Nigeria
                  <br />
                  <span>
                    Allen Avenue 23 house/3 Road
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
                action="#"
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
                <div className="col-md-12 col-sm-12 col-xs-12 text-center" >
                  <button
                    className="add-btn contact-btn"
                    id="submit"
                    type="submit"
                    style={{backgroundColor:'#f5d108', color:'#fff'}}
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
<Footer />
    </>
  )
}
