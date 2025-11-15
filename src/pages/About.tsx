import React from "react";
import "./About.css";
import { CheckCircle, Building2 } from "lucide-react";

export default function About() {
  return (
    <div className="about-container">

      {/* HERO */}
      <section className="about-hero">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80"
          className="about-hero-bg"
        />
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <h1 className="about-hero-title">About Us</h1>
          <p className="about-hero-subtitle">
            Building Trust Through Transparent Land Development
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="about-section">
        <div className="about-grid">
          <div className="about-text-block">
            <h2 className="about-section-title">
              Who <span className="highlight">We Are</span>
            </h2>

            <p className="about-paragraph">
              Lakshmi Gayathri Developers is a trusted name in Bangalore’s land
              development market, known for transparent transactions, high-quality
              infrastructure, and customer-first values.
            </p>

            <p className="about-paragraph">
              We specialize in developing premium layouts in strategic growth
              locations, ensuring safe investments and high returns for our
              customers.
            </p>

            <p className="about-paragraph">
              With a commitment to legal clarity, ethical business, and flawless
              execution, we deliver ventures that uplift communities.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80"
            className="about-section-img"
          />
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <h2 className="values-title">
          Our <span className="highlight">Core Values</span>
        </h2>

        <div className="values-grid">
          {[
            {
              title: "Transparency",
              desc: "Every investment is backed by clear documents and honest pricing.",
            },
            {
              title: "Quality Development",
              desc: "We ensure world-class infrastructure in all our projects.",
            },
            {
              title: "Customer Commitment",
              desc: "We treat every client like a partner and deliver what we promise.",
            },
          ].map((item, i) => (
            <div key={i} className="values-card">
              <CheckCircle className="values-icon" />
              <h3 className="values-card-title">{item.title}</h3>
              <p className="values-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="mission-section">
        <div className="mission-grid">
          <div>
            <h2 className="mission-title">
              Our <span className="mission-highlight">Mission</span>
            </h2>

            <p className="mission-text">
              To provide customers with safe, profitable, and legally verified land
              investment options while delivering unmatched development quality.
            </p>

            <p className="mission-text">
              We aim to create premium communities that foster growth, value, and
              happiness for generations.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
            className="mission-img"
          />
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="trust-section">
        <h2 className="trust-title">
          Why You Can <span className="highlight">Trust Us</span>
        </h2>

        <div className="trust-grid">
          {[
            "100% Legal-verification of Properties",
            "Zero Hidden Charges",
            "Prime Location Ventures",
            "Timely Project Completion",
            "High Appreciation Value",
            "Transparent Documentation Process",
          ].map((text, i) => (
            <div key={i} className="trust-card">
              <Building2 className="trust-icon" />
              <p className="trust-text">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
