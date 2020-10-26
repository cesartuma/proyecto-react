import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyNav from './componentes/Navbar';
import { Navbar, Form } from 'react-bootstrap';
import {SaludosHome} from './componentes/Home';
import {Formulario} from './componentes/Formulario'
import ItemList from "./componentes/ItemList";
import ItemListFB from "./componentes/ItemListFB";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import ItemDetailContanierFB from "./componentes/ItemDetailContanierFB";
import Cart from "./componentes/Cart";
import { CartProvider } from './componentes/CartContext';


function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
        <MyNav />
              <Route exact path="/">
                <ItemListFB/>
              </Route>
              <Route path="/detail/:id">
                  <ItemDetailContanierFB />
              </Route>
              <Route path="/categories/:id">
                <ItemListFB/>
              </Route>
              <Route path="/cart">
                  <p className="titulo">Mis productos</p>
                  <div className="clear"/>
                  <Cart />
              </Route>
        </BrowserRouter>
      </CartProvider>

    </div>
  );
}
export default App;

