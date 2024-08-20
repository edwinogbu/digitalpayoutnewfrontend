import React from 'react';

const PaymentHistoryArea = () => {
  const deposits = [
    { id: 1, name: 'Admond Sayhel', date: 'Jan 02, 2020', amount: '$1000', currency: 'Bitcoin' },
    { id: 2, name: 'Jonshon', date: 'Dec 12, 2019', amount: '$5000', currency: 'USD' },
    { id: 3, name: 'Hopper', date: 'Dec 22, 2019', amount: '$4000', currency: 'Ripple' },
    { id: 4, name: 'Admond Sayhel', date: 'Jan 02, 2020', amount: '$3000', currency: 'Bitcoin' },
    { id: 5, name: 'Anjel July', date: 'Jan 05, 2020', amount: '$500', currency: 'USD' },
    { id: 6, name: 'Lagisha', date: 'Jan 12, 2020', amount: '$5000', currency: 'Bitcoin' },
  ];

  const withdrawals = [
    { id: 1, name: 'Arnold', date: 'Jan 04, 2020', amount: '$1000', currency: 'USD' },
    { id: 2, name: 'Jhon Abra', date: 'Jan 07, 2020', amount: '$6000', currency: 'USD' },
    { id: 3, name: 'Lanisha', date: 'Jan 13, 2020', amount: '$5000', currency: 'USD' },
    { id: 4, name: 'Gongales', date: 'Jan 12, 2020', amount: '$2000', currency: 'USD' },
    { id: 5, name: 'Admond Sayhel', date: 'Jan 10, 2020', amount: '$1000', currency: 'USD' },
    { id: 6, name: 'Remond', date: 'Jan 02, 2020', amount: '$3000', currency: 'USD' },
  ];

  return (
    <div className="payment-history-area bg-color fix area-padding-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="section-headline text-center">
              <h3 style={{
                // fontWeight: "bold",
                color: "#000033",
                fontSize: "26px", 
                lineHeight: "1.2",
              }}>Deposits and Withdrawals: Evidence of Investor Success</h3>
              <p style={{
                // fontWeight: "bold",
                color: "#000033",
                // fontSize: "16px", 
                lineHeight: "1.2",
                // fontFamily: "'Brush Script MT', cursive",
              }}>
                At Digital PayOut, we are proud to showcase the recent transactions made by our valued investors. These deposits and withdrawals stand as tangible evidence of the trust and success our community experiences on our platform. Each entry reflects a real investor engaging with the world of cryptocurrency, realizing returns on their investments, and securing profits.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="deposite-content">
              <div className="diposite-box">
                <h4>Recent Deposits</h4>
                <span><i className="flaticon-005-savings"></i></span>
                <div className="deposite-table">
                  <table  className="table table-striped  table-hover table-sm">
                  <caption>we are proud to showcase the recent transactions made by our valued investors.</caption>
                    <thead style={{ backgroundColor: "#000033", color: "#fff" }}>
                      <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Currency</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deposits.map(deposit => (
                        <tr key={deposit.id}>
                          <td>{deposit.name}</td>
                          <td>{deposit.date}</td>
                          <td>{deposit.amount}</td>
                          <td>{deposit.currency}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="deposite-content">
              <div className="diposite-box">
                <h4>Recent Withdrawals</h4>
                <span><i className="flaticon-042-wallet"></i></span>
                <div className="deposite-table">
                <table  className="table table-striped  table-hover table-sm">
                <caption>we are proud to showcase the recent transactions made by our valued investors.</caption>
                    <thead style={{ backgroundColor: "#000033", color: "#fff" }}>
                      <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Currency</th>
                      </tr>
                    </thead>
                    <tbody>
                      {withdrawals.map(withdrawal => (
                        <tr key={withdrawal.id}>
                          <td>{withdrawal.name}</td>
                          <td>{withdrawal.date}</td>
                          <td>{withdrawal.amount}</td>
                          <td>{withdrawal.currency}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryArea;



// import React from 'react';
// // import './PaymentHistoryArea.css'; 

// const PaymentHistoryArea = () => {
//   const deposits = [
//     { id: 1, name: 'Admond sayhel', date: 'Jan 02, 2020', amount: '$1000', currency: 'Bitcoin' },
//     { id: 2, name: 'Jonshon', date: 'Dec 12, 2019', amount: '$5000', currency: 'USD' },
//     { id: 3, name: 'Hopper', date: 'Dec 22, 2019', amount: '$4000', currency: 'Ripple' },
//     { id: 4, name: 'Admond sayhel', date: 'Jan 02, 2020', amount: '$3000', currency: 'Bitcoin' },
//     { id: 5, name: 'Anjel july', date: 'Jan 05, 2020', amount: '$500', currency: 'USD' },
//     { id: 6, name: 'Lagisha', date: 'Jan 12, 2020', amount: '$5000', currency: 'Bitcoin' },
//   ];

//   const withdrawals = [
//     { id: 1, name: 'Arnold', date: 'Jan 04, 2020', amount: '$1000', currency: 'USD' },
//     { id: 2, name: 'Jhon Abra', date: 'Jan 07, 2020', amount: '$6000', currency: 'USD' },
//     { id: 3, name: 'Lanisha', date: 'Jan 13, 2020', amount: '$5000', currency: 'USD' },
//     { id: 4, name: 'Gongales', date: 'Jan 12, 2020', amount: '$2000', currency: 'USD' },
//     { id: 5, name: 'Admond sayhel', date: 'Jan 10, 2020', amount: '$1000', currency: 'USD' },
//     { id: 6, name: 'Remond', date: 'Jan 02, 2020', amount: '$3000', currency: 'USD' },
//   ];

//   return (
//     <div className="payment-history-area bg-color fix area-padding-2">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12 col-sm-12 col-xs-12">
//             <div className="section-headline text-center">
//               <h3 style={{
//         // fontFamily: "'Brush Script MT', cursive",
//         fontWeight: "bold",
//         color: "#000033",
//         fontSize: "46px", 
//         lineHeight: "1.2", 
//     }}>Deposit and withdrawals history</h3>
//               <p>
//                 Help agencies to define their new business objectives and then create professional software.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-12 col-sm-12 col-xs-12">
//             <div className="deposite-content">
//               <div className="diposite-box">
//                 <h4>Last deposit</h4>
//                 <span><i className="flaticon-005-savings"></i></span>
//                 <div className="deposite-table">
//                   <table>
//                     <thead style={{"background-color":"#000033","color":"#fff"}}>
//                       <tr>
//                         <th>Name</th>
//                         <th>Date</th>
//                         <th>Amount</th>
//                         <th>Currency</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {deposits.map(deposit => (
//                         <tr key={deposit.id}>
//                           <td>{deposit.name}</td>
//                           <td>{deposit.date}</td>
//                           <td>{deposit.amount}</td>
//                           <td>{deposit.currency}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//             <div className="deposite-content">
//               <div className="diposite-box">
//                 <h4>Last withdrawals</h4>
//                 <span><i className="flaticon-042-wallet"></i></span>
//                 <div className="deposite-table">
//                   <table>
//                     <thead style={{"background-color":"#000033","color":"#fff"}}>
//                       <tr>
//                         <th>Name</th>
//                         <th>Date</th>
//                         <th>Amount</th>
//                         <th>Currency</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {withdrawals.map(withdrawal => (
//                         <tr key={withdrawal.id}>
//                           <td>{withdrawal.name}</td>
//                           <td>{withdrawal.date}</td>
//                           <td>{withdrawal.amount}</td>
//                           <td>{withdrawal.currency}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentHistoryArea;
