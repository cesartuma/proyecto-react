import React, { useState, useEffect } from "react";

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    //localStorage.removeItem("myCart");
    var myCart = localStorage.getItem("myCart");
    setCart(JSON.parse(myCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};