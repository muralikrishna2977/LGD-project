import React from "react";
import "./ForLandowners.css";
import { CheckCircle, Users, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function ForLandowners() {
  return (
    <div className="fl-container">

      {/* HERO SECTION */}
      <section className="fl-hero">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
          className="fl-hero-bg"
        />
        <div className="fl-hero-overlay"></div>

        <div className="fl-hero-content">
          <h1 className="fl-hero-title">For Landowners</h1>
          <p className="fl-hero-subtitle">
            Partner With Us for Hassle-Free Land Development
          </p>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="fl-intro">
        <div className="fl-grid">
          <div>
            <h2 className="fl-title">
              Develop Your Land With <span className="highlight">Confidence</span>
            </h2>

            <p className="fl-text">
              At Lakshmi Gayathri Developers, we help landowners convert raw land 
              into fully developed, market-ready real estate ventures.
            </p>

            <p className="fl-text">
              We follow a transparent revenue model and offer end-to-end 
              development including approvals, layout planning, infrastructure, 
              and final sales.
            </p>

            <p className="fl-text">
              From small farmlands to large residential layouts—our team has 
              delivered projects with exceptional appreciation and value.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80"
            className="fl-image"
          />
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="fl-offer">
        <h2 className="fl-offer-title">
          What We <span className="highlight">Offer</span>
        </h2>

        <div className="fl-offer-grid">
          {[
            {
              title: "Complete Legal Support",
              desc: "We verify all documents, conduct surveys, and obtain approvals.",
            },
            {
              title: "Quality Infrastructure",
              desc: "Roads, drainage, electricity, water, parks & more.",
            },
            {
              title: "Marketing & Selling",
              desc: "From promotions to registrations—we handle everything.",
            },
          ].map((item, i) => (
            <div key={i} className="fl-offer-card">
              <CheckCircle className="fl-offer-icon" />
              <h3 className="fl-offer-card-title">{item.title}</h3>
              <p className="fl-offer-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="fl-process">
        <h2 className="fl-process-title">Our Process</h2>
        <p className="fl-process-sub">How we turn your land into a profitable venture</p>

        <div className="fl-process-grid">
          {[
            "Land Survey & Legal Checks",
            "Layout Planning & Approvals",
            "Complete Infrastructure Development",
            "Marketing & Final Sale",
          ].map((step, i) => (
            <div key={i} className="fl-process-card">
              <div className="fl-process-step">{i + 1}</div>
              <p className="fl-process-text">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="fl-why">
        <h2 className="fl-why-title">
          Why Landowners <span className="highlight">Choose Us</span>
        </h2>

        <div className="fl-why-grid">
          {[
            "Zero upfront cost for landowners",
            "Fast approvals through our legal experts",
            "High ROI and guaranteed development",
            "Professional marketing & sales team",
            "End-to-end documentation",
            "Timely project completion",
          ].map((text, i) => (
            <div key={i} className="fl-why-card">
              <Users className="fl-why-icon" />
              <p className="fl-why-text">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="fl-cta">
        <h2 className="fl-cta-title">
          Want to Develop Your <span className="highlight">Land?</span>
        </h2>

        <p className="fl-cta-sub">Talk to our development experts today.</p>

        <Link to={createPageUrl("Contact")} className="fl-cta-btn">
          Contact Us <ArrowRight className="icon-sm" />
        </Link>
      </section>
    </div>
  );
}
