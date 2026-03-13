import React from "react";
import {
  FaPhoneVolume,
  FaHeadset,
  FaBolt,
  FaChartLine,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";
import "./PricingPage.css";

const pricingPlans = [
  { calls: "750 Calls", rate: "$0.06 / call", price: "$45", featured: false },
  { calls: "2,500 Calls", rate: "$0.06 / call", price: "$150", featured: false },
  { calls: "5,000 Calls", rate: "$0.06 / call", price: "$300", featured: true },
  { calls: "10,000 Calls", rate: "$0.06 / call", price: "$600", featured: false },
  { calls: "25,000 Calls", rate: "$0.055 / call", price: "$1,375", featured: false },
  { calls: "75,000 Calls", rate: "$0.055 / call", price: "$4,125", featured: false },
  { calls: "100,000 Calls", rate: "$0.05 / call", price: "$5,000", featured: true },
];

const features = [
  {
    icon: <FaPhoneVolume />,
    title: "High-Volume Robo Dialing",
    text: "Launch automated outreach campaigns quickly with dependable call delivery at every pricing tier.",
  },
  {
    icon: <FaHeadset />,
    title: "Campaign Ready",
    text: "Perfect for political campaigns, voter engagement, event reminders, fundraising pushes, and announcements.",
  },
  {
    icon: <FaBolt />,
    title: "Fast Setup",
    text: "Get your message live faster with a streamlined platform built to support fast-moving campaign operations.",
  },
  {
    icon: <FaChartLine />,
    title: "Scalable Pricing",
    text: "Lower per-call pricing at higher volumes helps your campaign maximize outreach while managing budget efficiently.",
  },
];

const PricingPage = () => {
  return (
    <main className="pricing-page">
      <section className="pricing-hero">
        <div className="pricing-hero-overlay" />
        <div className="pricing-container">
          <div className="pricing-hero-content">
            <span className="pricing-label">Pricing</span>
            <h1>Simple Robo Dialer Pricing for Every Campaign Size</h1>
            <p>
              Whether you are reaching hundreds or hundreds of thousands of voters,
              <strong> RinDial&apos;s Robo Dialer </strong>
              gives you flexible pricing, reliable outreach, and a platform built
              for campaign success.
            </p>

            <div className="pricing-hero-badges">
              <div className="hero-badge">
                <FaUsers />
                <span>Built for campaigns</span>
              </div>
              <div className="hero-badge">
                <FaPhoneVolume />
                <span>Scalable voice outreach</span>
              </div>
              <div className="hero-badge">
                <FaCheckCircle />
                <span>Transparent rates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-cards-section">
        <div className="pricing-container">
          <div className="section-heading">
            <h2>Choose the Right Call Volume</h2>
            <p>
              Start with a smaller package or scale up with discounted rates for
              larger outreach campaigns.
            </p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${plan.featured ? "featured" : ""}`}
              >
                {plan.featured && <div className="pricing-badge">Popular</div>}

                <h3>{plan.calls}</h3>
                <p className="pricing-rate">{plan.rate}</p>
                <div className="pricing-price">{plan.price}</div>

                <ul>
                  <li>Automated voice outreach</li>
                  <li>Fast campaign activation</li>
                  <li>Reliable call delivery</li>
                  <li>Built for voter contact</li>
                </ul>

                <button className="pricing-btn">Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-features-section">
        <div className="pricing-container">
          <div className="section-heading">
            <h2>Why Campaigns Choose Our Robo Dialer</h2>
            <p>
              Our platform is designed to help teams communicate clearly, move
              quickly, and reach more voters with confidence.
            </p>
          </div>

          <div className="features-grid">
            {features.map((item, index) => (
              <div key={index} className="feature-box">
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-info-section">
        <div className="pricing-container pricing-info-wrap">
          <div className="pricing-info-left">
            <span className="pricing-small-title">Built for Results</span>
            <h2>Flexible Pricing That Supports Growth</h2>
            <p>
              From local outreach to large-scale voter contact, RinDial helps your
              campaign stay organized and effective. As your volume increases, your
              rate drops — helping you reach more people while keeping costs under
              control.
            </p>
            <p>
              Our Robo Dialer is ideal for campaign reminders, GOTV messaging,
              announcements, volunteer coordination, fundraising follow-ups, and
              rapid-response communication.
            </p>
          </div>

          <div className="pricing-info-right">
            <div className="info-panel">
              <h3>Included With Every Package</h3>
              <div className="info-list">
                <div><FaCheckCircle /> Automated outbound calling</div>
                <div><FaCheckCircle /> Campaign-friendly pricing</div>
                <div><FaCheckCircle /> Easy package scaling</div>
                <div><FaCheckCircle /> Professional outreach support</div>
                <div><FaCheckCircle /> Political communication use cases</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-cta-section">
        <div className="pricing-container">
          <div className="pricing-cta-box">
            <h2>Ready to Launch Your Robo Dialer Campaign?</h2>
            <p>
              Pick the volume that fits your outreach goals and start connecting
              with voters, supporters, and communities more efficiently.
            </p>
            <div className="pricing-cta-buttons">
              <button className="primary-btn">Schedule a Consultation</button>
              <button className="secondary-btn">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;