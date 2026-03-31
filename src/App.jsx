import { useState } from "react";
import "./App.css";
import { Suspense } from "react";
import Bennar from "./componants/Bennar";
import Model from "./componants/Model";
import Navber from "./componants/Navber";
import Rating from "./componants/Rating";
import Cart from "./componants/Cart";
import GetStart from "./componants/GetStart";
import Trasparant from "./componants/Trasparant";
import Transform from "./componants/Transform";
const getModels = async () => {
  const res = await fetch("/public/daata.json");
  return res.json();
};
const modelPromise = getModels();
const getTransparant = async () => {
  const res = await fetch("/public/Transparant.json");
  return res.json();
};
const dataPromis = getTransparant();

function App() {
  const [isBtn, setBtn] = useState("products");
  const [isCart, setCart] = useState([]);

  return (
    <>
      <Navber />
      <Bennar />
      <Rating />
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent p-12">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="products"
          defaultChecked
          onClick={() => setBtn("products")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label={`card(${isCart.length})`}
          onClick={() => setBtn("card")}
        />
      </div>
      {isBtn === "products" && (
        <Model modelPromise={modelPromise} isCart={isCart} setCart={setCart} />
      )}
      {isBtn === "card" && <Cart isCart={isCart} setCart={setCart} />}
      <GetStart />
      <Suspense
        fallback={
          <div className="text-center py-20 text-2xl">
            Loading Transparent Section...
          </div>
        }
      >
        <Trasparant dataPromis={dataPromis} />
      </Suspense>
      <Transform />
    </>
  );
}

export default App;
