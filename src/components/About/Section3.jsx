"use client";

import React, { useState, useEffect, useRef } from "react";

const CounterCard = ({ number, suffix, description }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = parseInt(number, 10);
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCurrentNumber(end);
              clearInterval(counter);
            } else {
              setCurrentNumber(Math.floor(start));
            }
          }, 16);
          
          observer.unobserve(cardRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [number]);

  return (
    <div
      ref={cardRef}
      className="group relative bg-white/5 backdrop-blur-xl border border-yellow-400/10 rounded-[30px] p-8 text-center hover:border-yellow-400/40 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_35px_rgba(250,204,21,0.12)] overflow-hidden"
    >
      <div className="absolute top-0 -left-[120%] h-full w-[120px] bg-white/10 blur-2xl rotate-12 group-hover:left-[120%] transition-all duration-1000"></div>
      <h2 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-3">
        {currentNumber}{suffix}
      </h2>
      <p className="text-gray-300 text-lg">{description}</p>
    </div>
  );
};

const Section3 = () => {
  const stats = [
    { number: "9", suffix: "", description: "Years in Business" },
    { number: "270", suffix: "+", description: "Happy Customers" },
    { number: "100", suffix: "K+", description: "Monthly Blog Readers" },
    { number: "2", suffix: "K+", description: "Social Followers" },
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

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <CounterCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;