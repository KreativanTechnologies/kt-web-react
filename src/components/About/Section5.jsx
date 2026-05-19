"use client";

import React from "react";
import { Code2, Smartphone, Megaphone, Palette } from "lucide-react";

const Section5 = () => {
  const cardsData = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      image: "/bb/webdev.webp",
      icon: Code2,
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile apps for iOS and Android",
      image: "/bb/appdev.webp",
      icon: Smartphone,
    },
    {
      title: "Digital Marketing",
      description: "SEO, social media, and growth strategies for online success",
      image: "/bb/digital.webp",
      icon: Megaphone,
    },
    {
      title: "Graphic Design",
      description: "Creative branding, logos, and visual identity solutions",
      image: "/bb/ui-ux.webp",
      icon: Palette,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black text-white py-24 md:py-32 px-4 md:px-10">
      {/* Golden Glow Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-400/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-300/10 blur-[120px] rounded-full"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #facc15 1px, transparent 1px),
              linear-gradient(to bottom, #facc15 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-16">
        <p className="uppercase tracking-[4px] text-yellow-400 text-sm mb-4">
          Our Services
        </p>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          What <span className="text-yellow-400">We Offer</span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Comprehensive digital solutions tailored to your business needs
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsData.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/3 backdrop-blur-xl border border-yellow-400/10 rounded-[30px] overflow-hidden hover:border-yellow-400/40 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_35px_rgba(250,204,21,0.12)]"
              >
                <div className="absolute top-0 -left-[120%] h-full w-[120px] bg-white/10 blur-2xl rotate-12 group-hover:left-[120%] transition-all duration-1000"></div>
                
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section5;