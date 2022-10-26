import React from "react";
//import calendar from '../icons/calendar.svg';

const Date = () => {
    return(
        <div className="dates">
            <input type="date" aria-label="Salida" name="dateSalida"/>
            <input type="date" aria-label="Regreso" name="dateRegreso"/>
        </div>
    )
}

export default Date;