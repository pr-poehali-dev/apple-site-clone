import React from "react";
import AppleNavigation from "@/components/AppleNavigation";
import AppleHero from "@/components/AppleHero";
import AppleProductGrid from "@/components/AppleProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <AppleNavigation />
      <AppleHero />
      <AppleProductGrid />
    </div>
  );
};

export default Index;
