import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { footprintStore } from "../../store/ImageStore"
import Footprints from "./Footprints.jsx";
function LoadingPage () {
    const language = localStorage.getItem("language") || 'en';
    const loadingMessage = { 'en': "Loading.....", 'kr': "로딩 중....."};
    const leftFootprintImg = footprintStore.getState().leftFootprint
    const rightFootprintImg = footprintStore.getState().rightFootprint
    
    
    const maxFootprints = 10;
    const allowedArea = {
        x: 0,
        y: 0,
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 1
    };

    return (
        <div>
            <div className="h-[100vh] overflow-hidden" >
                {/* 발자국 */}
                <Footprints 
                    leftFootprintImg={leftFootprintImg}
                    rightFootprintImg={rightFootprintImg}
                    allowedArea={allowedArea}
                    maxFootprints={maxFootprints}
                />
                {/* 로딩중 */}
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <div>
                        <ClipLoader color="#9FE4EA" />
                    </div>
                    <div>
                        <span className="text-main-semi-light">
                            {loadingMessage[language]}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingPage;