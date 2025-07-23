import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import BasketIcon from "./BasketIcon";

const Header = ({ cart }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-3xl font-semibold">React Shopping Cart</h1>
      <div className="relative">
        <FiShoppingCart className="text-2xl" />
        <BasketIcon cart={cart} />
      </div>
    </div>
  );
};

export default Header;
