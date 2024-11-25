import React, { useEffect, useState } from "react";
import useDataStore from "../../store/DataStore";
import  identificationImage from '../../Assets/identificationImage.jpg';
import linkIcon from '../../Assets/icon/linkIcon.png';
import { useNavigate } from 'react-router-dom';

function Information() {
    const [ nowLanguage, setNowLanguage ] = useState('en');
    const projectList = useDataStore.getState().projectList;
    const techStacks = useDataStore.getState().techStacks;
    const navigate = useNavigate();
    
    useEffect(() => {
        const settingLanguage = localStorage.getItem('language');
        if (settingLanguage) {
            setNowLanguage(settingLanguage);
        }
        console.log(settingLanguage);
    }, []);

    if (nowLanguage === 'en') {
        return (
            <div className="bg-main-dark text-main-light font-regular p-8">
                <div className="flex flex-col items-center">
                    <img src={identificationImage} alt="Jung Ho Sung" className="w-40 h-40 rounded-full mb-4 border-4 border-main-semi-light"/>
                    <h1 className="text-2xl font-bold">Jung Ho Sung</h1>
                    <p className="text-main-semi-light">Software Fullstack Developer </p>
                </div>
                
                <div className="mt-4">
                    <h2 className="text-2xl mb-2 font-semibold text-main">Education & Publishing</h2>
                    <ul>
                        <li className="ms-4 mt-1">EXP: B.Sc. in Physics - Sungkyunkwan University (2015.03 - 2023.02)</li>
                        <li className="ms-4 mt-1">PB: Electrical Transport Study of VO2 Based Field-Effect Transistor Prepared by Chemical Etching (2023.02 ~ )</li>
                        <li className="ms-4 mt-1">EXP: SAMSUNG Software ACADEMY FOR YOUTH (2024.01 ~ )</li>
                    </ul>
                </div>
    
                <div className="mt-4">
                    <h2 className="text-2xl mb-2 font-semibold text-main">Awards</h2>
                    <ul>
                        <li className="ms-4 mt-1">Common Project Excellence Award - 2024.08</li>
                        <li className="ms-4 mt-1">Specialized Project Excellence Award - 2024.10</li>
                    </ul>
                </div>
    
                <div className="mt-4">
                    <h2 className="text-2xl mb-2 font-semibold text-main">Certifications</h2>
                    <ul>
                        <li className="ms-4 mt-1">Information Processing Engineer (2020.11)</li>
                        <li className="ms-4 mt-1">SQLD (2024.10)</li>
                        <li className="ms-4 mt-1">TOEIC SPEACKING AL (2024.02)</li>
                    </ul>
                </div>
    
                <div className="mt-4">
                    <h2 className="text-2xl mb-2 font-semibold text-main">Technical Skills</h2>
                    <ul>
                        {techStacks.map((tech, index) => (
                            <li className="ms-4 mt-2 mb-2 flex flex-col">
                                <span><strong className="text-main-semi-light">{tech.name}</strong> {'★'.repeat(tech.degree) + '☆'.repeat(5 - tech.degree)}</span>
                                <span className="mt-1 ms-4">{tech.explanation.en}</span>
                            </li>
                        ))}
                    </ul>
                </div>
    
                <div className="mt-4">
                    <h2 className="text-2xl mb-2 font-semibold text-main">Projects</h2>
                    {projectList.map((project, indexedDB) => (
                        project.completeDataCreation ? 
                            (
                                <div key={indexedDB} className="border-b border-main-semi-light p-4">
                                    <h3 className="text-lg font-semibold text-main-semi-light">{project.title}</h3>
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
                    <h2 className="text-2xl mb-2 font-semibold text-main">My Goals and Ambitions</h2>
                    <p className="ms-4">I thrive on mastering new technologies and theories, approaching each with enthusiasm rather than fear. Once I set a goal, I dedicate myself fully to exploring it deeply and bringing it to fruition. I am committed to continuous learning and innovation, aiming to contribute significantly to advancements in technology and software development.</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="bg-main-dark text-main-light font-regular p-8">
                <div className="flex flex-col items-center">
                    <img src={identificationImage} alt="정호성" className="w-40 h-40 rounded-full mb-4 border-4 border-main-semi-light"/>
                    <h1 className="text-2xl font-bold">정호성</h1>
                    <p className="text-main-semi-light">소프트웨어 풀스택 개발자</p>
                </div>
                
                <div className="mt-4">
                    <h2 className="text-2xl mb-2 font-semibold text-main">학력 및 출판</h2>
                    <ul>
                        <li className="ms-4 mt-1">학력: 성균관대학교 물리학과 학사 (2015.03 - 2023.02)</li>
                        <li className="ms-4 mt-1">출판: 화학 에칭으로 제작된 VO2 기반 전계 효과 트랜지스터의 전기적 수송 연구 (2023.02 ~ )</li>
                        <li className="ms-4 mt-1">학력: 삼성 청년 SW 아카데미 (2024.01 ~ )</li>
                    </ul>
                </div>
    
                <div className="mt-4">
                    <h2 className="text-2xl mb-2 font-semibold text-main">수상 내역</h2>
                    <ul>
                        <li className="ms-4 mt-1">공통 프로젝트 우수상 - 2024.08</li>
                        <li className="ms-4 mt-1">특화 프로젝트 우수상 - 2024.10</li>
                    </ul>
                </div>
    
                <div className="mt-4">
                    <h2 className="text-2xl mb-2 font-semibold text-main">자격증</h2>
                    <ul>
                        <li className="ms-4 mt-1">정보처리기사 (2020.11)</li>
                        <li className="ms-4 mt-1">SQLD (2024.10)</li>
                        <li className="ms-4 mt-1">토익스피킹 AL (2024.02)</li>
                    </ul>
                </div>
    
                <div className="mt-4">
                    <h2 className="text-2xl mb-2 font-semibold text-main">기술 스택</h2>
                    <ul>
                        {techStacks.map((tech, index) => (
                            <li key={index} className="ms-4 mt-2 mb-2 flex flex-col">
                                <span><strong className="text-main-semi-light">{tech.name}</strong> {'★'.repeat(tech.degree) + '☆'.repeat(5 - tech.degree)}</span>
                                <span className="mt-1 ms-4">{tech.explanation.kr}</span>
                            </li>
                        ))}
                    </ul>
                </div>
    
                <div className="mt-4">
                    <h2 className="text-2xl mb-2 font-semibold text-main">프로젝트</h2>
                    {projectList.map((project, index) => (
                        project.completeDataCreation ? 
                            (
                                <div key={index} className="border-b border-main-semi-light p-4">
                                    <h3 className="text-lg font-semibold text-main-semi-light">{project.title}</h3>
                                    <p className="flex">
                                        {project.description.planningIntention}&nbsp;&nbsp;&nbsp;
                                        <img src={linkIcon} onClick={() => navigate(`/projects/${project.title.toLowerCase()}`)} className="h-6 w-6 cursor-pointer" alt="프로젝트 링크 아이콘"/>
                                    </p>
                                </div>
                            )
                            : null
                    ))}
                </div>
    
                <div className="mt-4">
                    <h2 className="text-2xl mb-2 font-semibold text-main">목표와 포부</h2>
                    <p className="ms-4">저는 새로운 기술과 이론을 배우는 데 두려움 없이 열정적으로 접근합니다. 목표를 설정하면 그것을 깊이 탐구하고 실현하는 데 전념합니다. 지속적인 학습과 혁신을 통해 기술과 소프트웨어 개발의 발전에 크게 기여하고자 합니다.</p>
                </div>
            </div>
        );
    }
}

export default Information;
