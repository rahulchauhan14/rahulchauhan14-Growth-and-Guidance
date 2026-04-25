'use client';
import { useState } from 'react';
import './sip-calculator.css';

export default function SIPCalculatorPage() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [investmentPeriod, setInvestmentPeriod] = useState(10);

  // Future Value = P × ({[1 + i]^n - 1} / i) × (1 + i)
  const monthlyRate = expectedReturnRate / 12 / 100;
  const months = investmentPeriod * 12;

  const calculateReturn = () => {
    if (monthlyRate === 0) return monthlyInvestment * months;
    const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    return Math.round(futureValue);
  };

  const totalInvestment = monthlyInvestment * months;
  const finalValue = calculateReturn();
  const estimatedReturns = finalValue - totalInvestment;

  const formatCurrency = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="sip-page">
      <div className="page-header diagonal-bg-primary">
        <div className="container text-center">
          <h1>SIP Calculator</h1>
          <p>Estimate your mutual fund returns easily</p>
        </div>
      </div>

      <section className="sip-calculator-section">
        <div className="container">
          <div className="calculator-wrapper">
            <div className="calc-inputs">
              <h2>Input Details</h2>
              
              <div className="input-group">
                <label>Monthly Investment (₹)</label>
                <div className="range-container">
                  <input 
                    type="number" 
                    value={monthlyInvestment} 
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="num-input"
                  />
                  <input 
                    type="range" 
                    min="500" max="100000" step="500"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Expected Return Rate (p.a %)</label>
                <div className="range-container">
                  <input 
                    type="number" 
                    value={expectedReturnRate} 
                    onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
                    className="num-input"
                  />
                  <input 
                    type="range" 
                    min="1" max="30" step="0.5"
                    value={expectedReturnRate}
                    onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Time Period (Years)</label>
                <div className="range-container">
                  <input 
                    type="number" 
                    value={investmentPeriod} 
                    onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                    className="num-input"
                  />
                  <input 
                    type="range" 
                    min="1" max="40" step="1"
                    value={investmentPeriod}
                    onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>

            <div className="calc-results">
              <h2>Estimated Results</h2>
              <div className="result-card">
                <p>Invested Amount</p>
                <h3>{formatCurrency(totalInvestment)}</h3>
              </div>
              <div className="result-card">
                <p>Est. Returns</p>
                <h3>{formatCurrency(estimatedReturns)}</h3>
              </div>
              <div className="result-card highlight">
                <p>Total Value</p>
                <h2>{formatCurrency(finalValue)}</h2>
              </div>

              <div className="calc-note mt-4">
                <p><em>* Note: The calculations are estimates and do not account for inflation or taxes. Actual returns may vary depending on market conditions.</em></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
