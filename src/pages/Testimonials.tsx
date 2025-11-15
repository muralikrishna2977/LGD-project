import React, { useState } from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ramesh Kumar",
      role: "Landowner - Sarjapur",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Lakshmi Gayathri Developers transformed our raw land into a beautiful venture. They handled documentation, approvals, and development without any stress for us.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Investor - Bangalore",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "I invested in their Devanahalli project and the appreciation has been amazing. Everything was transparent, including pricing and paperwork.",
      rating: 5
    },
    {
      id: 3,
      name: "Suresh & Family",
      role: "Plot Owners",
      image: "https://randomuser.me/api/portraits/men/83.jpg",
      text: "We are very happy with our purchase. Roads, electricity, water connections—everything was completed on time with great quality.",
      rating: 4
    },
    {
      id: 4,
      name: "Anita Desai",
      role: "Homebuyer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Their team is very professional. They helped us with complete legal guidance before registration. Highly trustworthy.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-red-900/90"></div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Testimonials</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Hear From Our Happy Customers
          </p>
        </div>
      </section>

      {/* MAIN TESTIMONIAL SLIDER */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-2xl p-10 relative">
            
            {/* QUOTE ICON */}
            <div className="absolute -top-6 left-6 bg-red-600 text-white p-3 rounded-full shadow-lg">
              <Quote className="w-6 h-6" />
            </div>

            {/* RATING */}
            <div className="flex justify-center mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="text-yellow-500 fill-yellow-500 w-6 h-6" />
              ))}
            </div>

            {/* TEXT */}
            <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
              “{t.text}”
            </p>

            {/* PERSON */}
            <div className="flex flex-col items-center">
              <img
                src={t.image}
                className="w-24 h-24 rounded-full object-cover shadow-lg mb-4"
              />
              <h4 className="text-xl font-bold">{t.name}</h4>
              <p className="text-gray-500">{t.role}</p>
            </div>

            {/* ARROWS */}
            <div className="flex justify-between mt-8">
              <button
                onClick={previousTestimonial}
                className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* MULTI-CARD GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            More <span className="text-red-600">Feedback</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6"
              >
                {/* Rating */}
                <div className="flex mb-2">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-yellow-500 w-5 h-5" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  “{item.text}”
                </p>

                <div className="flex items-center gap-3 mt-6">
                  <img
                    src={item.image}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
