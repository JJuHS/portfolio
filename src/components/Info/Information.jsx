import React, { useEffect, useState } from "react";
import useDataStore from "../../store/DataStore";
import useStyleStore from "../../store/StyleStore";
import ProfileCard from "./ProfileCard";
import SkillCard from "./SkillCard";
import ProjectCard from "./ProjectCard";
import ContentBar from "../common/ContentBar";

function Information() {
    const projectList = useDataStore.getState().projectList;
    const stacks = { "techStacks": useDataStore.getState().techStacks, "coworkStacks": useDataStore.getState().coworkStacks };
    const gridOneEmpty = useStyleStore(state => state.gridOneEmpty);
    const informationData = useDataStore.getState().informationData;
    
    // 옆에 목차 바 아이템들 설정하기
    const [ menuItems, setMenuItems ] = useState([]);
    useEffect(() => {
        const language = localStorage.getItem("language") || 'en';
        if (language === 'en') {
            setMenuItems([
                { id: "profile", label: "Profile" },
                { id: "SchoolAndPublishingAndEducation", label: "Education" },
                { id: "Awards", label: "Awards" },
                { id: "Certifications", label: "Certifications" },
                { id: "techStacks", label: "Tech Stacks" },
                { id: "coworkStacks", label: "Co-Work Skills" },
                { id: "projects", label: "Projects" },
                { id: "goals", label: "Goals" },
            ]);
        } else {
            setMenuItems([
                { id: "profile", label: "프로필" },
                { id: "SchoolAndPublishingAndEducation", label: "학력사항" },
                { id: "Awards", label: "수상경력" },
                { id: "Certifications", label: "자격증" },
                { id: "techStacks", label: "기술 스택" },
                { id: "coworkStacks", label: "협업기술" },
                { id: "projects", label: "프로젝트" },
                { id: "goals", label: "목표" },
            ]);
        }
    }, [])

    const renderItem = (itemKey) => {
        const language = localStorage.getItem('language') || 'en'
        const item = informationData[itemKey]
        const itemNameList = {
            SchoolAndPublishingAndEducation: {
                kr:"학력사항",
                en:"Education",
            },
            Awards: {
                kr:"수상경력",
                en:"Awards",
            },
            Certifications: {
                kr:"자격증",
                en:"Certifications",
            },
        }
        return (
            <div className="mt-4" id={itemKey}>
                <div className="flex justify-center items-center">    
                    <span className="text-3xl mb-4 font-semibold text-main">{itemNameList[itemKey][language]}</span>
                </div>
                <div className="flex flex-col">
                    {item.map((item, index) => (
                        <div className="grid grid-cols-10">
                            {gridOneEmpty()}
                            {gridOneEmpty()}
                            <span className="col-span-2 mb-2">{item.name[language]} </span>
                            {gridOneEmpty()}
                            <span className="col-span-1 mb-2">{item.date}</span>
                            {!!item.etc ? <span className="col-span-2 mb-2">{item.etc[language]}</span> : <div>{gridOneEmpty()}{gridOneEmpty()}</div>}
                            {gridOneEmpty()}
                        </div>
                    ))}
                    <div className="grid grid-cols-10">
                    {gridOneEmpty()}{gridOneEmpty()}
                    <div className="col-span-6 border-b"></div>
                    {gridOneEmpty()}{gridOneEmpty()}
                    </div>
                </div>
            </div>
        )
    }

    const renderSkills = (stackName) => {
        const language = localStorage.getItem('language') || 'en'
        const stackList = stacks[stackName]

        return (
            <div className="mt-4" id={stackName}>
                <div className="grid grid-cols-10">
                    {gridOneEmpty()}
                    <span className="col-span-9 text-3xl font-semibold text-main">
                        {stackName === 'techStacks' ? (language === 'kr' ? "기술스택" : "Tech-Skills") : (language === 'kr' ? "협업기술" : "Co-Work-Skills")}
                    </span>
                </div>
                <div className="flex">
                    <div className="grid grid-cols-10">
                    {stackList.map((tech, index) => (
                        <SkillCard skill={tech} id={index} key={index}/>
                    ))}
                    </div>
                </div>
            </div>
        )
    }
    
    const renderProjects = () => {
        const language = localStorage.getItem('language') || 'en'
        
        return (
            <div className="mt-4" id="projects">
                <div className="grid grid-cols-10">
                    {gridOneEmpty()}
                    <span className="col-span-9 text-3xl font-semibold text-main">
                        {language === 'kr' ? "프로젝트" : "Projects"}
                    </span>
                </div>
                <div className="flex">
                    <div className="grid grid-cols-10">
                    {projectList.map((project, index) => (
                        <ProjectCard project={project} id={index} key={index}/>
                    ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="relative">
            <ContentBar menuItems={menuItems}/>
            <div className="bg-main-dark text-main-light font-regular p-8">
                <ProfileCard 
                    language={localStorage.getItem('language') || 'en'}
                    profileData={informationData.profile}
                />
                {renderItem("SchoolAndPublishingAndEducation")}
                {renderItem("Awards")}
                {renderItem("Certifications")}
                {renderSkills("techStacks")}
                {renderSkills("coworkStacks")}
                {renderProjects()}

                <div className="mt-4" id="goals">
                    <h2 className="text-2xl mb-2 font-semibold text-main">My Goals and Ambitions</h2>
                    <p className="ms-4">I thrive on mastering new technologies and theories, approaching each with enthusiasm rather than fear. Once I set a goal, I dedicate myself fully to exploring it deeply and bringing it to fruition. I am committed to continuous learning and innovation, aiming to contribute significantly to advancements in technology and software development.</p>
                </div>
            </div>
        </div>
    )
}

export default Information;
