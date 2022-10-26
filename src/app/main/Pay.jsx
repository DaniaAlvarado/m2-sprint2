import React from "react";
import amex from '../icons/amex.png';
import payPal from '../icons/paypal.png';
import master from '../icons/m2-s2Master.png';
import visa from '../icons/visa.png';
import oxxo from '../icons/m2-s2Oxxo.png';
import walmart from '../icons/m2-s2Wal.jpg';
import fa from '../icons/m2-s2FA.jpg';

const Pay = () => { 
    return (
        <>
        <article>
            <span>Tarjeta de credito, tarjeta de debito y pago electronico</span>
            <nav>
                <img src={amex} alt="amex" />
                <img src={payPal} alt="payPal" />
                <img src={master} alt="marter" />
                <img src={visa} alt="visa" />
            </nav>
        </article>
        <article>
            <span>Efectivo en cualquiera de las sucursales participantes</span>
            <nav>
                <img src={oxxo} alt="oxxo" />
                <img src={walmart} alt="walmart" />
                <img src={fa} alt="fa" />
            </nav>
        </article>
        </>
    )
}

export default Pay;