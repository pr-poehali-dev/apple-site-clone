import React from "react";
import Icon from "@/components/ui/icon";

const AppleNavigation = () => {
  const navItems = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV и Дом",
    "Развлечения",
    "Аксессуары",
    "Поддержка",
  ];

  return (
    <nav className="bg-black/80 backdrop-blur-xl text-white sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-11 text-sm">
          {/* Apple Logo */}
          <div className="flex items-center">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/90 hover:text-white transition-colors duration-200 text-xs font-normal tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Search and Bag */}
          <div className="flex items-center space-x-4">
            <Icon
              name="Search"
              size={16}
              className="text-white/90 hover:text-white cursor-pointer transition-colors"
            />
            <Icon
              name="ShoppingBag"
              size={16}
              className="text-white/90 hover:text-white cursor-pointer transition-colors"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppleNavigation;
