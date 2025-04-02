import React, { useEffect, useState } from "react";
import { FaList, FaTh } from "react-icons/fa"; 
import usePlayStore from "../../store/PlayStore";
import useStyleStore from "../../store/StyleStore";
import playDefaultImage from "../../Assets/play/play-default-img.png"
import { useNavigate } from "react-router-dom";

function Play() {
    const playDataList = usePlayStore().playListData;
    const gridOneEmpty = useStyleStore((state) => state.gridOneEmpty);
    const navigate = useNavigate();
    
    const language = localStorage.getItem('language') || 'en';
    const [ isGrid, setIsGrid ] = useState(true);

    useEffect(() => {
        const savedIsGrid = localStorage.getItem('isGrid');
        if (savedIsGrid === 'true') {
            setIsGrid(true)
        } else {
            setIsGrid(false)
        }
    }, [])

    const changeGridState = (target) => {
        if (target === 'grid') {
            setIsGrid(true);
            localStorage.setItem('isGrid', 'true')
        } else {
            setIsGrid(false);
            localStorage.setItem('isGrid', 'false')
        }
    }

    const navigateDetail = (url) => {
        navigate(`/play/${url}`)
    }
    const renderPlayList = () => {
        if (isGrid) {
            return (
                <div className="grid grid-cols-2 gap-4">
                    {playDataList.map((item) => (
                        <div 
                            key={item.id} 
                            className="card border rounded m-2 shadow-md text-white flex flex-col items-center cursor-pointer h-3/4"
                            onClick={() => {navigateDetail(item.url)}}
                        >
                            <img src={item.image || playDefaultImage} alt="" className="w-1/2 h-1/2  mt-6 mb-3"/>
                            <p>{item.title[language]}</p>
                            <p className="text-[12px] px-3">{item.explanation[language]}</p>
                            <p className="text-[8px]">{{kr:'최근 업데이트', en:'recently update'}[language]} : {item.updateDate}</p>
                        </div>
                    ))}
                </div>
            )
        } else {
            return (
                <div className="flex flex-col">
                    {playDataList.map((item) => (
                        <div key={item.id} className="cursor-pointer flex flex-row border rounded m-2 text-white" onClick={() => {navigateDetail(item.url)}}>
                            <img src={item.image || playDefaultImage} alt="" className="w-[120px] h-[100px]"/>
                            <div className="flex flex-col justify-center ms-5">
                                <p>{item.title[language]}</p>
                                <p className="text-[10px]">{item.explanation[language]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
    }
    return (
        <div>
            {/* Title */}
            <div className="flex mt-3 h-16">
                <div className="w-1/4"></div>
                <div className="border-t border-b w-1/2 flex justify-center items-center">
                    <p className="text-center text-white">Mini Game</p>
                </div>
                <div className="w-1/4"></div>
            </div>
            {/* 목록 / 그리드 */}
            <div className="flex mt-3 h-8">
                <div className="w-1/6"></div>
                <div className="border-b w-2/3 flex justify-end items-center gap-3 pr-4">
                    <FaList className="text-white text-xl cursor-pointer" onClick={() => {changeGridState('array')}}/>
                    <FaTh className="text-white text-xl cursor-pointer" onClick={() => {changeGridState('grid')}}/>
                </div>
                <div className="w-1/6"></div>
            </div>
            {/* Play 목록 */}
            <div className="grid grid-cols-6">
                {gridOneEmpty()}
                <div className="col-span-4">
                    {renderPlayList()}
                </div>
                {gridOneEmpty()}
            </div>
        </div>
    );
}

export default Play;
