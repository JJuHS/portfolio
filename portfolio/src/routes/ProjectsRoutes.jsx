import React from "react";
import { Route, Routes } from 'react-router-dom';
import Projects from '../components/Projects/Projects.jsx';
import ProjectDetail from '../components/Projects/ProjectDetail.jsx';


function ProjectRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/:projectTitle" element={<ProjectDetail />} />
        </Routes>
    )
}

export default ProjectRoutes;