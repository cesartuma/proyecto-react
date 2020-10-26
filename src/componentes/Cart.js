import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import CartList from "./CartList";
import EmptyList from "./EmptyList";

const Cart = () => {
  const [cart] = useContext(CartContext);
  return (
    <div className="col-12">
      {
        cart?.length == 0 || !cart ? <EmptyList /> : <CartList data={cart} />
        //otra forma de escribirlo : cart && cart.length
      }
    </div>
  );
};

export default Cart;