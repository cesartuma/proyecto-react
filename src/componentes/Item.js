import React from "react";
import { NavLink } from "react-router-dom";

const Item = (props) => {
  const { nombre, valor, imagen, idproducto } = props;
  return (
      <NavLink to={`/detail/${idproducto}`}>
      <div>
      <p class="titulo"><b>{nombre}</b></p>
      <div className="clear" />
      <img src={imagen} className="imagen"  />
      <div className="clear" />
      <p className="precio">$ {valor}</p>
      <p className="codigo">Codigo: {idproducto}</p>
      </div>
      </NavLink>
  );
};

export default Item;