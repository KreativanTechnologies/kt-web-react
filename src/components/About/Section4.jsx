"use client";

import React from "react";
import { Users, Plus } from "lucide-react";

const Section4 = () => {
  const cardData = [
    {
      title: "Web Development",
      count: "250+",
      role: "Projects Completed",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "App Development",
      count: "220+",
      role: "Projects Completed",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Digital Marketing",
      count: "160+",
      role: "Campaigns Done",
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "UI/UX Design",
      count: "190+",
      role: "Designs Delivered",
      color: "from-green-500/20 to-emerald-500/20",
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
          Our Expertise
        </p>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          What We <span className="text-yellow-400">Deliver</span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Our team has successfully delivered thousands of projects across various domains
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-yellow-400/10 rounded-[30px] p-8 text-center hover:border-yellow-400/40 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_35px_rgba(250,204,21,0.12)] overflow-hidden"
            >
              <div className="absolute top-0 -left-[120%] h-full w-[120px] bg-white/10 blur-2xl rotate-12 group-hover:left-[120%] transition-all duration-1000"></div>
              
              <div className={`w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center`}>
                <Users size={32} className="text-yellow-400" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition">
                {card.title}
              </h3>
              <p className="text-4xl font-bold text-yellow-400 mb-2">{card.count}</p>
              <p className="text-gray-400 text-sm">{card.role}</p>
              
              <div className="flex items-center justify-center gap-2 mt-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-600/50 flex items-center justify-center">
                    <span className="text-xs">👤</span>
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center">
                  <Plus size={14} className="text-yellow-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;