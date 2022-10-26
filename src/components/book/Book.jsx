import React from "react";
import './book.scss';
import { useNavigate } from "react-router-dom";

const Book = ()  => {

    const navigate = useNavigate();

    const changePage = () => {
        navigate('/seating')
    }

    return (
        <>
        <section className="book">
            <article className="book__flights">
                <span>Tu reservacion</span>
                <div className="book__pasajeros">
                    <span>Pasajeros</span>
                    <span>1 Adulto</span>
                </div>
                <div>vuelo de salida</div>
                <div className="book__destino">
                    <nav>MEX</nav>
                    <nav>CUL</nav>
                </div>
                <div className="book__hora">
                    <nav>550pm</nav>
                    <nav>640pm</nav>
                </div>
                <nav>Martes 30 nov 2022</nav>
                <div>vuelo de regreso</div>
                <div className="book__destino">
                    <nav>cul</nav>
                    <nav>mex</nav>
                </div>
                <div className="book__hora">
                    <nav>640pm</nav>
                    <nav>520pm</nav>
                </div>
                <nav>Martes 30 nov 2022</nav>
            </article>
            <article className="book__flights">
                <span>Costo de vuelo</span>
                <div>
                    <span>Tarifa base</span>
                    <span>30000</span>
                </div>
                <div>
                    <nav>Descuento promocional</nav>
                    <nav>0</nav>
                </div>
                <div>
                    <span>Tarifa base con descuento</span>
                    <span>30000</span>
                </div>
                <div>
                    <nav>Total</nav>
                    <span>30000</span>
                </div>
            </article>
            <button onClick={changePage}>Seleccionar asientos</button>
        </section>
        </>
    )
}

export default Book;