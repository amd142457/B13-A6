import React from "react";
import { toast } from "react-toastify";

const Cart = ({ isCart, setCart }) => {
  const TotalPrice = isCart.reduce((sum, item) => sum + item.price, 0);
  const handleRemove = () => {
    setCart([]);
    toast.success("Pyment Successfull 😊👌");
  };
  const handleDelete = (item) => {
    const filteredArray = isCart.filter((c) => c.id !== item.id);
    setCart(filteredArray);
    toast.success("Deleted Item! 👍");
  };

  return (
    <div className="p-5">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Premium Digital Tools</h1>
        <p className="text-gray-400">
          Choose from our curated collection of premium digital products
          designed <br></br> o boost your productivity and creativity.
        </p>
      </div>
      {isCart.map((item) => (
        <div className=" flex justify-between p-4 rounded-2xl shadow-lg border border-gray-300 mt-3 w-11/12 mx-auto ">
          <div className="flex gap-4">
            <p className="w-12 h-12 rounded-full border border-amber-200 flex justify-center items-center">
              {item.icon}
            </p>

            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-gray-400">${item.price}</p>
            </div>
          </div>
          <button
            onClick={() => handleDelete(item)}
            className="btn btn-soft btn-error rounded-full"
          >
            removed
          </button>
        </div>
      ))}
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between p-6 ">
          <p>Total:</p>
          <h3 className="font-bold">${TotalPrice}</h3>
        </div>
        <button
          className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full mt-4"
          onClick={handleRemove}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
