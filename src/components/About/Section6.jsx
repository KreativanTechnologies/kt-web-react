"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Section6 = ({ images = [] }) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [angle, setAngle] = useState(0);

  const defaultImages = [
    { src: "/webdev.jpg", alt: "Web Development" },
    { src: "/appdev.jpg", alt: "App Development" },
    { src: "/digital.jpg", alt: "Digital Marketing" },
    { src: "/uiux.jpg", alt: "UI/UX Design" },
    { src: "/webdev.jpg", alt: "Project 5" },
    { src: "/appdev.jpg", alt: "Project 6" },
  ];

  const galleryImages = images.length > 0 ? images : defaultImages;
  const totalImages = Math.min(galleryImages.length, 6);
  const radius = screenWidth / 2.7;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gallerySpin = (direction) => {
    const spinAmount = 360 / totalImages;
    setAngle((prevAngle) => prevAngle + (direction === "left" ? -spinAmount : spinAmount));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      gallerySpin("right");
    }, 5000);
    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <section className="relative overflow-hidden bg-black text-white py-24 md:py-32">
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
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-16 px-4">
        <p className="uppercase tracking-[4px] text-yellow-400 text-sm mb-4">
          Our Work
        </p>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Featured <span className="text-yellow-400">Projects</span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Explore our creative portfolio of digital solutions
        </p>
      </div>

      {/* 3D Carousel */}
      <div className="relative z-10 w-full h-[70vw] md:h-[30vw] flex items-center justify-center overflow-hidden"
        style={{ perspective: "130vw" }}
      >
        <figure
          className="flex items-center justify-center w-full h-full absolute"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${angle}deg)`,
            transition: "transform 0.8s ease-in-out",
          }}
        >
          {galleryImages.slice(0, totalImages).map((img, index) => (
            <img
              key={index}
              className="absolute w-[50vw] h-[40vw] md:w-[20vw] md:h-[14vw] object-cover rounded-2xl shadow-2xl border-2 border-yellow-400/20"
              src={img.src}
              alt={img.alt || `Project ${index + 1}`}
              style={{
                transformOrigin: "50% 50%",
                transform: `translate(-50%, -50%) rotateY(${index * 60}deg) translateZ(${radius}px)`,
                top: "50%",
                left: "50%",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
            />
          ))}
        </figure>

        {/* Navigation Buttons */}
        <button
          onClick={() => gallerySpin("left")}
          className="absolute left-[10%] md:left-[5%] z-20 h-12 w-12 md:h-14 md:w-14 rounded-full bg-black/50 backdrop-blur-lg border border-yellow-400/30 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => gallerySpin("right")}
          className="absolute right-[10%] md:right-[5%] z-20 h-12 w-12 md:h-14 md:w-14 rounded-full bg-black/50 backdrop-blur-lg border border-yellow-400/30 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Section6;