import React, { use } from "react";
import { Check } from "lucide-react";

const Trasparant = ({ dataPromis }) => {
  const data = use(dataPromis);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6  w-10/12 mx-auto p-10 ">
      {data.map((model) => (
        <div
          className={`shadow-lg p-4 flex flex-col h-full rounded-xl space-y-3  ${
            model.plan === "Pro"
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : "bg-gray-300"
          }`}
        >
          <div>
            {" "}
            <h3 className="font-bold ">{model.plan}</h3>
            <p className="text-gray-400">{model.description}</p>
          </div>
          <p className="font-bold text-2xl">{model.price}</p>
          {model.features.map((item, index) => (
            <div key={index} className="flex gap-1 ">
              <Check className="w-4 text-green-400" />
              {item}
            </div>
          ))}
          <button
            className={`btn w-full mt-auto rounded-full  ${
              model.buttonText === "Start Pro Trial"
                ? ""
                : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
            }`}
          >
            {model.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Trasparant;
