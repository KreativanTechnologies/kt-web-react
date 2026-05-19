"use client";

import React, { useRef, useEffect, useState } from "react";

const Testimonials = ({
  data = [
    { mainHead: "What Our Clients Say" },

    {
      id: 1,
      name: "John Doe",
      position: "CEO",
      company: "Tech Corp",
      feedback:
        "Amazing service and great support! Their team delivered beyond expectations with outstanding quality and professionalism.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },

    {
      id: 2,
      name: "Jane Smith",
      position: "Manager",
      company: "Design Co",
      feedback:
        "Exceeded our expectations in every way. The design quality and communication were absolutely exceptional.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    },

    {
      id: 3,
      name: "Mike Johnson",
      position: "Founder",
      company: "StartUp Inc",
      feedback:
        "Best investment we made for our business. Their creative strategy helped us grow our online presence rapidly.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
  ],
}) => {
  const carouselRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = data.slice(1);

  // Auto Scroll Mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % testimonials.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Mobile Scroll
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.firstChild.offsetWidth + 16;

      carouselRef.current.scrollTo({
        left: cardWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <section className="relative py-24 md:py-36 overflow-hidden bg-black text-white">
      
      {/* Golden Glow Effects */}
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

      {/* Main Content */}
      <div className="relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-20 px-4">
          <p className="uppercase tracking-[4px] text-yellow-400 text-sm mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-7xl font-bold leading-tight">
            {data[0]?.mainHead}
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mt-6 text-sm md:text-lg leading-relaxed">
            Hear what our clients say about our digital solutions,
            creative services, and commitment to delivering exceptional
            experiences.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:block">
          
          {/* First Row */}
          <div className="relative overflow-hidden mb-8 testimonial-row">
            <div className="flex gap-6 testimonial-track scroll-left">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={t.id + "-" + i}
                  className="w-[500px] h-[320px] flex-shrink-0"
                >
                  <div className="relative bg-white/5 backdrop-blur-xl border border-yellow-400/10 hover:border-yellow-400/40 rounded-[30px] p-8 h-full overflow-hidden transition-all duration-500  hover:shadow-[0_0_40px_rgba(250,204,21,0.12)] group">
                    
                    {/* Shine Effect */}
                    <div className="absolute top-0 -left-[120%] h-full w-[120px] bg-white/10 blur-2xl rotate-12 group-hover:left-[120%] transition-all duration-1000"></div>

                    {/* User Info */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        {/* <img
                          src="/Images/comma.png"
                          alt="comma"
                          width={55}
                          className="opacity-80"
                        /> */}

                        <div className="mt-8">
                          <p className="font-semibold text-2xl">
                            {t.name}
                          </p>

                          <p className="text-sm text-yellow-400 mt-2">
                            {t.position}, {t.company}
                          </p>
                        </div>
                      </div>

                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-28 h-28 rounded-full object-cover border-2 border-yellow-400/30"
                      />
                    </div>

                    {/* Feedback */}
                    <div className="mt-10">
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {t.feedback}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row */}
          <div className="relative overflow-hidden testimonial-row">
            <div className="flex gap-6 testimonial-track scroll-right">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={t.id + "-" + i}
                  className="w-[500px] h-[320px] flex-shrink-0"
                >
                  <div className="relative bg-white/5 backdrop-blur-xl border border-yellow-400/10 hover:border-yellow-400/40 rounded-[30px] p-8 h-full overflow-hidden transition-all duration-500  hover:shadow-[0_0_40px_rgba(250,204,21,0.12)] group">
                    
                    {/* Shine Effect */}
                    <div className="absolute top-0 -left-[120%] h-full w-[120px] bg-white/10 blur-2xl rotate-12 group-hover:left-[120%] transition-all duration-1000"></div>

                    {/* User Info */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        {/* <img
                          src="/Images/comma.png"
                          alt="comma"
                          width={55}
                          className="opacity-80"
                        /> */}

                        <div className="mt-8">
                          <p className="font-semibold text-2xl">
                            {t.name}
                          </p>

                          <p className="text-sm text-yellow-400 mt-2">
                            {t.position}, {t.company}
                          </p>
                        </div>
                      </div>

                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-28 h-28 rounded-full object-cover border-2 border-yellow-400/30"
                      />
                    </div>

                    {/* Feedback */}
                    <div className="mt-10">
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {t.feedback}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View */}
   

{/* Mobile View */}
<div className="sm:hidden px-4">
  <div className="relative overflow-hidden rounded-[25px]">
    
    {/* Slider */}
    <div
      className="flex transition-transform duration-300 ease-out will-change-transform"
    style={{
  transform: `translate3d(-${currentIndex * 100}%,0,0)`,
}}
    >
      {testimonials.map((t, index) => (
        <div
          key={index}
          className="min-w-full"
        >
          <div className="relative bg-white/5 backdrop-blur-xl border border-yellow-400/10 rounded-[25px] p-6 h-[320px] overflow-hidden">
            
            {/* Shine Effect */}
            <div className="absolute top-0 -left-[120%] h-full w-[120px] bg-white/10 blur-2xl rotate-12 animate-[shine_5s_linear_infinite]"></div>

            {/* User Info */}
            <div className="flex items-start justify-between gap-3">
              
              <div>
                {/* <img
                  src="/Images/comma.png"
                  alt="comma"
                  width={40}
                  className="opacity-80"
                /> */}

                <div className="mt-5">
                  <p className="font-semibold text-xl">
                    {t.name}
                  </p>

                  <p className="text-sm text-yellow-400 mt-1">
                    {t.position}, {t.company}
                  </p>
                </div>
              </div>

              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-yellow-400/30"
              />
            </div>

            {/* Feedback */}
            <div className="mt-8">
              <p className="text-gray-300 text-sm leading-relaxed">
                {t.feedback}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Dots */}
    <div className="flex justify-center gap-3 mt-6">
      {testimonials.map((_, index) => (
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
</div>
      </div>
    </section>
  );
};

export default Testimonials;