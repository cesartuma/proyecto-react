
import React from 'react';

export function Formulario() {
    return(
      <form className="Formulario">
      <div className="form-group">
        <label>Email address</label>
        <input onInput={onChangeEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input onInput = {onChangePassword}  onInput={onChangePassword} type="password" className="form-control" id="exampleInputPassword1"/>
      </div> 
      <button onClick= {pressButton} type="button" className="btn btn-primary">Submit</button>
      <div id="contador"></div>
    </form>
    );
  }

  
function onChangeEmail(event) {
    console.log(event.target.value);
}

function onChangePassword(event) {
    console.log(event.target.value);
}

var cont = 0;
function pressButton() {
  console.log('Envio de Formulario');
  cont++;
  document.getElementById("contador").innerHTML = cont;
}