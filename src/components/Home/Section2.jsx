"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const businessData = [
  {
    title: "Web Development",
    description:
      "Custom responsive websites and modern web applications built with the latest technologies",
    image: "/webdev.jpg",
  },

  {
    title: "App Development",
    description:
      "Scalable Android and iOS mobile applications with smooth performance and user-friendly design",
    image: "/appdev.jpg",
  },

  {
    title: "Digital Marketing",
    description:
      "SEO, social media marketing, paid ads, and branding strategies to grow your online presence",
    image: "/digital.jpg",
  },

  {
    title: "UI/UX Design",
    description:
      "Creative and intuitive user interface and user experience designs focused on engagement and usability",
    image: "/uiux.jpg",
  },
];

const Section2 = () => {
  const patternRef = useRef(null);
  const sectionRef = useRef(null);
  const animationFrame = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (animationFrame.current)
        cancelAnimationFrame(animationFrame.current);

      animationFrame.current = requestAnimationFrame(() => {
        if (!sectionRef.current || !patternRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const start = windowHeight * 0.7;
        const end = -rect.height * 0.3;

        if (rect.top < start && rect.top > end) {
          const total = start - end;

          const progress = Math.min(
            1,
            Math.max(0, (start - rect.top) / total)
          );

          const speedFactor = 5;
          const maxMove = window.innerWidth < 768 ? 50 : 100;

          const translateX = progress * maxMove * speedFactor;

          patternRef.current.style.transform = `translate3d(${translateX}px,0,0)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (animationFrame.current)
        cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black text-white py-20"
    >
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

      {/* Moving Pattern */}
      {/* <div className="absolute top-0 left-0 w-full h-[200px] sm:h-[300px] md:h-[450px] overflow-hidden z-0 opacity-30"> */}
        {/* <div
          ref={patternRef}
          className="h-full w-[120vw]"
          style={{
            willChange: "transform",
            transform: "translate3d(0,0,0)",
            transition: "transform 0.1s linear",
            marginLeft: "-30vw",
          }}
        >
          <img
            src="/Images/pattern4.png"
            alt="Pattern Background"
            className="w-full h-full object-cover"
          />
        </div> */}
      {/* </div> */}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8   ">
        
        {/* Heading */}
        <div className="text-center mb-20 md:mb-32">
          <p className="uppercase tracking-[4px] text-yellow-400 text-sm mb-4">
            Our Services
          </p>

          <h2 className="text-4xl md:text-7xl font-bold leading-tight">
            OUR BUSINESS
          </h2>

          <p className="text-gray-300 text-sm md:text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
            We create innovative digital experiences with modern technologies,
            premium designs, and strategic marketing solutions for growing
            businesses.
          </p>
        </div>

        {/* Business Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {businessData.map((item, index) => (
            <div
              key={index}
              className="group relative w-full h-72 md:h-[420px] rounded-[35px] overflow-hidden border border-yellow-400/10 hover:border-yellow-400/40 transition-all duration-500"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* Golden Overlay */}
              <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-all duration-500"></div>

              {/* Card Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8">

                <div className="transition-all duration-500 group-hover:-translate-y-4">
                  
                  <div className="w-16 h-[3px] bg-yellow-400 mb-5 rounded-full"></div>

                  <h3 className="text-white font-bold text-2xl md:text-4xl mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>

                {/* Hover Buttons */}
                <div
                  className="mt-6 flex items-center gap-4
                  max-h-0 opacity-0 overflow-hidden
                  group-hover:max-h-40 group-hover:opacity-100
                  transition-all duration-500 ease-out"
                >
                  <button
                    aria-label={`Know more about ${item.title}`}
                    className="bg-yellow-400 hover:bg-white text-black font-semibold rounded-full px-8 py-4 transition-all duration-300 shadow-[0_0_25px_rgba(250,204,21,0.35)]"
                  >
                    Know More
                  </button>

                  <button
                    aria-label={`Open ${item.title} details`}
                    className="h-14 w-14 flex items-center justify-center bg-white/10 backdrop-blur-lg border border-yellow-400/30 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  >
                    <ArrowRight
                      size={22}
                      className="-rotate-45"
                    />
                  </button>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute top-0 -left-[120%] h-full w-[120px] bg-white/20 blur-2xl rotate-12 group-hover:left-[120%] transition-all duration-1000"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;