import React from "react";
import useDataStore from "../../store/DataStore";
import  identificationImage from '../../Assets/identificationImage.jpg';
import linkIcon from '../../Assets/icon/linkIcon.png';
import { useNavigate } from 'react-router-dom';

function Information() {
    const projectList = useDataStore.getState().projectList;
    const techStacks = useDataStore.getState().techStacks;
    const navigate = useNavigate();

    return (
        <div className="bg-main-dark text-main-light font-regular p-8">
        <div className="flex flex-col items-center">
            <img src={identificationImage} alt="Jung Ho Sung" className="w-40 h-40 rounded-full mb-4 border-4 border-main-semi-light"/>
            <h1 className="text-2xl font-bold">Jung Ho Sung</h1>
            <p className="text-main-semi-light">Software Fullstack Developer </p>
        </div>
        
        <div className="mt-4">
            <h2 className="text-xl font-semibold">Education</h2>
            <ul>
                <li>B.Sc. in Physics - Sungkyunkwan University (2015.03 - 2023.02)</li>
                <li>SAMSUNG SW ACADEMY FOR YOUTH (2024.01 ~ )</li>
            </ul>
        </div>

        <div className="mt-4">
            <h2 className="text-xl font-semibold">Awards</h2>
            <ul>
            <li>Common Project Excellence Award - 2024.08</li>
            <li>Specialized Project Excellence Award - 2024.10</li>
            </ul>
        </div>

        <div className="mt-4">
            <h2 className="text-xl font-semibold">Certifications</h2>
            <ul>
            <li>Engineer Information Processing (2020.11)</li>
            </ul>
        </div>

        <div className="mt-4">
            <h2 className="text-xl font-semibold">Technical Skills</h2>
            <p>Here's a list of my technical skills rated by proficiency:</p>
            <ul className="">
                {techStacks.map((tech, index) => (
                    <li className="ms-4 mt-2 mb-2"><strong>{tech.name}:</strong>{'★'.repeat(tech.degree) + '☆'.repeat(5 - tech.degree)}  - {tech.explanation}</li>
                ))}
            </ul>
        </div>

        <div className="mt-4">
            <h2 className="text-xl font-semibold">Projects</h2>
            {projectList.map((project, indexedDB) => (
                project.completeDataCreation ? 
                    (
                        <div key={indexedDB} className="border-b border-main-semi-light p-4">
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="flex">
                                {project.description.planningIntention}&nbsp;&nbsp;&nbsp;
                                <img src={linkIcon} onClick={() => navigate(`/projects/${project.title.toLowerCase()}`)} className="h-6 w-6 cursor-pointer"/>
                            </p>
                            
                        </div>
                    )
                    : null
                
            ))}
        </div>

        <div className="mt-4">
            <h2 className="text-xl font-semibold">My Goals and Ambitions</h2>
            <p>I thrive on mastering new technologies and theories, approaching each with enthusiasm rather than fear. Once I set a goal, I dedicate myself fully to exploring it deeply and bringing it to fruition. I am committed to continuous learning and innovation, aiming to contribute significantly to advancements in technology and software development.</p>
        </div>
        </div>
    );
}

export default Information;
