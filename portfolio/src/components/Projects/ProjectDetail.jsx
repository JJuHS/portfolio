import React from "react";
import { useParams, useNavigate } from 'react-router-dom';

function ProjectDetail ({ project }) {
    const { projectTitle } = useParams();
    if (!project) {
        
    }
    return (
        <div></div>
    );
}

export default ProjectDetail;