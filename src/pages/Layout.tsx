import React, { useState, useEffect } from "react";
import "./Layout.css";
import { Link, useLocation } from "react-router-dom";
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
  Twitter,
} from "lucide-react";
import Logo from "../assets/logo.png";

export default function Layout({ children, currentPageName }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
    <div className="layout-container">
      {/* HEADER */}
      <header className={`layout-header ${scrolled ? "scrolled" : ""}`}>
        <div className="layout-header-inner">

          {/* LOGO */}
          <Link to={createPageUrl("Home")} className="layout-logo">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68f3915b5ea5ff737855c9b3/41ac67442_image.png"
              alt="Lakshmi Gayathri Developers"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="layout-nav-desktop">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={createPageUrl(item.path)}
                className={`layout-nav-link ${
                  currentPageName === item.path ? "active" : scrolled ? "dark" : "dark"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CALL BUTTON */}
          <a href="tel:+919876543210" className="layout-call-btn">
            <Phone className="icon-sm" />
            Call Now
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="layout-mobile-toggle"
          >
            <div className={`toggle-line ${mobileMenuOpen ? "open-1" : ""}`}></div>
            <div className={`toggle-line ${mobileMenuOpen ? "open-2" : ""}`}></div>
            <div className={`toggle-line ${mobileMenuOpen ? "open-3" : ""}`}></div>
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="layout-mobile-menu">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={createPageUrl(item.path)}
                onClick={() => setMobileMenuOpen(false)}
                className={`layout-mobile-item ${
                  currentPageName === item.path ? "active" : ""
                }`}
              >
                <item.icon className="icon-sm" />
                {item.name}
              </Link>
            ))}

            <a href="tel:+919876543210" className="layout-mobile-call">
              <Phone className="icon-sm" /> Call Now
            </a>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="layout-main">{children}</main>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/7742341555"
        target="_blank"
        rel="noopener noreferrer"
        className="layout-whatsapp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>

      {/* FOOTER */}
      <footer className="layout-footer">
        <div className="footer-grid">

          {/* COMPANY */}
          <div className="footer-company">
            <img
              src={Logo}
              className="footer-logo"
            />

            <p className="footer-desc">
              Transforming lands into valuable investments with transparency,
              trust, and excellence.
            </p>

            <div className="footer-socials">
              <a><Facebook /></a>
              <a><Instagram /></a>
              <a><Linkedin /></a>
              <a><Twitter /></a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              {navItems.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link to={createPageUrl(item.path)}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="footer-services">
            <h3>Our Services</h3>
            <ul>
              <li>Land Acquisition</li>
              <li>Legal Verification</li>
              <li>Infrastructure Development</li>
              <li>Marketing & Sales</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-contact">
            <h3>Contact Us</h3>

            <div className="contact-item">
              <MapPin className="icon-sm" />
              <span>123 Prime Avenue, Business District, Bangalore - 560001</span>
            </div>

            <div className="contact-item">
              <Phone className="icon-sm" />
              <a href="tel:+919876543210">+91 7742341555</a>
            </div>

            <div className="contact-item">
              <Mail className="icon-sm" />
              <a href="mailto:info@lakshmigayathri.com">info@lakshmigayathri.com</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Lakshmi Gayathri Developers. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
