import React from "react";

const AppleProductGrid = () => {
  const products = [
    {
      title: "MacBook Air",
      subtitle: "Невероятно тонкий. Невероятно мощный.",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=400&fit=crop",
      links: ["Подробнее", "Купить"],
    },
    {
      title: "iPad Pro",
      subtitle: "Безграничные возможности.",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=400&fit=crop",
      links: ["Подробнее", "Купить"],
    },
    {
      title: "Apple Watch",
      subtitle: "Больше причин оставаться активным.",
      image:
        "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=600&h=400&fit=crop",
      links: ["Подробнее", "Купить"],
    },
    {
      title: "AirPods Pro",
      subtitle: "Адаптивная прозрачность.",
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=400&fit=crop",
      links: ["Подробнее", "Купить"],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-8 text-center">
                <h3 className="text-3xl font-semibold mb-2 text-black">
                  {product.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">{product.subtitle}</p>

                <div className="flex justify-center gap-6 mb-8">
                  {product.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href="#"
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      {link} ›
                    </a>
                  ))}
                </div>

                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppleProductGrid;
