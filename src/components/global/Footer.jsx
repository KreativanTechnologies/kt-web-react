"use client";

import React from "react";
import {


  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-white pt-24 pb-10 px-4 md:px-10">
      
      {/* Golden Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-yellow-400/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-amber-500/20 blur-[140px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #facc15 1px, transparent 1px),
              linear-gradient(to bottom, #facc15 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Top CTA */}
        <div className="relative bg-white/5 backdrop-blur-xl border border-yellow-400/10 rounded-[35px] p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 mb-20 overflow-hidden">
          
          {/* Shine */}
          <div className="absolute top-0 -left-[120%] h-full w-[140px] bg-white/10 blur-2xl rotate-12 animate-[shine_8s_linear_infinite]"></div>

          <div className="max-w-3xl">
            <p className="uppercase tracking-[4px] text-yellow-400 text-sm mb-4">
              Let’s Work Together
            </p>

            <h2 className="text-3xl md:text-6xl font-bold leading-tight mb-6">
              Ready To Build Your Next Digital Experience?
            </h2>

            <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
              We help brands create premium websites, mobile apps,
              UI/UX designs, and digital marketing solutions that drive
              real business growth.
            </p>
          </div>

          <button className="group flex items-center gap-4 bg-yellow-400 hover:bg-white text-black font-semibold px-8 py-5 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.35)] whitespace-nowrap">
            Get Started

            <ArrowRight
              size={22}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>

        {/* Footer Main */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-yellow-400/10">
          
          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Kreativan<span className="text-yellow-400">.</span>
            </h2>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Kreativan Technologies is a leading web design and
              development agency delivering innovative digital solutions
              for modern businesses worldwide.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-8">
              {[
                FaFacebook,
                BsInstagram,
                LiaLinkedin,
                BsTwitter,
              ].map((Icon, index) => (
                <button
                  key={index}
                  className="h-12 w-12 rounded-full bg-white/5 border border-yellow-400/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-gray-300">
              {[
                "Web Development",
                "App Development",
                "UI/UX Design",
                "Digital Marketing",
                "SEO Optimization",
                "Brand Strategy",
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-yellow-400 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-300">
              {[
                "Home",
                "About Us",
                "Services",
                "Portfolio",
                "Blogs",
                "Contact Us",
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-yellow-400 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5 text-gray-300">
              
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-white/5 border border-yellow-400/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-yellow-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-1">
                    Email
                  </p>

                  <p className="hover:text-yellow-400 transition cursor-pointer">
                    info@kreativan.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-white/5 border border-yellow-400/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-yellow-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-1">
                    Phone
                  </p>

                  <p className="hover:text-yellow-400 transition cursor-pointer">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-white/5 border border-yellow-400/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-yellow-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-1">
                    Address
                  </p>

                  <p>
                    Chandigarh, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          
          <p>
            © 2026 Kreativan Technologies. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <button className="hover:text-yellow-400 transition">
              Privacy Policy
            </button>

            <button className="hover:text-yellow-400 transition">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;