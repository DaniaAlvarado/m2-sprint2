import React,  { useState } from "react";
import Button from "./Button";
import './header.scss';
import Image from "./Image";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import Form from "../../hooks/Form";
import Swal from "sweetalert2";
import { searchFligths } from "../services/getApiFlight";

const Header = () => {

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

    const navigate = useNavigate();

    const [dataForm, handleChangeOption] = Form({
        salida: "",
        destino: "",
        dateSalida: "",
        dateRegreso: "",
        //people: ""
    });

    const filterFligth = async (dataForm) => {
        const vuelosFiltrados = await searchFligths(dataForm)

        if (vuelosFiltrados.length) {
            console.log(vuelosFiltrados);
            sessionStorage.setItem('vuelosinfo', JSON.stringify(vuelosFiltrados));

            navigate('/flights')
        } else {
            console.log('errorrrrrr')
            Swal.fire(
                'No se encontraron vuelos!',
            )
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(dataForm);
        if (
            dataForm.salida !== "" &&
            dataForm.destino !== "" &&
            dataForm.dateSalida !== "" &&
            dataForm.dateRegreso !== "" &&
            dataForm.people !== ""
        ) {
            console.log("se puede continuar");
            await filterFligth(dataForm)
        } else {
            console.log("llene los datos por favor");
        }
    };

    return (
        <>
            <header className="header">

                <article className="header__form">
                    <h1>Busca un nuevo destino y
                        <br /> comienza la aventura.</h1>
                    <span>Descubre vuelos al mejor precio y perfectos para cualquier viaje</span>
                    <form onSubmit={handleSubmit}>
                        <Button />
                        <div className="flights" >
                            <select name="salida" onChange={handleChangeOption}>
                                <option value="">--</option>
                                <option value="Medellin">Medellin</option>
                                <option value="Cali">Cali</option>
                                <option value="Bogota">Bogota</option>
                            </select>
                            <select name="destino" onChange={handleChangeOption}>
                                <option value="">--</option>
                                <option value="Medellin">Medellin</option>
                                <option value="Cali">Cali</option>
                                <option value="Bogota">Bogota</option>
                            </select>
                        </div>
                        <div className="dates">
                            <input type="date" aria-label="Salida" name="dateSalida" onChange={handleChangeOption} />
                            <input type="date" aria-label="Regreso" name="dateRegreso" onChange={handleChangeOption} />
                        </div>
                        <div className="people">
                <nav onClick={() =>setOpenOption(!openOption)} className="pasajeros">
                    <span>Pasajeros</span>
                    <span>{`${oper.adult} Adulto - ${oper.children} Niños - ${oper.baby} Bebès`}</span>
                </nav>
                {openOption &&<  div className="contador" name="people" >
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
                <input type="text" placeholder="¿Tienes un codigo de promocion?"/>
            </div>
                        <Search />
                    </form>
                </article>
                <Image />
            </header>
        </>
    )
}

export default Header;