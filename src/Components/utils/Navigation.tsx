import React, { useState } from 'react';
import "../../Styles/Navigation.css"

interface NavigationProps {
    aboutUsHandler: () => void;
    contactHandler: () => void;
    FAQHandler: () => void;
    profileHandler: () => void;
    username: string;
    redirects: {
        page_name: string;
        page_handler: () => void;
    }[];
}

const Navigation: React.FC<NavigationProps> = ({
    aboutUsHandler,
    contactHandler,
    FAQHandler,
    profileHandler,
    username,
    redirects
}) => {
    return (
        <div>
            <div className="page-title">
                {redirects.map((button, index) => (
                    <span key={index} id="page-title-button" onClick={button.page_handler}>
                        {button.page_name} {index < redirects.length - 1 && '>'}
                    </span>
                ))}
            </div>
            <div id="top-buttons">
                <button className="info-button" onClick={aboutUsHandler}> About Us </button>
                <button className="info-button" onClick={contactHandler}> Contact </button>
                <button className="info-button" onClick={FAQHandler}> FAQ </button>
                <button className="info-button" onClick={profileHandler}> Profile </button>
            </div>
            <button id="red-name-button">{username}</button>
        </div>
    );
};

export default Navigation;