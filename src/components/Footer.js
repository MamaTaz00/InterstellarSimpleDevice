import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/rocket.png'


export default function Footer() {

    return (
        <>
         <footer className="site-footer mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h4><strong>To The Moon</strong></h4>
                        <img src={logo} className="logo my-2" alt="logo"></img>
                        <p>Sede Legale:</p>
                        <p>Via Ludwig Von Mises 33</p>
                        <p>Cernusco sul Naviglio</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Sezione</h6>
                        <ul className="footer-links">
                            <li><Link to="/">qualcosa</Link></li>
                            <li><Link to="/">qualcosa</Link></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Altra sezione</h6>
                        <ul className="footer-links">
                            <li><Link to="/">qualcosa</Link></li>
                            <li><Link to="/">qualcosa</Link></li>
                        </ul>
                    </div>
                </div>
                <hr></hr>
                </div>
                <div className="container">
                <div className="row cp-line">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                    <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by you</p>
                    </div>

                    {/* {<div className="col-md-4 col-sm-6 col-xs-12">
                        Social icons
                    </div>} */}
                </div>
                </div>
            </footer>   
        </>
    )
}