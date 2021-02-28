import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/rocket.png'


export default function Navbar() {    
    return (
        <>
            <nav className="navbar p-0 navbar-expand-lg navbar-dark bg-dark nav-color">
                <div className="container-fluid">
                    <Link className="navbar-brand" to=""><img className="logo" src={logo} alt="logo"></img></Link>
                    <h4 style={{color: 'rgba(255,255,255,.55)'}}>TTM</h4>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item ms-3">
                                <Link className="nav-link" aria-current="page" to="">Home</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link" aria-current="page" to="">Altro</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link" aria-current="page" to="">Altro</Link>
                            </li>
                        </ul>
                        <button className="btn btn-outline-danger" type="submit">Start do something</button>
                    </div>
                </div>
            </nav>           
        </>
    )
}
