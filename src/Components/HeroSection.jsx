import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center text-center px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Haryana School of Economics
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg md:text-xl mb-10">
          Access high-quality guides, courses, and resources curated for your
          growth. Learn at your own pace.
        </p>

        {/* Button */}
        <a href="/admin/login">
          {" "}
          <button
            className="px-8 py-3 bg-black text-white text-lg rounded-lg shadow-md 
                     hover:bg-blue-500 hover:shadow-lg transition-all cursor-pointer duration-300"
          >
            Get Started
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
