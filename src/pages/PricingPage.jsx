import React from "react";
import {
  FaCalendarAlt,
  FaMobileAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaDesktop,
  FaChartLine,
} from "react-icons/fa";
import "./PricingPage.css";

import pricingSideImg1 from "../assets/pricing-pic-1.webp";
import pricingSideImg2 from "../assets/pricing-pic-2.webp";
import pricingSideImg3 from "../assets/pricing-pic-3.webp";
import pricingBottomBg from "../assets/pricing-bottom-bg.webp";

const pricingItems = [
  {
    icon: <FaCalendarAlt />,
    title: "Monthly Credits",
    content: (
      <>
        We include an <span className="emphasis">“Anyway you like it”</span>{" "}
        <span className="red-text">200</span> credits each month.
      </>
    ),
  },
  {
    icon: (
      <div className="combined-icon">
        <FaMobileAlt />
        <FaEnvelope />
      </div>
    ),
    title: "Affordable Rates",
    content: (
      <>
        Our robocall, email packages, &amp; phone bank credits start at{" "}
        <span className="big-red">$0.055</span> per feature
      </>
    ),
  },
  {
    icon: <FaDesktop />,
    title: "Digital Billboards",
    content: (
      <button className="pricing-inline-btn">
        CLICK HERE TO REQUEST PRICING
      </button>
    ),
  },
  {
    icon: <FaChartLine />,
    title: "Fundraising Bonus",
    content: <>Fundraising data included as a product bonus</>,
  },
];

const dialerPlans = [
  { volume: "750", rate: "$0.06", total: "$45" },
  { volume: "2,500", rate: "$0.06", total: "$150" },
  { volume: "5,000", rate: "$0.06", total: "$300" },
  { volume: "10,000", rate: "$0.06", total: "$600" },
  { volume: "25,000", rate: "$0.055", total: "$1,375" },
  { volume: "75,000", rate: "$0.055", total: "$4,125" },
  { volume: "100,000", rate: "$0.05", total: "$5,000" },
];

export default function PricingPage() {
  return (
    <main className="pricing-page">
      <section className="pricing-hero">
        <div className="pricing-container">
          <div className="pricing-layout">
            {/* Left Content */}
            <div className="pricing-left">
              <div className="pricing-top-copy">
                <p className="pricing-kicker">
                  TURNKEY ROBOCALLS &amp; PHONE BANK SERVICES
                </p>

                <h1 className="pricing-main-title">
                  Our All-Inclusive Back-Off Product Starts at{" "}
                  <span>$1,199.99</span>
                </h1>

                <p className="pricing-subtitle">This is a one-time fee</p>
              </div>

              <div className="pricing-features">
                {pricingItems.map((item, index) => (
                  <div className="pricing-feature-row" key={index}>
                    <div className="pricing-feature-icon">{item.icon}</div>
                    <div className="pricing-feature-content">
                      <h3>{item.title}</h3>
                      <div className="pricing-feature-text">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Images */}
            <div className="pricing-right">
              <div className="pricing-side-card">
                <img src={pricingSideImg1} alt="Campaign dashboard mobile view" />
              </div>

              <div className="pricing-side-card">
                <img src={pricingSideImg2} alt="Digital billboard campaign ad" />
              </div>

              <div className="pricing-side-card">
                <img src={pricingSideImg3} alt="Campaign mobile reporting screen" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}