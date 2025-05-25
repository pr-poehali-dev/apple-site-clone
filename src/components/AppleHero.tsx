import React from "react";

const AppleHero = () => {
  return (
    <section className="bg-black text-white py-12 min-h-[600px] flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-semibold mb-4 tracking-tight">
          iPhone 15 Pro
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 text-white/80">
          Титан. Такой прочный. Такой лёгкий. Такой Pro.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200"
          >
            Подробнее
          </a>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
          >
            Купить ›
          </a>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=600&fit=crop"
            alt="iPhone 15 Pro"
            className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AppleHero;
