import React from "react";
import GitHubIcon from '../../Assets/static/GitHubIcon.png';
import TistoryIcon from '../../Assets/static/TistoryIcon.png';

function ProfileCard ({ language, profileData }) {
    return (
        <div className="flex flex-row justify-center items-center" id="profile">
            <div className="flex flex-col items-center justify-center w-1/5">
                <img src={profileData.img} alt="Jung Ho Sung" className="w-40 h-40 rounded-full mb-4 border-4 border-main-semi-light"/>
                <h1 className="text-2xl font-bold">{profileData.name[language]}</h1>
                <p className="text-main-semi-light">{profileData.shortDescription[language]} </p>
            </div>
            <div className="flex flex-col w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                <span className="flex flex-row justify-between text-main-light m-2">
                    <span>EMAIL</span>
                    {profileData.contact.email}
                </span>
                <span className="flex flex-row justify-between text-main-light m-2">
                    <span>PHONE</span>
                    {profileData.contact.phone}
                </span>
                <div className="flex flex-row justify-between items-center m-2">
                    <span>SITE LINK </span>
                    <div className="flex flex-row justify-end">
                        <a href={profileData.linkList.github}>
                            <img src={GitHubIcon} alt="" className="cursor-pointer h-6 w-6 ms-3" />  
                        </a>
                        <a href={profileData.linkList.blog}>
                            <img src={TistoryIcon} alt="" className="cursor-pointer h-6 w-6 ms-3" />  
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;

