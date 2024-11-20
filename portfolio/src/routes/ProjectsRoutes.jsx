import React from "react";
import { Route, Routes } from 'react-router-dom';
import Projects from '../components/Projects/Projects.jsx';


function ProjectRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Projects />} />
        </Routes>
    )
}

export default ProjectRoutes;