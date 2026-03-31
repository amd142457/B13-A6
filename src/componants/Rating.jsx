import React from "react";

const Rating = () => {
  return (
    <div className="flex justify-center p-13 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="flex gap-30 ">
        <div className="space-y-2">
          <h2 className="text-5xl font-bold text-white">50k</h2>
          <p className="text-white">Active Users</p>
        </div>
        <div className=""></div>

        <div className="space-y-2">
          <h2 className="text-5xl font-bold text-white">200+</h2>
          <p className="text-white">Premium Tools</p>
        </div>
        <div>|</div>
        <div className="space-y-2">
          <h2 className="text-5xl font-bold text-white">4.9</h2>
          <p className=" text-white">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
