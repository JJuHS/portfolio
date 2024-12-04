import React from "react";
import { Disclosure, Menu  } from "@headlessui/react";
import NavLogo from "../../Assets/logo/NavLogo.png";
import { useLocation, useNavigate } from "react-router-dom";
import '../../styles/common/NavbarCss.css'
import useStyleStore from '../../store/StyleStore.jsx'
import HomeImage from '../../Assets/static/HomeImage.png'
import ProjectsIcon from '../../Assets/static/ProjectsIcon.png'
import InformationIcon from '../../Assets/static/InformationIcon.png'
import PlayIcon from '../../Assets/static/PlayIcon.png'
import GitHubIcon from '../../Assets/static/GitHubIcon.png'
import TistoryIcon from '../../Assets/static/TistoryIcon.png'
import { nationImgStore } from "../../store/ImageStore.jsx";


function Navbar () {
    const navigate = useNavigate();
    const location = useLocation();
    const gridOneEmpty= useStyleStore((state) => state.gridOneEmpty);
    
    const usaIcon = nationImgStore.getState().usaIcon;
    const krIcon = nationImgStore.getState().koreaIcon;

    const navbarList = [
        { name: "Home", icon:HomeImage, current: false },
        { name: "Projects", icon:ProjectsIcon, current: false },
        { name: "Information", icon:InformationIcon, current: false },
        { name: "Play", icon:PlayIcon, current: false },
    ]; 
    const outLinkList = [
        { name: "GitHub", icon:GitHubIcon, current:false, url:"https://github.com/jjuHS/portfolio/" },
        { name: "Tistory", icon:TistoryIcon, current:false, url:"https://developer-traxer.tistory.com/" },
    ]

    const setLanguage = (lan) => {
        switch (lan) {
            case "en":
                localStorage.setItem("language", "en");
                window.location.reload();
                break;
            case "kr":
                localStorage.setItem("language", "kr");
                window.location.reload();
                break;
            default:
                break;
        }
    }

    const handleNavItemClick = (toward) => {
        const currentPage = location.pathname
        if (`/${toward.toLowerCase()}` === currentPage) return; // 이미 해당페이지면 이동 X

        switch (toward) {
            case "logo":
                navigate('/')
                break;
            case "Home":
                navigate('/')
                break;
            case "Projects":
                navigate('/projects')
                break;
            case "Play":
                navigate('/play')
                break;
            case "Information":
                navigate('/information')
                break;
            default:
                break;
        }
    }
    return (
        <Disclosure>
            <div className="sticky top-0 z-40 backdrop-blur w-full mt-0 md:mt-1 lg:mt-0">
                <div className="grid grid-cols-12 h-16 w-full">
                    {gridOneEmpty()}
                    {gridOneEmpty()}
                    <div className="col-span-9 relative flex items-center justify-between min-h-16">
                        {/* 로고 */}
                        <div className="flex items-center" id="nav-logo">
                            <img 
                                alt="logo"
                                src={NavLogo}
                                className="h-10 w-10 cursor-pointer rounded-2xl border border-white mt-1 md:mt-0 lg:mt-1"
                                onClick={() => handleNavItemClick("logo")} 
                            />
                        </div>
                        {/* 네브 메뉴 */}
                        {/* 1. screen size ~ 768px */}
                        <div className="md:hidden items-center justify-end">
                            <Menu as="div" className="relative inline-block text-white ">
                                {/* 햄버거아이콘 */}
                                <Menu.Button 
                                    className="flex items-center hover:bg-main p-2 rounded-xl bg-main-heavy-dark"
                                    // inline-flex justify-center 0 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </Menu.Button>
                                {/* 드롭다운 메뉴들 */}
                                <Menu.Items 
                                    className="bg-main-dark rounded absolute right-0 w-56 mt-2 origin-top-right rounded-xl nav-dropdown-item-list opacity-80 border-none"
                                    as="div"
                                >
                                        {navbarList.map((item) => (
                                            <Menu.Item>
                                                <p
                                                    key={item.name}
                                                    onClick={() => handleNavItemClick(item.name)}
                                                    aria-current={item.current ? "page" : undefined}
                                                    className="hover:border-none navbar-item-hover cursor-pointer text-white items-center p-3 z-index-50 backdrop-blur-sm"
                                                >
                                                    <span className="flex justify-center text-xl">
                                                        <img src={item.icon} alt="" className="nav-item-icon"/>&nbsp;
                                                        <span className="border-b">{item.name}</span>
                                                    </span>
                                                </p>
                                            </Menu.Item>
                                        ))}
                                        {outLinkList.map((item) => (
                                            <Menu.Item>
                                                <p className="hover:border-none navbar-item-hover cursor-pointer text-white items-center p-3 z-index-50 backdrop-blur-sm">
                                                    <a
                                                        href={item.url}
                                                        key={item.name}
                                                        aria-current={item.current ? "page" : undefined}
                                                        target="blank"
                                                    >
                                                        <span className="flex justify-center text-xl">
                                                            <img src={item.icon} alt="" className="nav-item-icon"/>&nbsp;
                                                            <span className="border-b">{item.name}</span>
                                                        </span>
                                                    </a>
                                                </p>
                                            </Menu.Item>
                                        ))}
                                </Menu.Items>
                            </Menu>
                        </div>
                        {/* 2. screen size 768px ~ 1280px */}
                        <div className="hidden flex-none md:flex lg:hidden items-center justify-end">
                            {navbarList.map((item) => (
                                <p
                                    key={item.name}
                                    onClick={() => handleNavItemClick(item.name)}
                                    aria-current={item.current ? "page" : undefined}
                                    className="navbar-item-hover cursor-pointer text-white items-center ms-3 p-1"
                                >
                                    <span className="flex justify-center text-xl">
                                        <img src={item.icon} alt="" className="nav-item-icon"/>
                                    </span>
                                    <span>{item.name}</span>

                                </p>
                            ))}
                            {outLinkList.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.url}
                                    target="blank"
                                    aria-current={item.current ? "page" : undefined}
                                    className="navbar-item-hover cursor-pointer text-white items-center ms-3 p-1"
                                >
                                    <span className="flex justify-center text-xl">
                                        <img src={item.icon} alt="" className="nav-item-icon"/>
                                    </span>
                                    <span>{item.name}</span>

                                </a>
                            ))}
                        </div>
                        {/* 3. screen size 1280 ~ 1536 */}
                        <div className="hidden flex-none lg:flex xl:hidden items-center justify-end">
                            {navbarList.map((item) => (
                                <p
                                    key={item.name}
                                    onClick={() => handleNavItemClick(item.name)}
                                    aria-current={item.current ? "page" : undefined}
                                    className="navbar-item-hover cursor-pointer text-white items-center ms-3 p-1"
                                >
                                    <span className="flex justify-center text-xl">
                                        <img src={item.icon} alt="" className="nav-item-icon"/>&nbsp;
                                        {item.name}
                                    </span>
                                </p>
                            ))}
                            {outLinkList.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.url}
                                    target="blank"
                                    aria-current={item.current ? "page" : undefined}
                                    className="navbar-item-hover cursor-pointer text-white items-center ms-3 p-1"
                                >
                                    <span className="flex justify-center text-xl">
                                        <img src={item.icon} alt="" className="nav-item-icon"/>
                                    </span>
                                    <span>{item.name}</span>
                                </a>
                            ))}
                        </div>
                        {/* 4. screen size 1536 ~ */}
                        <div className="hidden xl:flex">
                            {navbarList.map((item) => (
                                <p
                                    key={item.name}
                                    onClick={() => handleNavItemClick(item.name)}
                                    aria-current={item.current ? "page" : undefined}
                                    className="navbar-item-hover cursor-pointer text-white items-center ms-3 p-1"
                                >
                                    <span className="flex justify-center text-xl">
                                        <img src={item.icon} alt="" className="nav-item-icon"/>&nbsp;
                                        {item.name}
                                    </span>
                                </p>
                            ))}
                            {outLinkList.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.url}
                                    target="blank"
                                    aria-current={item.current ? "page" : undefined}
                                    className="navbar-item-hover cursor-pointer text-white items-center ms-3 p-1"
                                >
                                    <span className="flex justify-center text-xl">
                                        <img src={item.icon} alt="" className="nav-item-icon"/>&nbsp;
                                        {item.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                    {gridOneEmpty()}
                </div>
                <div className="flex justify-end w-11/12">
                    <img src={krIcon} alt="" className="w-8 h-8 bg-main rounded ms-2 cursor-pointer" onClick={() => setLanguage("kr")} />
                    <img src={usaIcon} alt="" className="w-8 h-8 bg-main rounded ms-2 cursor-pointer" onClick={() => setLanguage("en")} />
                </div>
            </div>
        </Disclosure>
    )
}

export default Navbar;