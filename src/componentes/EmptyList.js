import React from "react";
import { Link } from "react-router-dom";

const EmptyList = ({ data }) => {
  return (
    <div>
      <p className="texto">No tiene productos en su carro. 
      <Link to="/"> Quiero Buscar productos</Link></p>
      
    </div>
  );
};

export default EmptyList;
