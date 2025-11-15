import React from "react";
import "./Testimonials.css";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh Kumar",
      role: "IT Professional",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "Lakshmi Gayathri Developers made my first land investment completely hassle-free. Their transparency and clarity about legal documents impressed me.",
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5,
      text: "Excellent team! From layout planning to documentation, everything was handled smoothly. The project appreciation is already visible!",
    },
    {
      name: "Harish Gowda",
      role: "Real Estate Investor",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      rating: 4,
      text: "Professional and customer-friendly developers. I’ve invested in two ventures and both have strong returns and great development quality.",
    },
    {
      name: "Sujatha R",
      role: "Bank Manager",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      rating: 5,
      text: "Their legal team ensured all documents were verified. I felt very safe and confident purchasing a plot from them.",
    },
  ];

  return (
    <div className="test-container">

      {/* HERO */}
      <section className="test-hero">
        <img
          className="test-hero-bg"
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80"
        />
        <div className="test-hero-overlay"></div>

        <div className="test-hero-content">
          <h1 className="test-hero-title">Testimonials</h1>
          <p className="test-hero-subtitle">
            Hear from Our Happy Customers
          </p>
        </div>
      </section>

      {/* TESTIMONIAL GRID */}
      <section className="test-section">
        <h2 className="test-title">
          What People <span className="highlight">Say About Us</span>
        </h2>

        <div className="test-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="test-card">
              <img src={t.image} className="test-avatar" />

              <h3 className="test-name">{t.name}</h3>
              <p className="test-role">{t.role}</p>

              <div className="test-stars">
                {Array.from({ length: t.rating }).map((_, index) => (
                  <Star key={index} className="test-star" />
                ))}
              </div>

              <p className="test-text">{t.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
