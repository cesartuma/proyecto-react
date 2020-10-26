import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';
import Carticon from './Carticon';


class MyNav extends React.Component {
    render() {
        return(
        <Navbar bg="dark" variant="dark">            
            <Nav className="mr-auto">
                <Nav.Link href="/">Todos los productos</Nav.Link>
                <Nav.Link href="/categories/Telefonos">Teléfonos</Nav.Link>
                <Nav.Link href="/categories/Notebook">Notebooks</Nav.Link>
                <Nav.Link href="/categories/Tablet">Tablets</Nav.Link>
            </Nav>
            <Carticon/>
        </Navbar>
        )
    }
}
export default MyNav;