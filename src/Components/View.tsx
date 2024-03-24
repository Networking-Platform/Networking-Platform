import '../Styles/Inventory.modules.css';
import '../Styles/View.modules.css';
import NavigationBar from './utils/BlueNavBar'
import blue_jay from '../Images/blue_jay_view.png'
import Navigation from './utils/Navigation';

interface Props {
    getStartedHandler: () => void;
    aboutUsHandler: () => void;
    contactHandler: () => void;
    FAQHandler: () => void;
    ProfileHandler: () => void;
    ViewHandler: () => void;
    backToHomeHandler:() => void;
    InventoryHandler: () => void;
    SettingsHandler: () => void;
    ProgressHandler: () => void;
}

function View({ProfileHandler,
                    getStartedHandler,
                    aboutUsHandler,
                    contactHandler,
                    FAQHandler, 
                    ViewHandler,
                    InventoryHandler,
                    backToHomeHandler,
                    SettingsHandler,
                    ProgressHandler} : Props) {
    return (
        <div style={{ margin: 0, padding: 0, height: '100vh', position: 'relative' }}>
            <NavigationBar 
                ProfileHandler={ProfileHandler}
                getStartedHandler={getStartedHandler}
                InventoryHandler={InventoryHandler}
                ProgressHandler={ProgressHandler}
                SettingsHandler={SettingsHandler}
                currentPage='View'
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
                            { page_name: 'Inventory', page_handler: InventoryHandler },
                            { page_name: 'View', page_handler: ViewHandler }
                        ]} 
                />;
                
                <div id="showcase-box">
                    <img src={blue_jay} alt="Blue Jay View"/>
                    <div id="view-name">Blue Jay</div>
                    <div id="view-description">"Hey there! Fancy meeting you here. I'm a blue jay, always on the lookout for curious soulslike you. Enjoy your stay!"</div>
                </div>
                <div id="acquistion-text">Acquisition conditions</div>
                <div id="acquistion-box">
                    <div id="acquistion-description">Click the bird during the first lesson</div>
                </div>
            </div>
        </div>
    );
}

export default View;