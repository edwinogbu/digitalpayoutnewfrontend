import React from 'react';
import Header from './components/Header';
import { Link } from 'react-router-dom';

// Define investment plans as an array of objects
const investmentPlans = [
  {
    id: 1,
    rate: '5%',
    period: '10 Days',
    minimumInvest: '$100',
    maximumInvest: '$1,000',
    averageMonthly: '50%',
    label: null,
    image: './images/cryto1.jpeg',
    link: '/register'
  },
  {
    id: 2,
    rate: '15%',
    period: '30 Days',
    minimumInvest: '$1,000',
    maximumInvest: '$10,000',
    averageMonthly: '100%',
    label: null,
    image: './images/cryto6.jpeg', // Add your image path here
    link: '/register'
  },
  {
    id: 3,
    rate: '50%',
    period: '45 Days',
    minimumInvest: '$1,000',
    maximumInvest: '$50,000',
    averageMonthly: '200%',
    label: 'Popular',
    image: './images/cryto2.jpeg',
    link: '/register'
  },
  {
    id: 4,
    rate: '100%',
    period: '60 Days',
    minimumInvest: '$1,000',
    maximumInvest: '$50,000',
    averageMonthly: '250%',
    label: 'Best Sale',
    image: './images/cryto5.jpeg', // Add your image path here
    link: '/register'
  },
  {
    id: 5,
    rate: '115%',
    period: '70 Days',
    minimumInvest: '$1,000',
    maximumInvest: '$50,000',
    averageMonthly: '300%',
    label: null,
    image: './images/cryto2.jpeg',
    link: '/register'
  },
  {
    id: 6,
    rate: '125%',
    period: '80 Days',
    minimumInvest: '$1,000',
    maximumInvest: '$70,000',
    averageMonthly: '325%',
    label: 'Best Plan',
    image: './images/cryto2.jpeg',
    link: '/register'
  },
  {
    id: 7,
    rate: '150%',
    period: '90 Days',
    minimumInvest: '$1,000',
    maximumInvest: '$50,000',
    averageMonthly: '350%',
    label: null,
    image: './images/cryto2.jpeg',
    link: '/register'
  },
  {
    id: 8,
    rate: '200%',
    period: '100 Days',
    minimumInvest: '$1,000',
    maximumInvest: '$50,000',
    averageMonthly: '400%',
    label: 'Top Plan',
    image: './images/cryto3.jpeg',
    link: '/register'
  },
];

export default function Investment() {
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
                    <h3>Investment Plan</h3>
                  </div>
                  <ul className="breadcrumb-bg" style={{ color: "#000033", backgroundColor: "#f5d108" }}>
                    <li className="home-bread">
                    <Link className="home-bread" to="/" style={{ color: "#fff", backgroundColor: "#f5d108" }}>
                        Home
                    </Link>
                      
                      </li>
                    <li>Investment Plan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="invest-area bg-color page-padding-2">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h3>The Best Cryptocurrency Investment Plans</h3>
                  <p style={{color:'#000033', fontWeight:'bold'}}>
                    Welcome to Digital PayOut, your gateway to the world of cryptocurrency investment! Whether you're a seasoned investor or new to the world of cryptocurrency, our expert team and cutting-edge technology will guide you every step of the way to invest and earn profits on your investment.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="pricing-content">
                {/* {investmentPlans.map(plan => (
                  <div key={plan.id} className="col-md-3 col-sm-6 col-xs-12">
                    <div className="pri_table_list" >
                      <div className="top-price-inner">
                        {plan.label && <span className="base">{plan.label}</span>}
                        <div className="rates">
                          <span className="prices">{plan.rate}</span>
                          <span className="users">Daily</span>
                        </div>
                        <span className="per-day">{plan.period}</span>
                      </div>
                      <ol className="pricing-text">
                        <li className="check">Minimum Invest: {plan.minimumInvest}</li>
                        <li className="check">Maximum Invest: {plan.maximumInvest}</li>
                        <li className="check">Average Monthly: {plan.averageMonthly}</li>
                      </ol>
                      <div className="price-btn blue">
                        <Link className="blue" to={plan.link}>Deposit</Link>
                      </div>
                    </div>
                  </div>
                ))} */}
                 {investmentPlans.map(plan => (
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
        </div>
        <div className="clearfix" />
      </div>
    </>
  );
}


// import React from 'react'
// import Header from './components/Header'
// import { Link } from 'react-router-dom'

// export default function Investment() {
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
//                 Investment plan
//               </h3>
//             </div>
//             <ul className="breadcrumb-bg" style={{ color: "#000033", backgroundColor: "#f5d108" }}>
//               <li className="home-bread">
//                 Home
//               </li>
//               <li>
//                 Investment plan
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="invest-area bg-color page-padding-2">
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12 col-sm-12 col-xs-12">
//           <div className="section-headline text-center">
//             <h3>
//               The best investment plan
//             </h3>
//             <p>
//               Help agencies to define their new business objectives and then create professional software.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="pricing-content">
//           <div className="col-md-3 col-sm-6 col-xs-12">
//             <div className="pri_table_list">
//               <div className="top-price-inner">
//                 <div className="rates">
//                   <span className="prices">
//                     5%
//                   </span>
//                   <span className="users">
//                     Daily
//                   </span>
//                 </div>
//                 <span className="per-day">
//                   10 days
//                 </span>
//               </div>
//               <ol className="pricing-text">
//                 <li className="check">
//                   Minimam Invest : $100
//                 </li>
//                 <li className="check">
//                   Maximam Invest : $1000
//                 </li>
//                 <li className="check">
//                   Avarage Monthly : 50%{' '}
//                 </li>
//               </ol>
//               <div className="price-btn blue">
//                 <Link
//                   className="blue"
//                   to="/register"
//                 >
//                   Deposite
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3 col-sm-6 col-xs-12">
//             <div className="pri_table_list">
//               <div className="top-price-inner">
//                 <div className="rates">
//                   <span className="prices">
//                     15%
//                   </span>
//                   <span className="users">
//                     Daily
//                   </span>
//                 </div>
//                 <span className="per-day">
//                   30 days
//                 </span>
//               </div>
//               <ol className="pricing-text">
//                 <li className="check">
//                   Minimam Invest : $1000
//                 </li>
//                 <li className="check">
//                   Maximam Invest : $10000
//                 </li>
//                 <li className="check">
//                   Avarage Monthly :100%{' '}
//                 </li>
//               </ol>
//               <div className="price-btn blue">
//                 <Link
//                   className="blue"
//                   to="/register"
//                 >
//                   Deposite
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3 col-sm-6 col-xs-12">
//             <div className="pri_table_list">
//               <div className="top-price-inner">
//                 <span className="base">
//                   Popular
//                 </span>
//                 <div className="rates">
//                   <span className="prices">
//                     50%
//                   </span>
//                   <span className="users">
//                     Daily
//                   </span>
//                 </div>
//                 <span className="per-day">
//                   45 days
//                 </span>
//               </div>
//               <ol className="pricing-text">
//                 <li className="check">
//                   Minimam Invest : $1000
//                 </li>
//                 <li className="check">
//                   Maximam Invest : $50000
//                 </li>
//                 <li className="check">
//                   Avarage Monthly : 200%{' '}
//                 </li>
//               </ol>
//               <div className="price-btn blue">
//                 <Link
//                   className="blue"
//                   to="/register"
//                 >
//                   Deposite
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3 col-sm-6 col-xs-12">
//             <div className="pri_table_list">
//               <span className="base">
//                 Best sale
//               </span>
//               <div className="top-price-inner">
//                 <div className="rates">
//                   <span className="prices">
//                     100%
//                   </span>
//                   <span className="users">
//                     Daily
//                   </span>
//                 </div>
//                 <span className="per-day">
//                   60 days
//                 </span>
//               </div>
//               <ol className="pricing-text">
//                 <li className="check">
//                   Minimam Invest : $1000
//                 </li>
//                 <li className="check">
//                   Maximam Invest : $50000
//                 </li>
//                 <li className="check">
//                   Avarage Monthly : 250%{' '}
//                 </li>
//               </ol>
//               <div className="price-btn blue">
//                 <Link
//                   className="blue"
//                   to="register"
//                 >
//                   Deposite
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3 col-sm-6 col-xs-12">
//             <div className="pri_table_list">
//               <div className="top-price-inner">
//                 <div className="rates">
//                   <span className="prices">
//                     115%
//                   </span>
//                   <span className="users">
//                     Daily
//                   </span>
//                 </div>
//                 <span className="per-day">
//                   70 days
//                 </span>
//               </div>
//               <ol className="pricing-text">
//                 <li className="check">
//                   Minimam Invest : $1000
//                 </li>
//                 <li className="check">
//                   Maximam Invest : $50000
//                 </li>
//                 <li className="check">
//                   Avarage Monthly : 300%{' '}
//                 </li>
//               </ol>
//               <div className="price-btn blue">
//                 <Link
//                   className="blue"
//                   to="/register"
//                 >
//                   Deposite
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3 col-sm-6 col-xs-12">
//             <div className="pri_table_list">
//               <span className="base">
//                 Best plan
//               </span>
//               <div className="top-price-inner">
//                 <div className="rates">
//                   <span className="prices">
//                     125%
//                   </span>
//                   <span className="users">
//                     Daily
//                   </span>
//                 </div>
//                 <span className="per-day">
//                   80 days
//                 </span>
//               </div>
//               <ol className="pricing-text">
//                 <li className="check">
//                   Minimam Invest : $1000
//                 </li>
//                 <li className="check">
//                   Maximam Invest : $70000
//                 </li>
//                 <li className="check">
//                   Avarage Monthly :325%{' '}
//                 </li>
//               </ol>
//               <div className="price-btn blue">
//                 <a
//                   className="blue"
//                   href="#"
//                 >
//                   Deposite
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3 col-sm-6 col-xs-12">
//             <div className="pri_table_list">
//               <div className="top-price-inner">
//                 <div className="rates">
//                   <span className="prices">
//                     150%
//                   </span>
//                   <span className="users">
//                     Daily
//                   </span>
//                 </div>
//                 <span className="per-day">
//                   90 days
//                 </span>
//               </div>
//               <ol className="pricing-text">
//                 <li className="check">
//                   Minimam Invest : $1000
//                 </li>
//                 <li className="check">
//                   Maximam Invest : $50000
//                 </li>
//                 <li className="check">
//                   Avarage Monthly : 350%{' '}
//                 </li>
//               </ol>
//               <div className="price-btn blue">
//                 <a
//                   className="blue"
//                   href="#"
//                 >
//                   Deposite
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3 col-sm-6 col-xs-12">
//             <div className="pri_table_list">
//               <span className="base">
//                 Top plan
//               </span>
//               <div className="top-price-inner">
//                 <div className="rates">
//                   <span className="prices">
//                     200%
//                   </span>
//                   <span className="users">
//                     Daily
//                   </span>
//                 </div>
//                 <span className="per-day">
//                   100 days
//                 </span>
//               </div>
//               <ol className="pricing-text">
//                 <li className="check">
//                   Minimam Invest : $1000
//                 </li>
//                 <li className="check">
//                   Maximam Invest : $50000
//                 </li>
//                 <li className="check">
//                   Avarage Monthly : 400%{' '}
//                 </li>
//               </ol>
//               <div className="price-btn blue">
//                 <a
//                   className="blue"
//                   href="#"
//                 >
//                   Deposite
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="payment-history-area bg-color fix area-padding-2">
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12 col-sm-12 col-xs-12">
//           <div className="section-headline text-center">
//             <h3>
//               Deposite and withdrawals history
//             </h3>
//             <p>
//               Help agencies to define their new business objectives and then create professional software.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-12">
//           <div className="deposite-content">
//             <div className="diposite-box">
//               <h4>
//                 Last deposite
//               </h4>
//               <span>
//                 <i className="flaticon-005-savings" />
//               </span>
//               <div className="deposite-table">
//                 <table>
//                   <tbody>
//                     <tr>
//                       <th>
//                         Name
//                       </th>
//                       <th>
//                         Date
//                       </th>
//                       <th>
//                         Amount
//                       </th>
//                       <th>
//                         Currency
//                       </th>
//                     </tr>
//                     <tr>
//                       <td>
//                         Admond sayhel
//                       </td>
//                       <td>
//                         Jan 02, 2020
//                       </td>
//                       <td>
//                         $1000
//                       </td>
//                       <td>
//                         Bitcoin
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         Jonshon
//                       </td>
//                       <td>
//                         Dec 12, 2019
//                       </td>
//                       <td>
//                         $5000
//                       </td>
//                       <td>
//                         USD
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         Hopper
//                       </td>
//                       <td>
//                         Dec 22, 2019
//                       </td>
//                       <td>
//                         $4000
//                       </td>
//                       <td>
//                         Ripple
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         Admond sayhel
//                       </td>
//                       <td>
//                         Jan 02, 2020
//                       </td>
//                       <td>
//                         $3000
//                       </td>
//                       <td>
//                         Bitcoin
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         Anjel july
//                       </td>
//                       <td>
//                         Jan 05, 2020
//                       </td>
//                       <td>
//                         $500
//                       </td>
//                       <td>
//                         USD
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         Lagisha
//                       </td>
//                       <td>
//                         Jan 12, 2020
//                       </td>
//                       <td>
//                         $5000
//                       </td>
//                       <td>
//                         Bitcoin
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//             <div className="diposite-box">
//               <h4>
//                 Last withdrawals
//               </h4>
//               <span>
//                 <i className="flaticon-042-wallet" />
//               </span>
//               <div className="deposite-table">
//                 <table>
//                   <tbody>
//                     <tr>
//                       <th>
//                         Name
//                       </th>
//                       <th>
//                         Date
//                       </th>
//                       <th>
//                         Amount
//                       </th>
//                       <th>
//                         Currency
//                       </th>
//                     </tr>
//                     <tr>
//                       <td>
//                         Arnold
//                       </td>
//                       <td>
//                         Jan 04, 2020
//                       </td>
//                       <td>
//                         $1000
//                       </td>
//                       <td>
//                         USD
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         Jhon Abra
//                       </td>
//                       <td>
//                         Jan 07, 2020
//                       </td>
//                       <td>
//                         $6000
//                       </td>
//                       <td>
//                         USD
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         Lanisha
//                       </td>
//                       <td>
//                         Jan 13, 2020
//                       </td>
//                       <td>
//                         $5000
//                       </td>
//                       <td>
//                         USD
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         Gongales
//                       </td>
//                       <td>
//                         Jan 12, 2020
//                       </td>
//                       <td>
//                         $2000
//                       </td>
//                       <td>
//                         USD
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         Admond sayhel
//                       </td>
//                       <td>
//                         Jan 10, 2020
//                       </td>
//                       <td>
//                         $1000
//                       </td>
//                       <td>
//                         USD
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         Remond
//                       </td>
//                       <td>
//                         Jan 02, 2020
//                       </td>
//                       <td>
//                         $3000
//                       </td>
//                       <td>
//                         USD
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//     </>
//   )
// }
