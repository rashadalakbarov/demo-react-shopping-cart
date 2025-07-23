import React from "react";

const BasketIcon = ({ cart }) => {
  return (
    <span className="bg-red-500 text-white flex w-5 h-5 justify-center items-center rounded-full absolute -top-2 -right-4 text-xs">
      {cart.length}
    </span>
  );
};

export default BasketIcon;
