import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Home";
import Exercicio01 from "../exercicios/01";
import Exercicio02 from '../exercicios/02';
import TopBar from "../components/TopBar";
import Exercicio03 from "../exercicios/03";



const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path="/exercicio-01" element={
                    <TopBar>
                        <Exercicio01 />
                    </TopBar>}
                />
                <Route path="/exercicio-02" element={
                    <TopBar>
                        <Exercicio02 />
                    </TopBar>
                }
                />
                <Route path="/exercicio-03" element={
                    <TopBar>
                        <Exercicio03 />
                    </TopBar>
                }
                />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default Routering;