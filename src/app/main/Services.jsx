import React from "react";
import car from '../icons/carro.png';
import hotel from '../icons/hotel.png';
import chat from '../icons/grupo-de-chat.png';
import bed from '../icons/cama.png';
import box from '../icons/caja-del-paquete.png';

const Services = () => {
    return(
        <nav className="services">
            <div className="services__cards">
                <img src={car} alt="car" />
                <span>Transporte</span>
                <div>Renta un auto o reserva un shuttle</div>
            </div>
            <div className="services__cards">
                <img src={hotel} alt="car" />
                <span>Vuelos + Hoteles</span>
                <div>Encuentra las mejores ofertas para tu viaje</div>
            </div>
            <div className="services__cards">
                <img src={chat} alt="car" />
                <span>Grupos</span>
                <div>Obten una cotizacion para grupos de mas de 9 personas</div>
            </div>
            <div className="services__cards">
                <img src={bed} alt="car" />
                <span>Hoteles</span>
                <div>Reserva una habitacion en cualquier parte del mundo</div>
            </div>
            <div className="services__cards">
                <img src={box} alt="car" />
                <span>Carga</span>
                <div>Contamos con servicio de carga y mensajeria</div>
            </div>
        </nav>
    )
}

export default Services;