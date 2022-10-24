import { ContactDetails } from "../../Component/Table/ContactDetails";
import { Link } from "react-router-dom";
import Sidebar from '../../Component/Sidebar/Sidebar';
import Navbar from '../../Component/Navbar/Navbar';
import Table from 'react-bootstrap/Table';
import {BiArrowBack} from 'react-icons/bi';
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
                            <p className="title">Dutse Market 20k weekly </p>
                        </div>
                        <div>
                        <div className="contact-list">
                            <Link to='/ajo/ajosuccessfull'>
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
                                            </tr>
                                        </tbody>
                                    </Table>
                                    
                                )
                            })}
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SelectedContact;