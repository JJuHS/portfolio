// import React, { useState, useEffect } from "react";

// function Footprints({ footprintImg, allowedArea, maxFootprints }) {
//     const [footprints, setFootprints] = useState([]);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setFootprints(prev => {
//                 let newFootprints = [...prev];
//                 let lastFootprint = newFootprints.length === 0 ? {
//                     x: allowedArea.x + allowedArea.width / 2 - 200, 
//                     y: allowedArea.y + allowedArea.height / 2,
//                     rotation: 0
//                 } : newFootprints[newFootprints.length - 1];

//                 let angle = 0;
//                 do {
//                     angle = -30 + Math.random() * 60; // 각도를 30도에서 90도 사이로 제한 (2시에서 4시 방향)
//                     let radians = angle * (Math.PI / 180);
//                     let newX = lastFootprint.x + Math.cos(radians) * 20; 
//                     let newY = lastFootprint.y + Math.sin(radians) * 20;

//                     if (newX < allowedArea.x || newX > allowedArea.x + allowedArea.width ||
//                         newY < allowedArea.y || newY > allowedArea.y + allowedArea.height) {
//                         newX = allowedArea.x + allowedArea.width / 2 - 200;
//                         newY = allowedArea.y + allowedArea.height / 2;
//                         lastFootprint = { x: newX, y: newY, rotation: 0 };
//                         break; // 허용된 영역을 벗어나면 시작 위치로 재설정
//                     } else {
//                         lastFootprint = { x: newX, y: newY, rotation: angle - 90 };
//                         break;
//                     }
//                 } while (true);

//                 newFootprints.push({
//                     ...lastFootprint,
//                     opacity: 1
//                 });

//                 newFootprints = newFootprints.map(fp => ({
//                     ...fp,
//                     opacity: fp.opacity - (1 / maxFootprints)
//                 })).filter(fp => fp.opacity > 0);

//                 if (newFootprints.length > maxFootprints) {
//                     newFootprints.shift();
//                 }

//                 return newFootprints;
//             });
//         }, 150);

//         return () => clearInterval(interval);
//     }, [allowedArea, maxFootprints]);

//     return (
//         <div className="absolute inset-0" style={{ left: `${allowedArea.x}px`, top: `${allowedArea.y}px`, width: `${allowedArea.width}px`, height: `${allowedArea.height}px` }}>
//             {footprints.map((footprint, index) => (
//                 <img
//                     key={index}
//                     src={footprintImg}
//                     alt=""
//                     style={{
//                         left: `${footprint.x}px`,
//                         top: `${footprint.y}px`,
//                         transform: `rotate(${footprint.rotation + 180}deg)`,
//                         opacity: footprint.opacity
//                     }}
//                     className="absolute w-6 h-6"
//                 />
//             ))}
//         </div>
//     );
// }

// export default Footprints;


import React, { useState, useEffect } from "react";

function Footprints({ footprintImg, allowedArea, maxFootprints }) {
    const [footprints, setFootprints] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setFootprints(prev => {
                const newFootprint = generateFootprint(prev, allowedArea);
                let newFootprints = updateFootprints(prev, newFootprint, maxFootprints);
                return newFootprints;
            });
        }, 150);

        return () => clearInterval(interval);
    }, [allowedArea, maxFootprints]);

    return (
        <div className="absolute inset-0" style={{ left: `${allowedArea.x}px`, top: `${allowedArea.y}px`, width: `${allowedArea.width}px`, height: `${allowedArea.height}px` }}>
            {footprints.map((footprint, index) => (
                <img
                    key={index}
                    src={footprintImg}
                    alt=""
                    style={{
                        left: `${footprint.x}px`,
                        top: `${footprint.y}px`,
                        transform: `rotate(${footprint.rotation + 180}deg)`,
                        opacity: footprint.opacity
                    }}
                    className="absolute w-6 h-6"
                />
            ))}
        </div>
    );
}

// 새 발자국 찍기 -> 오른쪽(2시~4시)방향, 한걸음
function generateFootprint(previousFootprints, allowedArea) {
    let lastFootprint = previousFootprints.length === 0 || !isValidPosition(previousFootprints[previousFootprints.length - 1].x, previousFootprints[previousFootprints.length - 1].y, allowedArea) ? {
        x: allowedArea.x + allowedArea.width / 2 - 200,
        y: allowedArea.y + allowedArea.height / 2,
        rotation: 0
    } : previousFootprints[previousFootprints.length - 1];

    let angle, newX, newY;
    do {
        angle = -30 + Math.random() * 60; 
        let radians = angle * (Math.PI / 180); 
        newX = lastFootprint.x + Math.cos(radians) * 20;  
        newY = lastFootprint.y + Math.sin(radians) * 20; 

        // 범위 나가면 왼쪽부터 다시 발자국 시작
        if (!isValidPosition(newX, newY, allowedArea)) {
            newX = allowedArea.x + allowedArea.width / 2 - 200;  
            newY = allowedArea.y + allowedArea.height / 2;
            angle = 0;  
        }
    } while (!isValidPosition(newX, newY, allowedArea));

    return { x: newX, y: newY, rotation: angle - 90, opacity: 1 };
}

// 발자국 배열 업데이트
function updateFootprints(previousFootprints, newFootprint, maxFootprints) {
    let newFootprints = [...previousFootprints, newFootprint];
    newFootprints = newFootprints.map(fp => ({
        ...fp,
        opacity: fp.opacity - (1 / maxFootprints)
    })).filter(fp => fp.opacity > 0);

    if (newFootprints.length > maxFootprints) {
        newFootprints.shift();
    }

    return newFootprints;
}

// 허용구역 체크
function isValidPosition(x, y, allowedArea) {
    return x >= allowedArea.x && x <= allowedArea.x + allowedArea.width &&
           y >= allowedArea.y && y <= allowedArea.y + allowedArea.height;
}

export default Footprints;
