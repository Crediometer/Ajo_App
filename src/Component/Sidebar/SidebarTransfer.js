import Card from '../Card/Card';
import TransferRate from '../Rate/TransferRate';
import './SidebarTransfer.css';
const SidebarTransfer = () => {
    return ( 
        <div className="sidebar sidebar-transfer">
            <div className="sidebarlogo transferlogo">
                <p>Credio.</p>
            </div>
            <div className="navigations transfernavigation">
                <p className="ecard">My E-cards</p>
                <TransferRate/>
                <div className="transfer-card">
                    <div className="first-card"><Card/></div>
                    <div className="second-card"><Card/></div>
                </div>
            </div>
        </div>
    );
}
 
export default SidebarTransfer;