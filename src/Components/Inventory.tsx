import '../Styles/Navigation.css'
import '../Styles/Sidebar.css'
import '../Styles/Inventory.modules.css';
import collection_icon from '../Images/collection_icon.png'
import blue_jay from '../Images/BlueJay.png'
import uncollected_parrot from '../Images/Uncollected_Parrot.png'
import NavigationBar from './utils/BlueNavBar'

interface Props {
    getStartedHandler: () => void;
    aboutUsHandler: () => void;
    contactHandler: () => void;
    FAQHandler: () => void;
    ProfileHandler: () => void;
    ProgressHandler: () => void;
    ViewHandler: () => void;
    backToHomeHandler:() => void;
    InventoryHandler:() => void;
    SettingsHandler:() => void;
}

function Inventory({ProfileHandler,
                    getStartedHandler,
                    aboutUsHandler,
                    contactHandler,
                    FAQHandler,
                    ProgressHandler,
                    InventoryHandler,
                    ViewHandler,
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
                currentPage='Inventory'
            />;

            <div className="white-half" style={{ width: '80%', height: '100%', backgroundColor: 'white', position: 'absolute', left: '20%' }}>
                <div className="page-title">
                    <span id="page-title-button" onClick={backToHomeHandler}>Homepage {'>'} </span>
                    <span id="page-title-button" onClick={InventoryHandler}> Inventory </span>
                </div>
                <div id="top-buttons">
                    <button className="info-button" onClick={aboutUsHandler}> About Us </button>
                    <button className="info-button" onClick={contactHandler}> Contact </button>
                    <button className="info-button" onClick={FAQHandler}> FAQ </button>
                    <button className="info-button" onClick={ProfileHandler}> Profile </button>
                </div>
                <button id = "red-name-button">Kelvin</button>
                <div id="top-area">
                    <div id="inventory-title2"> My Collections</div>
                    <div id="collection-progress">
                        <img src={collection_icon} alt="Collection Icon" className='badge-img'/>
                        <span className="progress-text"> Birds 2/40 </span>
                    </div>
                </div>

                <div className="collection-container">
                    <div className="collection-item">
                        <div className='name-text'>Blue Jay</div>
                        <img src={blue_jay} alt="Blue Jay" />
                        <div className='collection-status'>Collected</div>
                        <button className="view-text" onClick={ViewHandler} >View</button>
                    </div>
                    <div className="collection-item">
                        <div className='name-text'>Parrot</div>
                        <img src={uncollected_parrot} alt="Uncollected Parrot" />
                        <div className='collection-status'>Collected</div>
                        <button className="view-text">View</button>
                    </div>
                    <div className="collection-item">
                        <div className='name-text'>Name</div>
                        <div className='collection-status'>Collected</div>
                        <button className="view-text">View</button>
                    </div>
                    <div className="collection-item">
                        <div className='name-text'>Name</div>
                        <div className='collection-status'>Collected</div>
                        <button className="view-text">View</button>
                    </div>
                    <div className="collection-item">
                        <div className='name-text'>Name</div>
                        <div className='collection-status'>Collected</div>
                        <button className="view-text">View</button>
                    </div>
                    <div className="collection-item">
                        <div className='name-text'>Name</div>
                        <div className='collection-status'>Collected</div>
                        <button className="view-text">View</button>
                    </div>
                    <div className="collection-item">
                        <div className='name-text'>Name</div>
                        <div className='collection-status'>Collected</div>
                        <button className="view-text">View</button>
                    </div>
                    <div className="collection-item">
                        <div className='name-text'>Name</div>
                        <div className='collection-status'>Collected</div>
                        <button className="view-text">View</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Inventory;