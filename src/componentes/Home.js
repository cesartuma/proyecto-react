import React from 'react';

export function SaludosHome(props) {
    return <p className="Mensaje">Hola {props.nombre} {props.apellido}</p>;
}