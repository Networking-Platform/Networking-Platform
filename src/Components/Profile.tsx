import '../Styles/Navigation.css'
import '../Styles/Sidebar.css'
import '../Styles/Profile.modules.css';
import edit_icon from '../Images/Edit_icon.png'
import Navigation from './utils/Navigation';
import NavigationBar from './utils/BlueNavBar'

interface Props {
    getStartedHandler: () => void;
    aboutUsHandler: () => void;
    contactHandler: () => void;
    FAQHandler: () => void;
    ProfileHandler: () => void;
    InventoryHandler: () => void;
    ProgressHandler: () => void;
    backToHomeHandler:() => void;
    SettingsHandler:() => void;
}

function Profile({ProfileHandler,
                    getStartedHandler,
                    aboutUsHandler,
                    contactHandler,
                    FAQHandler,
                    InventoryHandler,
                    ProgressHandler,
                    backToHomeHandler,
                    SettingsHandler} : Props) {
    return (
        <div style={{ margin: 0, padding: 0, height: '100vh', position: 'relative' }}>
            
            <NavigationBar 
                ProfileHandler={ProfileHandler}
                getStartedHandler={getStartedHandler}
                InventoryHandler={InventoryHandler}
                ProgressHandler={ProgressHandler}
                SettingsHandler={SettingsHandler}
                currentPage='Profile'
            />;

            <div className="white-half" style={{ width: '80%', height: '100%', backgroundColor: 'white', position: 'absolute', left: '20%' }}>
                <Navigation 
                    aboutUsHandler={aboutUsHandler}
                    contactHandler={contactHandler}
                    FAQHandler={FAQHandler}
                    profileHandler={ProfileHandler}
                    username="Kelvin"
                    redirects={
                        [
                            { page_name: 'Home', page_handler: backToHomeHandler },
                            { page_name: 'Profile', page_handler: ProfileHandler }
                        ]} 
                />;

                <div id="profile-background">
                    <div id="avatar"></div>
                    <div id="username">Kelvin</div>
                    <div id="bio">Hello, World!</div>
                    <button id="edit-button">
                        <img src={edit_icon} alt="Edit icon"/>
                        Edit
                    </button>
                </div>

                <div id="info-slot-topleft">
                    <div id="info-slot-icon"></div>
                    <div id="info-slot-title">Learning Progress</div>
                    <div id="info-slot-stats">5%</div>
                </div>
                <div id="info-slot-topright">
                    <div id="info-slot-icon"></div>
                    <div id="info-slot-title">Has Focused</div>
                    <div id="info-slot-stats">100 Minutes</div>
                </div>
                <div id="info-slot-bottomleft">
                    <div id="info-slot-icon"></div>
                    <div id="info-slot-title">Collections</div>
                    <div id="info-slot-stats">5</div>
                </div>
                <div id="info-slot-bottomright">
                    <div id="info-slot-icon"></div>
                    <div id="info-slot-title">Current Status</div>
                    <div id="info-slot-stats">Beginner</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;