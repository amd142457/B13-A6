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
import Fotter from "./componants/Fotter";
const getModels = async () => {
  const res = await fetch("./daata.json");
  return res.json();
};
const modelPromise = getModels();
const getTransparant = async () => {
  const res = await fetch("./Transparant.json");
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
      <div className="text-center pt-10 space-y-2.5">
        <h1 className="text-5xl font-bold ">Premium Digital Tools</h1>
        <p className="text-[0.90em] text-gray-400">
          Choose from our curated collection of premium <br /> digital products
          designedto boost your productivity and creativity.
        </p>
      </div>
      <div className="tabs tabs-box justify-center bg-transparent p-12 ">
        <input
          type="radio"
          name="my_tabs_1"
          aria-label="products"
          defaultChecked
          onClick={() => setBtn("products")}
          className={`btn rounded-full w-40 font-bold transition-colors duration-300 mr-3 ${
            isBtn === "products"
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        />
        <input
          type="radio"
          name="my_tabs_1"
          aria-label={`card(${isCart.length})`}
          onClick={() => setBtn("card")}
          className={`btn rounded-full w-40 font-bold transition-colors duration-300 ${
            isBtn === "card"
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        />
      </div>
      {isBtn === "products" && (
        <>
          <Model
            modelPromise={modelPromise}
            isCart={isCart}
            setCart={setCart}
          />
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
      )}
      {isBtn === "card" && <Cart isCart={isCart} setCart={setCart} />}

      <Fotter />
    </>
  );
}

export default App;
