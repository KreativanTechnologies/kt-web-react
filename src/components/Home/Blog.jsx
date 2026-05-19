"use client";

import React from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
} from "lucide-react";

const blogs = [
  {
    image: "/webdev.jpg",
    category: "Web Development",
    title: "Top Web Development Trends Every Business Should Know",
    description:
      "Discover the latest technologies, frameworks, and design trends shaping the future of modern websites.",
    date: "May 19, 2026",
    readTime: "5 min read",
  },

  {
    image: "/appdev.jpg",
    category: "App Development",
    title: "How Mobile Apps Are Transforming Modern Businesses",
    description:
      "Learn how custom mobile applications improve customer engagement and business growth.",
    date: "May 15, 2026",
    readTime: "7 min read",
  },

  {
    image: "/digital.jpg",
    category: "Digital Marketing",
    title: "SEO Strategies That Actually Increase Website Traffic",
    description:
      "Explore proven SEO techniques and marketing strategies to improve your online visibility.",
    date: "May 10, 2026",
    readTime: "6 min read",
  },
];

const FeaturedBlogs = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white py-24 md:py-32 px-4 md:px-10">
      
      {/* Golden Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-yellow-400/20 blur-[130px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-amber-500/20 blur-[130px] rounded-full"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #facc15 1px, transparent 1px),
              linear-gradient(to bottom, #facc15 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="uppercase tracking-[4px] text-yellow-400 text-sm mb-4">
            Featured Blogs
          </p>

          <h2 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
            Latest Insights & Digital Trends
          </h2>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Explore expert articles, creative ideas, and the latest
            trends in web development, mobile apps, UI/UX, and digital
            marketing.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-yellow-400/10 rounded-[35px] overflow-hidden hover:border-yellow-400/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(250,204,21,0.12)]"
            >
              
              {/* Image */}
              <div className="relative overflow-hidden h-[260px]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* Category */}
                <div className="absolute top-5 left-5">
                  <span className="bg-yellow-400 text-black text-xs font-semibold px-4 py-2 rounded-full">
                    {blog.category}
                  </span>
                </div>

                {/* Shine */}
                <div className="absolute top-0 -left-[120%] h-full w-[120px] bg-white/20 blur-2xl rotate-12 group-hover:left-[120%] transition-all duration-1000"></div>
              </div>

              {/* Content */}
              <div className="p-7">
                
                {/* Meta */}
                <div className="flex items-center gap-5 text-gray-400 text-sm mb-5">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    <span>{blog.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 size={16} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold leading-snug mb-4 group-hover:text-yellow-400 transition">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                  {blog.description}
                </p>

                {/* Button */}
                <button className="group/btn flex items-center gap-3 text-yellow-400 font-medium hover:text-white transition-all duration-300">
                  Read More

                  <div className="h-10 w-10 rounded-full border border-yellow-400 flex items-center justify-center group-hover/btn:bg-yellow-400 group-hover/btn:text-black transition-all duration-300">
                    <ArrowRight
                      size={18}
                      className="group-hover/btn:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-20">
          <button className="group flex items-center gap-4 bg-yellow-400 hover:bg-white text-black font-semibold px-8 py-5 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.35)]">
            View All Blogs

            <ArrowRight
              size={22}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;