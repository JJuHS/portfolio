import React, { useEffect, useState } from "react";
import useStyleStore from '../../store/StyleStore.jsx'
import GitHubIcon from '../../Assets/static/GitHubIcon.png'
import { useNavigate } from 'react-router-dom';
import useDataStore from '../../store/DataStore.jsx';

function Projects () {
    const navigate = useNavigate();
    const gridOneEmpty = useStyleStore((state) => state.gridOneEmpty);
    const projectList = useDataStore().projectList;
    
    const onClickProjectImg = (project) => {
        navigate(`/projects/${project.title.toLowerCase()}`)
    }

    const renderProject = (project) => {
        return (
            <div className="col-span-3 w-full border text-main font-semibold h-48 p-3 m-3">
                <div className="h-32" onClick={() => onClickProjectImg(project)}>
                    {/* TODO : 프로젝트 이미지 넣어야함 */}
                    <img src={project.images[0]} alt="" />
                </div>
                <div className="flex flex-row items-center justify-center"
                    onClick={() => window.open(project.github)}
                >
                    <span className="ms-3">{project.title}</span>
                    <img src={GitHubIcon} alt="" className="h-5 w-5 ms-3 cursor-pointer"/>
                </div>
                <div className="flex items-center justify-center mt-1">
                    <span className="text-xs">
                        {project.startDate} ~ {project.endDate}
                    </span>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="h-44 w-full flex flex-col items-center justify-center">      
                <span className="text-main-light text-3xl font-bold">
                    My  
                    <span className="text-main"> Project </span>
                    Works
                </span>
                <span className="text-white italic mt-2 text-sm">
                    Here are some of the works I created through the project.
                </span>
            </div>
            {/* grid - 11 */}
            <div className="grid grid-cols-11">
                {projectList.map((project, index) => (
                    <React.Fragment key={index}>
                        {index % 2 === 0 && (<>{gridOneEmpty()}{gridOneEmpty()}</>)}
                        {renderProject(project)}
                        {gridOneEmpty()}
                        {index % 2 === 1 && (<>{gridOneEmpty()}</>)}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Projects;