import '../Styles/Inventory.modules.css';
import '../Styles/View.modules.css';
import NavigationBar from './utils/BlueNavBar'
import blue_jay from '../Images/blue_jay_view.png'

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
                <div className="page-title">
                    <span id="page-title-button" onClick={backToHomeHandler}>Homepage {'>'} </span>
                    <span id="page-title-button" onClick={InventoryHandler}> Inventory {'>'} </span>
                    <span id="page-title-button" onClick={ViewHandler}> View </span>
                </div>
                <div id="inventory-top-buttons">
                    <button className="inventory-info-button" onClick={aboutUsHandler}> About Us </button>
                    <button className="inventory-info-button" onClick={contactHandler}> Contact </button>
                    <button className="inventory-info-button" onClick={FAQHandler}> FAQ </button>
                    <button className="inventory-info-button" onClick={ProfileHandler}> Profile </button>
                </div>
                <button id = "red-name-button">Kelvin</button>
                
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