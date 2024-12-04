import React from "react";
import { Route, Routes } from 'react-router-dom';
import Information from '../components/Info/Information.jsx';

function InformationRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Information />} />
        </Routes>
    )
}

export default InformationRoutes;