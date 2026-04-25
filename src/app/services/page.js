import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { PiggyBank, Target, Briefcase, Calculator, TrendingUp, ShieldCheck } from 'lucide-react';
import './services.css';

export const metadata = {
  title: 'Our Services - Growth & Guidance',
  description: 'Explore our financial planning and mutual fund investment services.',
};

export default function ServicesPage() {
  return (
    <div className="services-page">
      <div className="page-header diagonal-bg-primary">
        <div className="container text-center">
          <h1>Our Services</h1>
          <p>Comprehensive Financial Solutions Tailored for You</p>
        </div>
      </div>

      <section className="services-main">
        <div className="container">
          <div className="services-grid-large">
            <ServiceCard 
              icon={<Briefcase />}
              title="Mutual Fund Investments"
              description="We analyze your risk appetite, investment horizon, and financial goals to recommend top-performing mutual funds. From equity to debt and hybrid funds, we build a diversified portfolio that maximizes returns while managing risk."
            />
            <ServiceCard 
              icon={<Calculator />}
              title="SIP Planning"
              description="Systematic Investment Plans (SIP) allow you to invest small amounts regularly. We help you set up and monitor SIPs that harness the power of compounding, making long-term wealth creation accessible and disciplined."
            />
            <ServiceCard 
              icon={<PiggyBank />}
              title="Retirement Planning"
              description="Enjoy your golden years without financial stress. We calculate your retirement corpus needs accounting for inflation, and structure an investment portfolio that provides a steady stream of income post-retirement."
            />
            <ServiceCard 
              icon={<Target />}
              title="Financial Goal Planning"
              description="Whether it's buying a house, funding your child's higher education, or international travel, we map your investments to specific life goals, ensuring you have the funds available exactly when you need them."
            />
            <ServiceCard 
              icon={<TrendingUp />}
              title="Portfolio Management"
              description="Markets are dynamic. We provide regular portfolio reviews and rebalancing to ensure your investments stay aligned with your objectives, booking profits and minimizing losses strategically."
            />
            <ServiceCard 
              icon={<ShieldCheck />}
              title="Tax Saving Investments (ELSS)"
              description="Save tax legally while growing your wealth. We guide you towards Equity Linked Savings Schemes (ELSS) under Section 80C, offering the dual benefit of capital appreciation and tax deductions."
            />
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container text-center">
          <h2>Ready to Secure Your Future?</h2>
          <p>Contact us today for a personalized financial consultation.</p>
          <Link href="/contact" className="btn btn-primary mt-4 inline-block">Book a Consultation</Link>
        </div>
      </section>
    </div>
  );
}
