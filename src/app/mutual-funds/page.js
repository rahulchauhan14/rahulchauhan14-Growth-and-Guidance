import Link from 'next/link';
import './mutual-funds.css';
import { CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Mutual Funds - Growth & Guidance',
  description: 'Grow your wealth with expert mutual fund investments.',
};

export default function MutualFundsPage() {
  return (
    <div className="mf-page">
      <div className="page-header diagonal-bg-primary">
        <div className="container text-center">
          <h1>Mutual Fund Investments</h1>
          <p>The Smart Way to Grow Your Wealth</p>
        </div>
      </div>

      <section className="mf-intro">
        <div className="container">
          <div className="mf-intro-content">
            <div className="mf-text">
              <h2>Why Invest in Mutual Funds?</h2>
              <div className="accent-line"></div>
              <p>
                Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. They are managed by professional fund managers who allocate the investments to produce capital gains and income for the fund's investors.
              </p>
              <ul className="benefit-list">
                <li><CheckCircle className="icon" /> Professional Money Management</li>
                <li><CheckCircle className="icon" /> Diversification & Risk Reduction</li>
                <li><CheckCircle className="icon" /> High Liquidity</li>
                <li><CheckCircle className="icon" /> Tax Benefits (ELSS)</li>
                <li><CheckCircle className="icon" /> Flexibility (SIP & Lumpsum)</li>
                <li><CheckCircle className="icon" /> Well Regulated (SEBI)</li>
              </ul>
            </div>
            <div className="mf-image">
              <img src="/images/hero.png" alt="Wealth Growth Chart" />
            </div>
          </div>
        </div>
      </section>

      <section className="diagonal-bg-light mf-types">
        <div className="container">
          <h2 className="text-center mb-5">Types of Mutual Funds We Offer</h2>
          <div className="funds-grid mt-4">
            <div className="fund-card">
              <h3>Equity Funds</h3>
              <p>Invest primarily in stocks. Ideal for long-term wealth creation with higher risk and potentially higher returns.</p>
            </div>
            <div className="fund-card">
              <h3>Debt Funds</h3>
              <p>Invest in fixed-income securities like bonds and treasury bills. Suitable for low-risk appetite and steady income.</p>
            </div>
            <div className="fund-card">
              <h3>Hybrid Funds</h3>
              <p>Invest in a mix of equity and debt. Balances risk and return, ideal for moderate risk takers.</p>
            </div>
            <div className="fund-card">
              <h3>ELSS (Tax Saving)</h3>
              <p>Equity-linked savings schemes offer tax benefits under section 80C along with capital appreciation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section text-center">
        <div className="container">
          <h2>Ready to Start Investing?</h2>
          <p>Let Prabha Kumari guide you to the right funds based on your goals.</p>
          <div className="cta-buttons mt-4">
            <Link href="/sip-calculator" className="btn btn-secondary mr-3 text-white" style={{color: 'var(--primary-color)'}}>Calculate Returns</Link>
            <Link href="/contact" className="btn btn-primary">Contact Us Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
