import React, { useState, useEffect } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const Hero = () => {
  const data = {
    items: [
      {
        heading1: "E-Commerce App Development Services",
        heading2:
          "We provide professional e-commerce app development services, building scalable and user-friendly platforms to increase your online sales.",
        Img_Src: "/bb/images/hero-img.png",
      },
      {
        heading1: "Custom Web Solutions",
        heading2:
          "Building scalable, responsive, and user-friendly websites that promote interaction and expansion is our area of expertise.",
        Img_Src: "/bb/images/realEstate.png",
      },
      {
        heading1: "Mobile App Development",
        heading2:
          "Turn your ideas into innovative mobile solutions with our expert app development services. We create feature-packed, intuitive, and seamless applications tailored to your business goals, ensuring smooth performance across all platforms.",
        Img_Src: "/bb/images/finance.png",
      },
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.items.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [data.items.length]);

  // Handle manual navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.items.length);
  };

  return (
    <>
      <div className="md:px-12 h-full md:h-screen w-full py-[0vw] md:py-[4vw] relative">
        {/* Carousel Container */}
        <div className="relative text-center md:text-left h-full flex justify-center items-center space-y-4">
          {data.items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row absolute transition-opacity duration-1000 ease-in-out w-full h-full items-center justify-center ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Content Section */}
              <div className=" h-1/2 md:h-full w-full flex flex-col justify-center px-4 mb-4 md:mb-0">
                <h1 className="text-[5.8vw] sm:text-[4vh] md:text-[3vw] font-bold mb-2 md:mb-4">
                  {item.heading1}
                </h1>
                <p className="text-[3.8vw] sm:text-[3vw] md:text-[1.5vw] text-gray-700">
                  {item.heading2}
                </p>
              </div>

              {/* Image Section */}
              <div className=" h-[40vh] w-[40vh] sm:h-[30vw] sm:w-[full] md:h-full md:w-full flex justify-center items-center">
                <img
                  src={item.Img_Src}
                  alt={item.heading1}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Carousel Buttons */}
        {/* <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center -translate-y-1/2">
          <button
            onClick={handlePrev}
            className=" text-black md:p-3 text-3xl  md:h-14 md:w-14 h-10 w-10 "
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleNext}
            className=" text-black md:p-3 text-3xl   md:h-14 md:w-14 h-10 w-10"
          >
            <IoIosArrowForward />
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Hero;
