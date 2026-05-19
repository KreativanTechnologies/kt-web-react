"use client";

import React, { useEffect, useRef, useState } from "react";

const Section7 = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const locations = [
    { name: "Canada", img: "./aboutus/Canada.png", top: "0%", left: "8%", mdTop: "4%", mdLeft: "8%" },
    { name: "Brazil", img: "./aboutus/Brazil.png", top: "23%", left: "17%", mdTop: "23%", mdLeft: "17%" },
    { name: "Germany", img: "./aboutus/Germany.png", top: "0%", left: "39%", mdTop: "5%", mdLeft: "35%" },
    { name: "India", img: "./aboutus/India.png", top: "10%", left: "60%", mdTop: "13%", mdLeft: "52%" },
    { name: "Australia", img: "./aboutus/Australia.png", top: "27%", left: "75%", mdTop: "27%", mdLeft: "69%" },
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
          Global Presence
        </p>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          We Serve <span className="text-yellow-400">Worldwide</span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Our clients and partners are spread across the globe
        </p>
      </div>

      {/* Map Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="relative w-full" ref={sectionRef}>
          {/* Map Image */}
          <div className="w-full overflow-hidden rounded-[35px] border border-yellow-400/20">
            <img 
              src="./aboutus/Countries.png" 
              alt="Global Presence Map" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Location Pins */}
          {locations.map((location, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
              style={{
                top: window.innerWidth < 768 ? location.top : location.mdTop,
                left: window.innerWidth < 768 ? location.left : location.mdLeft,
                width: window.innerWidth < 768 ? "25vw" : "15vw",
                maxWidth: "120px",
              }}
            >
              <div className="group relative cursor-pointer">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 backdrop-blur-sm text-yellow-400 text-xs px-2 py-1 rounded-full">
                  {location.name}
                </div>
                <img 
                  src={location.img} 
                  alt={location.name} 
                  className="w-full h-auto object-contain hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 animate-ping rounded-full bg-yellow-400/30 opacity-0 group-hover:opacity-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;