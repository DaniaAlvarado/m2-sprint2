import React from "react";
import './seating.scss';

const Seating = () =>{
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
                            <button>A</button>
                            <button>B</button>
                            <button>C</button>
                        </article>
                        <article className="asiento__right">
                            <button>E</button>
                            <button>F</button>
                            <button>G</button>
                        </article>
                    </section>
                </nav>
        </div>
        {/* <Book /> */}
        </main>
        </>
    )
}

export default Seating;