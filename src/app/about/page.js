import Link from 'next/link';
import './about.css';

export const metadata = {
  title: 'About Us - Growth & Guidance',
  description: 'Learn more about Growth & Guidance and Prabha Kumari.',
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="page-header diagonal-bg-primary">
        <div className="container text-center">
          <h1>About Growth & Guidance</h1>
          <p>Your Trusted Partner in Wealth Creation</p>
        </div>
      </div>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text-content">
              <h2>Welcome to Growth & Guidance</h2>
              <div className="accent-line"></div>
              <p>
                Growth & Guidance is a premier mutual fund distribution firm dedicated to helping individuals and families build wealth through disciplined investments and strategic financial planning.
              </p>
              <p>
                Founded on the principles of trust, transparency, and tailored advice, our firm believes that financial freedom is achievable for everyone. We make your money work harder for you by recommending investment avenues that strictly align with your life goals.
              </p>
              
              <h3 className="mt-4">Meet Prabha Kumari</h3>
              <p>
                Led by Prabha Kumari, a seasoned Mutual Fund Distributor and financial planner, Growth & Guidance brings years of expertise directly to you. Prabha has guided countless investors in navigating mutual funds, establishing SIP plans, and designing long-term wealth creation strategies.
              </p>
              <p>
                Partnered with NJ Wealth, one of India's leading mutual fund distribution networks, we provide our clients with access to top-performing funds, comprehensive portfolio management, and a seamless digital investing experience.
              </p>
            </div>
            <div className="about-image-content">
              <img src="/images/advisor.png" alt="Prabha Kumari - Financial Advisor" className="portrait" />
              <div className="experience-badge">
                <span className="years">Expert</span>
                <span>Financial<br/>Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="diagonal-bg-light mission-section">
        <div className="container text-center">
          <h2>Our Mission & Vision</h2>
          <div className="mission-grid mt-4">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>To empower our clients with the knowledge and tools needed to achieve financial independence, ensuring that every investment made today paves the way for a secure tomorrow.</p>
            </div>
            <div className="mission-card">
              <h3>Our Vision</h3>
              <p>To be the most trusted and preferred financial advisory partner, known for our integrity, personalized service, and commitment to client wealth creation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
