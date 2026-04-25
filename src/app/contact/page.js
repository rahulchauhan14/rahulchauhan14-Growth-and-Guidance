'use client';
import { useState } from 'react';
import './contact.css';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Mock sending process
    setTimeout(() => {
      setStatus('Message sent successfully! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="page-header diagonal-bg-primary">
        <div className="container text-center">
          <h1>Contact Us</h1>
          <p>Take the first step towards financial freedom</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <div className="accent-line"></div>
              <p className="mb-4 text-light-p">
                We are here to help you navigate your financial journey. Reach out to set up a consultation with Prabha Kumari.
              </p>
              
              <div className="info-item">
                <div className="info-icon"><MapPin /></div>
                <div>
                  <h4>Office Address</h4>
                  <p>E-501, Metro Vihar<br/>Shastri Park, North East Delhi<br/>Seelampur, Delhi – 110053<br/>India</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Phone /></div>
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:+919958008529">+91 9958008529</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Mail /></div>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:chauhanmahi2002@gmail.com">chauhanmahi2002@gmail.com</a></p>
                </div>
              </div>

              <div className="contact-person mt-4">
                <img src="/images/advisor.png" alt="Prabha" className="person-avatar" />
                <div>
                  <h4>Prabha Kumari</h4>
                  <span className="designation">Mutual Fund Distributor, NJ Wealth Partner</span>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h3>Send a Message</h3>
              {status && <div className={`status-msg ${status.includes('successfully') ? 'success' : ''}`}>{status}</div>}
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} required />
                </div>
                
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" value={formData.email} onChange={e=>setFormData({...formData, email: e.target.value})} required />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" value={formData.phone} onChange={e=>setFormData({...formData, phone: e.target.value})} required />
                </div>

                <div className="form-group">
                  <label>Message / Inquiry</label>
                  <textarea rows="5" value={formData.message} onChange={e=>setFormData({...formData, message: e.target.value})} required></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-2">Submit Request</button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <section className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.825225916058!2d77.26045355!3d28.6685418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc8d2d665a3d%3A0xc6cbfa8a958a2dbe!2sSeelampur%2C%20Shahdara%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{border:0, display: 'block'}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        ></iframe>
      </section>
    </div>
  );
}
