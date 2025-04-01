import React from "react";
import GithubIcon from '../../Assets/static/GitHubIcon.png'
import TistoryIcon from '../../Assets/static/TistoryIcon.png'
import '../../styles/common/FooterCss.css'

function Footer () {
    return (
        <div className="fixed bottom-0 opacity-75 flex items-center justify-between h-16 w-full px-40 bg-main-heavy-dark text-main-light mt-20">
                <div>Designed and Developed by JungHoSung</div>
                <div>Copyright © 2024 JHS</div>
                <div className="flex">
                    <a href="https://github.com/JJuHS" target="_blank" rel="noopener noreferrer">
                        <img src={GithubIcon} alt="GitHub" className="footer-link-item-icon"/>
                    </a>
                    <a href="https://developer-traxer.tistory.com/" target="_blank" rel="noopener noreferrer">
                        <img src={TistoryIcon} alt="Tistory" className="footer-link-item-icon"/>
                    </a>
                </div>
            </div>
    )
}

export default Footer;