import React, { useState } from "react";
import bag from '../images/briefcase.svg';
import dolar from '../images/dollar-sign.svg';
import FlightBack from "./FlightBack";
import './flight.scss';
//import Book from "../book/Book";
import { useNavigate } from "react-router-dom";

const Flight = () => {

    const flight = JSON.parse(sessionStorage.getItem('vuelosinfo')) || [];

    const navigate = useNavigate();

    const changePage = () => {
        navigate('/')
    }

    const [pasaje, setPasaje] = useState({} || pasaje);
    const [valor, setValor] = useState(0);

    const getFlight = (element) => {
        console.log(element);
        setPasaje(element)
    }

    const changeValor = (item) => {
        if (item === 'a') {
            console.log(500)
            setValor(500)
        }
        if (item === 'b') {
            console.log(1000)
            setValor(1000)
        }
        if (item === 'c') {
            console.log(1900)
            setValor(1900)
        }
    }

    const CostoVuelo = () => {
        const costoFinal = (pasaje.valor + valor)

        if (costoFinal) {
            console.log('cargar ir a seleccionar asientos')
            console.log(pasaje);
            const valorTotal = {
                ...pasaje,
                valorFinal: costoFinal
            }
            sessionStorage.clear()
            console.log(valorTotal);
            sessionStorage.setItem('vuelo', JSON.stringify(valorTotal));
            navigate('/seating')
        } else {
            console.log('seleccione vuelo y equipaje')
        }
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
                                flight.map((element, index) => (
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
                                        <article onClick={() => { getFlight(element) }} className="vuelo__dates">
                                            <nav>{element.time}</nav>
                                            <div>
                                                <span>Sin escalas</span>
                                            </div>

                                        </article>
                                        <article className="vuelo__equipaje">
                                            <button onClick={() => { changeValor('a') }}>
                                                <img src={bag} alt="brief" />
                                                <span>1 objeto personal</span>
                                                <img src={dolar} alt="dollar" />
                                                <div>500 MXN</div>
                                            </button>
                                            <button onClick={() => { changeValor('b') }}>
                                                <img src={bag} alt="brief" />
                                                <span>Equipaje de mano</span>
                                                <img src={dolar} alt="dollar" />
                                                <div>1000 MXN</div>
                                            </button>
                                            <button onClick={() => { changeValor('c') }}>
                                                <img src={bag} alt="brief" />
                                                <span>Equipaje 25kg</span>
                                                <img src={dolar} alt="dollar" />
                                                <div>1900 MXN</div>
                                            </button>
                                        </article>
                                    </section>
                                </>
                            ))
                        }
                    </nav>
                    <FlightBack />
                </div>
                <section className="book">
                    <article className="book__flights">
                        <span>Tu reservacion</span>
                        <div className="book__pasajeros">
                            <span>Pasajeros</span>
                            <span>1 Adulto</span>
                        </div>
                        <div>vuelo de salida</div>
                        <div className="book__destino">
                            <nav>{pasaje.origen}</nav>
                            <nav>{pasaje.destino}</nav>
                        </div>
                        <div className="book__hora">
                            <nav>{pasaje.time}</nav>
                        </div>
                        <nav>{pasaje.dateSalida}</nav>
                        <div>vuelo de regreso</div>
                        <div className="book__destino">
                            <nav>{pasaje.destino}</nav>
                            <nav>{pasaje.origen}</nav>
                        </div>
                        <div className="book__hora">
                            <nav>{pasaje.time}</nav>
                        </div>
                        <nav>{pasaje.dateRegreso}</nav>
                    </article>
                    <article className="book__flights">
                        <span>Costo de vuelo</span>
                        <div>
                            <span>Tarifa base</span>
                            <span>{pasaje.valor}</span>
                        </div>
                        <div>
                            <nav>Descuento promocional</nav>
                            <nav>0</nav>
                        </div>
                        <div>
                            <span>Equipaje</span>
                            <span>{valor}</span>
                        </div>
                        <div>
                            <nav>Total</nav>
                            <span>{pasaje.valor + valor}</span>
                        </div>
                    </article>
                    <button onClick={() => { CostoVuelo() }}>Seleccionar asientos</button>
                </section>
            </main>
        </>
    )
}

export default Flight;