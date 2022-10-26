import React from "react";
import plane from '../icons/plane.svg';

const Search = () => {
    return (
        <button type="submit" className="btnSearch"> <img src={plane} alt="plane"  /> Buscar vuelos</button>
    )
}

export default Search;