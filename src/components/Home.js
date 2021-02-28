import React from 'react'
import forexImg from '../img/exchange.png'
import chart from '../img/profits.png'
import statsImg from '../img/statistics.png'

export default function Home() {
    
    return (
        <>
        {/* TODO: Estrarre componenti dove necessario e pulire il codice */}
            <div className="container p-5">
                <div className="row my-3">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 p-3">
                        <h1 className="home-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <button className="btn btn-outline-danger">Vedi i Forex</button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 p-3">
                        <img className="img-fluid" src={forexImg} alt=""></img>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 p-3">
                        <img className="img-fluid" src={chart} alt=""></img>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 p-3">
                        <h1 className="home-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <button className="btn btn-outline-danger">Fai qualcosa</button>
                    </div>
                </div>
                <div className="row my-5 pc-div">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 my-2">
                        <img className="img-fluid chart-icon" src={statsImg} alt=""></img>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 my-2">
                        <h1 className="home-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <button className="btn btn-outline-danger">Fai qualcosa di figo</button>
                    </div>
                </div>
            </div>
        </>
    )
}
