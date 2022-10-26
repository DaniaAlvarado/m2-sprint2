import React from "react";
import Select from "./Select";
//import Form from "../../hooks/Form";

const Input = () => {

    return(
        <div className="flights" >
            <input type="text" placeholder="Origen" name='salida' onChange={handleChangeOption}/>
            <Select />
        </div>
    )
}

export default Input;