import React  from "react";
import bag from '../images/briefcase.svg';
import dolar from '../images/dollar-sign.svg';
import FlightBack from "./FlightBack";
import './flight.scss';
import Book from "../book/Book";
import { useNavigate } from "react-router-dom";

const Flight = () => {

    const flight = JSON.parse(sessionStorage.getItem('vuelosinfo')) || [];

    const navigate = useNavigate();

    const changePage = () => {
        navigate('/')
    }

    return (
        <>
            <main>
                <div className="vuelos">
                    <nav className="vuelo">
                        <div className="vuelo__title">
                            <h5>Vuelo de salida</h5>
                            <button onClick={changePage}>Cambiar vuelo</button>
                        </div>
                        <nav className="vuelo__fecha">
                            {                           
                            flight.map((element, index) =>(
                                <>
                                <span>{element.dateSalida}</span>
                                <div>{element.origen} - {element.destino}</div>
                                </>
                            ))                            
                        }                    

                        </nav>
                        <span>Seleccion de horarios y equipajes</span>
                        
                            {
                                flight.map((element, index) => (
                                    <>
                                    <section className="vuelo__option" key={index}>
                                        <article className="vuelo__dates">
                                            <nav>{element.time}</nav>
                                            <div>
                                                <div>1h 57 min</div>
                                                <span>Sin escalas</span>
                                            </div>
                                            
                                        </article>
                                        <article className="vuelo__equipaje">
                                            <button>
                                                <img src={bag} alt="brief" />
                                                <span>1 objeto personal</span>
                                                <img src={dolar} alt="dollar" />
                                                <div>5.48 MXN</div>
                                            </button>
                                            <button>
                                                <img src={bag} alt="brief" />
                                                <span>Equipaje de mano</span>
                                                <img src={dolar} alt="dollar" />
                                                <div>1,084 MXN</div>
                                            </button>
                                            <button>
                                                <img src={bag} alt="brief" />
                                                <span>Equipaje 25kg</span>
                                                <img src={dolar} alt="dollar" />
                                                <div>1,945 MXN</div>
                                            </button>
                                        </article>
                                        </section>
                                    </>
                                ))
                            }
                    </nav>
                    <FlightBack />
                </div>
                <Book />
            </main>
        </>
    )
}

export default Flight;