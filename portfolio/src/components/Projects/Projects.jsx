import React, { useEffect, useState } from "react";
import useStyleStore from '../../store/StyleStore.jsx'

const initialProjectData = [
    {
        title:"MOVIEW",
        description:{
            planningIntention:"",
            serviceContents:[],
            expectEffect:""
        },
        startDate: "",
        endDate:"",
        url: "",
        github: "",
        technologies:[],
        team:[],
        images:[],
        role:[],
        review:[],
        experienceResolvingProblem:[],
    },
    {
        title:"COSMOS",
        description:{
            planningIntention:"",
            serviceContents:[],
            expectEffect:""
        },
        startDate: "",
        endDate:"",
        url: "",
        github: "",
        technologies:[],
        team:[],
        images:[],
        role:[],
        review:[],
        experienceResolvingProblem:[],
    },
    {
        title:"WhiteBox",
        description:{
            planningIntention:"",
            serviceContents:[],
            expectEffect:""
        },
        startDate: "",
        endDate:"",
        url: "",
        github: "",
        technologies:[],
        team:[],
        images:[],
        role:[],
        review:[],
        experienceResolvingProblem:[],
    },
    {
        title:"BugTopia",
        description:{
            planningIntention:"",
            serviceContents:[],
            expectEffect:""
        },
        startDate: "",
        endDate:"",
        url: "",
        github: "",
        technologies:[],
        team:[],
        images:[],
        role:[],
        review:[],
        experienceResolvingProblem:[],
    },
]

function Projects () {
    const gridOneEmpty = useStyleStore((state) => state.gridOneEmpty);
    const [ projectData, setProjectData ] = useState([]);

    useEffect(() => {
        setProjectData(initialProjectData)
    }, [])

    const renderProject = (project) => {
        return (
            <div className="col-span-4 w-full border text-main font-semibold h-40">
                <span>{project.title}</span>
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
            {/* grid - 12 */}
            <div className="grid grid-cols-12">
                {projectData.map((project, index) => (
                    <React.Fragment key={index}>
                        {index % 2 === 0 && (<>{gridOneEmpty()}{gridOneEmpty()}</>)}
                        {renderProject(project)}
                        {index % 2 === 1 && (<>{gridOneEmpty()}{gridOneEmpty()}</>)}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Projects;