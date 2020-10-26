import React from "react";

const ItemCountButton = (props) => {
  return (
    <button onClick={props.accion}>
      {props.nombre}
    </button>
  );
};

export default ItemCountButton;