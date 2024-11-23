import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import useDataStore from '../../store/DataStore.jsx';
import useStyleStore from '../../store/StyleStore.jsx'

function ProjectDetail () {
    const gridOneEmpty = useStyleStore((state) => state.gridOneEmpty);

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    const { projectTitle } = useParams();

    const [ project, setProject ] = useState(null);

    const projectList = useDataStore().projectList;
    const projectTitleToIndex = useDataStore().projectTitleToIndex;
    
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

    const renderProjectInfoDetail = (title, content, isLink = false) => {
        return (
            <div className="grid grid-cols-12 mt-4 w-11/12 divide-y">
                {gridOneEmpty()}
                <div className="col-span-2 text-left">{title}</div>
                {gridOneEmpty()}
                <div className="col-span-6 text-left overflow">
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
                {renderProjectInfoDetail("기획의도", project.description.planningIntention)}
                {renderProjectInfoDetail("서비스내용", project.description.serviceContents)}
                {renderProjectInfoDetail("기대효과", project.description.expectEffect)}
                {renderProjectInfoDetail("프로젝트 링크", project.url, true)}
                {renderProjectInfoDetail("깃허브 링크", project.github, true)}
                {renderProjectInfoDetail("팀", project.team)}
                {renderProjectInfoDetail("기술스택", project.technologies)}
                {renderProjectInfoDetail("나의 역할", project.role)}
                {renderProjectInfoDetail("후기", project.review)}
                {renderProjectInfoDetail("문제해결경험", project.experienceResolvingProblem)}

                {renderProjectInfoDetail("프로젝트", project.startDate + " 부터")}
                {renderProjectInfoDetail("기간", project.endDate + " 까지")}
            </div>
        )
    }
    return renderProjectInfo(project)
}

export default ProjectDetail;

//     <div>기술스택: {project.technologies}</div>
//     <div>팀원: {project.team}</div>
//     <div>이미지: {project.images}</div>
//     <div>역할: {project.role}</div>
//     <div>후기: {project.review}</div>
//     <div>문제해결경험: {project.experienceResolvingProblem}</div>