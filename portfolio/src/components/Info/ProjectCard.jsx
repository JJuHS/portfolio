import React from "react";
import linkIcon from '../../Assets/icon/linkIcon.png';
import GitHubIcon from '../../Assets/static/GitHubIcon.png';
import { useNavigate } from "react-router-dom";
import useStyleStore from "../../store/StyleStore";
import "../../styles/projects/ProjectCardCss.css"

function ProjectCard ({ project, id }) {
    const language = localStorage.getItem('language');
    const gridOneEmpty = useStyleStore((state) => state.gridOneEmpty);
    const navigate = useNavigate();

    if (project.completeDataCreation === false) {
        return null;
    }
    return (
        <>
            {gridOneEmpty()}
            <div className="col-span-2 border rounded-xl w-full h-64 flex flex-col items-center mt-3 transition-transform duration-300 hover:scale-150 hover:opacity hover:bg-main-heavy-dark">
                <div className="h-12 mt-1 p-0">
                    <span className="text-main-semi-light">
                        <strong>{project.title}</strong>
                    </span>
                </div>
                <div className="h-24 xl:h-32 overflow-hidden">
                    <img src={project.images[0]} alt="" onClick={() => navigate(`/projects/${project.title.toLowerCase()}`)}/>
                </div>
                <div className="flex flex-col items-center">
                    {/* 프로젝트 카드 커졌을 때 스크롤 가능 : project-card-planning-intention*/}
                    <div
                        className="project-card-planning-intention h-20 xl:h-12 mt-1 ms-3 me-3 mb-0 text-sm hover:overflow-y-auto overflow-hidden text-ellipsis break-all"
                        title={project.description.planningIntention[language]}
                    >
                        {project.description.planningIntention[language]}
                    </div>
                    <div className="flex flex-row ">
                        <a href={project.url}>
                            <img 
                                src={linkIcon}
                                className="h-4 w-4 cursor-pointer ms-2 me-2"
                                alt="link"
                            />
                        </a>
                        <a href={project.github}>
                            <img 
                                src={GitHubIcon}
                                className="h-4 w-4 cursor-pointer ms-2 me-2"
                                alt="link"
                            />
                        </a>
                    </div>
                </div>
            </div>
            {id % 3 === 2 ? gridOneEmpty() : null}
        </>
    )
}

export default ProjectCard;