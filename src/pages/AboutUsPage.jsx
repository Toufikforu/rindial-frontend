import React from "react";

import "./AboutUsPage.css";

const AboutUsPage = () => {
  return (
    <>
     

      <section className="about-us-page">
        <div className="about-us-top">
          <h1>About Us</h1>
          <h2>20+ Years of Proven Campaign Success</h2>
        </div>

        <div className="about-us-content">
          

          <div className="about-us-text">
            <div className="about-item">
              <span className="about-check">✓</span>
              <p>
                At <strong>RinDial</strong>, we have over <strong>20 years</strong> of
                experience in running effective and successful campaigns. From
                managing local seats to orchestrating large-scale Presidential and
                Gubernatorial field and GOTV operations, we’ve done it all. Our{" "}
                <strong>extensive</strong> background and strategic expertise have
                helped <strong>countless</strong> candidates achieve victory at the
                local, state, and national levels.
              </p>
            </div>

            <div className="about-item">
              <span className="about-check">✓</span>
              <p>
                With a <strong>track record over 90%</strong>, we are dedicated to
                turning your political vision into reality.{" "}
                <strong>We look forward</strong> to partnering with you and taking
                your company, campaign, or project to{" "}
                <strong>the winning seat.</strong>
              </p>
            </div>

            <button className="about-btn">Schedule a Consultation</button>
          </div>
		  <div className="about-us-image" />
        </div>
      </section>


    </>
  );
};

export default AboutUsPage;