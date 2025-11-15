import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, MapPin, CheckCircle, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-red-900/80"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Lakshmi Gayathri Developers
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in-up animation-delay-200">
            Trusted Land Development & Honest Investment Solutions
          </p>

          <Link
            to={createPageUrl("Ventures")}
            className="inline-flex items-center gap-2 bg-white text-red-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition animate-fade-in-up animation-delay-400"
          >
            Explore Ventures <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
            Why Choose <span className="text-red-600">Us?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <item.icon className="w-12 h-12 text-red-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SHORT SECTION */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
            <p className="text-blue-100 leading-relaxed">
              We are a trusted land development company delivering projects
              with honesty, transparency, and world-class infrastructure—helping
              families and investors build wealth safely.
            </p>

            <Link
              to={createPageUrl("About")}
              className="inline-flex items-center gap-2 mt-6 bg-white text-red-600 px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition"
            >
              Learn More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Invest in <span className="text-red-600">Premium Land?</span>
        </h2>
        <p className="text-gray-600 mb-8">Talk to our experts today.</p>

        <Link
          to={createPageUrl("Contact")}
          className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 hover:scale-105 transition"
        >
          Contact Us <Phone className="w-5 h-5" />
        </Link>
      </section>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animation-delay-200 { animation-delay: .2s; opacity:0; }
        .animation-delay-400 { animation-delay: .4s; opacity:0; }
      `}</style>
    </div>
  );
}
