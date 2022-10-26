import React from "react";
// import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
    return(
        // <BrowserRouter>
        //     <Header />
        //     <Main />
        // </BrowserRouter>
        <>
            <Header />
            <Main />
        </>
    )
}

export default App;