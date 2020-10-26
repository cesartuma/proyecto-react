import React, { useEffect, useState } from "react";
import Item from "./Item";


const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          setProductos(res);
          setLoading(false);
        });
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div>
        <p className="loading">Cargando</p>
      </div>
    );
  }

  return productos.map((producto) => (
    <div className="col-12 col-md-6 col-lg-4 ">
      <div >
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

export default ItemList;