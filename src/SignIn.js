import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Update the import path if needed
import Header from './components/Header';
import Footer from './components/Footer';

const SignIn = () => {
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        password: '',
        rememberMe: false,
    });

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData);
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'Welcome to your dashboard!',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('http://localhost:3001/dashboard/home'); // Redirect to the dashboard
                }
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Please check your email/phone and password and try again.',
            });
            console.error('Login failed:', error);
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
                            <div className="breadcrumb text-center">
                                <div className="section-headline white-headline">
                                    <h3>Login</h3>
                                </div>
                                <ul className="breadcrumb-bg" style={{ color: "#000033", backgroundColor: "#f5d108" }}>
                                    {/* <li className="home-bread">Home</li> */}
                                    <Link className="home-bread" to="/" style={{ color: "#fff", backgroundColor: "#f5d108" }}>
                                            Home
                                        </Link>
                                    <li>Login</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-area page-padding">
                <div className="container">
                    <div className="row">
                        <div className=" col-md-12 col-sm-12 col-xs-12">
                            <div className="login-page">
                                <div className="login-form">
                                    <h4 className="login-title">LOGIN</h4>
                                    <div className="row">
                                        <form onSubmit={handleSubmit} className="log-form" id="loginForm">
                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                                <input
                                                    className="form-control"
                                                    name="emailOrPhone"
                                                    value={formData.emailOrPhone}
                                                    onChange={handleChange}
                                                    placeholder="Email or Phone"
                                                    required
                                                    type="text"
                                                />
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                                <input
                                                    className="form-control"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
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
                                                            name="rememberMe"
                                                            checked={formData.rememberMe}
                                                            onChange={handleChange}
                                                            type="checkbox"
                                                        />
                                                        <span className="remember-text">Remember me</span>
                                                    </label>
                                                    <a className="text-right" href="#">Forgot password?</a>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-xs-12" style={{ color: "#000033", backgroundColor: "#f5d108" }}>
                                                <button className="login-btn" id="submit" type="submit">
                                                    Login
                                                </button>
                                                <div className="clearfix" />
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                                <div className="clear" />
                                                <div className="separator">
                                                    <span>Or login with</span>
                                                </div>
                                                <div className="sign-icon">
                                                    <ul>
                                                        <li><a className="facebook" href="#">Facebook</a></li>
                                                        <li><a className="twitter" href="#">Twitter</a></li>
                                                        <li><a className="google" href="#">Google+</a></li>
                                                    </ul>
                                                    <div className="acc-not">
                                                        Don't have an account?
                                                        <Link to="/register"> Register</Link>
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

export default SignIn;




// import React from 'react'
// import Header from './components/Header'
// import Footer from './components/Footer'

// export default function SignIn() {
//   return (
//     <>
//        <div>
//        <Header />
//   <div className="page-area">
//     <div className="breadcumb-overlay" />
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12 col-sm-12 col-xs-12">
//           <div className="breadcrumb text-center">
//             <div className="section-headline white-headline">
//               <h3>
//                 Login
//               </h3>
//             </div>
//             <ul className="breadcrumb-bg" style={{ color: "#000033", backgroundColor: "#f5d108" }}>
//               <li className="home-bread">
//                 Home
//               </li>
//               <li>
//                 Login
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="login-area page-padding">
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12 col-sm-12 col-xs-12">
//           <div className="login-page">
//             <div className="login-form">
//               <h4 className="login-title">
//                 LOGIN
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
//                       data-error="Please enter your message subject"
//                       id="msg_subject"
//                       placeholder="Password"
//                       required
//                       type="password"
//                     />
//                   </div>
//                   <div className="col-md-12 col-sm-12 col-xs-12">
//                     <div className="check-group flexbox">
//                       <label className="check-box">
//                         <input
//                           className="check-box-input"
//                           defaultChecked
//                           type="checkbox"
//                         />
//                         <span className="remember-text">
//                           Remember me
//                         </span>
//                       </label>
//                       <a
//                         className="text-muted"
//                         href="#"
//                       >
//                         Forgot password?
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-md-12 col-sm-12 col-xs-12" style={{ color: "#000033", backgroundColor: "#f5d108" }}>
//                     <button
//                       className="login-btn"
//                       id="submit"
//                       type="submit"
//                     >
//                       Login
//                     </button>
//                     <div
//                       className="h3 text-center hidden"
//                       id="msgSubmit"
//                     />
//                     <div className="clearfix" />
//                   </div>
//                   <div className="col-md-12 col-sm-12 col-xs-12">
//                     <div className="clear" />
//                     <div className="separetor">
//                       <span>
//                         Or with Sign
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
//                         Don't have an account
//                         <a href="signup.html">
//                           {' '}Sign up
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
