import React, { useState } from "react";
import { Check } from "lucide-react";
import { toast } from "react-toastify";

const ModelCard = ({ model, isCart, setCart }) => {
  const [isSubcrived, setSubcrived] = useState(false);
  const handlesuscribtion = () => {
    setSubcrived(true);
    setCart([...isCart, model]);
    toast.success("item add to Cardd");
  };

  return (
    <a href="#" className="hover-3d  cursor-pointer  ">
      <div className="mt-7 ">
        <div className=" shadow-lg p-4 flex flex-col h-full rounded-xl space-y-3 border border-gray-300 bg-linear-to-br from-[#f5f3ff] via-[#ede9fe] to-[#ddd6fe]">
          <div className="flex justify-end ">
            <p className=" btn rounded-full ">{model.tagType}</p>
          </div>
          <p className="w-10 h-10 rounded-full border border-gray-400 flex justify-center items-center">
            {model.icon}
          </p>
          <h2 className="font-bold text-xl">{model.name}</h2>
          <p className="text-[0.90em] text-gray-500">{model.description}</p>
          <p className="font-bold">${model.price}/month</p>
          {model.features.map((item, index) => (
            <div
              key={index}
              className="flex gap-1 text-[0.90em] text-gray-500 "
            >
              <Check className="w-4 text-green-400 " />
              {item}
            </div>
          ))}
          <button
            className="btn w-full btn-primary mt-auto rounded-full"
            onClick={handlesuscribtion}
          >
            {isSubcrived ? "Card to add" : "Buy now"}
          </button>
        </div>
      </div>

      {/* 8 empty divs needed for the 3D effect */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </a>
  );
};

export default ModelCard;
