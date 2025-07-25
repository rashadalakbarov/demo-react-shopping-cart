import React from "react";

const ProductItem = ({ product, cart, setCart }) => {
  const findProduct = cart.find((item) => item.id === product.id);
  const addToCart = (product) => {
    setCart((prevState) => [...prevState, product]);
  };
  return (
    <div className="border p-4 m-2 rounded-lg shadow-lg">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={product.image}
        alt="product"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-500 my-2">{product.price} USD</p>
        <button
          className={`bg-blue-500 text-white px-4 py-[8px] rounded hover:bg-blue-600 w-full cursor-pointer ${
            findProduct && "opacity-50 cursor-no-drop"
          }`}
          onClick={() => addToCart(product)}
          disabled={findProduct}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
