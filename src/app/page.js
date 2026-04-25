import HeroSlider from '@/components/HeroSlider';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';
import { PiggyBank, Target, Briefcase, Calculator } from 'lucide-react';
import './page.css';

export default function Home() {
  return (
    <div className="home-page">
      <HeroSlider />

      <section className="about-section">
        <div className="container about-container">
          <div className="about-text">
            <h2>Welcome to Growth & Guidance</h2>
            <div className="accent-line"></div>
            <p>
              Growth & Guidance is a mutual fund distribution firm helping individuals and families build wealth through disciplined investments and financial planning.
            </p>
            <p>
              Led by Prabha Kumari, we guide investors in mutual funds, SIP planning, and long-term wealth creation. Our mission is to make your money work for you, ensuring a secure and prosperous financial future.
            </p>
            <Link href="/about" className="btn btn-primary mt-4 inline-block">More About Us</Link>
          </div>
          <div className="about-image-wrapper">
          <img src="/images/meeting.png" alt="Financial Planning" className="about-image" />
          </div>
        </div>
      </section>

      <section className="diagonal-bg-light services-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Services</h2>
            <p className="subtitle">Comprehensive Financial Solutions for Your Future</p>
          </div>
          <div className="services-grid">
            <ServiceCard 
              icon={<Briefcase />}
              title="Mutual Fund Investments"
              description="Expert guidance in selecting the right mutual funds aligning with your risk profile and financial goals."
              link="/mutual-funds"
            />
            <ServiceCard 
              icon={<Calculator />}
              title="SIP Planning"
              description="Systematic Investment Plans to build wealth steadily over time through the power of compounding."
              link="/sip-calculator"
            />
            <ServiceCard 
              icon={<PiggyBank />}
              title="Retirement Planning"
              description="Secure your golden years with strategic investment planning that ensures a comfortable retirement."
              link="/services"
            />
            <ServiceCard 
              icon={<Target />}
              title="Financial Goal Planning"
              description="Structured planning for life goals like children's education, marriage, and wealth creation."
              link="/services"
            />
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <div className="wcu-inner">
            <div className="wcu-content">
              <h2>Why Choose Us</h2>
              <ul className="wcu-list">
                <li>✅ Trusted Mutual Fund Guidance</li>
                <li>✅ NJ Wealth Partnership</li>
                <li>✅ Personalized Investment Planning</li>
                <li>✅ Long-Term Wealth Creation Strategy</li>
                <li>✅ Professional Financial Advice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="diagonal-bg-primary quote-section">
        <div className="container text-center">
          <blockquote className="quote">
            "Compound interest is the eighth wonder of the world. He who understands it earns it; he who doesn't pays it."
          </blockquote>
          <cite className="quote-author">— Albert Einstein</cite>
        </div>
      </section>

      <section className="gallery-preview">
        <div className="container text-center">
          <h2>Glimpses of Growth & Guidance</h2>
          <div className="gallery-grid-mini">
            <img src="/images/meeting.png" alt="Client Meeting" />
            <img src="/images/meeting.png" alt="Investment Planning" />
            <img src="/images/meeting.png" alt="Awareness Program" />
            <img src="/images/meeting.png" alt="Office Activities" />
          </div>
          <Link href="/gallery" className="btn btn-secondary mt-4 inline-block">View Full Gallery</Link>
        </div>
      </section>

      <section className="cta-section">
        <div className="container text-center">
          <h2>Start Your Investment Journey Today</h2>
          <p>Take the first step towards financial independence.</p>
          <div className="cta-buttons mt-4">
            <Link href="/mutual-funds" className="btn btn-primary">Start SIP</Link>
            <Link href="/contact" className="btn btn-secondary">Book Consultation</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
