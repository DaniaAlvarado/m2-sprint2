import  React  from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import App from "../app/App";
import Flight from "../components/flights/Flight";
import Seating from "../components/seating/Seating";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="flights" element={<Flight />}/>
                <Route path="seating" element={<Seating />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;