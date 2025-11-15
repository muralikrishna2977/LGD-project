import React from "react";
import { CheckCircle, Users, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function ForLandowners() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover"
          alt="For Landowners"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-red-900/90"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">For Landowners</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Partner With Us for Hassle-Free Land Development
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14">

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Develop Your Land With <span className="text-red-600">Confidence</span>
            </h2>

            <p classname="text-gray-600 leading-relaxed mb-4">
              At Lakshmi Gayathri Developers, we help landowners convert raw land 
              into fully developed, market-ready real estate ventures.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              We follow a transparent revenue model and offer end-to-end 
              development including approvals, layout planning, infrastructure, 
              and final sales.
            </p>

            <p className="text-gray-600 leading-relaxed">
              From small farmlands to large residential layouts—our team has 
              delivered projects with exceptional appreciation and value.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80"
              className="rounded-xl shadow-2xl"
              alt="Land Development"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            What We <span className="text-red-600">Offer</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
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

      {/* OUR PROCESS */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Our Process</h2>
          <p className="text-blue-200">How we turn your land into a profitable venture</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">

          {[
            "Land Survey & Legal Checks",
            "Layout Planning & Approvals",
            "Complete Infrastructure Development",
            "Marketing & Final Sale",
          ].map((step, i) => (
            <div
              key={i}
              className="p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg text-center"
            >
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">{i + 1}</span>
              </div>
              <p className="leading-relaxed text-blue-100 font-medium">{step}</p>
            </div>
          ))}

        </div>
      </section>

      {/* WHY PARTNER WITH US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-4xl font-bold">
            Why Landowners <span className="text-red-600">Choose Us</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">

          {[
            "Zero upfront cost for landowners",
            "Fast approvals through our legal experts",
            "High ROI and guaranteed development",
            "Professional marketing & sales team",
            "End-to-end documentation",
            "Timely project completion",
          ].map((point, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow flex items-start gap-3">
              <Users className="w-8 h-8 text-red-600" />
              <p className="text-gray-800 font-medium">{point}</p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Want to Develop Your <span className="text-red-600">Land?</span>
        </h2>
        <p className="text-gray-600 mb-8">
          Talk to our development experts today.
        </p>

        <Link
          to={createPageUrl("Contact")}
          className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 hover:scale-105 transition"
        >
          Contact Us <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
