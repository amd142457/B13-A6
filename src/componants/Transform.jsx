import React from "react";

const Transform = () => {
  return (
    <div>
      <div className="hero bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-20">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-white">
              Ready to Transform Your Workflow?
            </h1>
            <p className="py-6 text-white">
              Join thousands of professionals who are already using Digitools to
              work smarter.Start your free trial today.
            </p>
            <button className="btn btn-primary mr-2 rounded-full btn-outline bg-white">
              Explore Products
            </button>
            <button className="btn btn-primary rounded-full btn-outline text-white">
              View Pricing
            </button>
            <p className="text-white mt-3">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transform;
