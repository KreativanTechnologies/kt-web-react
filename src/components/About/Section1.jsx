"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const Section1 = ({ redirectTo = "/howwework" }) => {
  const [clicked, setClicked] = useState(false);

  const handleMouseLeave = () => setClicked(false);

  const handleClick = () => {
    setClicked(!clicked);
    if (redirectTo) {
      setTimeout(() => {
        window.location.href = redirectTo;
      }, 500);
    }
  };

  const cardData = [
    {
      Img_Src: "/tech-started.png",
      Title: "How Tech. Started",
      Description: "Building An Enterprise Doesn't Need Your Thousands.",
    },
    {
      Img_Src: "/endless-possibilities.png",
      Title: "Endless Possibilities",
      Description: "There Are Endless Possibilities To Turn Your Concepts Into Creative Solutions.",
    },
    {
      Img_Src: "/innovation.png",
      Title: "Innovation At Its Core",
      Description: "We Leverage Technology For Innovative Solution.",
    },
    {
      Img_Src: "/dedicated-support.png",
      Title: "Dedicated Support",
      Description: "We Help You Scale Rapidly With Sustainable Growth Strategies.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black text-white py-24 md:py-32 px-4 md:px-10 -mt-20 md:-mt-[5vw]">
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
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="uppercase tracking-[4px] text-yellow-400 text-sm mb-4">
            About Us
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Kreativan Technologies:{" "}
            <span className="text-yellow-400">Bridging the Gap</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-lg max-w-4xl mx-auto mt-6 leading-relaxed">
            Kreativan Technologies is a leading name in empowering individuals and businesses
            through cutting-edge IT solutions and training programs. We are passionate about
            igniting digital growth and fostering a community of skilled professionals who can
            navigate the ever-evolving tech landscape.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-yellow-400/10 rounded-[30px] p-6 text-center hover:border-yellow-400/40 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_35px_rgba(250,204,21,0.12)] overflow-hidden"
            >
              {/* Shine Effect */}
              <div className="absolute top-0 -left-[120%] h-full w-[120px] bg-white/10 blur-2xl rotate-12 group-hover:left-[120%] transition-all duration-1000"></div>
              
              {/* Image */}
              <div className="w-24 h-24 mx-auto mb-5 rounded-2xl overflow-hidden bg-yellow-400/10 flex items-center justify-center">
                <img
                  src={item.Img_Src}
                  alt={item.Title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition">
                {item.Title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.Description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            onMouseLeave={handleMouseLeave}
            className="group flex items-center gap-4 bg-yellow-400 hover:bg-white text-black font-semibold px-8 py-5 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.35)]"
          >
            How We Work
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* <div className='relative'>

            <div className=''>
                <img className='w-full h-screen opacity-70' src="/kt3.png" alt="" />
            </div>

            <div className='flex flex-col gap-4 absolute top-[10vw] w-[50vw] justify-self-center text-center '>
              <h2 className='text-[3vw] font-semibold text-amber-300 '>Kreativan Technologies: Bridging the Gap Between Tech Dreams and Reality</h2>
              <p className='text-[1.3vw] text-amber-100'>Kreativan Technologies is a leading name in empowering individuals and businesses through cutting-edge IT solutions and training programs. We are passionate about igniting digital growth and fostering a community of skilled professionals who can navigate the ever-evolving tech landscape.</p>
              <div>
               <button className='bg-amber-300 text-black px-[2.5vw] py-[0.6vw] rounded-full mt-[1vw] cursor-pointer hover:text-amber-300 hover:bg-gray-950'>How We Work</button>
              </div>
            </div>

            
        </div>

        <div className='relative'>

    <div>
        <img
            className='w-full h-[70vh] object-cover md:h-screen opacity-70'
            src="/kt3.png"
            alt=""
        />
    </div>

    <div className='flex flex-col gap-[2vw] absolute top-[50vw] sm:top-[16vw] md:top-[12vw] lg:top-[10vw] w-[90vw] sm:w-[75vw] md:w-[60vw] lg:w-[50vw] left-1/2 -translate-x-1/2 text-center'>

        <h2 className='text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] font-semibold text-amber-300 leading-[1.2]'>
            Kreativan Technologies: Bridging the Gap Between Tech Dreams and Reality
        </h2>

        <p className='text-[3.2vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1.3vw] text-amber-100 leading-[1.7]'>
            Kreativan Technologies is a leading name in empowering individuals and businesses through cutting-edge IT solutions and training programs. We are passionate about igniting digital growth and fostering a community of skilled professionals who can navigate the ever-evolving tech landscape.
        </p>

        <div>
            <button className='bg-amber-300 text-black px-[3vw] sm:px-[4vw] lg:px-[2.5vw] py-[2vw] sm:py-[1.2vw] lg:py-[0.6vw] rounded-full mt-[4vw] md:mt-[1vw] cursor-pointer hover:text-amber-300 hover:bg-gray-950 transition-all duration-200'>
                How We Work
            </button>
        </div>

    </div>

</div> */}

    </section>

    
  );
};

export default Section1;