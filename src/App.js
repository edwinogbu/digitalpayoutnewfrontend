import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, MemoryRouter } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';

import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import WatchlistProvider from './WatchlistContext';
import WelcomePage from './WelcomePage';

import ContactUs from './ContactUs';
import Blog from './Blog';

import BlogDetail from './BlogDetail';
import About from './About';
import Investment from './Investment';

const App = () => {
  const dashboardBasePath = "/dashboard";


  return (
    <>
 
       <WatchlistProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<WelcomePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login/*" element={<SignIn />} />
            <Route path="/investment" element={<Investment />} />
            {/* <Route path="/market/:coinId" element={<MarketDetail />} /> */}
            {/* <Route
              path={`${dashboardBasePath}/*`}
              element={<PrivateRoute element={<Dashboard />} />}
            /> */}
         </Routes>
        </Router>
      </AuthProvider>
    </WatchlistProvider>
    </>
  );
}

export default App;
