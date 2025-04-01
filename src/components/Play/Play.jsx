import React from "react";
import { FaList, FaTh } from "react-icons/fa"; 

function Play() {
    return (
        <div>
            <div className="flex mt-3 h-16">
                <div className="w-1/4"></div>
                <div className="border-t border-b w-1/2 flex justify-center items-center">
                    <p className="text-center text-white">Mini Game</p>
                </div>
                <div className="w-1/4"></div>
            </div>
            <div className="flex mt-3 h-8">
                <div className="w-1/6"></div>
                <div className="border-b w-2/3 flex justify-end items-center gap-3 pr-4">
                    <FaList className="text-white text-xl cursor-pointer" />
                    <FaTh className="text-white text-xl cursor-pointer" />
                </div>
                <div className="w-1/6"></div>
            </div>
        </div>
    );
}

export default Play;
