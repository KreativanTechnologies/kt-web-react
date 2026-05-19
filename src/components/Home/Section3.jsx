"use client";

import React, { useEffect, useState } from "react";
import {
  FaShoppingCart,
  FaWordpress,
  FaPaintBrush,
  FaImage,
} from "react-icons/fa";

import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Section3 = () => {
  const [activeGallery, setActiveGallery] = useState("ecommerce");
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleries = {
    ecommerce: [
      "/webdev.jpg",
      "/webdev.jpg",
      "/webdev.jpg",
      "/webdev.jpg",
      "/webdev.jpg",
    ],

    wordpress: [
      "/webdev.jpg",
      "/webdev.jpg",
      "/webdev.jpg",
      "/webdev.jpg",
      "/webdev.jpg",
    ],

    logos: [
      "/webdev.jpg",
      "/webdev.jpg",
      "/webdev.jpg",
      "/webdev.jpg",
    ],

    graphics: [
      "/webdev.jpg",
      "/webdev.jpg",
      "/webdev.jpg",
      "/webdev.jpg",
      "/webdev.jpg",
    ],
  };

  const galleryIcons = [
    {
      name: "E-Commerce",
      gallery: "ecommerce",
      icon: FaShoppingCart,
    },

    {
      name: "WordPress",
      gallery: "wordpress",
      icon: FaWordpress,
    },

    {
      name: "Logo Design",
      gallery: "logos",
      icon: FaImage,
    },

    {
      name: "Graphics",
      gallery: "graphics",
      icon: FaPaintBrush,
    },
  ];

  const images = galleries[activeGallery];

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, activeGallery]);

  // Next Slide
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // Prev Slide
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Change Category
  const handleGalleryChange = (gallery) => {
    setActiveGallery(gallery);
    setCurrentIndex(0);
  };

  return (
    <section className="relative w-full bg-black text-white py-20 px-4 md:px-12 overflow-hidden">
      
      {/* Golden Glow Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-400/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-300/10 blur-[120px] rounded-full"></div>

      {/* Grid Effect */}
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

      {/* Main Content */}
      <div className="relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="uppercase tracking-[4px] text-yellow-400 text-sm mb-4">
            Our Portfolio
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Featured Creative Projects
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Explore our latest websites, branding designs, graphics, and
            digital experiences crafted for modern businesses.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-14">
          {galleryIcons.map(({ name, gallery, icon: Icon }) => (
            <button
              key={gallery}
              onClick={() => handleGalleryChange(gallery)}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 border ${
                activeGallery === gallery
                  ? "bg-yellow-400 text-black scale-105 border-yellow-300 shadow-[0_0_25px_rgba(250,204,21,0.5)]"
                  : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-yellow-400/40"
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{name}</span>
            </button>
          ))}
        </div>

        {/* Custom Slider */}
        <div className="relative w-full overflow-hidden rounded-[30px] border border-yellow-400/20 shadow-[0_0_40px_rgba(250,204,21,0.08)]">

          {/* Slides */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="min-w-full relative h-[400px] md:h-[650px] overflow-hidden"
              >
                {/* Image */}
                <img
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6 md:p-12 max-w-2xl">
                  <p className="text-yellow-400 uppercase tracking-[3px] text-sm mb-4">
                    Creative Project
                  </p>

                  <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                    Modern Digital Experience
                  </h2>

                  <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-8">
                    We design visually stunning and conversion-focused digital
                    solutions that help brands stand out in the modern market.
                  </p>

                  <button className="group flex items-center gap-3 bg-yellow-400 hover:bg-white text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-yellow-400/30">
                    View Project

                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 z-20 h-12 w-12 md:h-14 md:w-14 rounded-full bg-black/40 backdrop-blur-lg border border-yellow-400/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 z-20 h-12 w-12 md:h-14 md:w-14 rounded-full bg-black/40 backdrop-blur-lg border border-yellow-400/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? "w-10 h-3 bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]"
                    : "w-3 h-3 bg-white/40"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            {
              number: "150+",
              title: "Projects Completed",
            },

            {
              number: "100+",
              title: "Happy Clients",
            },

            {
              number: "5+",
              title: "Years Experience",
            },

            {
              number: "24/7",
              title: "Support",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-yellow-400/10 rounded-3xl p-8 text-center hover:bg-yellow-400 hover:text-black transition-all duration-300 group hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-3">
                {item.number}
              </h2>

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

export default Section3;