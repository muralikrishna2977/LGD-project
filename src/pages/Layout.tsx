import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

import {
  Home,
  Building2,
  Users,
  MapPin,
  Images,
  MessageSquare,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from "lucide-react";

export default function Layout({
  children,
  currentPageName,
}: {
  children: React.ReactNode;
  currentPageName: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", icon: Home, path: "Home" },
    { name: "About", icon: Building2, path: "About" },
    { name: "Ventures", icon: MapPin, path: "Ventures" },
    { name: "For Landowners", icon: Users, path: "ForLandowners" },
    { name: "Gallery", icon: Images, path: "Gallery" },
    { name: "Testimonials", icon: MessageSquare, path: "Testimonials" },
    { name: "Contact", icon: Phone, path: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link to={createPageUrl("Home")} className="flex items-center">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68f3915b5ea5ff737855c9b3/41ac67442_image.png"
                className="h-16 w-auto"
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={createPageUrl(item.path)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    currentPageName === item.path
                      ? "text-red-600 bg-red-50"
                      : scrolled
                      ? "text-gray-700 hover:text-red-600 hover:bg-red-50"
                      : "text-white hover:text-red-600 hover:bg-white/20"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <a
              href="tel:+919876543210"
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`h-0.5 bg-current transition ${
                    mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`h-0.5 bg-current transition ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`h-0.5 bg-current transition ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* MOBILE MENU */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 bg-white rounded-xl shadow-xl">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={createPageUrl(item.path)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-6 py-4 ${
                    currentPageName === item.path
                      ? "bg-red-50 text-red-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* CONTENT */}
      <main className="pt-20">{children}</main>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        className="fixed bottom-8 right-8 bg-green-500 p-4 rounded-full text-white shadow-xl hover:scale-110 transition"
      >
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M..." />
        </svg>
      </a>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* INFO */}
            <div>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68f3915b5ea5ff737855c9b3/41ac67442_image.png"
                className="h-20 brightness-0 invert"
              />
              <p className="text-blue-200 mt-4">
                Transforming lands into valuable investments.
              </p>
              <div className="flex gap-3 mt-4">
                {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                  <a key={i} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link to={createPageUrl(item.path)} className="text-blue-200 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-blue-200">
                <li>Land Acquisition</li>
                <li>Legal Verification</li>
                <li>Infrastructure Development</li>
                <li>Marketing & Sales</li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-blue-200">
                <li className="flex gap-2">
                  <MapPin className="w-5 h-5" />
                  Bangalore, India
                </li>
                <li className="flex gap-2">
                  <Phone className="w-5 h-5" />
                  +91 98765 43210
                </li>
                <li className="flex gap-2">
                  <Mail className="w-5 h-5" />
                  info@lakshmigayathri.com
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
            © {new Date().getFullYear()} Lakshmi Gayathri Developers.
          </div>
        </div>
      </footer>
    </div>
  );
}
