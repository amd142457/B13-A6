import React from "react";
import { ShoppingCart } from "lucide-react";
const Navber = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown"></div>
          <a className=" text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-1">
          <a href="">
            <ShoppingCart />
          </a>
          <a href="" className="btn rounded-full w-28 mr-1">
            log in
          </a>
          <a className="btn rounded-full w-28 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Button
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
