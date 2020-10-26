import React, { useContext } from "react";
import cartsvg from '../utils/img/cart.svg';
import { CartContext } from "./CartContext";

const Carticon = () => {
    const [cart] = useContext(CartContext);
    return (
        <a href="/Cart">
            <img src={cartsvg} className="logo_carro" alt="Logo App"></img>
            <span className="Carrito">{cart ? cart.length : 0}</span>
        </a>
    )
}

export default Carticon;