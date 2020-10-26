import React, { useEffect, useState, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";


const ItemDetailContainer = () => {
  const [detalleProducto, setdetalleProducto] = useState([]);
  const [loading, setLoading] = useState(false);
  const [valueCounter, setValueCounter] = useState(0);
  const [cart, setCart] = useContext(CartContext);


  const SetCartValue = (value, itemsCounter) => {
    const Valor = { ...value, count: itemsCounter }; 
    if (!cart) {
      setCart([Valor]);
      return;
    }
    const cartValue = [...cart, Valor];
    setCart(cartValue);
  };

  
  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          setdetalleProducto(res);
          setLoading(false);
        });
    }, 1);
  }, [id]);

  if (loading) {
    return (
      <div>
        <p className="loading">Loading</p>
      </div>
    );
  }
  return <ItemDetail item={detalleProducto} valueCounter={valueCounter}   setValueCounter={setValueCounter}  setCartValue={SetCartValue} />;
};

export default ItemDetailContainer;