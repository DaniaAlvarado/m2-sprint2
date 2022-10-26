import React from "react";
import bag from '../images/briefcase.svg';
import dolar from '../images/dollar-sign.svg';
import { useNavigate } from "react-router-dom";

const FlightBack = () => {

    const flight = JSON.parse(sessionStorage.getItem('vuelosinfo')) || [];

    const navigate = useNavigate();

    const changePage = () => {
        navigate('/')
    }

    return (
        <nav className="vuelo">
            <div className="vuelo__title">
                <h5>Vuelo de regreso</h5>
                <button onClick={changePage}>Cambiar vuelo</button>
            </div>
            <nav className="vuelo__fecha">
                {
                    flight.map((element, index) => (
                        <>
                            <span>{element.dateRegreso}</span>
                            <div>{element.destino} - {element.origen}</div>
                        </>
                    ))
                }
            </nav>
            <span>Seleccionde horarios y equipajes</span>
            
                {
                    flight.map((element, index) => (
                        <>
                        <section className="vuelo__option">
                            <article className="vuelo__dates">
                                <nav>{element.time}</nav>
                                <div>
                                    <span>Sin escalas</span>
                                </div>
                            </article>
                            <article className="vuelo__equipaje">
                                <button>
                                    <img src={bag} alt="brief" />
                                    <span>1 objeto personal</span>
                                    <img src={dolar} alt="dollar" />
                                    <div>500</div>
                                </button>
                                <button>
                                    <img src={bag} alt="brief" />
                                    <span>Equipaje de mano</span>
                                    <img src={dolar} alt="dollar" />
                                    <div>1000</div>
                                </button>
                                <button>
                                    <img src={bag} alt="brief" />
                                    <span>Equipaje 25kg</span>
                                    <img src={dolar} alt="dollar" />
                                    <div>1900</div>
                                </button>
                            </article>
                            </section>
                        </>
                    ))
                }
        </nav>
    )
}

export default FlightBack;