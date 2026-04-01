import React from "react";

const Bennar = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-6">
          {/* Image */}
          <img
            src="./banner.png"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-2xl"
            alt="banner"
          />

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Supercharge Your Digital Workflow
            </h1>

            <p className="py-4 md:py-6 text-sm md:text-base">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button className="btn btn-primary rounded-full w-full sm:w-auto">
                Get Started
              </button>

              <button className="btn btn-outline rounded-full w-full sm:w-auto">
                Play Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bennar;
