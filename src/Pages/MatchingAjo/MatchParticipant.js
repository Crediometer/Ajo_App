import { MatchingData } from "../../Component/Table/MatchingData";
import Sidebar from '../../Component/Sidebar/Sidebar';
import Navbar from '../../Component/Navbar/Navbar';
import Table from 'react-bootstrap/Table';
import {BiArrowBack} from 'react-icons/bi';
import { Link } from "react-router-dom";
import './MatchParticipant.css'
const MatchParticipant = () => {
    return ( 
        <div className="match-participant">
            <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="body">
                        <div className="back">
                            <Link to='/matchajo/available'>
                                <BiArrowBack/>
                            </Link>
                            <div className="title-outer">
                                <p className="title">Yam sellers</p>
                                <p className="participant">paticipants</p>
                            </div>
                        </div>
                    <div className="match-participant-body">
                        <div className="match-participant-inner">
                        <Table className="participant-table">
                            <thead>
                                <tr>
                                <th>Recipient</th>
                                <th>Date</th>
                                <th>Phone Number</th>
                                <th>Amount</th>
                                <th>Status</th>
                                </tr>
                            </thead>
                            {/* <div className="table-body"> */}
                            <tbody>
                                {MatchingData.map((participant) =>{
                                    return(
                                            
                                        <tr>
                                        <td>
                                            <div className="recepient">
                                                <img src={participant.image}></img>
                                                <p className="recepient-name">{participant.name}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="date">
                                                <div className="f">
                                                    <p className="payment-date">{participant.date}</p>
                                                    <p className="payment-time">{participant.time}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="phonenumber2">{participant.phone}</td>
                                        <td className="dues">N{participant.due}</td>
                                        <td>
                                            <div className="status-button">
                                                <button>Successful</button>
                                            </div>
                                        </td>
                                        </tr>
                                
                                
                                    )
                                })}
                            </tbody>
                            {/* </div> */}
                            </Table>
                            <Link to='/matchajo/information'>
                                <div className="match-submit">
                                    <button>OK</button>
                                </div>
                            </Link>

                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MatchParticipant;