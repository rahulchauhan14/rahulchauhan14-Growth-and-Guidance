import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <div className="footer-logo">
            <img src="/images/logo.png" alt="Growth & Guidance Logo" className="logo-img" />
            <div className="logo-text">
              <h3>Growth & Guidance</h3>
              <p>Where Your Money Works For You</p>
            </div>
          </div>
          <p className="footer-desc">
            A trusted mutual fund distribution firm led by Prabha Kumari, helping individuals and families build wealth through disciplined investments and financial planning.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/mutual-funds">Mutual Funds</Link></li>
            <li><Link href="/sip-calculator">SIP Calculator</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li><strong>Prabha Kumari</strong> - Mutual Fund Distributor</li>
            <li>📞 <a href="tel:+919958008529">+91 9958008529</a></li>
            <li>📧 <a href="mailto:chauhanmahi2002@gmail.com">chauhanmahi2002@gmail.com</a></li>
            <li>📍 E-501, Metro Vihar, Shastri Park,<br/> North East Delhi, Seelampur,<br/> Delhi – 110053, India</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Growth & Guidance. All rights reserved. | Partnered with NJ Wealth</p>
        </div>
      </div>
    </footer>
  );
}
