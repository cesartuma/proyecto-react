import React from "react";
import ItemCountButton from "./ItemCountButton";

const ItemCount = (props) => {
  const increase = () => {
    const counter = props.valueCounter;
    if (props.valueCounter >= props.max) {
      alert("No hay mas de " + props.max + " unidades disponibles");
      return;
    }
    props.setValueCounter(counter + 1);
  };

  const decrease = () => {
    const counter = props.valueCounter;
    if (props.valueCounter <= props.min) return;
    props.setValueCounter(counter - 1);
  };

  const inputChange = (value) => {
    if (value <= props.max) {
      props.setValueCounter(value);
    } else {
      alert("No hay mas de " + props.max + " unidades disponibles");
    }
  };

  return (
    <div className="counter">
      <ItemCountButton accion={decrease} nombre="-" />
      <input
        value={props.valueCounter}
        onChange={(e) => {
          inputChange(Number(e.target.value));
        }}
      />
      <ItemCountButton accion={increase} nombre="+" />
    </div>
  );
};

export default ItemCount;
