import React from "react";

const AppleHero = () => {
  return (
    <section className="bg-black text-white relative overflow-hidden">
      <div className="text-center max-w-5xl mx-auto px-6 pt-12 pb-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-3 tracking-tight leading-tight">
          iPhone 15 Pro
        </h1>
        <p className="text-2xl md:text-3xl font-normal mb-6 text-white/90 tracking-wide">
          Титан. Такой прочный. Такой лёгкий. Такой Pro.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105"
          >
            Подробнее
          </a>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 text-lg font-medium transition-colors duration-200 hover:underline"
          >
            Купить ›
          </a>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <img
            src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1000&h=600&fit=crop"
            alt="iPhone 15 Pro"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AppleHero;
