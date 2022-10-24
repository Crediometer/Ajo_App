import { BiArrowBack } from "react-icons/bi";
import Navbar from "../../Component/Navbar/Navbar";
import SidebarTransfer from "../../Component/Sidebar/SidebarTransfer";
import success from '../../image/success2.png'
import './TransferSuccess.css'
const TransferSuccessful = () => {
    return ( 
        <div className="transfer-successful">
            <div className="home">
                <SidebarTransfer/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="body transferContainer">
                        <div className="back">
                            <BiArrowBack/>
                        </div>
                        <div className="transfer-success-outer">
                            <div className="transfer-success-inner">
                                <p className="success-comment"><span>N30,000 </span>would be sent from your Credio pay balance to mosunmoluwa ruth olaleye</p>
                                <div className="img-con">
                                    <img src={success}></img>
                                </div>
                                <div className="button-con">
                                    <button>Confirm transaction</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TransferSuccessful;