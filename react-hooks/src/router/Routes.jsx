import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Home";
import Exercicio01 from "../exercicios/01";



const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="/exercicio-01" element={<Exercicio01 />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default Routering;