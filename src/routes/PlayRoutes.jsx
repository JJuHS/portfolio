import React from "react";
import { Route, Routes } from 'react-router-dom';
import Play from '../components/Play/Play.jsx';


function PlayRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Play />} />
        </Routes>
    )
}

export default PlayRoutes;