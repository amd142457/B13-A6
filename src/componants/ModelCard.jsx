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
    <div className="mt-10">
      <div className=" shadow-lg p-4 ">
        <div className="flex justify-end ">
          <p className=" btn rounded-full ">{model.tagType}</p>
        </div>
        <p className="w-10 h-10 rounded-full border border-gray-200 flex justify-center items-center">
          {model.icon}
        </p>
        <h2>{model.name}</h2>
        <p>{model.description}</p>
        <p>{model.price}</p>
        {model.features.map((item, index) => (
          <div key={index} className="flex gap-1 ">
            <Check className="w-4 text-green-400" />
            {item}
          </div>
        ))}
        <button className="btn w-full btn-primary" onClick={handlesuscribtion}>
          {isSubcrived ? "Subscribed" : "Subscribed now"}
        </button>
      </div>
    </div>
  );
};

export default ModelCard;
