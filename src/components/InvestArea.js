import React from 'react';
import './investmentArea.css'; // Assuming you have a CSS file for additional styling
import { Link } from 'react-router-dom';

const InvestArea = () => {
  const plans = [
    {
      id: 1,
      rate: '5%',
      duration: '10 days',
      minInvest: '$100',
      maxInvest: '$1000',
      avgMonthly: '50%',
      label: 'gold',
      image: './images/cryto1.jpeg', // Add your image path here
    },
    {
      id: 2,
      rate: '15%',
      duration: '30 days',
      minInvest: '$1000',
      maxInvest: '$10000',
      avgMonthly: '100%',
      label: 'silver',
      image: './images/cryto2.jpeg', // Add your image path here
    },
    {
      id: 3,
      rate: '50%',
      duration: '45 days',
      minInvest: '$1000',
      maxInvest: '$50000',
      avgMonthly: '200%',
      label: 'Popular',
      image: './images/cryto5.jpeg', // Add your image path here
    },
    {
      id: 4,
      rate: '100%',
      duration: '60 days',
      minInvest: '$1000',
      maxInvest: '$50000',
      avgMonthly: '250%',
      label: 'Best sale',
      image: './images/cryto6.jpeg', // Add your image path here
    },
  ];

  return (

    <>
    <div className="invest-area bg-color area-padding-2" style={{
      color: '#fff', 
      // border: '1px solid #f0e000', // Border color and width
      borderRight: '1px solid #f0e000', // Border color and width
      borderLeft: '1px solid #f0e000', // Border color and width
      // borderBottom: '1px solid #f0e000', // Border color and width
      borderRadius: '1px',       // Rounded corners
      backgroundColor:'#000033',
      paddingBottom:20,
    }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12" style={{
                        color: '#fff', 
                        // border: '1px solid #f0e000', // Border color and width
                        borderRight: '1px solid #f0e000', // Border color and width
                        borderLeft: '1px solid #f0e000', // Border color and width
                        // borderBottom: '1px solid #f0e000', // Border color and width
                        borderRadius: '10px',       // Rounded corners
                        backgroundColor:'#000033',
                        paddingBottom:20,
                      }}>
            {/* <div className="section-headline text-center">
              <h3>The best investment plan</h3>
              <p>
                Help agencies to define their new business objectives and then create professional software.
              </p>
            </div> */}
             <div className="section-headline text-center">
          <h3 style={{
        // fontFamily: "'Brush Script MT', cursive",
        // fontWeight: "bold",
        color: "#fff",
        fontSize: "26px",  
        lineHeight: "1.2",  
    }}>
              INVESTMENT OFFER
          </h3>
          <h5 style={{color:'#fff'}}>
              Our Investment Best Plans
          </h5>
          <p style={{
        // fontFamily: "'Brush Script MT', cursive",
        fontWeight: "bold",
        color: "#fff",
        fontSize: "16px",  // Adjust the size as needed
        // lineHeight: "1.2", 
        paddingBottom:'25',
        marginBottom:'25',
        margin:'25',
    }} >
              Our experts have set up these investment plans strategically, which minizes your risk
              of investment and maximizes the return of interest
          </p>

          </div>
          </div>
        </div>
        <div className="row pricing-content">
          {plans.map(plan => (
            <div className="col-md-3 col-sm-6 col-xs-12" key={plan.id} >
               <div className="card-image-wrapper">
                  <img src={plan.image} alt={plan.label} className="card-image" />
                </div>
              <div className="pri_table_list" style={{
                        // border: '2px solid #000033', // Border color and width
                        border: '5px solid #f0e000', // Border color and width
                        borderRadius: '10px',       // Rounded corners
                        backgroundColor:'#ffffff'
                      }}>
                {plan.label && <span className="base">{plan.label}</span>}
                {/* <div className="card-image-wrapper">
                  <img src={plan.image} alt={plan.label} className="card-image" />
                </div> */}
                <div className="top-price-inner">
                  <div className="rates">
                    <span className="prices">{plan.rate}</span><span className="users">Daily</span>
                  </div>
                  <span className="per-day">{plan.duration}</span>
                </div>
                <ol className="pricing-text" style={{backgroundColor:'#f0f0ff', color:'#000033', textAlign:'center', borderRadius:1, padding:1,}}>
                  <li className="check">Minimum Invest : {plan.minInvest}</li>
                  <li className="check">Maximum Invest : {plan.maxInvest}</li>
                  <li className="check">Average Monthly : {plan.avgMonthly}</li>
                </ol>
                <div className="price-btn blue">
                  <Link className="blue" to="/register">Deposit</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    </>
  );
};

export default InvestArea;

// import React from 'react';
// import './investmentArea.css'; // Assuming you have a CSS file for additional styling

// const InvestArea = () => {
//   const plans = [
//     {
//       id: 1,
//       rate: '5%',
//       duration: '10 days',
//       minInvest: '$100',
//       maxInvest: '$1000',
//       avgMonthly: '50%',
//       label: 'gold',
//       image: './images/cryto1.jpeg', // Add your image path here
//     },
//     {
//       id: 2,
//       rate: '15%',
//       duration: '30 days',
//       minInvest: '$1000',
//       maxInvest: '$10000',
//       avgMonthly: '100%',
//       label: 'silver',
//       image: './images/silver.png', // Add your image path here
//     },
//     {
//       id: 3,
//       rate: '50%',
//       duration: '45 days',
//       minInvest: '$1000',
//       maxInvest: '$50000',
//       avgMonthly: '200%',
//       label: 'Popular',
//       image: './images/popular.png', // Add your image path here
//     },
//     {
//       id: 4,
//       rate: '100%',
//       duration: '60 days',
//       minInvest: '$1000',
//       maxInvest: '$50000',
//       avgMonthly: '250%',
//       label: 'Best sale',
//       image: './images/best-sale.png', // Add your image path here
//     },
//   ];

//   return (
//     <div className="invest-area bg-color area-padding-2">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12 col-sm-12 col-xs-12">
//             <div className="section-headline text-center">
//               <h3>The best investment plan</h3>
//               <p>
//                 Help agencies to define their new business objectives and then create professional software.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="row pricing-content">
//           {plans.map(plan => (
//             <div className="col-md-3 col-sm-6 col-xs-12" key={plan.id}>
//               <div className="pri_table_list">
//                 {plan.label && <span className="base">{plan.label}</span>}
//                 <div className="card-image-wrapper">
//                   <img src={plan.image} alt={plan.label} className="card-image" />
//                 </div>
//                 <div className="top-price-inner">
//                   <div className="rates">
//                     <span className="prices">{plan.rate}</span><span className="users">Daily</span>
//                   </div>
//                   <span className="per-day">{plan.duration}</span>
//                 </div>
//                 <ol className="pricing-text">
//                   <li className="check">Minimum Invest : {plan.minInvest}</li>
//                   <li className="check">Maximum Invest : {plan.maxInvest}</li>
//                   <li className="check">Average Monthly : {plan.avgMonthly}</li>
//                 </ol>
//                 <div className="price-btn blue">
//                   <a className="blue" href="signup.html">Deposit</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InvestArea;


// import React from 'react';
// import './InvestArea.css'; // Assuming you have a CSS file for additional styling

// const InvestArea = () => {
//   const plans = [
//     {
//       id: 1,
//       rate: '5%',
//       duration: '10 days',
//       minInvest: '$100',
//       maxInvest: '$1000',
//       avgMonthly: '50%',
//       label: 'gold',
//     },
//     {
//       id: 2,
//       rate: '15%',
//       duration: '30 days',
//       minInvest: '$1000',
//       maxInvest: '$10000',
//       avgMonthly: '100%',
//       label: 'silver',
//     },
//     {
//       id: 3,
//       rate: '50%',
//       duration: '45 days',
//       minInvest: '$1000',
//       maxInvest: '$50000',
//       avgMonthly: '200%',
//       label: 'Popular',
//     },
//     {
//       id: 4,
//       rate: '100%',
//       duration: '60 days',
//       minInvest: '$1000',
//       maxInvest: '$50000',
//       avgMonthly: '250%',
//       label: 'Best sale',
//     },
//   ];

//   return (
//     <div className="invest-area bg-color area-padding-2">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12 col-sm-12 col-xs-12">
//             <div className="section-headline text-center">
//               <h3>The best investment plan</h3>
//               <p>
//                 Help agencies to define their new business objectives and then create professional software.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="row pricing-content">
//           {plans.map(plan => (
//             <div className="col-md-3 col-sm-6 col-xs-12" key={plan.id}>
//               <div className="pri_table_list">
//                 {plan.label && <span className="base">{plan.label}</span>}
//                 <div className="top-price-inner">
//                   <div className="rates">
//                     <span className="prices">{plan.rate}</span><span className="users">Daily</span>
//                   </div>
//                   <span className="per-day">{plan.duration}</span>
//                 </div>
//                 <ol className="pricing-text">
//                   <li className="check">Minimam Invest : {plan.minInvest}</li>
//                   <li className="check">Maximam Invest : {plan.maxInvest}</li>
//                   <li className="check">Avarage Monthly : {plan.avgMonthly}</li>
//                 </ol>
//                 <div className="price-btn blue">
//                   <a className="blue" href="signup.html">Deposit</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InvestArea;
