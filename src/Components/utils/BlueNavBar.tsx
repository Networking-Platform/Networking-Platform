import '../../Styles/Navigation.css'
import learning_icon from '../../Images/Learning_Icon.png'
import profile_icon from '../../Images/profile_icon.png'
import help_center_icon from '../../Images/help_center_icon.png'
import setting_icon from '../../Images/setting_icon.png'
import theme_icon from '../../Images/theme_icon.png'
import inventory_icon from '../../Images/inventory_icon.png'
import logout_icon from '../../Images/logout_icon.png'
import selected_learning_icon from '../../Images/learning_selected_icon.png'
import selected_profile_icon from '../../Images/profile_selected_icon.png'
import selected_setting_icon from '../../Images/setting_selected_icon.png'
import selected_inventory_icon from '../../Images/inventory_selected_icon.png'
import React, { useState, useEffect } from 'react';
interface Props {
    getStartedHandler: () => void;
    ProfileHandler: () => void;
    InventoryHandler: () => void;
    ProgressHandler: () => void;
    SettingsHandler:() => void;
    currentPage: string;
}

function BlueNavBar({ProfileHandler,
                    getStartedHandler,
                    InventoryHandler,
                    ProgressHandler,
                    SettingsHandler,
                    currentPage} : Props) {

    // const [activeButton, setActiveButton] = useState('Profile');
    let progressButtonId: string = (currentPage === 'Progress' ? "sidebar-selected-learning-progress-button" : 'sidebar-learning-progress-button')
    let profileButtonId: string = (currentPage === 'Profile' ? "sidebar-selected-profile-button" : "sidebar-profile-button")
    let settingsButtonId: string = (currentPage === 'Settings' ? "sidebar-selected-setting-button" : "sidebar-setting-button")
    let inventoryButtonId: string = (currentPage === 'Inventory' || currentPage === 'View' ? "sidebar-selected-inventory-button": "sidebar-inventory-button")
    const NavbarButtonHandler = (buttonName: string) => {
        if (buttonName === 'Profile'){ProfileHandler()};
        if (buttonName === 'Inventory'){InventoryHandler()};
        if (buttonName === 'Progress'){ProgressHandler()};
        if (buttonName === 'Settings'){SettingsHandler()};
        if (buttonName === 'Signout'){getStartedHandler()};
    };

    const getImage = (imageName: string) => {
        if (imageName === 'Progress') {
            return currentPage === 'Progress' ? selected_learning_icon : learning_icon;
        }
        if (imageName === 'Profile') {
            return currentPage === 'Profile' ? selected_profile_icon : profile_icon;
        }
        if (imageName === 'HelpCenter') {
            return help_center_icon;
        }
        if (imageName === 'Settings') {
            return currentPage === 'Settings' ? selected_setting_icon : setting_icon;
        }
        if (imageName === 'Theme') {
            return theme_icon;
        }
        if (imageName === 'Inventory') {
            return currentPage === 'Inventory' ? selected_learning_icon : inventory_icon;
        }
    }
    
    return (
        <div className="blue-half" style={{ width: '20%', height: '100vh', overflow: 'hidden', backgroundColor: '#3127A0', position: 'absolute', left: 0 }}>
            <div id="website-title">Website.com</div>
            <button id={progressButtonId} onClick={() => {console.log(progressButtonId); NavbarButtonHandler('Progress')}}>
                <img src={getImage('Progress')} alt="Learning icon"/>
                Learning Progress
            </button>
            <button id={profileButtonId} onClick={() => {console.log(profileButtonId); NavbarButtonHandler('Profile')}}>
                <img src={getImage('Profile')} alt="Selected Profile Icon"/>
                Profile
            </button>
            <button id="sidebar-help-center-button">
                <img src={getImage('HelpCenter')} alt="Help Center Icon"/>
                Help Center
            </button>
            <button id={settingsButtonId}  onClick={() => {console.log(settingsButtonId); NavbarButtonHandler('Settings')}}>
                <img src={getImage('Settings')} alt="Setting Icon"/>
                Setting
            </button>
            <button id="sidebar-theme-button">
                <img src={getImage('Theme')} alt="Theme Icon"/>
                Theme
            </button>
            <button id={inventoryButtonId} onClick={() => {console.log(inventoryButtonId); NavbarButtonHandler('Inventory')}}>
                <img src={getImage('Inventory')} alt="Inventory Icon"/>
                Inventory
            </button>
            <div id="separation-line"></div>
            <button id="sidebar-logout-button" onClick={getStartedHandler}>
                <img src={logout_icon} alt="Logout Icon"/>
                Log out
            </button>
        </div>
    );
}

export default BlueNavBar;