import { ContactDetails } from "../../Component/Table/ContactDetails";
import { Link } from "react-router-dom";
import Sidebar from '../../Component/Sidebar/Sidebar';
import Navbar from '../../Component/Navbar/Navbar';
import Table from 'react-bootstrap/Table';
import {BiArrowBack} from 'react-icons/bi';
import {TiMinus} from 'react-icons/ti';
const SelectedContact = () => {
    return ( 
        <div className="selected-contact">
            <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="body">
                        <div className="back">
                            <Link to='/ajo/addcontact'>
                                <BiArrowBack/>
                            </Link>
                            <p className="title">Dutse Market 20k weekly</p>
                        </div>
                        <div>
                            <p className="title-4">Paricipants</p>
                            <div className="contact-list contact-list-2">
                                {ContactDetails.map((contact)=>{
                                    return (
                                    
                                        <Table className='contact-table'>
                                            <tbody>
                                                <tr>
                                                <td>
                                                    <img src={contact.image}></img>
                                                </td>
                                                <td>{contact.name}</td>
                                                <td>{contact.phone}</td>
                                                <td>
                                                    <div className="add-2">
                                                    
                                                    </div>
                                                </td>
                                                <td className="removeparticipant">
                                                    <TiMinus/>
                                                </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        
                                    )
                                })}
                                <div className="confirm-ajo">
                                    <Link to='/ajo/ajosuccessfull'>
                                        <button>Start Ajo</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SelectedContact;