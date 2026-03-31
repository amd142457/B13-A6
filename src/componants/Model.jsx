import React, { use } from "react";

import ModelCard from "./ModelCard";

const Model = ({ modelPromise, isCart, setCart }) => {
  const models = use(modelPromise);

  return (
    <div>
      <div className=" grid grid-cols-3 gap-3 w-10/12 mx-auto">
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
