import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { getFirestore } from './Firebase';


const ItemListFB = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    console.log(id);
    if (id != undefined) {
      const itemCollection = db.collection("Items");    
      const highPriceShirts = itemCollection.where ('categoryId', '==', id);    
      highPriceShirts.get().then((querySnapshot) => {
          if (querySnapshot.size === 0) {
              console.log('Sin resultados');
          }
          setProductos(querySnapshot.docs.map(doc => doc.data()));
      }).catch((error) => {
          console.log("Error buscando items", error);
      }).finally (() => {
          setLoading(false);
      });
    } else {
      const itemCollection = db.collection("Items");    
      itemCollection.get().then((querySnapshot) => {
          if (querySnapshot.size === 0) {
              console.log('Sin resultados');
          }
          console.log(querySnapshot.docs);
          setProductos(querySnapshot.docs.map(doc => doc.data()));
          
      }).catch((error) => {
          console.log("Error buscando items", error);
      }).finally (() => {
          setLoading(false);
      });
    }


  }, []);

  if (loading) {
    return (
      <div>
        <p className="loading">Cargando</p>
      </div>
    );
  }

  return productos.map((producto) => (
      <div >
        <div className="producto_lista">
          <Item
            key={producto.id}
            nombre={producto.title}
            valor={producto.price}
            imagen={producto.image}
            idproducto={producto.id}
          />        
        </div>
      </div>
  ));
};

export default ItemListFB;