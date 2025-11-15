import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, MapPin, CheckCircle, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80"
          className="hero-bg"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">Lakshmi Gayathri Developers</h1>
          <p className="hero-subtitle">
            Trusted Land Development & Honest Investment Solutions
          </p>

          <Link
            to={createPageUrl("Ventures")}
            className="hero-btn"
          >
            Explore Ventures <ArrowRight className="icon-sm" />
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-container">
        <h2 className="section-title">
          Why Choose <span className="highlight">Us?</span>
        </h2>

        <div className="why-grid">
          {[
            {
              title: "Honest Pricing",
              desc: "We offer transparent pricing with no hidden charges.",
              icon: CheckCircle,
            },
            {
              title: "Prime Locations",
              desc: "Every venture is located at a future-growth hotspot.",
              icon: MapPin,
            },
            {
              title: "Guaranteed Development",
              desc: "We deliver exactly what we promise with quality.",
              icon: CheckCircle,
            },
          ].map((item, i) => (
            <div key={i} className="why-card">
              <item.icon className="why-icon" />
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SHORT */}
      <section className="about-short">
        <div className="about-grid">
          <div>
            <h2 className="about-title">
              Who We <span className="highlight">Are</span>
            </h2>

            <p className="about-text">
              We are a trusted land development company delivering projects
              with honesty, transparency, and world-class infrastructure.
            </p>

            <p className="about-text">
              We help families and investors build wealth safely.
            </p>

            <Link to={createPageUrl("About")} className="about-btn">
              Learn More <ArrowRight className="icon-sm" />
            </Link>
          </div>

          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80"
            className="about-img"
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-container">
        <h2 className="cta-title">
          Ready to Invest in <span className="highlight">Premium Land?</span>
        </h2>

        <p className="cta-subtitle">Talk to our experts today.</p>

        <Link to={createPageUrl("Contact")} className="cta-btn">
          Contact Us <Phone className="icon-sm" />
        </Link>
      </section>
    </div>
  );
}
