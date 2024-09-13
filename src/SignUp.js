import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Update the import path if needed
import Header from './components/Header';
import Footer from './components/Footer';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    role: 'user', // Default role or modify as needed
    termsAccepted: false
  });

  const [loading, setLoading] = useState(false);
  const { register } = useAuth(); // Destructure register from useAuth
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!formData.termsAccepted) {
      Swal.fire({
        icon: 'warning',
        title: 'Terms Not Accepted',
        text: 'You must accept the terms and conditions to register.',
      });
      return;
    }

    setLoading(true);

    try {
      await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: formData.role
      });

      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'You have successfully registered!',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login'); // Redirect to the login page after successful registration
        }
      });

      // Reset form data after successful registration
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        role: 'user',
        termsAccepted: false
      });

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: error.message || 'Something went wrong!',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="page-area">
        <div className="breadcumb-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="breadcrumb text-center" >
                <div className="section-headline white-headline">
                  <h3>Register</h3>
                </div>
                <ul className="breadcrumb-bg" style={{
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
                  {/* <li className="home-bread">Home</li> */}
                  <Link className="home-bread" to="/" style={{ color: "#fff", backgroundColor: "#f5d108", padding:5, fontWeight:'bolder' }}>
                        Home
                    </Link>
                  <li>Register</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="signup-area page-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="login-page signup-page" style={{
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
                <div className="login-form signup-form">
                  <h4 className="login-title">REGISTER</h4>
                  <div className="row">
                    <form onSubmit={handleSubmit} className="log-form" id="contactForm">
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <input
                          className="form-control"
                          name="firstName"
                          placeholder="First Name"
                          required
                          type="text"
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <input
                          className="form-control"
                          name="lastName"
                          placeholder="Last Name"
                          required
                          type="text"
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <input
                          className="form-control"
                          name="email"
                          placeholder="Your Email"
                          required
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <input
                          className="form-control"
                          name="phone"
                          placeholder="Phone Number"
                          required
                          type="text"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <input
                          className="form-control"
                          name="password"
                          placeholder="Password"
                          required
                          type="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12 ">
                        <div className="check-group flexbox">
                          <label className="check-box">
                            <input
                              className="check-box-input"
                              name="termsAccepted"
                              type="checkbox"
                              checked={formData.termsAccepted}
                              onChange={handleChange}
                            />
                            <span className="remember-text">
                              I agree to terms & conditions
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12" style={{ color: "#000033", backgroundColor: "#f5d108" }}>
                        <button className="login-btn" id="submit" type="submit" disabled={loading}>
                          {loading ? 'Signing up...' : 'Sign up'}
                        </button>
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="clear" />
                        <div className="separator">
                          <span>Or sign up with</span>
                        </div>
                        <div className="sign-icon">
                          <ul>
                            <li>
                              <a className="facebook" href="#">Facebook</a>
                            </li>
                            <li>
                              <a className="twitter" href="#">Twitter</a>
                            </li>
                            <li>
                              <a className="google" href="#">Google+</a>
                            </li>
                          </ul>
                          <div className="acc-not">
                            Have an account?
                            <Link to="/login">Login</Link>
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
      <Footer />
    </>
  );
};

export default SignUp;




// import React from 'react'
// import Header from './components/Header'
// import Footer from './components/Footer'

// export default function SignUp() {
//   return (
//     <>
//         <div>
//         <Header />
//   <div className="page-area">
//     <div className="breadcumb-overlay" />
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12 col-sm-12 col-xs-12">
//           <div className="breadcrumb text-center">
//             <div className="section-headline white-headline">
//               <h3>
//                 Register
//               </h3>
//             </div>
//             <ul className="breadcrumb-bg" style={{ color: "#000033", backgroundColor: "#f5d108" }}>
//               <li className="home-bread">
//                 Home
//               </li>
//               <li>
//                 Register
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="signup-area page-padding">
//     <div className="container">
//       <div className="row">
//         <div className=" col-md-12 col-sm-12 col-xs-12">
//           <div className="login-page signup-page">
//             <div className="login-form signup-form">
//               <h4 className="login-title ">
//                 REGISTER
//               </h4>
//               <div className="row">
//                 <form
//                   action="https://rockstheme.com/rocks/aievari-live/contact.php"
//                   className="log-form"
//                   id="contactForm"
//                   method="POST"
//                 >
//                   <div className="col-md-12 col-sm-12 col-xs-12">
//                     <input
//                       className="form-control"
//                       data-error="Please enter your name"
//                       id="name"
//                       placeholder="Username"
//                       required
//                       type="text"
//                     />
//                   </div>
//                   <div className="col-md-12 col-sm-12 col-xs-12">
//                     <input
//                       className="form-control"
//                       data-error="Please enter your name"
//                       id="email"
//                       placeholder="Your Email"
//                       required
//                       type="email"
//                     />
//                   </div>
//                   <div className="col-md-12 col-sm-12 col-xs-12">
//                     <input
//                       className="form-control"
//                       data-error="Please enter your message subject"
//                       id="msg_subject"
//                       placeholder="Password"
//                       required
//                       type="password"
//                     />
//                   </div>
//                   <div className="col-md-12 col-sm-12 col-xs-12 ">
//                     <div className="check-group flexbox">
//                       <label className="check-box">
//                         <input
//                           className="check-box-input"
//                           defaultChecked
//                           type="checkbox"
//                         />
//                         <span className="remember-text">
//                           I agree terms & conditions
//                         </span>
//                       </label>
//                     </div>
//                   </div>
//                   <div className="col-md-12 col-sm-12 col-xs-12" style={{ color: "#000033", backgroundColor: "#f5d108" }}>
//                     <button
//                       className="login-btn"
//                       id="submit"
//                       type="submit"
//                     >
//                       Sign up
//                     </button>
//                     <div
//                       className="h3 hidden"
//                       id="msgSubmit"
//                     />
//                     <div className="clearfix" />
//                   </div>
//                   <div className="col-md-12 col-sm-12 col-xs-12">
//                     <div className="clear" />
//                     <div className="separetor">
//                       <span>
//                         Or with signup
//                       </span>
//                     </div>
//                     <div className="sign-icon">
//                       <ul>
//                         <li>
//                           <a
//                             className="facebook"
//                             href="#"
//                           >
//                             Facebook
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             className="twitter"
//                             href="#"
//                           >
//                             twitter
//                           </a>
//                         </li>
//                         <li>
//                           <a
//                             className="google"
//                             href="#"
//                           >
//                             google+
//                           </a>
//                         </li>
//                       </ul>
//                       <div className="acc-not">
//                         have an account?
//                         <a href="login.html">
//                           Login
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </form>
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
