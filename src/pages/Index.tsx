import React from "react";
import AppleNavigation from "@/components/AppleNavigation";
import AppleHero from "@/components/AppleHero";
import AppleProductShowcase from "@/components/AppleProductShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <AppleNavigation />
      <AppleHero />
      <AppleProductShowcase />
    </div>
  );
};

export default Index;
