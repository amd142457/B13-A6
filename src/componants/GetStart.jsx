import React from "react";

const GetStart = () => {
  return (
    <div className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center space-y-2 p-10">
          <h2 className="text-4xl font-bold">Get Started in 3 Steps</h2>
          <p className="text-gray-400">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Step 1 */}
          <div className=" rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex justify-end w-full mb-6">
              <div className="w-12 h-12 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center font-bold text-white text-xl shadow-lg">
                01
              </div>
            </div>

            <div className="mb-8">
              <img
                src="/src/assets/new/Group 6 (2).png"
                alt="Create Account"
                className="w-24 h-24 mx-auto"
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Create Account
            </h3>
            <p className="text-gray-400 text-[15px] leading-relaxed">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          {/* Step 2 */}
          <div className="border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex justify-end w-full mb-6">
              <div className="w-12 h-12 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center font-bold text-white text-xl shadow-lg">
                02
              </div>
            </div>

            <div className="mb-8">
              <img
                src="/src/assets/new/Group 6.png"
                alt="Choose Products"
                className="w-24 h-24 mx-auto"
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Choose Products
            </h3>
            <p className="text-gray-400 text-[15px] leading-relaxed">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex justify-end w-full mb-6">
              <div className="w-12 h-12 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center justify-center font-bold text-white text-xl shadow-lg">
                03
              </div>
            </div>

            <div className="mb-8">
              <img
                src="/src/assets/new/Group 6 (1).png"
                alt="Start Creating"
                className="w-24 h-24 mx-auto"
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Start Creating
            </h3>
            <p className="text-gray-400 text-[15px] leading-relaxed">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
