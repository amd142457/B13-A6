import React from "react";

const Bennar = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/src/assets/banner.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Supercharge Your Digital Workflow
            </h1>
            <p className="py-6">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <button className="btn btn-primary mr-2.5 rounded-full">
              Get Started
            </button>
            <button className="btn btn-outline  rounded-full ">play now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bennar;
