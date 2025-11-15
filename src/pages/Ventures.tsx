import React, { useState } from "react";
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
    filter === "All"
      ? ventures
      : ventures.filter((v) => v.status === filter);

  return (
    <div>

      {/* HERO */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-red-900/90"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Ventures</h1>
          <p className="text-xl text-blue-100">
            Discover Premium Land Investment Opportunities
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-8 bg-white border-b sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4">

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-900">Filter by:</span>
            </div>

            <div className="flex gap-2">
              {["All", "Ongoing", "Completed", "Upcoming"].map((s) => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={`px-6 py-2 rounded-full font-semibold transition ${
                    filter === s
                      ? "bg-gradient-to-r from-red-600 to-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVentures.map((venture) => (
              <div
                key={venture.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden group transition"
              >
                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={venture.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <span
                    className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold text-white ${
                      venture.status === "Ongoing"
                        ? "bg-yellow-500"
                        : venture.status === "Completed"
                        ? "bg-green-600"
                        : "bg-blue-600"
                    }`}
                  >
                    {venture.status}
                  </span>
                </div>

                {/* DETAILS */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{venture.name}</h3>

                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    {venture.location}
                  </div>

                  <div className="flex justify-between items-center mb-4 pb-4 border-b">
                    <span className="text-sm text-gray-600">
                      {venture.plots} Plots
                    </span>
                    <span className="font-bold text-red-600">
                      {venture.price}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Key Amenities:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {venture.amenities.slice(0, 3).map((a, i) => (
                        <span
                          key={i}
                          className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={createPageUrl("Contact")}
                    className="inline-flex items-center text-red-600 font-semibold hover:underline"
                  >
                    Contact for Booking →
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
