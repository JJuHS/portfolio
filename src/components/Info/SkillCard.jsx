import React from "react";
import useStyleStore from "../../store/StyleStore";
import "../../styles/projects/SkillCardCss.css"

function SkillCard({ skill, id }) {
    const gridOneEmpty = useStyleStore((state) => state.gridOneEmpty);
    const language = localStorage.getItem('language');

    return (
        <>
            {gridOneEmpty()}
            <div 
                className="col-span-2 border rounded-xl w-full h-36 flex flex-col items-center mt-3 transition-transform duration-300 hover:scale-150 hover:opacity hover:bg-main-heavy-dark"
            >
                <div className="h-6 mt-1 p-0">
                    <span className="text-main-semi-light flex items-center">
                        <strong>{skill.name}</strong>
                        {!!skill.icon && <img src={skill.icon} alt="" className="w-4 h-4 ms-1"/>}
                    </span>
                </div>
                <div className="h-6 p-0">
                    {'★'.repeat(skill.degree) + '☆'.repeat(5 - skill.degree)}
                </div>
                <div
                    className="skill-card-planning-intention h-24 mt-1 ms-4 me-4 text-xs overflow-hidden text-ellipsis break-all"
                    title={skill.explanation[language]}
                >
                    {skill.explanation[language]}
                </div>
            </div>
            {id % 3 === 2 ? gridOneEmpty() : null}
        </>
    );
}

export default SkillCard;







