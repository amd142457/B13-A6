import React, { use } from "react";
import ModelCard from "./ModelCard";

const Model = ({ modelPromise, isCart, setCart }) => {
  const models = use(modelPromise);

  return (
    <div className="w-11/12 mx-auto mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model) => (
          <ModelCard
            key={model.id}
            model={model}
            isCart={isCart}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Model;
