'use client';

import { useState } from 'react';

interface Repair {
  id: number;
  device: string;
  customer: string;
  issue: string;
  status: 'pending' | 'progress' | 'completed';
  price: number;
  date: string;
}

export default function Home() {
  const [repairs, setRepairs] = useState<Repair[]>([
    {
      id: 1,
      device: 'iPhone 13 Pro',
      customer: 'John Smith',
      issue: 'Cracked screen replacement',
      status: 'completed',
      price: 199,
      date: '2025-12-08'
    },
    {
      id: 2,
      device: 'Samsung Galaxy S21',
      customer: 'Sarah Johnson',
      issue: 'Battery replacement',
      status: 'progress',
      price: 89,
      date: '2025-12-09'
    },
    {
      id: 3,
      device: 'MacBook Pro 2019',
      customer: 'Mike Wilson',
      issue: 'Keyboard repair',
      status: 'pending',
      price: 249,
      date: '2025-12-10'
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    device: '',
    issue: '',
    urgency: 'normal'
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newRepair: Repair = {
      id: repairs.length + 1,
      device: formData.device,
      customer: formData.name,
      issue: formData.issue,
      status: 'pending',
      price: 0,
      date: new Date().toISOString().split('T')[0]
    };

    setRepairs([newRepair, ...repairs]);
    setFormData({
      name: '',
      email: '',
      phone: '',
      device: '',
      issue: '',
      urgency: 'normal'
    });

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);

    const element = document.getElementById('repairs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <span>⚡</span>
              <span>TechFix Repair Shop</span>
            </div>
            <nav>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#booking">Book Repair</a></li>
                <li><a href="#repairs">Track Repairs</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Expert Electronics Repair</h1>
          <p>Fast, reliable repairs for smartphones, tablets, laptops, and more</p>
          <button className="cta-button" onClick={scrollToBooking}>
            Book a Repair
          </button>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Phone Repair</h3>
              <p>Screen replacement, battery swap, charging port fix, water damage recovery</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Laptop Repair</h3>
              <p>Keyboard replacement, screen repair, SSD upgrade, motherboard diagnostics</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📟</div>
              <h3>Tablet Repair</h3>
              <p>Digitizer replacement, button repair, software troubleshooting</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎮</div>
              <h3>Gaming Console</h3>
              <p>HDMI port fix, disc drive repair, controller repair, overheating issues</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⌚</div>
              <h3>Smartwatch</h3>
              <p>Battery replacement, screen repair, band replacement, sync issues</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔌</div>
              <h3>Other Electronics</h3>
              <p>Speakers, headphones, cameras, and more. Contact us for a quote!</p>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="booking-section">
        <div className="container">
          <h2 className="section-title">Book a Repair</h2>
          {showSuccess && (
            <div className="success-message">
              ✓ Repair booked successfully! We'll contact you shortly to confirm.
            </div>
          )}
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="device">Device Type *</label>
              <input
                type="text"
                id="device"
                name="device"
                placeholder="e.g., iPhone 13, Samsung Galaxy S21"
                value={formData.device}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="issue">Describe the Issue *</label>
              <textarea
                id="issue"
                name="issue"
                placeholder="Please describe the problem with your device..."
                value={formData.issue}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="urgency">Urgency</label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleInputChange}
              >
                <option value="normal">Normal (3-5 days)</option>
                <option value="urgent">Urgent (1-2 days)</option>
                <option value="emergency">Emergency (Same day)</option>
              </select>
            </div>
            <button type="submit" className="submit-button">
              Submit Repair Request
            </button>
          </form>
        </div>
      </section>

      <section id="repairs" className="repairs-list">
        <div className="container">
          <h2 className="section-title">Current Repairs</h2>
          <div className="repairs-grid">
            {repairs.map((repair) => (
              <div key={repair.id} className="repair-item">
                <div className="repair-info">
                  <h4>{repair.device}</h4>
                  <p>{repair.customer}</p>
                  <p>{repair.issue}</p>
                  <p style={{ fontSize: '12px', marginTop: '5px', color: '#999' }}>
                    {repair.date}
                  </p>
                </div>
                <div className={`status-badge status-${repair.status}`}>
                  {repair.status === 'pending' && 'Pending'}
                  {repair.status === 'progress' && 'In Progress'}
                  {repair.status === 'completed' && 'Completed'}
                </div>
                <div className="price">
                  {repair.price > 0 ? `$${repair.price}` : 'TBD'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>📍 123 Tech Street, Silicon Valley, CA 94025</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@techfixrepair.com</p>
            </div>
            <div className="footer-section">
              <h3>Hours</h3>
              <p>Monday - Friday: 9AM - 7PM</p>
              <p>Saturday: 10AM - 6PM</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="footer-section">
              <h3>Warranty</h3>
              <p>All repairs come with a 90-day warranty on parts and labor</p>
              <p>Free diagnostics for all devices</p>
            </div>
          </div>
          <p style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #555' }}>
            © 2025 TechFix Repair Shop. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
