// import React from "react";
// import { Route, Routes } from 'react-router-dom';
// import Play from '../components/Play/Play.jsx';

// function Paint() {
//     return (
//         <div className="w-screen h-screen overflow-hidden flex flex-row">
//             <div className="w-1/5"></div>
//             <iframe 
//             src={`${process.env.PUBLIC_URL}/for_html/paint/paint.html`} 
//             className="w-3/5 rounded block"
//             />
//         </div>
//     )
// }

// function PlayRoutes () {
//     return (
//         <Routes>
//             <Route path="/" element={<Play />} />
//             <Route path="/paint" element={<Paint/>}></Route>
//         </Routes>
//     )
// }

// export default PlayRoutes;


import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Play from '../components/Play/Play.jsx';

function Paint() {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/for_html/paint/paint.txt`)
            .then(response => response.text())
            .then(data => {
                setHtmlContent(data);
            })
            .catch(error => console.error('Error loading the HTML:', error));
    }, []);

    return (
        <div className="w-screen h-screen overflow-hidden flex flex-row">
            <div className="w-1/5"></div>
            <div
                className="w-3/5 rounded block overflow-auto"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
        </div>
    );
}

function PlayRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Play />} />
            <Route path="/paint" element={<Paint />} />
        </Routes>
    );
}

export default PlayRoutes;
