import React, { useEffect, useState } from "react";
import useStyleStore from '../../store/StyleStore.jsx'
import GitHubIcon from '../../Assets/static/GitHubIcon.png'
import { useNavigate } from 'react-router-dom';
import useDataStore from '../../store/DataStore.jsx';

function Projects () {
    const navigate = useNavigate();
    const language = localStorage.getItem('language') || 'en';
    const gridOneEmpty = useStyleStore((state) => state.gridOneEmpty);
    const fetchedProjectList = useDataStore().projectList;
    const [ projectList, setProjectList ] = useState(fetchedProjectList)
    const [imageIndexes, setImageIndexes] = useState({});
    const [intervals, setIntervals] = useState({});
    
    useEffect(() => {
        const initialImageIndexes = fetchedProjectList.reduce((acc, project) => ({
            ...acc,
            [project.id]: 0
        }), {});

        setImageIndexes(initialImageIndexes);
        setIntervals({});
    }, [fetchedProjectList]);

    useEffect(() => {
        return () => {
            Object.values(intervals).forEach(interval => clearInterval(interval));
        };
    }, [intervals]);

    const onClickProjectImg = (project) => {
        navigate(`/projects/${project.title.toLowerCase()}`)
    }

    const startSlideshow = (projectId) => {
        if (intervals[projectId]) return;

        if (!projectList.find(project => project.id === projectId).images) return;

        const interval = setInterval(() => {
            setImageIndexes(prevIndexes => {
                const currentIndex = prevIndexes[projectId] || 0;
                const project = projectList.find(p => p.id === projectId);
                const nextIndex = (currentIndex + 1) % project.images.length;
                return { ...prevIndexes, [projectId]: nextIndex };
            });
        }, 600);

        setIntervals(prevIntervals => ({ ...prevIntervals, [projectId]: interval }));
    };

    const stopSlideshow = (projectId) => {
        clearInterval(intervals[projectId]);
        setIntervals(prevIntervals => {
            const newIntervals = { ...prevIntervals };
            delete newIntervals[projectId];
            return newIntervals;
        });
    };

    const renderPageTitle = () => {
        const data = {
            en: ['My', 'Project', 'Works', 'Here are some of the works I created through the project.'],
            kr: ['내', '프로젝트', '모음', '다음은 제가 프로젝트를 통해 만든 작품들 입니다.'],
        }
        return (
            <div className="h-44 w-full flex flex-col items-center justify-center">      
                <span className="text-main-light text-3xl font-bold">
                    {data[language][0]}
                    <span className="text-main"> {data[language][1]} </span>
                    {data[language][2]}
                </span>
                <span className="text-white italic mt-2 text-sm">
                    {data[language][3]}
                </span>
            </div>
        )
    }
    const renderProject = (project, sizeClass) => {
        if (!project.completeDataCreation) return null;
        const sizeClassDict = {
            2: "col-span-2 w-full border text-main font-semibold h-60 p-3 m-3",
            4: "col-span-4 w-full border text-main font-semibold h-60 p-3 m-3",
            6: "col-span-6 w-full border text-main font-semibold h-60 p-3 m-3",
        }

        return (
            <div className={sizeClassDict[sizeClass]} >
                <div 
                    className="h-44 cursor-pointer flex justify-center" 
                    onClick={() => onClickProjectImg(project)}
                    onMouseEnter={() => startSlideshow(project.id)}
                    onMouseLeave={() => stopSlideshow(project.id)}
                >
                    <img 
                        src={project.images[imageIndexes[project.id]]} 
                        alt="" 
                        className="h-40"
                    />
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
            {renderPageTitle()}
            {/* size ~ md 12: 3 6 3*/}
            <div className="grid grid-cols-12 md:hidden">
                {projectList.map((project, index) => (
                    <React.Fragment key={index}>
                        {gridOneEmpty()}{gridOneEmpty()}{gridOneEmpty()}
                        {renderProject(project, 6)}
                        {gridOneEmpty()}{gridOneEmpty()}{gridOneEmpty()}
                    </React.Fragment>
                ))}
            </div>
            {/* size md ~ xl 11: 1 4 1 4 1 */}
            <div className="hidden xl:hidden md:grid md:grid-cols-11">
                {projectList.map((project, index) => (
                    <React.Fragment key={index}>
                        {gridOneEmpty()}
                        {renderProject(project, 4)}
                        {index % 2 === 1 ? gridOneEmpty() : null}
                    </React.Fragment>
                ))}
            </div>
            {/* size xl ~ 10: 1 2 1 2 1 2 1*/}
            <div className="hidden xl:grid xl:grid-cols-10">
                {projectList.map((project, index) => (
                    <React.Fragment key={index}>
                        {gridOneEmpty()}
                        {renderProject(project, 2)}
                        {index % 3 === 2 ? gridOneEmpty() : null}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Projects;