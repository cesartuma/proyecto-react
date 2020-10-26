import React, { useEffect, useState, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import { getFirestore } from './Firebase';

const ItemDetailContainerFB = () => {
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
    const db = getFirestore();
    db.collection("Items").where("id", "==", id)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            setdetalleProducto(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    }).finally (() => {
      setLoading(false);
    });



  }, []);


  if (loading) {
    return (
      <div>
        <p className="loading">Cargando</p>
      </div>
    );
  }
  return <ItemDetail item={detalleProducto} valueCounter={valueCounter}   setValueCounter={setValueCounter}  setCartValue={SetCartValue} />;
};

export default ItemDetailContainerFB;