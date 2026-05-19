"use client";

import React from "react";
import {
  ShieldCheck,
  Rocket,
  Headphones,
  BadgeCheck,
  Layers3,
  Clock3,
} from "lucide-react";

const chooseData = [
  {
    icon: Rocket,
    title: "Innovative Solutions",
    description:
      "Modern scalable websites and applications designed for business growth.",
  },

  {
    icon: Layers3,
    title: "Creative UI/UX",
    description:
      "Clean and conversion-focused interfaces that improve user engagement.",
  },

  {
    icon: BadgeCheck,
    title: "Premium Quality",
    description:
      "We maintain high coding standards and optimized performance.",
  },

  {
    icon: Clock3,
    title: "Fast Delivery",
    description:
      "Projects delivered on time with smooth workflow and communication.",
  },

  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Dedicated support whenever you need technical guidance or help.",
  },

  {
    icon: ShieldCheck,
    title: "Trusted Partner",
    description:
      "Long-term client relationships built on trust and transparency.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white py-24 md:py-32 px-4 md:px-10">
      
      {/* Golden Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-yellow-400/20 blur-[130px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-amber-500/20 blur-[130px] rounded-full"></div>

      {/* Grid Pattern */}
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
        
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="uppercase tracking-[4px] text-yellow-400 text-sm mb-4">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
            Smart Digital Solutions For Modern Businesses
          </h2>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            We create high-quality digital experiences with innovative
            technologies, premium design, and result-driven strategies.
          </p>
        </div>

        {/* New Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side Large Card */}
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[650px] rounded-[35px] overflow-hidden border border-yellow-400/20 group">
              
              <img
                src="/webdev.jpg"
                alt="Why Choose Us"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                
                <p className="uppercase tracking-[3px] text-yellow-400 text-sm mb-4">
                  Digital Excellence
                </p>

                <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                  Transforming Ideas Into Powerful Digital Experiences
                </h3>

                <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-lg">
                  Our team combines creativity, technology, and innovation
                  to help brands build impactful digital solutions.
                </p>

                {/* Stats */}
                <div className="flex gap-8 mt-10">
                  <div>
                    <h4 className="text-4xl font-bold text-yellow-400">
                      150+
                    </h4>

                    <p className="text-sm text-gray-300 mt-2">
                      Projects Completed
                    </p>
                  </div>

                  <div>
                    <h4 className="text-4xl font-bold text-yellow-400">
                      100+
                    </h4>

                    <p className="text-sm text-gray-300 mt-2">
                      Happy Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {chooseData.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-xl border border-yellow-400/10 rounded-[30px] p-8 hover:border-yellow-400/40 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_35px_rgba(250,204,21,0.12)] overflow-hidden"
                >
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/5 transition-all duration-500"></div>

                  {/* Shine */}
                  <div className="absolute top-0 -left-[120%] h-full w-[120px] bg-white/10 blur-2xl rotate-12 group-hover:left-[120%] transition-all duration-1000"></div>

                  {/* Icon */}
                  <div className="relative h-16 w-16 rounded-2xl bg-yellow-400 text-black flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(250,204,21,0.35)]">
                    <Icon size={30} />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            {
              number: "5+",
              title: "Years Experience",
            },

            {
              number: "24/7",
              title: "Customer Support",
            },

            {
              number: "98%",
              title: "Client Satisfaction",
            },

            {
              number: "50+",
              title: "Global Brands",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-yellow-400/10 rounded-[25px] p-8 text-center hover:bg-yellow-400 hover:text-black transition-all duration-300 group"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-3">
                {item.number}
              </h3>

              <p className="text-gray-300 group-hover:text-black transition">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;