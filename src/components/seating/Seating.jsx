import React from "react";
import './seating.scss';
import { useNavigate } from "react-router-dom";

const Seating = () => {

    const vuelo = JSON.parse(sessionStorage.getItem('vuelo')) || [];
    console.log(vuelo)

    const navigate = useNavigate();

    const changePage = () => {
        navigate('/')
    }

    const listA = ['A1', 'A2', 'A3', 'A4', 'A5'];
    const listB = ['B1', 'B2', 'B3', 'B4', 'B5'];
    const listC = ['C1', 'C2', 'C3', 'C4', 'C5'];
    const listD = ['D1', 'D2', 'D3', 'D4', 'D5'];
    const listE = ['E1', 'E2', 'E3', 'E4', 'E5'];
    const listF = ['F1', 'F2', 'F3', 'F4', 'F5'];

    return (
        <>
            <main>
                <div className="asientos">
                    <nav className="asiento">
                        <div className="asiento__title">
                            <h5>Vuelo de salida</h5>
                            <button onClick={changePage}>Cambiar vuelo</button>
                        </div>
                        <nav className="asiento__fecha">
                            <span>{vuelo.dateSalida}</span>
                            <div>{vuelo.origen} a {vuelo.destino}</div>
                        </nav>
                        <span>Selecciona tus asientos </span>
                        <section className="asiento__option">
                            <article className="asiento__filas">
                                <div>A</div>
                                <div>B</div>
                                <div>C</div>
                            </article>
                            <article className="asiento__filas">
                                <div>D</div>
                                <div>E</div>
                                <div>F</div>
                            </article>
                        </section>
                        <section className="asiento__columnas">
                            <article className="asiento__left">
                                <div>
                                    {
                                        listA.map((element, index) => (
                                            <button key={index}>{element}</button>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        listB.map((element, index) => (
                                            <button key={index}>{element}</button>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        listC.map((element, index) => (
                                            <button key={index}>{element}</button>
                                        ))
                                    }
                                </div>
                            </article>
                            <article className="asiento__right">
                                <div>
                                    {
                                        listD.map((element, index) => (
                                            <button key={index}>{element}</button>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        listE.map((element, index) => (
                                            <button key={index}>{element}</button>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        listF.map((element, index) => (
                                            <button key={index}>{element}</button>
                                        ))
                                    }
                                </div>
                            </article>
                        </section>
                    </nav>
                    <nav className="asiento">
                        <div className="asiento__title">
                            <h5>Vuelo de salida</h5>
                            <button onClick={changePage}>Cambiar vuelo</button>
                        </div>
                        <nav className="asiento__fecha">
                            <span>{vuelo.dateRegreso}</span>
                            <div>{vuelo.destino} a {vuelo.origen}</div>
                        </nav>
                        <span>Selecciona tus asientos </span>
                        <section className="asiento__option">
                            <article className="asiento__filas">
                                <div>A</div>
                                <div>B</div>
                                <div>C</div>
                            </article>
                            <article className="asiento__filas">
                                <div>D</div>
                                <div>E</div>
                                <div>F</div>
                            </article>
                        </section>
                        <section className="asiento__columnas">
                            <article className="asiento__left">
                                <div>
                                    {
                                        listA.map((element, index) => (
                                            <button key={index}>{element}</button>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        listB.map((element, index) => (
                                            <button key={index}>{element}</button>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        listC.map((element, index) => (
                                            <button key={index}>{element}</button>
                                        ))
                                    }
                                </div>
                            </article>
                            <article className="asiento__right">
                                <div>
                                    {
                                        listD.map((element, index) => (
                                            <button key={index}>{element}</button>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        listE.map((element, index) => (
                                            <button key={index}>{element}</button>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        listF.map((element, index) => (
                                            <button key={index}>{element}</button>
                                        ))
                                    }
                                </div>
                            </article>
                        </section>
                    </nav>
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
                            <nav>{vuelo.origen}</nav>
                            <nav>{vuelo.destino}</nav>
                        </div>
                        <div className="book__hora">
                            <nav>{vuelo.time}</nav>
                        </div>
                        <nav>{vuelo.dateSalida}</nav>
                        <div>vuelo de regreso</div>
                        <div className="book__destino">
                            <nav>{vuelo.destino}</nav>
                            <nav>{vuelo.origen}</nav>
                        </div>
                        <div className="book__hora">
                            <nav>{vuelo.time}</nav>
                        </div>
                        <nav>{vuelo.dateRegreso}</nav>
                    </article>
                    <article className="book__flights">
                        <span>Costo de vuelo</span>
                        <div>
                            <span>Tarifa base</span>
                            <span>{vuelo.valorFinal}</span>
                        </div>
                        <div>
                            <nav>Descuento promocional</nav>
                            <nav>0</nav>
                        </div>
                        <div>
                            <span>Tarifa base con descuento</span>
                            <span>{vuelo.valorFinal}</span>
                        </div>
                        <div>
                            <nav>Total</nav>
                            <span>{vuelo.valorFinal}</span>
                        </div>
                    </article>
                    <button >Pagar con Paypal</button>
                </section>
            </main>
        </>
    )
}

export default Seating;