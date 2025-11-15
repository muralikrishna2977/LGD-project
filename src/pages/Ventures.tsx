import React, { useState } from "react";
import "./Ventures.css";
import { MapPin, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Ventures() {
  const [filter, setFilter] = useState("All");

  const ventures = [
    {
      id: 1,
      name: "Green Valley Estates",
      location: "Devanahalli, Bangalore",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      status: "Ongoing",
      plots: 125,
      price: "₹25L onwards",
      amenities: ["24/7 Security", "Street Lights", "Underground Drainage", "Park"],
    },
    {
      id: 2,
      name: "Sunrise Paradise",
      location: "Hosur Road, Bangalore",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      status: "Completed",
      plots: 89,
      price: "₹32L onwards",
      amenities: ["Gated Community", "Club House", "Jogging Track", "Children's Play Area"],
    },
    {
      id: 3,
      name: "Royal Gardens",
      location: "Sarjapur, Bangalore",
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
      status: "Upcoming",
      plots: 156,
      price: "Coming Soon",
      amenities: ["Swimming Pool", "Gymnasium", "Landscaped Gardens", "Amphitheater"],
    },
    {
      id: 4,
      name: "Emerald Heights",
      location: "Whitefield, Bangalore",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      status: "Ongoing",
      plots: 98,
      price: "₹28L onwards",
      amenities: ["Power Backup", "Water Supply", "Wide Roads", "Temple"],
    },
    {
      id: 5,
      name: "Golden Palms",
      location: "Electronic City, Bangalore",
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80",
      status: "Completed",
      plots: 142,
      price: "₹35L onwards",
      amenities: ["Solar Lighting", "Rainwater Harvesting", "Shopping Complex", "Medical Center"],
    },
    {
      id: 6,
      name: "Silver Oaks",
      location: "Kanakapura Road, Bangalore",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      status: "Upcoming",
      plots: 187,
      price: "Coming Soon",
      amenities: ["Yoga Center", "Organic Farm", "Adventure Sports", "Cycling Track"],
    },
  ];

  const filteredVentures =
    filter === "All" ? ventures : ventures.filter((v) => v.status === filter);

  return (
    <div className="ventures-container">

      {/* HERO */}
      <section className="ventures-hero">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80"
          className="ventures-hero-bg"
        />
        <div className="ventures-hero-overlay"></div>

        <div className="ventures-hero-content">
          <h1 className="ventures-hero-title">Our Ventures</h1>
          <p className="ventures-hero-subtitle">
            Discover Premium Land Investment Opportunities
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="venture-filter-section">
        <div className="venture-filter-inner">
          <div className="filter-left">
            <Filter className="filter-icon" />
            <span className="filter-label">Filter by:</span>
          </div>

          <div className="filter-buttons">
            {["All", "Ongoing", "Completed", "Upcoming"].map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`filter-btn ${filter === s ? "active" : ""}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* VENTURES GRID */}
      <section className="ventures-grid-section">
        <div className="ventures-grid">
          {filteredVentures.map((venture) => (
            <div key={venture.id} className="venture-card">

              {/* CARD IMAGE */}
              <div className="venture-img-wrapper">
                <img src={venture.image} className="venture-img" />
                <span
                  className={`venture-badge status-${venture.status.toLowerCase()}`}
                >
                  {venture.status}
                </span>
              </div>

              {/* DETAILS */}
              <div className="venture-content">
                <h3 className="venture-title">{venture.name}</h3>

                <div className="venture-location">
                  <MapPin className="map-icon" />
                  {venture.location}
                </div>

                <div className="venture-info-row">
                  <span className="venture-plots">{venture.plots} Plots</span>
                  <span className="venture-price">{venture.price}</span>
                </div>

                <div className="venture-amenities">
                  {venture.amenities.slice(0, 3).map((a, i) => (
                    <span key={i} className="amenity-pill">{a}</span>
                  ))}
                </div>

                <Link
                  to={createPageUrl("Contact")}
                  className="venture-contact-link"
                >
                  Contact for Booking →
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
