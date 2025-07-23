import "./App.css";
import { useState } from "react";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const [cart, setCart] = useState([]);

  const emptyCart = () => {
    setCart([]);
  };
  return (
    <div className="container mx-auto p-4">
      <Header cart={cart} />
      <Products cart={cart} setCart={setCart} />
      <Basket cart={cart} emptyCart={emptyCart} />
    </div>
  );
}

export default App;
