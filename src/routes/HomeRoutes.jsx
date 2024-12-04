import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home.jsx';

function HomeRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default HomeRoutes;