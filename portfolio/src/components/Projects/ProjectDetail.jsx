import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import useDataStore from '../../store/DataStore.jsx';
import useStyleStore from '../../store/StyleStore.jsx';

function ProjectDetail () {
    const gridOneEmpty = useStyleStore((state) => state.gridOneEmpty);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [slideShowInterval, setSlideShowInterval] = useState(null);

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    const { projectTitle } = useParams();

    const [ project, setProject ] = useState(null);
    const language = localStorage.getItem('language') || 'en';

    const projectList = useDataStore().projectList;
    const projectTitleToIndex = useDataStore().projectTitleToIndex;

    const startSlideShow = () => {
        if (slideShowInterval) clearInterval(slideShowInterval);
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % project.images.length);
        }, 1000); // 5초마다 이미지 변경
        setSlideShowInterval(interval);
    };
    useEffect(() => {


        if (project && project.images && project.images.length > 0) {
            startSlideShow();
        }

        return () => {
            if (slideShowInterval) clearInterval(slideShowInterval);
        };
    }, [project]);

    useEffect(() => {
        const fetchData = () => {
            try {
                if (!projectTitleToIndex || !projectTitle) {
                    throw new Error();
                }
                if (!(projectTitle in projectTitleToIndex)) {
                    throw new Error();
                }
                const projectIndex = projectTitleToIndex[projectTitle];
                if (projectIndex === undefined || !projectList[projectIndex]) {
                    throw new Error();
                }
                setProject(projectList[projectIndex]);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const handleSlideChange = () => {
        clearInterval(slideShowInterval);
        setTimeout(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % project.images.length);
            startSlideShow();
        }, 5000);
    };

    const handlePreviousClick = () => {
        handleSlideChange();
        setCurrentImageIndex((prevIndex) => prevIndex === 0 ? project.images.length - 1 : prevIndex - 1);
    };

    const handleNextClick = () => {
        handleSlideChange();
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    };

    const renderProjectInfoDetail = (title, content, isLink = false) => {
        return (
            <div className="grid grid-cols-12 mt-4 w-11/12 divide-y">
                {gridOneEmpty()}
                <div className="col-span-2 text-left text-main-semi-light">{title}</div>
                {gridOneEmpty()}
                <div className="col-span-6 text-left overflow text-main-semi-light">
                    {typeof content === "object" && content !== null ? (
                        Object.keys(content).map((key, index) => (
                            /^\d+$/.test(key) ? 
                            <p>{content[key]}</p>
                            : 
                            (
                                <p key={index}>
                                    <strong>{key}:</strong> {content[key]}
                                </p>
                            )
                        ))
                    ) : isLink ? (
                        <a
                            href={content}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            {content}
                        </a>
                    ) : content
                    }
            </div>
                {gridOneEmpty()}{gridOneEmpty()}
            </div>
        )
    }
    
    const renderProjectInfo = (project) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Project Not Found</div>;

        return (
            <div className="flex flex-col justify-center items-center text-main">
                <div className="mb-4 mt-4">
                    <span className="text-3xl font-bold">{project.title}</span>
                </div>
                {project.images && project.images.length > 0 && (
                    <div className="relative w-1/2 mb-8 overflow-hidden">
                        <img src={project.images[currentImageIndex]} className="w-full" alt="Project Image" />
                        <button onClick={handlePreviousClick} className="absolute left-0">Previous</button>
                        <button onClick={handleNextClick} className="absolute right-0">Next</button>
                    </div>
                )}
                {renderProjectInfoDetail("기획의도", project.description.planningIntention[language])}
                {renderProjectInfoDetail("서비스내용", project.description.serviceContents[language])}
                {renderProjectInfoDetail("기대효과", project.description.expectEffect[language])}
                {renderProjectInfoDetail("프로젝트 링크", project.url, true)}
                {renderProjectInfoDetail("깃허브 링크", project.github, true)}
                {renderProjectInfoDetail("팀", project.team)}
                {renderProjectInfoDetail("기술스택", project.technologies)}
                {renderProjectInfoDetail("나의 역할", project.role)}
                {renderProjectInfoDetail("내가 구현한 내용", project.myImplementation[language])}
                {renderProjectInfoDetail("후기", project.review[language])}
                {renderProjectInfoDetail("문제해결경험", project.experienceResolvingProblem[language])}
                {renderProjectInfoDetail("프로젝트 기간", project.startDate + " ~ " + project.endDate)}
            </div>
        )
    }
    return renderProjectInfo(project)
}

export default ProjectDetail;
