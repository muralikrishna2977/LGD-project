import React from "react";
import "./Gallery.css";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80",
    "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=900&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=900&q=80",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80",
    "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?w=900&q=80",
    "https://images.unsplash.com/photo-1460317442991-0ec4a639aa64?w=900&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
  ];

  return (
    <div className="gallery-container">

      {/* HERO SECTION */}
      <section className="gallery-hero">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80"
          className="gallery-hero-bg"
        />
        <div className="gallery-hero-overlay"></div>

        <div className="gallery-hero-content">
          <h1 className="gallery-hero-title">Gallery</h1>
          <p className="gallery-hero-subtitle">
            Explore the Beauty of Our Ventures
          </p>
        </div>
      </section>

      {/* GRID SECTION */}
      <section className="gallery-section">
        <h2 className="gallery-title">
          Our <span className="highlight">Moments</span>
        </h2>

        <div className="gallery-grid">
          {images.map((src, index) => (
            <div key={index} className="gallery-item">
              <img src={src} className="gallery-img" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
