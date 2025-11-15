import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    alert("Your message has been submitted! (Form handling not implemented)");
  };

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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            We’re Here to Assist You Anytime
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">

          {/* LEFT SIDE — CONTACT DETAILS */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              Whether you want to invest, develop your land, or simply inquire
              about our ventures — our team is just a message away.
            </p>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-red-600 shrink-0" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+919876543210" className="hover:underline">
                      +91 98765 43210
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-red-600 shrink-0" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:info@lakshmigayathri.com" className="hover:underline">
                      info@lakshmigayathri.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-red-600 shrink-0" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600">
                    123 Prime Avenue, Business District, Bangalore - 560001
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE — CONTACT FORM */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>

            <form onSubmit={submitForm} className="bg-white p-8 rounded-2xl shadow-xl space-y-6">

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 outline-none"
                required
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 outline-none"
                required
              />

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 outline-none"
                required
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 outline-none"
                required
              />

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition flex justify-center items-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="w-full h-[400px] mt-10">
        <iframe
          title="office-location"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.948463435804!2d77.59456281482161!3d12.971598990854655!2m3!1f0!2f0!3f0!3m2
          !1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f3e11d9d%3A0x47bcacb35d3c7df7!2sMG%20Road%20Bangalore!5e0!3m2!1sen!2sin!4v1632995456782!5m2!1sen!2sin"
        ></iframe>
      </section>

    </div>
  );
}
