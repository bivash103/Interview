import React from "react";
import { ChevronDown, Gift } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto h-full flex items-center justify-between px-6">
        {/* Left */}
        <button className="flex items-center gap-1 text-lg font-semibold">
          <span>Gemini</span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 transition">
            <Gift className="w-4 h-4 text-purple-600" />
            <span className="text-sm">Free Offer</span>
          </button>

          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center font-semibold">
            AI
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;