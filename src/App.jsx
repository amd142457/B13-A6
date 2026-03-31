import { useState } from "react";
import "./App.css";
import Bennar from "./componants/Bennar";
import Model from "./componants/Model";
import Navber from "./componants/Navber";
import Rating from "./componants/Rating";
import Cart from "./componants/Cart";
import GetStart from "./componants/GetStart";
const getModels = async () => {
  const res = await fetch("/public/daata.json");
  return res.json();
};

const modelPromise = getModels();

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
    </>
  );
}

export default App;
