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
    <nav className="bg-black/95 backdrop-blur-md text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-12 text-sm">
          {/* Apple Logo */}
          <div className="flex items-center">
            <Icon name="Apple" size={16} className="text-white" />
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-200 text-xs font-light"
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
              className="text-white/80 hover:text-white cursor-pointer transition-colors"
            />
            <Icon
              name="ShoppingBag"
              size={16}
              className="text-white/80 hover:text-white cursor-pointer transition-colors"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppleNavigation;
