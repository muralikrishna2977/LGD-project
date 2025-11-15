import React from "react";
import "./Contact.css";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="contact-container">

      {/* HERO SECTION */}
      <section className="contact-hero">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
          className="contact-hero-bg"
        />
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-subtitle">We’re here to assist you</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-grid">

          {/* LEFT SIDE INFO */}
          <div className="contact-info">

            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-description">
              Have questions? Want to book a plot? Need more details?
              Our team is available to help you anytime.
            </p>

            <div className="contact-detail">
              <Phone className="contact-icon" />
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>

            <div className="contact-detail">
              <Mail className="contact-icon" />
              <a href="mailto:info@lakshmigayathri.com">info@lakshmigayathri.com</a>
            </div>

            <div className="contact-detail">
              <MapPin className="contact-icon" />
              <span>123 Prime Avenue, Business District, Bangalore – 560001</span>
            </div>

          </div>

          {/* FORM */}
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>

            <div>
              <label className="contact-label">Full Name</label>
              <input className="contact-input" type="text" placeholder="Your Name" />
            </div>

            <div>
              <label className="contact-label">Email</label>
              <input className="contact-input" type="email" placeholder="Your Email" />
            </div>

            <div>
              <label className="contact-label">Phone Number</label>
              <input className="contact-input" type="text" placeholder="Your Phone" />
            </div>

            <div className="contact-grid-2">
              <div>
                <label className="contact-label">City</label>
                <input className="contact-input" type="text" placeholder="Your City" />
              </div>

              <div>
                <label className="contact-label">Purpose</label>
                <select className="contact-select">
                  <option>Buying Plot</option>
                  <option>Developing Land</option>
                  <option>General Inquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label className="contact-label">Message</label>
              <textarea className="contact-textarea" placeholder="Type your message..."></textarea>
            </div>

            <button className="contact-btn">
              Send Message <Send className="send-icon" />
            </button>

          </form>

        </div>
      </section>
    </div>
  );
}
