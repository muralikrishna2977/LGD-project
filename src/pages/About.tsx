import React from "react";
import { CheckCircle, Building2 } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-red-900/90"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Building Trust Through Transparent Land Development
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Who <span className="text-red-600">We Are</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Lakshmi Gayathri Developers is a trusted name in Bangalore’s land
              development market, known for transparent transactions, high-quality
              infrastructure, and customer-first values.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              We specialize in developing premium layouts in strategic growth
              locations, ensuring safe investments and high returns for our
              customers.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              With a commitment to legal clarity, ethical business, and flawless
              execution, we deliver ventures that truly uplift communities.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-red-600">Core Values</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">

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
            <div
              key={i}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <CheckCircle className="w-12 h-12 text-red-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-yellow-200">Mission</span>
            </h2>

            <p className="text-blue-100 leading-relaxed mb-4">
              To provide customers with safe, profitable, and legally verified land
              investment options while delivering unmatched development quality.
            </p>

            <p className="text-blue-100 leading-relaxed mb-4">
              We aim to create premium communities that foster growth, value, and
              happiness for generations.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-4xl font-bold">
            Why You Can <span className="text-red-600">Trust Us</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          {[
            "100% Legal-verification of Properties",
            "Zero Hidden Charges",
            "Prime Location Ventures",
            "Timely Project Completion",
            "High Appreciation Value",
            "Transparent Documentation Process",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 shadow rounded-xl flex items-start gap-3"
            >
              <Building2 className="w-8 h-8 text-red-600" />
              <p className="text-gray-700 font-medium">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
