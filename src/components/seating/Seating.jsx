import React from "react";
import Book from "../book/Book";
import './seating.scss';

const Seating = () =>{

    const listA = ['A1','A2','A3','A4','A5'];
    const listB = ['B1','B2','B3','B4','B5'];
    const listC = ['C1','C2','C3','C4','C5'];
    const listD = ['D1','D2','D3','D4','D5'];
    const listE = ['E1','E2','E3','E4','E5'];
    const listF = ['F1','F2','F3','F4','F5'];

    return (
        <>
        <main>
            <div className="asientos">
                <nav className="asiento">
                    <div className="asiento__title">
                        <h5>Vuelo de salida</h5>
                        <button>Cambiar vuelo</button>
                    </div>
                    <nav className="asiento__fecha">
                        <span>Martes</span>
                        <div>Cd. Mex (AICM) a Culiacan</div>
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
                                listA.map((element, index) =>(
                                    <button key={index}>{element}</button>
                                ))
                            }
                            </div>
                            <div>
                            {
                                listB.map((element, index) =>(
                                    <button key={index}>{element}</button>
                                ))
                            }
                            </div>
                            <div>
                            {
                                listC.map((element, index) =>(
                                    <button key={index}>{element}</button>
                                ))
                            }
                            </div>
                        </article>
                        <article className="asiento__right">
                        <div>
                            {
                                listD.map((element, index) =>(
                                    <button key={index}>{element}</button>
                                ))
                            }
                            </div>
                            <div>
                            {
                                listE.map((element, index) =>(
                                    <button key={index}>{element}</button>
                                ))
                            }
                            </div>
                            <div>
                            {
                                listF.map((element, index) =>(
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
                        <button>Cambiar vuelo</button>
                    </div>
                    <nav className="asiento__fecha">
                        <span>Martes</span>
                        <div>Cd. Mex (AICM) a Culiacan</div>
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
                                listA.map((element, index) =>(
                                    <button key={index}>{element}</button>
                                ))
                            }
                            </div>
                            <div>
                            {
                                listB.map((element, index) =>(
                                    <button key={index}>{element}</button>
                                ))
                            }
                            </div>
                            <div>
                            {
                                listC.map((element, index) =>(
                                    <button key={index}>{element}</button>
                                ))
                            }
                            </div>
                        </article>
                        <article className="asiento__right">
                        <div>
                            {
                                listD.map((element, index) =>(
                                    <button key={index}>{element}</button>
                                ))
                            }
                            </div>
                            <div>
                            {
                                listE.map((element, index) =>(
                                    <button key={index}>{element}</button>
                                ))
                            }
                            </div>
                            <div>
                            {
                                listF.map((element, index) =>(
                                    <button key={index}>{element}</button>
                                ))
                            }
                            </div>
                        </article>
                    </section>
                </nav>
        </div>

         <Book /> 
        </main>
        </>
    )
}

export default Seating;