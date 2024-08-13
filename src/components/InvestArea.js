import React from 'react';
import './InvestArea.css'; // Assuming you have a CSS file for additional styling

const InvestArea = () => {
  const plans = [
    {
      id: 1,
      rate: '5%',
      duration: '10 days',
      minInvest: '$100',
      maxInvest: '$1000',
      avgMonthly: '50%',
      label: '',
    },
    {
      id: 2,
      rate: '15%',
      duration: '30 days',
      minInvest: '$1000',
      maxInvest: '$10000',
      avgMonthly: '100%',
      label: '',
    },
    {
      id: 3,
      rate: '50%',
      duration: '45 days',
      minInvest: '$1000',
      maxInvest: '$50000',
      avgMonthly: '200%',
      label: 'Popular',
    },
    {
      id: 4,
      rate: '100%',
      duration: '60 days',
      minInvest: '$1000',
      maxInvest: '$50000',
      avgMonthly: '250%',
      label: 'Best sale',
    },
  ];

  return (
    <div className="invest-area bg-color area-padding-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="section-headline text-center">
              <h3>The best investment plan</h3>
              <p>
                Help agencies to define their new business objectives and then create professional software.
              </p>
            </div>
          </div>
        </div>
        <div className="row pricing-content">
          {plans.map(plan => (
            <div className="col-md-3 col-sm-6 col-xs-12" key={plan.id}>
              <div className="pri_table_list">
                {plan.label && <span className="base">{plan.label}</span>}
                <div className="top-price-inner">
                  <div className="rates">
                    <span className="prices">{plan.rate}</span><span className="users">Daily</span>
                  </div>
                  <span className="per-day">{plan.duration}</span>
                </div>
                <ol className="pricing-text">
                  <li className="check">Minimam Invest : {plan.minInvest}</li>
                  <li className="check">Maximam Invest : {plan.maxInvest}</li>
                  <li className="check">Avarage Monthly : {plan.avgMonthly}</li>
                </ol>
                <div className="price-btn blue">
                  <a className="blue" href="signup.html">Deposit</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestArea;
