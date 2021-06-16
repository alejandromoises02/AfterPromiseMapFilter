import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
const frutas="frutas";
const verduras="verduras";


    return (

        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>Inicio</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/category/'+frutas}>frutas</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/category/'+verduras}>verduras</Link>
                </li>
            </ul>
            </div>
            </div>
        </nav>
        </>
    )

}

export default NavBar;

//to={'/'} to={'/category/'+frutas} to={'/category/'+verduras}