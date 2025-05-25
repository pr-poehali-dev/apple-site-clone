import React from "react";

const AppleProductShowcase = () => {
  return (
    <div className="bg-white">
      {/* iPhone 15 Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-semibold mb-3 text-black">
            iPhone 15
          </h2>
          <p className="text-2xl md:text-3xl font-normal mb-8 text-gray-700">
            Новинка камера. Новый дизайн. Новый цвет.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-200"
            >
              Подробнее
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 text-lg font-medium hover:underline"
            >
              Купить ›
            </a>
          </div>

          <img
            src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1000&h=600&fit=crop"
            alt="iPhone 15"
            className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Apple Watch Section */}
      <section className="bg-black text-white py-16">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-semibold mb-3">
            Apple Watch Series 9
          </h2>
          <p className="text-2xl md:text-3xl font-normal mb-8 text-white/90">
            Умнее. Ярче. Мощнее.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-200"
            >
              Подробнее
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 text-lg font-medium hover:underline"
            >
              Купить ›
            </a>
          </div>

          <img
            src="https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=1000&h=600&fit=crop"
            alt="Apple Watch"
            className="w-full max-w-3xl mx-auto rounded-2xl"
          />
        </div>
      </section>
    </div>
  );
};

export default AppleProductShowcase;
