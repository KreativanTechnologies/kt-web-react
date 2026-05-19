"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const data = [
    {
      heading: "Professional Web Development",
      subHeading:
        "We create fast, responsive, and modern websites that help your business grow online.",
      image: "webdev.jpg",
    },
    {
      heading: "Creative UI/UX Design",
      subHeading:
        "Beautiful and user-friendly designs focused on engagement, usability, and conversions.",
      image: "uiux.jpg",
    },
    {
      heading: "Mobile App Development",
      subHeading:
        "Custom Android and iOS applications with smooth performance and scalable architecture.",
      image: "appdev.jpg",
    },
    {
      heading: "Digital Marketing Solutions",
      subHeading:
        "Boost your online visibility with SEO, social media marketing, branding, and paid ads.",
      image: "digital.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? data.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={data[currentIndex].image}
          alt="hero"
          className="w-full h-full object-cover scale-110 animate-[zoom_6s_linear_infinite]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-16">
        <div className="max-w-3xl text-white">
          <p className="uppercase tracking-[4px] text-sm md:text-base text-yellow-400 mb-4">
            Creative Digital Agency
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fadeIn">
            {data[currentIndex].heading}
          </h1>

          <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-8 max-w-2xl">
            {data[currentIndex].subHeading}
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold transition duration-300">
              Get Started
            </button>

            <button className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold transition duration-300">
              Explore Services
            </button>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-yellow-400 hover:text-black text-white p-3 rounded-full transition duration-300"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-yellow-400 hover:text-black text-white p-3 rounded-full transition duration-300"
      >
        <ChevronRight size={30} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-10 bg-yellow-400"
                : "w-3 bg-white/50"
            }`}
          ></button>
        ))}
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;