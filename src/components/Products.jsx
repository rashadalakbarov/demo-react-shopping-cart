import React from "react";
import productData from "../datas/ProductData";
import ProductItem from "./ProductItem";

const Products = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-8">
      {productData.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          cart={props.cart}
          setCart={props.setCart}
        />
      ))}
    </div>
  );
};

export default Products;
