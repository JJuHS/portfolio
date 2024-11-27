import React from "react";
import PropTypes from "prop-types";

const ContentBar = ({ menuItems }) => {
    const scrollToSection = (id) => {

        try {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } catch (error) {
            console.error('Scroll failed:', error);
        } finally {
            window.scrollBy(0, -96)
        }
    };

    return (
        <div className="fixed top-20 right-5 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50">
            <ul className="space-y-2">
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <button
                            className="text-sm hover:underline"
                            onClick={() => scrollToSection(item.id)}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

ContentBar.propTypes = {
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ContentBar;

// import React from "react";
// import PropTypes from "prop-types";

// const ContentBar = ({ menuItems }) => {
//     const scrollToSection = (id) => {
//         const element = document.getElementById(id);
//         if (element) {
//             const offset = 96; // Tailwind's h-24 (24 * 4px = 96px)
//             const elementPosition = element.getBoundingClientRect().top + window.scrollY; // 현재 스크롤 위치에 상대 위치를 더합니다.
//             const adjustedPosition = elementPosition - offset; // 오프셋 적용

//             window.scrollTo({
//                 top: adjustedPosition,
//                 behavior: "smooth",
//             });
//         } else {
//             console.error(`Element with id '${id}' not found.`);
//         }
//     };
    

//     return (
//         <div className="fixed top-20 right-5 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50">
//             <ul className="space-y-2">
//                 {menuItems.map((item) => (
//                     <li key={item.id}>
//                         <button
//                             className="text-sm hover:underline"
//                             onClick={() => scrollToSection(item.id)}
//                         >
//                             {item.label}
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// ContentBar.propTypes = {
//     menuItems: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             label: PropTypes.string.isRequired,
//         })
//     ).isRequired,
// };

// export default ContentBar;

