"use client";

import React from "react";

const Section2 = () => {
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
        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full flex justify-end mb-8">
              <div className="absolute z-1 top-11 w-[27vw] h-[27vw] rounded-t-full overflow-hidden border-2 border-yellow-400/30 hover:shadow-[0_0_40px_rgba(250,204,21,0.2)] transition-all duration-700 hover:scale-105">
                <img
                  src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="w-full bg-white/5 backdrop-blur-xl border border-yellow-400/10 rounded-[35px] p-8 md:p-12">
              <div className="max-w-3xl">
                <p className="text-yellow-400 text-lg italic mb-6">
                  “At Kreativan Technologies, we don't just create products; we craft experiences that transform imaginations into reality.”
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Hi I am Dinesh Thakur, the proud founder of <span className="text-yellow-400 font-semibold">Kreativan Technologies.</span> A dynamic startup that is dedicated to helping businesses grow in the digital era. Kreativan Technologies Web development, app development, digital marketing, and graphic designing are special areas that we specialize in, driven by the mission of delivering innovative and user-centric solutions that drive growth and make lasting impressions. Whether it's building intuitive websites, developing cutting-edge applications, or designing impactful marketing strategies and visuals, we ensure every project reflects creativity, quality, and passion.
                </p>
                <div className="inline-block bg-yellow-400/10 border border-yellow-400/30 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md py-3 px-6">
                  <p className="text-yellow-400 font-semibold">Dinesh Thakur</p>
                  <p className="text-gray-400 text-sm">Founder, Kreativan Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="bg-white/5 backdrop-blur-xl border border-yellow-400/10 rounded-[35px] p-6">
            <div className="flex flex-col gap-6">
              <div className="w-48 h-48 mx-auto rounded-t-full overflow-hidden border-2 border-yellow-400/30">
                <img
                  src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <p className="text-yellow-400 text-base italic mb-4">
                  “At Kreativan Technologies, we don't just create solutions; we craft experiences that transform businesses into brands.”
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Hi I am Dinesh Thakur, the proud founder of <span className="text-yellow-400 font-semibold">Kreativan Technologies.</span> A dynamic startup that is dedicated to helping businesses grow in the digital era.
                </p>
                <div className="inline-block bg-yellow-400/10 border border-yellow-400/30 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md py-2 px-4">
                  <p className="text-yellow-400 font-semibold text-sm">Dinesh Thakur</p>
                  <p className="text-gray-400 text-xs">Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;