import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import '../App.css'; 
// Components

import Inicio from "../Components/Routes/Inicio";
import Navbar from "../Components/Navbar";

const Rutas = () => {
    return ( 
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Inicio />} />
            </Routes>
        </Router>
    )
}

export default Rutas;