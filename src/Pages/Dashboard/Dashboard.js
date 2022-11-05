
import Navbar from '../../Component/Navbar/Navbar';
import Sidebar from '../../Component/Sidebar/Sidebar';
import {BiArrowBack} from 'react-icons/bi';
import {FaUsers, FaUserAlt, FaPlus} from 'react-icons/fa';
import {IoPaperPlaneOutline, IoPersonOutline} from 'react-icons/io5'
import {BsArrowRight, BsPiggyBank, BsThreeDots} from 'react-icons/bs';
import {AiOutlineEyeInvisible} from 'react-icons/ai';
import {RiFileCopyFill} from 'react-icons/ri'
import {MdArrowDropDown, MdArrowDropUp} from 'react-icons/md';
import Card from '../../Component/Card/Card';
import { TransferData } from './TransferData';
import help from "../../image/help.png";
import { Link } from 'react-router-dom';
import './Dashboard.css';
import DashboardTable from '../../Component/Table/DashboardTable';
import TransferRate from '../../Component/Rate/TransferRate';
import SidebarMobile from '../../Component/Sidebar/SidebarMobile';
const Dashboard = () => {

    return ( 
        <div className="dashboard">
            <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="body dashboard-body">
                        <div className="dashboard-inner">
                            <div className="dashboard-main">
                                <div className="dashboard-welcome">
                                    <p className="welcome-back">Welcome back <span>Richard,</span></p>
                                    <p className="welcome-pending">You have a pending transaction to your credio pay account</p>
                                </div>
                                <div className="dashboard-card">
                                <div className="card">
                                    <div className="card-header">
                                        <p>Credio Pay</p>
                                        <AiOutlineEyeInvisible/>
                                    </div>
                                    <div className="card-body">
                                        <p className="balance">Balance:</p>
                                        <p className="balance-amount">N378,032<span className='dot'>.</span><span className='decimal'>00</span></p>
                                        <p className="account-number">XD083...9452 <span><RiFileCopyFill/></span></p>
                                    </div>
                                </div>
                                <div className="card card-2">
                                    <div className="card-header">
                                        <p>Credio Pay</p>
                                        <AiOutlineEyeInvisible/>
                                    </div>
                                    <div className="card-body">
                                        <p className="balance">Balance:</p>
                                        <p className="balance-amount">N378,032<span className='dot'>.</span><span className='decimal'>00</span></p>
                                        <p className="account-number">XD083...9452 <span><RiFileCopyFill/></span></p>
                                    </div>
                                </div>
                                </div>
                                <div className="quick-action">
                                    <p className="action-text">Quick Action</p>
                                    <div className="quick-action-nav">
                                        <div className="fund-account">
                                        <div className="fund-account-icon"><FaPlus/></div>
                                            <p className="fund-text">Fund account</p>
                                        </div>
                                        <Link to='/transfer'>
                                            <div className="fund-account">
                                                <div className="fund-account-icon"><IoPaperPlaneOutline/></div>
                                                <p className="fund-text">Transfer</p>
                                            </div>
                                        </Link>
                                        <div className="fund-account">
                                            <div className="fund-account-icon"><IoPersonOutline/></div> 
                                            <p className="fund-text">Ask Friend</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dashboard-ajo">
                                    <Link to='/ajo'>
                                        <div className="group-card">
                                            <FaUsers className='card-icon'/>
                                            <p>Group Hoop</p>
                                        </div>
                                    </Link>
                                    <Link to='/matchajo'>
                                        <div className="match-card">
                                            <span><FaUserAlt className='card-icon'/><BsArrowRight className='card-icon'/><FaUsers className='card-icon'/></span>
                                            <p>Matching Hoop</p>
                                        </div>
                                    </Link>
                                    <Link to='/personalajo'>
                                        <div className="personal-card">
                                            <BsPiggyBank className='card-icon'/>
                                            <p>Personal Savings</p>
                                        </div>
                                    </Link>
                                    <Link>
                                        <div className="more-card">
                                                <BsThreeDots className='card-icon'/>
                                                <p>More</p>
                                            </div>
                                    </Link>
                                </div>
                                <div className="dashboard-transaction">
                                    <DashboardTable/>
                                </div>
                            </div>
                            <div className="dashboard-right">
                                <TransferRate/>
                                <div className="recent-transfer">
                                    <p className="transfer">Recent Transfer</p>
                                    <div className="tranfer-data">
                                        {TransferData.map((transfer)=>{
                                            return(
                                                <div className="transfer-individual">
                                                    <img src={transfer.image} className="transfer-img"></img>
                                                    <div className="transfer-text">
                                                        <p className='transfer-name'>{transfer.name}</p>
                                                        <p className='transfer-account'>{transfer.account}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="help">
                                    <div className="img-con">
                                        <img src={help}></img>
                                    </div>
                                    <p className="need-help">Need help ?</p>
                                    <div className="button-con">
                                        <button>Contact us</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SidebarMobile/>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;