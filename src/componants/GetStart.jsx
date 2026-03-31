import React from "react";

const GetStart = () => {
  return (
    <div>
      <div className="text-center p-7 mt-8">
        <h2 className="text-3xl font-bold">Get Started in 3 Steps</h2>
        <p className="text-gray-400">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid grid-cols-3 p-6 w-10/12 mx-auto gap-3">
        <div className="  w-80 h-65 p-2 rounded-xl bg-gray-100 ">
          <div className="">
            <div className="flex justify-end">
              <p className="w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center font-bold text-white">
                01
              </p>
            </div>
            <div className="flex justify-center  ">
              <img
                src="/src/assets/new/Group 6 (2).png"
                alt=""
                className="w-20 h-20"
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold">Create Account</h2>
              <p className="text-gray-400 text-[0.90em]">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
        </div>
        <div className="  w-80 h-65 p-2 rounded-xl bg-gray-100">
          <div className="">
            <div className="flex justify-end">
              <p className="w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center font-bold text-white">
                02
              </p>
            </div>
            <div className="flex justify-center  ">
              <img
                src="/src/assets/new/Group 6.png"
                alt=""
                className="w-20 h-20"
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold">Choose Products</h2>
              <p className="text-gray-400 text-[0.90em]">
                Browse our catalog and select the toolsthat fit your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="  w-80 h-65 p-2 rounded-xl bg-gray-100">
          <div className="">
            <div className="flex justify-end">
              <p className="w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center font-bold text-white">
                03
              </p>
            </div>
            <div className="flex justify-center  ">
              <img
                src="/src/assets/new/Group 6 (1).png"
                alt=""
                className="w-20 h-20"
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold">Start Creating</h2>
              <p className="text-gray-400 text-[0.90em]">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
