import React, { useState } from "react";
import ItemCount from './ItemCount';
import { Button } from "reactstrap";

const ItemDetail = ({ setValueCounter, item, valueCounter, setCartValue }) => {
  return (
    <div className="row detalle">
       <div className="col-1"></div>
      <div className="col-5">
        <img src={item.image} className="img-fluid" />
      </div>
      <div className="col-5">
        <p className="titulo">{item.title}</p>
        <div className="clear" />
        <p className="texto"> {item.description}</p>
        <div className="clear" />
        <h4 className="precio">${item.price}</h4>
        <div className="clear" />
        <div className="controles">
          <ItemCount       
            setValueCounter={setValueCounter}
            initial={0}
            min={0}
            max={10}
            valueCounter={valueCounter}/>

          <Button className="boton"
            onClick={() => {
              setCartValue(item, valueCounter);
            }}
            disabled={!valueCounter ? true : false}
          >
            Comprar {valueCounter != 0 ? valueCounter + ' unidades' : null} 
          </Button>
        </div>

      </div>
    </div>
  );
};

export default ItemDetail;