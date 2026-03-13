import React from "react";
import {
  FaUsers,
  FaChartLine,
  FaDonate,
  FaDatabase,
  FaBullhorn,
  FaCalendarAlt,
  FaPhotoVideo,
  FaClipboardList,
  FaDesktop,
} from "react-icons/fa";
import "./ServicesPage.css";

import rinServicesLogo from "../assets/rin-services-logo.webp";
import dashboardMockup from "../assets/services-dashboard.webp";
import officeImage from "../assets/services-office.webp";

const features = [
  {
    title: "Team Directory",
    description: "Organize and manage your entire campaign team",
    icon: <FaUsers />,
    className: "feature-top-left",
  },
  {
    title: "Reports",
    description: "Access detailed campaign reports",
    icon: <FaChartLine />,
    className: "feature-top-right",
  },
  {
    title: "Gallery Video & Images",
    description: "Upload & share media content",
    icon: <FaPhotoVideo />,
    className: "feature-mid-left",
  },
  {
    title: "Fundraising",
    description: "Track donations & fundraising goals",
    icon: <FaDonate />,
    className: "feature-mid-right",
  },
  {
    title: "Calendar",
    description: "Schedule events & track tasks",
    icon: <FaCalendarAlt />,
    className: "feature-bottom-left",
  },
  {
    title: "Voter Data",
    description: "Segment & analyze voter information",
    icon: <FaDatabase />,
    className: "feature-bottom-right",
  },
  {
    title: "All In One Social Media",
    description: "",
    icon: <FaClipboardList />,
    className: "feature-bottom-center-left",
  },
  {
    title: "Volunteer Coordination",
    description: "Engage & manage volunteers",
    icon: <FaBullhorn />,
    className: "feature-bottom-center-right",
  },
];

const ServicesPage = () => {
  return (
    <main className="services-page">
     
      <section className="services-backoffice">
        <div className="services-backoffice-inner">
          <div className="services-backoffice-content">
            <div className="services-brand-line">
              <span className="brand-rin">RinDial</span>
              <span className="brand-dot">.com</span>
            </div>

            <h2 className="backoffice-topline">
              Your back office is customized to the seat you are seeking
            </h2>

            <div className="services-label-row">
              <span className="services-label">Services</span>
              <span className="services-line" />
            </div>

            <h3 className="backoffice-heading">Full Comprehensive Back Office</h3>

            <p>
              At <strong>RinDial</strong>, we provide a full-service back office designed
              specifically for candidates, campaigns, and organizations seeking public
              office. Our platform streamlines operations by bringing your campaign&apos;s
              essential tools into one organized system, From managing your team
              directory and coordinating volunteers to organizing voter data, media,
              and reports, <strong>RinDial</strong> helps campaigns stay efficient,
              professional, and focused on <strong>success.</strong>
            </p>

            <p>
              Your back office <strong>is customized to the seat you are seeking</strong>,
              giving campaigns the structure and digital infrastructure needed to
              operate effectively. With tools for <strong>fundraising</strong>,
              communications, event coordination, social media management, and
              reporting, <strong>RinDial</strong> keeps everything connected in one
              powerful platform so you can focus on engaging voters and winning your
              race.
            </p>

            <div className="services-cta-row">
              <button className="services-tour-btn">
                Click here for a Back Office Tour
              </button>
              <span className="services-cta-text">
                In addition to these we offer premium services
              </span>
            </div>
          </div>

          <div className="services-backoffice-image-wrap">
            <img
              src={officeImage}
              alt="RinDial office team"
              className="services-backoffice-image"
            />
          </div>
        </div>
      </section>
	  
	   <section className="services-hero">
        <div className="services-hero-overlay" />

        <div className="services-hero-inner">
          <div className="services-logo-wrap">
            <img src={rinServicesLogo} alt="Rin Services" className="services-logo" />
          </div>

          <h1 className="services-hero-title">
            Everything <span>Your Campaign Needs</span> in One Platform
          </h1>

          <div className="services-visual">
            <div className="services-curves services-curves-left" />
            <div className="services-curves services-curves-right" />

            <div className="services-dashboard-wrap">
              <img
                src={dashboardMockup}
                alt="RinDial dashboard"
                className="services-dashboard"
              />
            </div>

            {features.map((item, index) => (
              <div key={index} className={`feature-card ${item.className}`}>
                <div className="feature-icon-circle">
                  <div className="feature-icon">{item.icon}</div>
                </div>
                <h3>{item.title}</h3>
                {item.description && <p>{item.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default ServicesPage;