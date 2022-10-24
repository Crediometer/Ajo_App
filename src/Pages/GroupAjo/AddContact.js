import './AddContact.css';
import {BiArrowBack} from 'react-icons/bi';
import { IoAdd } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { ContactDetails } from '../../Component/Table/ContactDetails';
import Sidebar from '../../Component/Sidebar/Sidebar';
import Navbar from '../../Component/Navbar/Navbar';
import Table from 'react-bootstrap/Table';
const AddContact = () => {
    return ( 
        <div className="add-contact">
            <div className="home">
                <Sidebar/>
                <div className="homeContainer">
                    <Navbar/>
                    <div className="body">
                        <div className="back">
                            <Link to='/ajo/add'>
                                <BiArrowBack/>
                            </Link>
                            <p className="title">Group Ajo</p>
                        </div>
                        <div className="add-contact-body">
                            <div className="contact-filter">
                                <select className='ajo-save'>
                                    <optgroup>
                                        <option>Give a name to the group</option>
                                    </optgroup>
                                </select><br></br>
                                <input
                                className='search-contact'
                                placeholder='Search '
                                type='search'                               
                                ></input>
                                <div className="form-contact">
                                    <div className="contact-title">
                                        <p>Contact List</p>
                                    </div>
                                    <div className="contact-action">
                                        <button className='unselect'>Unselect all</button>
                                        <Link to='/ajo/selectedcontact'>
                                            <button className='proceed'>Proceed</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="contact-list">
                                    {ContactDetails.map((contact)=>{
                                        return (
                                        
                                               <Table className='contact-table'>
                                                    <tbody>
                                                        <tr>
                                                        <td><img src={contact.image}></img></td>
                                                        <td>{contact.name}</td>
                                                        <td>{contact.phone}</td>
                                                        <td>
                                                        <div className="add-2">
                                                            <IoAdd/>
                                                        </div>
                                                        </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            
                                        )
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
 
export default AddContact;