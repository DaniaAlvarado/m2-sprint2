import React, { useState } from "react";

const People = () =>  {

    const [openOption, setOpenOption] = useState(false);

    const [oper, setOper] = useState({
        adult: 1,
        children: 0,
        baby: 0,
    });

    const handleOperation = (name, operation) =>{
        setOper((prev) => {return {
            ...prev, [name]: operation === 'i' ? oper[name] + 1 : oper[name] -1,
        }})
    }

    return (
            <div className="people">
                <nav onClick={() =>setOpenOption(!openOption)} className="pasajeros">
                    <span>Pasajeros</span>
                    <span>{`${oper.adult} Adulto - ${oper.children} Niños - ${oper.baby} Bebès`}</span>
                </nav>
                {openOption &&<  div className="contador" name="people">
                    <div className="contador__item" >
                        <span>Adulto</span>
                        <span disabled={oper.adult <= 1} onClick={() => {handleOperation('adult', 'd')}}>-</span>
                        <span>{oper.adult}</span>
                        <span onClick={() => {handleOperation('adult', 'i')}}>+</span>
                    </div>
                    <div className="contador__item" >
                        <span>Niños</span>
                        <span onClick={() => {handleOperation('children', 'd')}}>-</span>
                        <span>{oper.children}</span>
                        <span onClick={() => {handleOperation('children', 'i')}}>+</span>
                    </div>
                    <div className="contador__item" >
                        <span>Bebès</span>
                        <span onClick={() => {handleOperation('baby', 'd')}}>-</span>
                        <span>{oper.baby}</span>
                        <span onClick={() => {handleOperation('baby', 'i')}}>+</span>
                    </div>
                </div>}
                {/* <input type="text" placeholder="¿Tienes un codigo de promocion?"/> */}
            </div>
    )
}

export default People;