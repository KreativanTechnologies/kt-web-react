"use client";

import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  Globe,
  Layers3,
  Rocket,
} from "lucide-react";

const stats = [
  {
    number: "9+",
    title: "Years Experience",
  },

  {
    number: "150+",
    title: "Projects Delivered",
  },

  {
    number: "100+",
    title: "Happy Clients",
  },

  {
    number: "24/7",
    title: "Support Available",
  },
];

const features = [
  {
    icon: Rocket,
    title: "Agile Development",
    desc: "Fast and flexible development process focused on rapid delivery.",
  },

  {
    icon: Layers3,
    title: "Modern Technologies",
    desc: "We use the latest frameworks and technologies for scalable solutions.",
  },

  {
    icon: Globe,
    title: "Global Reach",
    desc: "Serving businesses worldwide with innovative digital experiences.",
  },

  {
    icon: BadgeCheck,
    title: "Trusted Services",
    desc: "Reliable and transparent workflow with premium quality delivery.",
  },
];

const Founded = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white py-24 md:py-32 px-4 md:px-10">
      
      {/* Golden Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-400/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-300/10 blur-[120px] rounded-full"></div>

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
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <p className="uppercase tracking-[4px] text-yellow-400 text-sm mb-5">
              About Kreativan Technologies
            </p>

            <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8">
              Founded Over{" "}
              <span className="text-yellow-400">
                9 Years Ago
              </span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-semibold leading-snug mb-8 text-gray-100">
              Kreativan Technologies has grown into a leading web design and
              development agency in Chandigarh.
            </h2>

            <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-10">
              At Kreativan Technologies, we believe that successful software
              development stems from an agile approach. Our methodology ensures
              the delivery of scalable, high-quality digital solutions while
              promoting transparency, flexibility, and collaboration throughout
              every stage of development.
            </p>

            {/* CTA */}
            <button className="group flex items-center gap-4 bg-yellow-400 hover:bg-white text-black font-semibold px-8 py-5 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.35)]">
              Learn More

              <ArrowRight
                size={22}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            
            <div className="relative rounded-[35px] overflow-hidden border border-yellow-400/20 shadow-[0_0_40px_rgba(250,204,21,0.08)]">
              <img
                src="/webdev.jpg"
                alt="Kreativan Technologies"
                className="w-full h-[600px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-xl border border-yellow-400/20 rounded-3xl p-6 w-[260px]">
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">
                9+
              </h3>

              <p className="text-gray-300">
                Years of Innovation & Digital Excellence
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-24">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-yellow-400/10 rounded-[30px] p-8 overflow-hidden hover:border-yellow-400/40 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_35px_rgba(250,204,21,0.12)]"
              >
                
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
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-yellow-400/10 rounded-[30px] p-8 text-center hover:bg-yellow-400 hover:text-black transition-all duration-300 group"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-3">
                {item.number}
              </h2>

              <p className="text-gray-300 group-hover:text-black transition">
                {item.title}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Founded;