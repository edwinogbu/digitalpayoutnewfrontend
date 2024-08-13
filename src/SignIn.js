import React from 'react'
import Header from './components/Header'

export default function SignIn() {
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
                Login
              </h3>
            </div>
            <ul className="breadcrumb-bg">
              <li className="home-bread">
                Home
              </li>
              <li>
                Login
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="login-area page-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="login-page">
            <div className="login-form">
              <h4 className="login-title">
                LOGIN
              </h4>
              <div className="row">
                <form
                  action="https://rockstheme.com/rocks/aievari-live/contact.php"
                  className="log-form"
                  id="contactForm"
                  method="POST"
                >
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <input
                      className="form-control"
                      data-error="Please enter your name"
                      id="name"
                      placeholder="Username"
                      required
                      type="text"
                    />
                  </div>
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <input
                      className="form-control"
                      data-error="Please enter your message subject"
                      id="msg_subject"
                      placeholder="Password"
                      required
                      type="password"
                    />
                  </div>
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="check-group flexbox">
                      <label className="check-box">
                        <input
                          className="check-box-input"
                          defaultChecked
                          type="checkbox"
                        />
                        <span className="remember-text">
                          Remember me
                        </span>
                      </label>
                      <a
                        className="text-muted"
                        href="#"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <button
                      className="login-btn"
                      id="submit"
                      type="submit"
                    >
                      Login
                    </button>
                    <div
                      className="h3 text-center hidden"
                      id="msgSubmit"
                    />
                    <div className="clearfix" />
                  </div>
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="clear" />
                    <div className="separetor">
                      <span>
                        Or with Sign
                      </span>
                    </div>
                    <div className="sign-icon">
                      <ul>
                        <li>
                          <a
                            className="facebook"
                            href="#"
                          >
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a
                            className="twitter"
                            href="#"
                          >
                            twitter
                          </a>
                        </li>
                        <li>
                          <a
                            className="google"
                            href="#"
                          >
                            google+
                          </a>
                        </li>
                      </ul>
                      <div className="acc-not">
                        Don't have an account
                        <a href="signup.html">
                          {' '}Sign up
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
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
