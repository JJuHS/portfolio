import React from "react";
import { Route, Routes } from 'react-router-dom';
import Play from '../components/Play/Play.jsx';

function Paint() {
    return (
        <div className="w-screen h-screen overflow-hidden flex flex-row">
            <div className="w-1/5"></div>
            <iframe 
            src={`${process.env.REACT_APP_HTML_URL}/paint/paint.html`} 
            className="w-3/5 rounded block"
            />
        </div>
    )
}

function Minesweeper() {
    return (
        <div className="w-screen h-screen overflow-hidden flex flex-row">
            <div className="w-1/5"></div>
            <iframe 
            src={`${process.env.REACT_APP_HTML_URL}/minesweeper/minesweeper.html`} 
            className="w-3/5 rounded block"
            />
        </div>
    )
}

function Game2048() {
    return (
        <div className="w-screen h-screen overflow-hidden flex flex-row">
            <div className="w-1/5"></div>
            <iframe 
            src={`${process.env.REACT_APP_HTML_URL}/2048/2048.html`} 
            className="w-3/5 rounded block"
            />
        </div>
    )
}


function PlayRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Play />} />
            <Route path="/paint" element={<Paint/>}></Route>
            <Route path="/minesweeper" element={<Minesweeper/>}></Route>
            <Route path="/2048" element={<Game2048/>}></Route>
        </Routes>
    )
}

export default PlayRoutes;
