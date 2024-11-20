import React from "react";
import { Disclosure, Menu  } from "@headlessui/react";
import NavLogo from "../../Assets/logo/NavLogo.png";
import { useNavigate } from "react-router-dom";
import '../../styles/common/NavbarCss.css'

function Navbar () {
    const navigate = useNavigate();

    const navbarList = [
        { name: "Home", current: false },
        { name: "Projects", current: false },
        { name: "Information", current: false },
        { name: "Play", current: false },
    ]; 

    const gridOneEmpty = ({ 
        ms="auto", 
        me="auto", 
        mt="auto", 
        mb="auto", 
        ps="auto", 
        pe="auto", 
        pt="auto", 
        pb="auto", 
        bgc="inherit", 
        h="auto", 
        w="auto", 
        mh="auto", 
        mw="auto" } = {}) => {
        return (
            <div className="col-span-1"></div>
        )
    }

    const handleNavItemClick = (toward) => {
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
            <div>
                <div className="grid grid-cols-12 h-16 w-full border-b-2 bg-transparent">
                    {gridOneEmpty()}
                    {gridOneEmpty()}
                    <div className="col-span-8 relative flex items-center justify-between min-h-16">
                        {/* 로고 */}
                        <div className="flex items-center" id="nav-logo">
                            <img 
                                alt="logo"
                                src={NavLogo}
                                className="h-10 w-10 cursor-pointer rounded-2xl border border-white"
                                onClick={() => handleNavItemClick("logo")} 
                            />
                        </div>
                        {/* 네브 메뉴 */}
                        {/* 1. screen size ~ 768px */}
                        <div className="md:hidden items-center justify-end">
                            <Menu as="div" className="relative inline-block text-white">
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
                                    <span className="flex justify-center text-xl">{item.name}</span>
                                </p>
                            ))}
                        </div>
                        {/* 3. screen size 1280px ~ */}
                        <div className="hidden lg:flex">
                            {navbarList.map((item) => (
                                <p
                                    key={item.name}
                                    onClick={() => handleNavItemClick(item.name)}
                                    aria-current={item.current ? "page" : undefined}
                                    className="navbar-item-hover cursor-pointer text-white items-center ms-3 p-1"
                                >
                                    <span className="flex justify-center text-xl">{item.name}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                    {gridOneEmpty()}
                    {gridOneEmpty()}
                </div>
            </div>
        </Disclosure>
    )
}

export default Navbar;