import SidebarTransfer from "../../Component/Sidebar/SidebarTransfer";
import Navbar from "../../Component/Navbar/Navbar";
import { BiArrowBack } from "react-icons/bi";
import TransferUser from "../../Component/Form/TransferUser";
import './TransferForm.css';
import { Link } from "react-router-dom";
const TransferForm = () => {
    return ( 
        <div className="transfer-form">
            <div className="home">
                <SidebarTransfer/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="body transferContainer">
                        <div className="back">
                            <Link to='/transfer'>
                                <BiArrowBack/>
                            </Link>
                            <p className="title">Transfer to a third part using credio pay</p>
                        </div>
                        <div className="transfer-form-outer">
                            <div className="transfer-form-inner">
                                <TransferUser/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TransferForm;