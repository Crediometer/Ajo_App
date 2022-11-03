import {BiSearch, BiArrowBack} from 'react-icons/bi';
import Sidebar from '../../Component/Sidebar/Sidebar';
import Navbar from '../../Component/Navbar/Navbar';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import './Transfer.css' ;
import SidebarTransfer from '../../Component/Sidebar/SidebarTransfer';
import { TransferData } from '../../Component/Table/TransferData';
import {BiChevronRight} from 'react-icons/bi';
const Transfer = () => {
    return ( 
        <div className="transfer">
            <div className="home">
                <SidebarTransfer/>
                <div className="homeContainer ">
                    <Navbar/>
                    <div className="body transferContainer">
                        <Link to='/dashboard'>
                            <div className="back">
                                <BiArrowBack/>
                            </div>
                        </Link>
                        <div className="transfer-outer">
                            <div className="transfer-inner">
                                <div className="transfer-top">
                                    <div className="recent-recepient">
                                        <p className="recent-recepient-name">Recent recepients</p>
                                            <div className="recepient-details">
                                                {TransferData.map((transfer)=>{
                                                    return(
                                                        <div className="recepient-individual">
                                                            <img src={transfer.image}></img>
                                                            <p>{transfer.name}</p>
                                                        </div>
                                                    );
                                                })}
                                            </div> 
                                    </div>
                                    <div className="search-screen">

                                    </div>
                                    <div className="transfer-search">
                                        <BiSearch/>
                                        <input
                                        type="text"
                                        name="search"
                                        placeholder= "Search by name"
                                        >
                                        </input>
                                    </div>
                                    <div className="transfer-search transfer-search-2">
                                        <BiSearch/>
                                        <input
                                        type="text"
                                        name="search"
                                        placeholder= "Search by account number"
                                        >
                                        </input>
                                    </div>
                                </div>
                                <div className="transfer-table">
                                    <p className="transfer-title">Most recent transfer</p>
                                    <Table className='recent-transfer'>
                                        <tbody>
                                            {TransferData.map((transfer)=>{
                                                return(
                                                    <tr className='transfer-row'>
                                                        <td>
                                                            <div className="user-detail">
                                                                <img src={transfer.image}></img>
                                                                <p>{transfer.name}</p>
                                                            </div>
                                                        </td>
                                                        <td className='transfer-account2'>{transfer.accountnumber}</td>
                                                        <td>
                                                            <div className="transfer-next">
                                                                <Link to='/transfer/form'>
                                                                    <BiChevronRight/>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </Table>
                                    {TransferData.map((transfer)=>{
                                        return(
                                            <div className="recent-transfer-mobile">
                                                <div className="recent-mobile-name-image">
                                                    <div className="recent-mobile-image">
                                                        <img src={transfer.image} ></img>
                                                    </div>
                                                    <div className="recent-mobile-name">
                                                        <p className="recen">{transfer.name}</p>
                                                        <p className="recent-mobile-account">{transfer.accountnumber}</p>
                                                    </div>
                                                </div>
                                                <div className="transfer-next">
                                                    <Link to='/transfer/form'>
                                                        <BiChevronRight/>
                                                    </Link>
                                                </div>
                                            </div>
                                           );
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Transfer;