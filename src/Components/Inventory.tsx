import '../Styles/Navigation.css'
import '../Styles/Sidebar.css'
import '../Styles/Inventory.modules.css';
import collection_icon from '../Images/collection_icon.png'
import blue_jay from '../Images/BlueJay.png'
import uncollected_parrot from '../Images/Uncollected_Parrot.png'
import NavigationBar from './utils/BlueNavBar'
import Navigation from './utils/Navigation';

interface Props {
    getStartedHandler: () => void;
    ProfileHandler: () => void;
    ProgressHandler: () => void;
    ViewHandler: () => void;
    backToHomeHandler:() => void;
    InventoryHandler:() => void;
    SettingsHandler:() => void;
    helpCenterHandler:() => void;
}

function Inventory({ProfileHandler,
                    getStartedHandler,
                    ProgressHandler,
                    InventoryHandler,
                    ViewHandler,
                    backToHomeHandler,
                    helpCenterHandler,
                    SettingsHandler} : Props) {
    return (
        <div style={{ margin: 0, padding: 0, height: '100vh', position: 'relative' }}>
            <NavigationBar 
                ProfileHandler={ProfileHandler}
                getStartedHandler={getStartedHandler}
                InventoryHandler={InventoryHandler}
                ProgressHandler={ProgressHandler}
                SettingsHandler={SettingsHandler}
                helpCenterHandler={helpCenterHandler}
                currentPage='Inventory'
            />;

            <div className="white-half">
                <Navigation 
                    username="Kelvin"
                    redirects={
                        [
                            { page_name: 'Home', page_handler: backToHomeHandler },
                            { page_name: 'Inventory', page_handler: InventoryHandler }
                        ]} 
                />
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