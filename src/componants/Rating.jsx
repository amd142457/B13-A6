import React from "react";

const Rating = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center">
          {/* Active Users */}
          <div className="space-y-3 group">
            <h2 className="text-5xl md:text-6xl font-bold text-white transition-all duration-700 group-hover:scale-110">
              50k
            </h2>
            <p className="text-white/90 text-lg font-medium">Active Users</p>
          </div>

          {/* Premium Tools */}
          <div className="space-y-3 group">
            <h2 className="text-5xl md:text-6xl font-bold text-white ">200+</h2>
            <p className="text-white/90 text-lg font-medium">Premium Tools</p>
          </div>

          {/* Rating */}
          <div className="space-y-3 group">
            <h2 className="text-5xl md:text-6xl font-bold text-white transition-all duration-700 group-hover:scale-110">
              4.9
            </h2>
            <p className="text-white/90 text-lg font-medium">User Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
