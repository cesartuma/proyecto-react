import React from "react";
import { Button } from "reactstrap";
import { getFirestore } from './Firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

const CartList = ({ data }) => {

  function delItems() {    
    localStorage.removeItem("myCart");
    window.location.href = "/";
  }

  function setOrder() {

    let total = 0;
    data.map((data) => (
         total = total + (data.price * data.count)
    ));

    //validar datos.
    if (document.getElementById("nombre").value == '' || document.getElementById("email").value == '' || document.getElementById("telefono").value == '' || document.getElementById("email2").value == '' ) {
      alert("Se deben completar todos los datos");
      return false;
    }

    if (document.getElementById("email2").value != document.getElementById("email").value) {
      alert("Revise los datos de los e-mails ingresados");
      return false;
    }

    const userInfo = "{name:" + document.getElementById("nombre").value + ", email:" + document.getElementById("email").value + ", phone:" + document.getElementById("telefono").value + "}";
    const db = getFirestore();
    const orders = db.collection("orders");
    const newOrder = {
      buyer: userInfo,
      items: data,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: total
    };

    orders.add(newOrder).then(({id}) => {
      document.getElementById("datoscompra").style.display = 'none';
      document.getElementById("mensajecompra").innerHTML = "Su compra fue recibida, este es su codigo de pedido: <b>" + id + "</b>";
      localStorage.removeItem("myCart");
    }).catch(err => {
      
    }).finally(() => {
      
    });
  }


  return (
    <div>
      <div className="row">
        <div className="col-6">
          <table className="table">
            <tr><td className="header_td">Cantidad</td><td className="header_td">Producto</td><td className="header_td">Total</td></tr>
            {data.map((data) => (
              <tr>
                <td>{data.count}</td>
                <td>{data.title}</td>
                <td>${data.price * data.count}</td>
              </tr>
            ))}
          </table>
       </div>
       <div className="col-6">
         <div id="mensajecompra">

         </div>
         <div id="datoscompra">
          <b>Datos del comprador</b><br/>
          <input type="text" id="nombre" className="input_text" placeholder="Nombre Comprador" /><br/>
          <input type="email" id="email" className="input_text" placeholder="E-mail" /><br/>
          <input type="email" id="email2" className="input_text" placeholder="Repetir E-mail" /><br/>
          <input type="text" id="telefono" className="input_text" placeholder="Telefono" /><br/>
          <Button className="boton"
            onClick={() => {
              setOrder();
            }}
          >
            Confirmar 
          </Button>
          <Button  className="boton"
            onClick={() => {
              delItems();
            }}
          >
            Vaciar 
          </Button>
          </div>
        </div>
       
        </div>
      </div>

  );
};

export default CartList;