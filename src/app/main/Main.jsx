import React from "react";
import Pay from "./Pay";
import './main.scss';
import Services from "./Services";

const Main = () => {
    return (
        <main className="main">          
            <h2>Pago seguro</h2>
            <section>
                <Pay />
            </section>
            <h3>Servicios disponibles</h3>
            <Services />
        </main>
    )
}

export default Main;